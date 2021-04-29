FROM rustlang/rust:nightly as builder

WORKDIR /usr/src/digit.chalmers.it
COPY . .

RUN cargo build --release

FROM debian:buster-slim
WORKDIR /app/digit.chalmers.it
COPY --from=builder /usr/src/digit.chalmers.it/data ./data/
COPY --from=builder /usr/src/digit.chalmers.it/templates ./templates/
COPY --from=builder /usr/src/digit.chalmers.it/static ./static/
COPY --from=builder /usr/src/digit.chalmers.it/target/release/digit2021 ./app


CMD ["./app"]
