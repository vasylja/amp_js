create table answers (
	id bigserial primary key,

	choice_id bigint references choices ON DELETE CASCADE,
    question_id bigint references questions

);