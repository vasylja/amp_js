-- root user

do
$body$
begin
	if not exists (select * from pg_catalog.pg_user where usename = 'root')
	then
		create user root with password 'root';
	end if;
end;
$body$;

-- create database

create
	database amp
	template template0
	owner root
	encoding 'utf8'
	lc_collate = 'en_US.UTF-8'
	lc_ctype = 'en_US.UTF-8';

-- create database user

create user amp with password 'amp';

-- connect database

\connect amp

set role = 'root';

-- add privileges to user leadhub

grant connect on database amp to amp;

alter default privileges in schema public grant all privileges on tables to amp;
alter default privileges in schema public grant all privileges on sequences to amp;

-- run create table scripts

\i ./tables.sql
\i ./views.sql
