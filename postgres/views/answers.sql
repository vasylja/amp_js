create view v_answers as
select
	a.*,

	q.id as question_id,

	c.id as choice_id

from
	answers a
left join
	choices c on c.id = a.choice_id
left join
    questions q on q.id = c.question_id
