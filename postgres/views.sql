do
$body$
declare
	r record;
begin
	for r in
		select table_name as name
		from information_schema.views
		where table_catalog = 'amp' and table_schema = 'public'
	loop
		execute 'drop view if exists ' || r.name || ' cascade;';
	end loop;
end;
$body$;

\i ./views/questions.sql
-- Meta command \i in psql. Executes file. It takes argument – path to the file
-- more on meta commands here http://www.postgresql.org/docs/9.4/static/app-psql.html#APP-PSQL-META-COMMANDS
\i ./views/users.sql
