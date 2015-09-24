#!/usr/bin/env bash

sudo apt-get install language-pack-UTF-8

sudo apt-get update

sudo add-apt-repository ppa:chris-lea/node.js
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" >> /etc/apt/sources.list.d/postgresql.list'
sudo apt-get update

sudo apt-get install postgresql-9.4 postgresql-contrib nodejs

sudo apt-get update
