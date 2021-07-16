###########################
### STRIP-VERSION STAGE ###
###########################
FROM rust:1.53 as strip-version

# Strip version from Cargo.*
# This avoids cache invalidations (ergo rebuilding all deps) when bumping the version number
RUN cargo install strip_cargo_version
WORKDIR /usr/src/digit-web
COPY Cargo.toml Cargo.lock ./
RUN strip_cargo_version

###################
### BUILD STAGE ###
###################
FROM rust:1.53 as build
WORKDIR /usr/src/

# Install build-target for static linking
RUN rustup target add x86_64-unknown-linux-musl

# Create a dummy binary for pre-compiling dependencies (for caching)
RUN cargo new --bin digit-web
WORKDIR /usr/src/digit-web
COPY --from=strip-version /usr/src/digit-web/Cargo.* ./
RUN cargo build --release --target x86_64-unknown-linux-musl

# Copy the actual source files
COPY Cargo.toml Cargo.lock ./
COPY src ./src

# Compile the final binary
RUN cargo build --release --target x86_64-unknown-linux-musl
RUN strip target/x86_64-unknown-linux-musl/release/digit2021

########################
### PRODUCTION STAGE ###
########################
FROM scratch
WORKDIR /

EXPOSE 9999
ENV ROCKET_PORT="9999"
ENV ROCKET_ADDRESS="0.0.0.0"
ENV ROCKET_IDENT="UwU? notices client OwO"

COPY data ./data/
COPY templates ./templates/
COPY static/ ./static/
COPY --from=build /usr/src/digit-web/target/x86_64-unknown-linux-musl/release/digit2021 ./app

CMD ["./app"]
