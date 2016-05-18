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