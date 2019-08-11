FROM node:latest

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY package.json .
RUN npm install

COPY . .
RUN npm install -g serve
CMD serve -s build -l 3000

EXPOSE 3000
