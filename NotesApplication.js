 function NotesApplication(author){
	this.author = author;
	this.notes = [];

	// This function takes the note content as the parameter 
	// and adds it to the notes list of the object.
	NotesApplication.prototype.create = function(note_content){
		if(typeOf.note_content == typeOf("abc")) {
			this.notes.push(note_content);
	}

	// This function lists out each of the notes in the notes list
	NotesApplication.prototype.listNotes = function listNotes(notes){
	
	}

	function get(note_id){

	}
	// This function take a search string
	// and returns all the notes with that text within it
	NotesApplication.prototype.search = function(search_text){
		if (typeOf(search_text) = typeOf("abc")){
			for (i = 0, i < this.notes.length, i++){
				if (this.note[i].indexOf(search_text) != 0){
					Console.log("Showing results for search " + search_text)
					Console.log("NOTE ID: " + id)
					Console.log(note_content)
					Console.log("By Author " + author)

				}
				else{
					return "Search item should be of the string format"
				}
			}
		}
	}
	// This function deletes the note at the index of the notes list
	NotesApplication.prototype.delete = function(note_id){
		if(typeOf(note_content) == typeOf(0)){
			this.note.splice(note_content)
		}
		else{
			return "This note does not exist"
		}
	}
	// This function replaces the content in the note at note_id with new_content.
	NotesApplication.prototype.edit = function(note_id, new_content){
		if ()

	}

}
