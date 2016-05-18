 // This program is intended to implement a note taking application
 function NotesApplication(author){
	this.author = author;
	this.notes = [];

	// This function takes the note content as the parameter 
	// and adds it to the notes list of the object.
	NotesApplication.prototype.create = function(note_content){
		if(typeof note_content) === 'string' {
			this.notes.push(note_content);
			console.log("Note succesfully created");
		}
		else{
			console.log("Content should be of the string type");
		}
	}

	// This function lists out each of the notes in the notes list
	NotesApplication.prototype.listnotes = function(notes){
		for (var i = 0, i< this.notes.length, i++) {
			console.log("\nNOTE ID " + i);
			console.log(this.notes[i]);
			console.log("\nBy Author: " + this.author + "\n");

		}
	}
	// This function takes a note_id which refers to the index 
	// of the note in the notes list and 
	// returns the content of that note as a string.
	NotesApplication.prototype.get = function(note_id){
		if (typeof note_id === 'number' && != 'undefined'){
			console.log(this.notes[note_id]);
		}
		else{
			console.log("Note ID should be a number");
		}
	}

	// This function take a search text
	// and returns all the notes with that text within it
	NotesApplication.prototype.search = function(search_text){
		if (typeof search_text = 'string'){
			for (var i = 0, i < this.notes.length, i++){
				if (this.notes[i].indexOf(search_text) != 0){
					Console.log("\nShowing results for " + "'" + search_text + "'");
					Console.log("\nNOTE ID: " + id);
					Console.log(this.notes[i]);
					Console.log("\nBy Author " + author + "\n");

				}
				else{
					console.log("Search item should be of the string format");
				}
			}
		}
	}

	// This function deletes the note at the index of the notes list
	NotesApplication.prototype.delete = function(note_id){
		if(typeof note_id === 'number' {
			this.notes.splice(note_content);
			console.log("Note succesfully deleted");
		}
		else{
			console.log("This note does not exist");
		}
	}

	// This function replaces the content in the note at note_id with new_content.
	NotesApplication.prototype.edit = function(note_id, new_content){
		if((parseInt(note_id, 10) + 0 < 1)||(parseInt(note_id, 10) > (this.noteArray.length - 1))){
			this.notes[note_id] = new_content;
			console.log("Note Edited Successfully");
		}
		else{
			console.log("Note could not be edited");
		}

	}

}