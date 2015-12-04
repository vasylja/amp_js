create view v_answers as
select
	a.id,

	a.choice_id,
--	a.user_id,

	c.question_id as question_id
from
	answers a
left join
	choices c on c.id = a.choice_id
