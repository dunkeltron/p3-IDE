import axios from "axios";

export default {
  // Gets books from the Google API
  getProjects: function(q) {
    return axios.get("/api/projects");
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  logout:function(){
    return axios.get("/api/auth/logout")
  }
};
