create table answers (
	id bigserial primary key,

	choice_id bigint references choices ON DELETE cascade,
    question_id bigint references questions ON DELETE cascade

);