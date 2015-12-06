create view v_statis as

        select
            id,

			q.id as question_id,
			q.text as question_text,

			c.id as choice_id,
			c.text as choice_text
		from
			answers a

		left join
			choices c on c.id = a.choice_id
		left join
			questions q on q.id = c.question_id



