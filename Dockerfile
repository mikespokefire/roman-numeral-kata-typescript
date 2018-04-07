FROM node:8.9

RUN mkdir /app
WORKDIR /app

ADD bin bin
ADD dist dist

ENTRYPOINT ["/app/bin/roman-number-generator"]
