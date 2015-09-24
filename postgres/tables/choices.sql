create table choices (
	id bigserial primary key,

	question_id bigint references questions,

	text text
);