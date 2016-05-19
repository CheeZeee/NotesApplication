'use strict'; 

describe ("NotesApplication", function() {
	var author1 = new NotesApplication("Chika Onwueyi");
		beforeEach(function() {
    	author1.create("I love football"));
    });

	// for the author to be defined
	it('should possess "author" attribute', function() {
		expect(author1.author).toBeDefined();
	});

	// for the note to be defined
	it('should possess "notes" property', function() {
		expect(author1.notes).toBeDefined();
	});

	// for the create function
	it("should create a new note", function() {
		spyOn(author, 'create');
		author1.create('I love football');
		expect(typeof author1.create.calls.argsFor(0)[0]).toEqual('string');
	});


	it("should list the notes at the given index", function(note_id){
		expect(typeof author.listnotes.get.calls.argsFor(0)[0]).toMatch(typeof 'string')
	});



	// for the get id function
	it("should list out the note in the list", function(note_id) {
		expect(typeof author1.get(note_id)).toBe(typeof 'number');
		expect(author1.get(note_id)).toBeDefined();
	});

	// for the search function
	it("should return the notes with that text within it", function() {
		spyOn(author1, 'search');
		author1.search("Here I come")
		expect(typeof author1.search.calls.argsFor(0)[0]).toEqual('string');

	});

	//for the delete function
	it("should delete a note given an index", function(note_id){
		expect(author1.delete(note_id)).toBeDefined();
		expect(typeof author1.delete.calls.argsFor(0)[0]).toMatch(typeof 'number');
	});

	// for the edit function
	it("should edit contents based on user input", function(){
		spyOn(author1, 'edit');
		author1.edit(0, 'I hate akara');
		expect( typeof author1.edit.calls.argsFor(0)[0]).toEqual("number");
		expect( typeof author1.edit.calls.argsFor(0)[1]).toEqual("string");

	});
});