'use strict'; //this creates an instance of a class

var Person;
//Runs the createIndex before every spec
beforeEach(function() {
    person = new Person();
    spyOn (person, 'setName') //checks if an argument has been called;
    // this function can be called on the exact function desired 
});

// this checks for the attributes
describe("A person should have these attributes", function() {
    it('should be able to work', function() {
        expect(person.walk()).toEqual("I am walking");
    });

    it('it should be able to breathe', function(){
        expect(person.breathe()).toEqual("I am breathing");
    });
    it("it should not return anything", function(){
        expect(person.dead()).toBeUndefined;
    });
}

describe('A person should have an identity', function(){
    it('argument should have a string', function() {
        person.setName('prosper');
        expect((typeof(person.setName.calls.argsFor(0)[0])).toBe('string')
    })
}