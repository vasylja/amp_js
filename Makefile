create-db:
	cd postgres && sudo -u postgres psql -q < create.sql
disconnect-db:
	cd postgres && sudo -u postgres psql -q < disconnect.sql
drop-db:
	cd postgres && sudo -u postgres psql -q < drop.sql

views:
	cd postgres && psql -q amp root < views.sql

test-data:
	cd postgres && psql -q amp amp < test-data.sql

recreate-db: disconnect-db drop-db create-db
