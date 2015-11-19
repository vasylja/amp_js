-- create or replace users view
-- NAMING CONVENTION. Name all your views as v_<table_name> + use under_score_style for names
-- View is almost the same as query + table.
-- It's like predefined query but you can select from them as from table (where, group by, join etc)
-- More details here http://www.postgresql.org/docs/9.4/static/sql-createview.html
-- DONT FORGET TO ADD THIS VIEW IN views.sql
create or replace view v_users as
select
	u.id,
	u.name,
	u.email,

	-- Nested query + aggregate function
	-- Aggregate functions http://www.postgresql.org/docs/9.1/static/functions-aggregate.html
	(select json_agg(row) from (
		select
			q.id,
			q.text
		from
			questions q

		where q.user_id = u.id
	) row ) as questions,

	-- same as above
	(select json_agg(row) from (
		select
			q.id as question_id,
			q.text as question_text,

			c.id as choice_id,
			c.text as choice_text
		from
			answers a
		-- plz pay more attention to this part of the sql. Get some time to understand this
		-- more on joins http://www.skillz.ru/dev/php/article-Obyasnenie_SQL_obedinenii_JOIN_INNER_OUTER.html
		-- and http://www.postgresql.org/docs/9.4/static/queries-table-expressions.html#QUERIES-JOIN
		left join
			choices c on c.id = a.choice_id
		left join
			questions q on q.id = c.question_id
		-- todo: add user_id to answers table and make filter here by user_id (uncomment below)
		where
			a.user_id = u.id
	) row ) as answers
from
-- We give to table users alias 'u' so we can type less text in query users.id -> u.id
	users u
