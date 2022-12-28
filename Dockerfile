FROM node:16.17.1

FROM mcr.microsoft.com/playwright:v1.29.1-focal

WORKDIR /app

#Set env path to node modules
ENV PATH /app/node_modules/.bin:$PATH

#Copy necessary files
COPY package.json /app/
COPY pages /app/pages/
COPY tests /app/tests/
COPY playwright.config.ts /app/
COPY vars.config.ts /app/

#Install dependencies
RUN npm install