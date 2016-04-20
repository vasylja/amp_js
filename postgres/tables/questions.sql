create table questions (
	id bigserial primary key,
	text text,
	test_id bigint references tests

);

comment on table questions is 'Questions';
comment on column questions.text is 'Text';
comment on column questions.test_id is 'every question belong to the appropriate test';

