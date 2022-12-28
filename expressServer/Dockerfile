FROM node

RUN mkdir -p /home/app

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

COPY ./app /home/app

CMD ["node","/home/app/src/expressServer.js"]