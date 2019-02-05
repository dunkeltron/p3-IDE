import axios from "axios";

export default {
  getUser: function(userName) {
    console.log("userName: ", userName);
    return axios.get("/api/users/" + userName);
  },
  getProjectbyUser: function(authData) {
    console.log(authData);
    console.log("authData: ", authData.owner);
    return axios.put("/api/users/"+ authData.owner, authData);
  },
  createProject: function(projectData) {
    console.log("CREATEprojectData: ", projectData.newProjectObj);
    return axios.post("/api/projects/", projectData);
  },
  saveProject: function(projectData) {
    console.log("SAVEprojectData: ", projectData.projectObject);
    const projectDataName = projectData.projectObject.projectName
    return axios.put("/api/projects/"+ projectDataName, projectData);
  },
  deleteProject: function(projectData) {
    const projectDataName = projectData.deleteProjectData.projectName
    console.log("projectDataName: ", projectDataName);
    return axios.delete("/api/projects/" + projectDataName, {data: projectData});
  },

  //
  getProjects: function() {
    return axios.get("/api/projects");
  },
  //
  getUsers: function() {
    return axios.get("/api/users");
  },
  //
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  logout:function(){
    return axios.get("/api/auth/logout")
  }
};
