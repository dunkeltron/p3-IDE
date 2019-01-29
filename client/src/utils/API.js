import axios from "axios";

export default {
  getUser: function(userName) {
    console.log("userName: ", userName);
    return axios.get("/api/users/" + userName);
  },
  saveProject: function(projectName) {
    return axios.put("/api/projects/" + projectName);
  },

  //
  getProjects: function() {
    return axios.get("/api/projects");
  },

  //
  //
  getUsers: function() {
    return axios.get("/api/users");
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
