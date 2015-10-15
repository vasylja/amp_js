create-db:
	cd postgres && sudo -u postgres psql -q < create.sql

views:
	cd postgres && psql -q amp root < views.sql