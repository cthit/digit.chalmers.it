#[macro_use] extern crate rocket;

use rocket::State;
use rocket::response::status::{NotFound};
use rocket::response::Redirect;

use rocket::fs::FileServer;
use rocket_dyn_templates::Template;

use serde::{Serialize, Deserialize};
use std::collections::HashMap;

use std::fs;

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
struct FabContext {
    foo : i8,
}

#[get("/fab")]
fn fab() -> Template {
    Template::render("fab", FabContext{foo:2})
}

// Ask for name in url to force browser to call this url for each image seperatly
#[get("/img/<_name>/default_avatar.jpg")]
async fn random_default_avatar(_name: &str,imgs : &State<Vec<&str>>) -> Redirect{
    let random_index : usize = rand::random::<usize>() % imgs.len();
    rocket::response::Redirect::to(format!("/public/image/default/{}", imgs[random_index]))
} 

#[derive(Serialize,Deserialize)]
struct MembersListContext<'a> {
    years : &'a [u8],
}

#[get("/members")]
fn members_overview(years: &State<Vec<u8>>) -> Template {
    let ctx =  MembersListContext{ years : &years };
    Template::render("members", &ctx)
}



#[get("/members/<req_year>")]
fn member_detail(members: &State<HashMap::<u8,Year>>, req_year : u8) -> Result<Template,NotFound<String>> {
    if let Some(year) = members.get(&req_year) {
        let ctx = year;
        Ok(Template::render("member", &ctx))
    }
    else{
        Err(NotFound("The year you are looking for has not been recorded, please contact current digIT for more info".to_string()))
    }

}

#[launch]
fn rocket() -> _ {

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

    let avatars = vec!["abstract_digit.jpg","flash_digit.jpg","persona_digit.jpg","retro_digit.jpg","stary_digit.jpg","stoned_digit.jpg"];


    rocket::build()
        .mount("/", routes![index, members_overview,member_detail,fab, random_default_avatar])
        .attach(Template::fairing())
        .mount("/public", FileServer::from("static"))
        .manage(members)
        .manage(years)
        .manage(avatars)
}