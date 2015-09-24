create table questions (
	id bigserial primary key,

	text text
);

comment on table questions is 'Questions';

comment on column questions.text is 'Text';