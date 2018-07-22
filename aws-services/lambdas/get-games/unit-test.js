let assert = require("chai").assert;
let lambda = require('./index');

describe('Contact', function() {

    describe('#getContact()', function() {
      it('should return the contact list', function() {
        return true
      });
    });

    describe('#getContact()', function() {
        it('should return alist with contacts', function() {
            lambda.handler(event, {}, (err, response) => {
                assert.property(JSON.parse(response), 'firstName');
            });
        });
      });

  });