 // This program is intended to implement a note taking application
 function NotesApplication(author){
	this.author = author;
	this.notes = [];

	// This function takes the note content as the parameter 
	// and adds it to the notes list of the object.
	NotesApplication.prototype.create = function(note_content){
		if(typeof note_content) === 'string' {
			this.notes.push(note_content);
		}
		else{
			return "Content should be of the string type"
		}
	}

	// This function lists out each of the notes in the notes list
	NotesApplication.prototype.listnotes = function(notes){
		for (var i = 0, i< this.notes.length, i++) {
			console.log("NOTE ID " + i);
			console.log(this.notes[i]);
			console.log("By Author: " + this.author);

		}
	}
	// This function takes a note_id which refers to the index 
	// of the note in the notes list and 
	// returns the content of that note as a string.
	NotesApplication.prototype.get = function(note_id){
		if (typeof note_id === 'number' && != 'undefined'){
			return this.notes[note_id];
		}
		else{
			return "Note ID should be a number"
		}
	}