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
