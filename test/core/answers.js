var should = require('should');
var Answers = require('../../core/answers');
var db = require('../../db');

describe('answers', function() {
    beforeEach(function (done) {
        return db('answers').del().then(function () {
            done();
        });
    });

    describe('#findAll()', function() {

        it('should return all answers', function (done) {
            return Answers.findAll().then(function (answers) {
                answers.should.be.ok;
                done();
            })
        });
        it('should return array', function (done) {
            return Answers.findAll().then(function (answers) {
                answers.should.be.instanceOf(Array);
                done();
            })
        });
        it('should return array of length one', function (done) {
            return Answers.findAll().then(function (answers) {
                answers.should.have.property('length');
                answers.length.should.be.equal(0);
                done();
            });
        });
    });

    describe('#find()', function () {
        beforeEach(function (done) {
            this.answer = {};
            return db('answers').insert({ 'id': 1 }).returning('id').then(function (arr) {
                this.answer.id = arr[0];
                done();
            }.bind(this));
        });

        it('should find answer', function (done) {
            return Answers.remove(this.answer.id).then(function () {
                return db('answers').where({ id: this.answer.id }).first()
                    .then(function (answer) {
                        should(answer).be.ok;
                        done();
                    })
            }.bind(this))
        });

    });

    describe('#query()', function () {
        beforeEach(function (done) {
            this.answer = {};
            return db('answers').insert({ 'id': 1 }).returning('id').then(function (arr) {
                this.answer.id = arr[0];
                done();
            }.bind(this));
        });
        it('should query answer by id', function (done) {
            return Answers.remove(this.answer.id).then(function () {
                return db('answers').where({ id: this.answer.id }).first()
                    .then(function (answer) {
                        should(answer).ok;
                        done();
                    })
            }.bind(this))
        });
    });

    describe('#update()', function () {
        before(function (done) {
            this.questionId = null;
            return db('questions').insert({ text: 'this is my question' }).then(function () {
                done();
            });
        });
        beforeEach(function (done) {
            this.answer = {};
            return db('answers').insert({ question_id: this.questionId }).returning('id').then(function (arr) {
                this.answer.id = arr[0];
                done();
            }.bind(this));
        });
        it('should update answer', function (done) {
            return Answers.update(this.answer.id, {'question_id': 2}).then(function () {
                return db('answers').where({ id: this.answer.id }).first()
                    .then(function (answer) {
                        answer.should.be.ok;
                        answer.question_id.should.be.equal(this.answer.id+'');
                        done();
                    })
            }.bind(this))
        });
    });

    describe('#create()', function () {
        it('should return id', function (done) {
            return Answers.create({ 'id': 2}).then(function (id) {
                id.should.be.ok;
                id.should.be.instanceOf(Number);
                done();
            });
        });
        it('should create answer', function (done) {
            return Answers.create({ 'id': 2 }).then(function (id) {
                return db('answers').where({ id: id }).first().then(function (answer) {
                    answer.should.be.ok;
                    answer.should.have.property('id');
                    answer.id.should.be.equal(id+'');
                    done();
                });
            })

        });
    });
    describe('#remove', function () {
        beforeEach(function (done) {
            this.answer = {};
            return db('answers').insert({ 'id': 2 }).returning('id').then(function (arr) {
                this.answer.id = arr[0];
                done();
            }.bind(this));
        });
        it('should remove answer', function (done) {
            return Answers.remove(this.answer.id).then(function () {
                return db('answers').where({ id: this.answer.id }).first()
                    .then(function (answer) {
                        should(answer).not.be.ok;
                        done();
                    })
            }.bind(this))
        });
    });

});
