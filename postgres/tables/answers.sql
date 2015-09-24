create table answers (
	id bigserial primary key,

	question_id bigint references questions,
	choice_id bigint references choices

);