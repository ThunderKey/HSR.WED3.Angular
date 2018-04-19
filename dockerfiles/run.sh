#!/bin/bash

set -e

DIR="$(cd "$(dirname $0)"; pwd)"
ROOT_DIR="$(dirname "$DIR")"

export HOST_UID="$(id -u)"

git submodule update --init

docker-compose -f $DIR/docker-compose.yml build

if [[ "$@" == "" ]]; then
  docker-compose -f $DIR/docker-compose.yml up
else
  docker-compose -f $DIR/docker-compose.yml run --rm web "$@"
fi
