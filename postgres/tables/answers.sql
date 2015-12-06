create table answers (
	id bigserial primary key,

	choice_id bigint references choices,
    question_id bigint references questions

);