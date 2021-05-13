# This create a nodejs docker image
# References:
# https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
# https://www.youtube.com/watch?v=kqBCHYf_adA
FROM node:14

WORKDIR /usr/app
COPY package*.json yarn.lock ./

RUN npm install

COPY . .

# When you specify 127.0.0.1:3000:3000, you are binding to the docker host’s 127.0.0.1. 
# Since your docker host is in a VM, that’s different from your 127.0.0.1 on your mac
# https://forums.docker.com/t/using-localhost-for-to-access-running-container/3148/2
EXPOSE 3000

CMD ["npm", "start"]