'use strict'; //this creates an instance of a class

var NotesApplication;
//Runs the createIndex before every spec
beforeEach(function() {
    author1 = new NotesApplication(author);
    spyOn (author1, 'setName') //checks if an argument has been called;
    // this function can be called on the exact function desired 
});

// for the create function
describe("creates the content of a note", function(){
	it("should be able to accept content", function() {
		expect(typeof note_content).toBe(typeof 'string')
	})

})

// for the get id function
describe("gets the note id", function(){
	it("should list out the note in the list", function())
})