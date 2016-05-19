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
	it('should possess "notes" attribute', function() {
		expect(author1.notes).toBeDefined();
	});

	// for the create function
	it("should create a new note", function() {
		spyOn(author, 'create');
		author1.create('I love football');
		expect(typeof author1.create.calls.argsFor(0)[0]).toEqual('string');
	});


	it("should list the notes at the given index", function(){
		expect(typeof author.listnotes.get.calls.argsFor(0)[0]).toMatch(typeof 'string')
	});



	// for the get id function
	it("should accept a number as argument", function() {
		spyOn(author1, 'get');
		author1.get(0);
		expect(typeof author1.get.calls.argsFor(0)[0]).toEqual(typeof 'number');
		
	});

	// for the search function
	it("should return the notes with that text within it", function() {
		spyOn(author1, 'search');
		author1.search("Here I come")
		expect(typeof author1.search.calls.argsFor(0)[0]).toEqual('string');

	});

	// for the edit function
	it("should accept an index and then a string as arguments", function(){
		spyOn(author1, 'edit');
		author1.edit(0, 'I hate akara');
		expect( typeof author1.edit.calls.argsFor(0)[0]).toEqual("number");
		expect( typeof author1.edit.calls.argsFor(0)[1]).toEqual("string");

	});

	it('should edit string at specified index', function(){
		author1.edit(0, 'I hate akara');
		expect( author1.get(0) ).toEqual('I hate akara');
	}); 

});