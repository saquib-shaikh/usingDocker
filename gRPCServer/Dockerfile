FROM node

RUN mkdir -p /home/grpc

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

COPY ./app /home/grpc

CMD ["node","./home/grpc/src/server.js"]
