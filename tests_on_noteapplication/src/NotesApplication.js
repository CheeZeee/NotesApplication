 'use strict';

 // This program is intended to implement a note taking application
 var NotesApplication = function (author){
	this.author = author;
	this.notes = [];

	// This function takes the note content as the parameter 
	// and adds it to the notes list of the object.
	this.create = function(note_content){
		if (typeof note_content == 'string')
			this.notes.push(note_content);
		else
			return "Content should be of the string type";
	};

	// This function lists out each of the notes in the notes list
	this.listnotes = function(notes){
		for (var i = 0; i< this.notes.length; i++) {
			console.log("\nNOTE ID ", i);
			console.log("\n" + this.notes[i]);
			console.log("\nBy Author: " + this.author);

		}
	};
	// This function takes a note_id which refers to the index 
	// of the note in the notes list and 
	// returns the content of that note as a string.
	this.get = function(note_id){
		if (typeof note_id == 'number' && note_id != 'undefined'){
			return this.notes[note_id];
		}
		else{
			return "Note ID should be a number";
		}
	};

	// This function take a search text
	// and returns all the notes with that text within it
	this.search = function(search_text){
		if (typeof search_text == 'string'){
			for (var i = 0; i < this.notes.length; i++){
				if (this.notes[i].indexOf(search_text) >= 0){
					console.log("\nShowing results for " + "'" + search_text + "'");
					console.log("\nNOTE ID: " + id);
					console.log("\n" +this.notes[i]);
					console.log("\nBy Author " + author);

				}
				else{
					return "Search item should be of the string format";
				}
			}
		}
	};

	// This function deletes the note at the index of the notes list
	this.delete = function(note_id){
		if (typeof note_id == 'number' && note_id != 'undefined') {
			this.notes.splice(note_content);
			return "Note succesfully deleted";
		}
		else{
			return "This note does not exist";
		}
	};

	// This function replaces the content in the note at note_id with new_content.
	this.edit = function(note_id, new_content){
		if(typeof note_id == 'number' && typeof new_content == 'string'){
			this.notes[note_id] = new_content;
			console.log("Note Edited Successfully");
		}
		else{
			return "Invalid Note id or Note content";
		}

	};

};

