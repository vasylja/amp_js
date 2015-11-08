create table questions (
	id bigserial primary key,

	text text,
	user_id bigint references users
);

comment on table questions is 'Questions';

comment on column questions.text is 'Text';
comment on column questions.user_id is 'The User*s question';