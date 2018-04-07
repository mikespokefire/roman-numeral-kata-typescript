DOCKER_REPO=mikespokefire/roman-numeral-kata-typescript
DOCKER_TAG=latest

.PHONY: all
all: docker-build

dist:
	yarn run build

.PHONY: docker-build
docker-build: dist
	docker build --pull -t ${DOCKER_REPO}:${DOCKER_TAG} .

.PHONY: docker-push
docker-push:
	docker push ${DOCKER_REPO}:${DOCKER_TAG}

.PHONY: docker-run
docker-run:
	docker run -it --rm ${DOCKER_REPO}:${DOCKER_TAG} 3999

.PHONY: docker-console
docker-console:
	docker run -it --rm --entrypoint="" ${DOCKER_REPO}:${DOCKER_TAG} /bin/bash

.PHONY: docker-clean
docker-clean:
	docker rmi ${DOCKER_REPO}:${DOCKER_TAG}
