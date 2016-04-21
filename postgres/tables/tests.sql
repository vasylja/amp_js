create table tests (
	id bigserial primary key,
	name text,
	user_id bigint references users
);

comment on table tests is 'Tests: many questions in test';
comment on column tests.name is 'Name of test';
comment on column tests.user_id is 'test is created by user';
