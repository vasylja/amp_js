-- more on create tables in database and constraints
-- here http://www.postgresql.org/docs/9.4/static/sql-createtable.html
create table users (
	id bigserial primary key,

	name text,
	-- not null constraint on users table
	email text not null,

	password text,

	-- unique email constraint
	constraint unique_users_email unique (email)

);
