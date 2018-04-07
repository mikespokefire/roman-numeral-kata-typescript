# Roman Numeral Kata in TypeScript

## Running

There is a docker container available with all the code already in it.

```
$ docker run -it --rm mikespokefire/roman-numeral-kata-typescript:latest 3999
```

You can change the `3999` to any number between 0 and 4000 and it will tell you the roman numeral.


## Dependencies

* `node` (version used was v8.9.4)
* `yarn` (version used was v1.3.2)
* `docker` if you want to run the container including the code to convert a Roman Numeral without having to install anything locally.

## Setup

```
$ yarn install
```

## Testing and linting

```
$ yarn run lint
$ yarn run test
```
