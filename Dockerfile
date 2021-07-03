FROM rust:1.53 as builder

WORKDIR /usr/src/

RUN cargo new --bin digit-web

WORKDIR /usr/src/digit-web
COPY Cargo.toml Cargo.lock ./
RUN cargo install --path .
COPY src ./src/
COPY Rocket.toml ./Rocket.toml
RUN cargo build --release

FROM debian:buster-slim
WORKDIR /app/digit.chalmers.it
COPY data ./data/
COPY templates ./templates/
COPY static/ ./static/
COPY Rocket.toml ./Rocket.toml
COPY --from=builder /usr/src/digit-web/target/release/digit2021 ./app


CMD ["./app"]
