#!/bin/bash

set -e

DIR="$(cd "$(dirname $0)"; pwd)"
ROOT_DIR="$(dirname "$DIR")"

git submodule update --init

docker-compose -f $DIR/docker-compose.yml build

if [[ "$@" == "" ]]; then
  docker-compose -f $DIR/docker-compose.yml up
else
  docker-compose -f $DIR/docker-compose.yml run --user="$(id -u)" --rm web "$@"
fi
