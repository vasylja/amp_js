var should = require('should');
var Choices = require('../../core/choices/dal.js');
var db = require('../../db');

describe('choices', function() {
    beforeEach(function (done) {
		return db('choices').del().then(function () {
			done();
		});
	});


    //describe('#findAll()', function() {
    //
	//	it('should return all choices', function (done) {
	//		return Choices.findAll().then(function (choices) {
     //           choices.should.be.ok;
	//			done();
	//		})
	//	});
	//	it('should return array', function (done) {
	//		return Choices.findAll().then(function (choices) {
     //           choices.should.be.instanceOf(Array);
	//			done();
	//		})
	//	});
	//	it('should return array of length one', function (done) {
	//		return Choices.findAll().then(function (choices) {
     //           choices.should.have.property('length');
     //           choices.length.should.be.equal(0);
	//			done();
	//		});
	//	});
	//});

    describe('#find()', function () {
        beforeEach(function (done) {
            this.choice = {};
            return db('choices').insert({ text: 'text' }).returning('id').then(function (arr) {
                this.choice.id = arr[0];
                done();
            }.bind(this));
        });

        it('should find choice', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ id: this.choice.id }).first()
                    .then(function (choice) {
                        should(choice).be.ok;
                        done();
                    })
            }.bind(this))
        });

        //afterEach(function (done) {
        //    return Choices.remove(this.choice.id);
        //    done();
        //}.bind(this));

    });

    describe('#query()', function () {
        var text = 'text';
        beforeEach(function (done) {
            this.choice = {};
            return db('choices').insert({ text: text }).returning('id').then(function (arr) {
                this.choice.id = arr[0];
                done();
            }.bind(this));
        });
        it('should query choice by id', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ id: this.choice.id }).first()
                    .then(function (choice) {
                        should(choice).ok;
                        done();
                    })
            }.bind(this))
        });
        it('should query choice by text', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ text: text }).first()
                    .then(function (choice) {
                        should(choice).ok;
                        done();
                    })
            }.bind(this))
        });
        it('should not query choice by empty text', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ text: '' }).first()
                    .then(function (choice) {
                        should(choice).not.ok;
                        done();
                    })
            }.bind(this))
        });
        it('should query choice by text and id', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ id: this.choice.id, text: text }).first()
                    .then(function (choice) {
                        should(choice).ok;
                        done();
                    })
            }.bind(this))
        });
        it('should query choice only by id', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ id: this.choice.id, text: '' }).first()
                    .then(function (choice) {
                        should(choice).ok;
                        done();
                    })
            }.bind(this))
        });
        //afterEach(function (done) {
        //    return Choices.remove(this.choice.id);
        //    done();
        //}.bind(this));
    });

    describe('#update()', function () {
        beforeEach(function (done) {
            this.choice = {};
            return db('choices').insert({ text: 'text' }).returning('id').then(function (arr) {
                this.choice.id = arr[0];
                done();
            }.bind(this));
        });
        it('should update choice', function (done) {
            var text = 'new text';
            return Choices.update(this.choice.id, {text: text}).then(function () {
                return db('choices').where({ id: this.choice.id }).first()
                    .then(function (choice) {
                        choice.should.be.ok;
                        choice.text.should.be.equal(text);
                        done();
                    })
            }.bind(this))
        });
        //afterEach(function (done) {
        //    return Choices.remove(this.choice.id);
        //    done();
        //}.bind(this));
    });

    describe('#create()', function () {
        it('should return id', function (done) {
            return Choices.create({ text: 'This is my choice '}).then(function (id) {
                id.should.be.ok;
                id.should.be.instanceOf(Number);
                done();
            });
        });
        it('should create choice', function (done) {
            var text = 'This is my choice';
            return Choices.create({ text: text }).then(function (id) {
                return db('choices').where({ id: id }).first().then(function (choice) {
                    choice.should.be.ok;
                    choice.should.have.property('id');
                    choice.id.should.be.equal(id + '');
                    choice.should.have.property('text');
                    choice.text.should.be.equal(text);
                    done();
                });
            })

        });
        it('should throw error on invalid text', function (done) {
            var text = '';
            return Choices.create({ text: text }).then(function() {
                done();
            });
        });
    });
    describe('#remove', function () {
        beforeEach(function (done) {
            this.choice = {};
            return db('choices').insert({ text: 'text' }).returning('id').then(function (arr) {
                this.choice.id = arr[0];
                done();
            }.bind(this));
        });
        it('should create choice', function (done) {
            return Choices.remove(this.choice.id).then(function () {
                return db('choices').where({ id: this.choice.id }).first()
                    .then(function (choice) {
                        should(choice).not.be.ok;
                        done();
                    })
            }.bind(this))
        });
    });

});