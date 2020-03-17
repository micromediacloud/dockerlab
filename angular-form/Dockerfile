FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/angular-form /usr/share/nginx/html

# FROM node:12

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# # RUN npm cache clean
# RUN npm install
# COPY . /usr/src/app
# EXPOSE 4200
# CMD ["npm","start"]

