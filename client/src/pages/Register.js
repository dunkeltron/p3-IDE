import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import Particles from "react-particles-js";

class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    name: "",
    password2: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    console.log(this.state);
  };

  render() {
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
                polygon: { nb_sides: 7 }
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
                <i className="fas fa-plus-square" /> Register
              </h1>
              <RegisterForm
                handleFormSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              />

              <p className="lead mt-4">
                Already Have An Account? <a href="/">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
