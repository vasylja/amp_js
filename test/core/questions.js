var should = require('should');
var Questions = require('../../core/questions');
var db = require('../../db');

describe('questions', function() {
	beforeEach(function (done) {
		return db('questions').del().then(function () {
			done();
		});
	});
	describe('#findAll()', function() {

		it('should return all questions', function (done) {
			return Questions.findAll().then(function (questions) {
				questions.should.be.ok;
				done();
			})
		});
		it('should return array', function (done) {
			return Questions.findAll().then(function (questions) {
				questions.should.be.instanceOf(Array);
				done();
			})
		});
		it('should return array of length one', function (done) {
			return Questions.findAll().then(function (questions) {
				questions.should.have.property('length');
				questions.length.should.be.equal(0);
				done();
			});
		});
	});
	describe('#find()', function () {

	});
	describe('#create()', function () {
		it('should return id', function (done) {
			return Questions.create({ text: 'This is my question '}).then(function (id) {
				id.should.be.ok;
				id.should.be.instanceOf(Number);
				done();
			});
		});
		it('should create question', function (done) {
			var text = 'This is my question';
			return Questions.create({ text: text }).then(function (id) {
				return db('questions').where({ id: id }).first().then(function (question) {
					question.should.be.ok;
					question.should.have.property('id');
					question.id.should.be.equal(id + '');
					question.should.have.property('text');
					question.text.should.be.equal(text);
					done();
				});
			})

		});
	});
	describe('#remove', function () {
		beforeEach(function (done) {
			this.question = {};
			return db('questions').insert({ text: 'text' }).returning('id').then(function (arr) {
				this.question.id = arr[0];
				done();
			}.bind(this));
		});
		it('should create question', function (done) {
			return Questions.remove(this.question.id).then(function () {
				return db('questions').where({ id: this.question.id }).first()
					.then(function (question) {
						should(question).not.be.ok;
						//question.should.not.be.ok;
						done();
					})
			}.bind(this))
		});
	})
});

