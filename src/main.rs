#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;
use rocket::State;
use rocket::response::status::{NotFound};
use rocket::{Request,Response, Data};
use rocket::http::Header;
use rocket::fairing::{Fairing, Info, Kind};

use rocket_contrib::serve::StaticFiles;
use rocket_contrib::templates::Template;
use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use std::fs;

struct StaticContent {
}

impl Fairing for StaticContent {
    fn info(&self) -> Info {
        Info {
            name : "Cache Header Setter",
            kind : Kind::Response
        }
    }

    fn on_response(&self, request: &Request, response: &mut Response) {
        if request.uri().path().starts_with("/public") {
            response.set_header(Header::new("Cache-Control","max-age=20, public"));
        }
        else {
            response.set_header(Header::new("Cache-Control","max-age=10, public"));
        }
    }

}

#[derive(Serialize,Deserialize)]
struct Year {
    year : u8,
    members : Vec<Members>
}

#[derive(Serialize,Deserialize)]
struct Members {
    role: String,
    name : String,
    img: String,
}

#[derive(Serialize)]
struct IndexContext {
    date : u32,
}

#[get("/")]
fn index() -> Template {
    let context = IndexContext{date:2021};
    Template::render("index", &context)
}

#[derive(Serialize,Deserialize)]
struct MembersListContext<'a> {
    years : &'a [u8],
}

#[get("/members")]
fn members_overview(years: State<Vec<u8>>) -> Template {
    let ctx =  MembersListContext{ years : &years };
    Template::render("members", &ctx)
}



#[get("/members/<req_year>")]
fn member_detail(members: State<HashMap::<u8,Year>>, req_year : u8) -> Result<Template,NotFound<String>> {
    if let Some(year) = members.get(&req_year) {
        let ctx = year;
        Ok(Template::render("member", &ctx))
    }
    else{
        Err(NotFound("The year you are looking for has not been recorded, please contact current digIT for more info".to_string()))
    }

}

fn main() {

    let members_json = fs::read_to_string("data/members.json")
        .expect("Could not read in json data");

    let mut members_data : Vec<Year> = serde_json::from_str(&members_json)
        .expect("Failed to parse json");

    let mut members = HashMap::<u8,Year>::new();
    let mut years = Vec::<u8>::new();

    for year in members_data.drain(0..) {
        years.insert(0,year.year);
        members.insert(year.year,year);
    }

    rocket::ignite().mount("/", routes![index, members_overview,member_detail])
        .attach(Template::fairing())
        .attach(StaticContent{})
        .mount("/public", StaticFiles::from("static"))
        .manage(members)
        .manage(years)
        .launch();
}