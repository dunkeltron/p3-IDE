import axios from "axios";

export default {
  // Gets books from the Google API
  getProjects: function() {
    return axios.get("/api/projects");
  },

  getUsers: function() {
    return axios.get("/api/users");
  },
  
  // Gets all saved books
  saveProject: function(projectName) {
    return axios.get("/api/projects/" + projectName);
  },
  // Deletes the saved book with the given id
  deleteBook: function(projectName) {
    return axios.delete("/api/projects/" + projectName);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
