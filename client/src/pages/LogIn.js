import React, { Component } from "react";
import LogInForm from "../components/LogInForm";
import { Redirect } from "react-router-dom";
import Particles from "react-particles-js";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      currentUser: null,
      redirectTo: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //will have to change function once authentication is up
  handleFormSubmit = event => {
    //attempt to login using api call from App.js and current state of email and password.
    event.preventDefault();
    console.log(this.state);
    this.props._login(this.state.username, this.state.password);
    this.setState({ redirectTo: this.state.username });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  componentWillMount() {
    sessionStorage.removeItem("currentUser");
  }
  render() {
    // this handles the redirect after login by checking if we have assigned redirectTo
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Particles
            params={{
              particles: {
                number: {
                  value: 58,
                  density: { enable: true, value_area: 800 }
                },
                color: { value: "#ebe6e6" },
                shape: {
                  type: "circle",
                  stroke: { width: 2, color: "#000000" },
                  polygon: { nb_sides: 7 },
                //   image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                  value: 0.21646062821684559,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 40.08530152163807,
                  random: true
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 5,
                  direction: "top-right",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 641.3648243462092
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: { enable: true, mode: "bubble" },
                //   onclick: { enable: false, mode: "push" },
                  resize: true
                },
                modes: {
                  grab: { distance: 400, line_linked: { opacity: 1 } },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: { distance: 200, duration: 0.4 },
                  push: { particles_nb: 4 },
                  remove: { particles_nb: 2 }
                }
              }
            }}
          />

          <div className="row no-gutters">
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h1 className="text-center mb-3">
                  <i className="fas fa-door-open" /> Login
                </h1>
                <LogInForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />

                <p className="lead mt-4">
                  Need an Account?
                  <a href="/register">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LogIn;
