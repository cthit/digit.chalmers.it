FROM rustlang/rust:nightly as builder

WORKDIR /usr/src/

RUN cargo new --bin digit-web

WORKDIR /usr/src/digit-web
COPY Cargo.toml Cargo.lock ./
RUN cargo install --path .
COPY Rocket.toml ./
COPY src ./src/
RUN cargo build --release

FROM debian:buster-slim
WORKDIR /app/digit.chalmers.it
COPY data ./data/
COPY templates ./templates/
COPY static/ ./static/
COPY --from=builder /usr/src/digit-web/target/release/digit2021 ./app


CMD ["./app"]
