create view v_questions as
select
	q.id,
	q.text,
	q.user_id,
	(select json_agg(row) from (
		select
			c.id,
			c.text
		from
			choices c
		where
			c.question_id = q.id
	) row ) as choices
from
	questions q

