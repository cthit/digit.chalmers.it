
# digIT's homepage

An index of digIT's services and social media accounts, as well as an record of all current and previous digIT memebers.
Found on https://digit.chalmers.it.

The website is written in rust using https://rocket.rs .
 

## Features

- Permanent dark mode, as it should be
- Text only front page
- A database containing all years of digIT, with positions, profile pictures, and the years logo.
- No JS
- /fab 

  
## Acknowledgements
@NeonSky for gathering profile pictures, names, and positions of all digIT memebers up to 2019
 
  
## Run Locally

Install rustc and cargo from https://rustup.rs/

Clone the project

```bash
  git clone https://github.com/cthit/digit.chalmers.it.git
```

Go to the project directory

```bash
  cd digit.chalmers.it
```

Install dependencies, build, and then start the server

```bash
  cargo run
``` 

  
## Deployment

This project uses docker and docker-compose for deployment.

To minimize request timing, all static content is hosted via an nginx instance.

To deploy the project, or test it for production run
```bash
  docker-compose up --build
```

Note that the ip displayed when running is incorrect, the correct ip can be found by inspecting IPv4Address after running the following code
```bash
  docker network inspect digitchalmersit_default
```
  
## Support

For support, or if the project does not build, reach us at digit@chalmers.it

