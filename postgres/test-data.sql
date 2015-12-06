--Users
--insert into users (name, email) values ('Super name', 'username@mail.com');
--insert into users (name, email) values ('Andrew', 'andrew@mail.com');
--insert into users (name, email) values ('Vlad', 'Vlad@mail.com');
--insert into users (name, email) values ('Valik', 'Valik@mail.com');
--insert into users (name, email) values ('Maks', 'Maks@mail.com');

--Questions
--------------------------------------------------------
insert into questions(text) values('1How old r u?');
insert into questions(text) values('2Is it clear?');
insert into questions(text) values('3222How old r 22?');
insert into questions(text) values('4333How old r u ?');
insert into questions(text) values('5444How old r u ?');

--Choices
--------------------------------------------------------

insert into choices(question_id, text) values( 1,'1-st Question');
insert into choices(question_id, text) values( 1,'1-st Question');
insert into choices(question_id, text) values( 1,'1-st Question');
insert into choices(question_id, text) values( 2,'2-st Question');
insert into choices(question_id, text) values( 4,'4-st Question');
insert into choices(question_id, text) values( 4,'4-st Question');
insert into choices(question_id, text) values( 4,'4-st Question');
insert into choices(question_id, text) values( 5,'5-st Question');
insert into choices(question_id, text) values( 5,'5-st Question');

--Answers
-------------------------------------------------------
insert into answers(question_id,choice_id) values(1,1);
insert into answers(question_id,choice_id) values(1,1);
insert into answers(question_id,choice_id) values(1,1);
insert into answers(question_id,choice_id) values(1,2);
insert into answers(question_id,choice_id) values(1,2);
insert into answers(question_id,choice_id) values(1,2);
insert into answers(question_id,choice_id) values(1,2);
insert into answers(question_id,choice_id) values(1,3);






