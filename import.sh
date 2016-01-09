#!/bin/bash

# expects one argument: the host's absolute path where to save the dataset

if [ $# -eq 0 ]
  then
    echo "sh setup.sh <dataset-destination>"
    exit 1
fi

volume=$1

# requirements: wget, docker

wget -P $volume https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/dataset.json

docker run --name db -v $volume:/workspace -d mongo

docker exec -it db mongoimport --db test --collection restaurants --drop --file /workspace/dataset.json

