#!/usr/bin/env bash

sudo apt-get install language-pack-UTF-8

sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make

sudo add-apt-repository ppa:chris-lea/node.js
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" >> /etc/apt/sources.list.d/postgresql.list'
sudo apt-get update

sudo apt-get install -y postgresql-9.4 postgresql-contrib nodejs
sudo cp /vagrant/postgres/pg_hba.conf /etc/postgresql/9.4/main
sudo service postgres restart

sudo apt-get update

echo "# Setting for the new UTF-8 terminal support" >> ~/.bashrc
echo "export LC_CTYPE=en_US.UTF-8" >> ~/.bashrc
echo "export LC_ALL=en_US.UTF-8" >> ~/.bashrc
