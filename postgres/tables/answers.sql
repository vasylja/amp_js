create table answers (
	id bigserial primary key,

	choice_id bigint references choices,
	user_id bigint references users

);