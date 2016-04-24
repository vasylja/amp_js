create view v_tests as
select
	t.id,
	t.name,
	t.user_id,
	(select json_agg(row) from (
		select
			q.id,
			q.text,
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
		where
			q.test_id = t.id
	) row ) as questions
from
	tests t

