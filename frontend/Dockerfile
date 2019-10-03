FROM node AS Build

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g react-scripts
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=Build /app/build /var/www

EXPOSE 80
