import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RegModal from "./registerModal";
import { Link } from "react-router-dom";
export default class AppModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      email: "",
      password: "",
      login: false,
      click: false,
    };
  }
  openModal() {
    this.setState({
      open: true,
    });
    this.props.hideModal();
  }
  close() {
    this.props.hideModal();
  }
  regClose() {
    this.setState({
      open: false,
    });
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;

    await this.setState({
      [id]: value,
      click: false,
    });

    console.log(this.state.email);
    console.log(this.state.password);
  };

  onClick() {
    this.setState({ click: true });
    if (this.state.email === "") {
      this.emailVal();
    } else if (this.state.password === "") {
      this.passwordVal();
    } else {
      this.props.hideModal();
    }
  }
  render() {
    return (
      <div >
        <div>

          <Modal
            isOpen={this.props.isopen}
            toggle={this.close.bind()}
            scrollable={false}
          >
          <div className="text-left" style={{marginLeft:"450px"}}>
            <Link  to='#' onClick={this.close.bind(this)} className='mx-2  text-decoration-none text-dark '>X</Link>
            </div>
     

            <ModalBody>
            
              <div
                className=""
              >
                <div className=" p-3 ">
                  <div className=" pb-2">

                    <h2 className=" mb-3 text-center">Login</h2>
                    <label className="form-label" for="typeEmailX">
                      Email
                    </label>
                    <div className=" mb-1 text-center">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                      />
                    </div>
                    {this.state.email.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">plase enter your email!</p>
                      )}
                    <label className="form-label" for="typePasswordX">
                      Password
                    </label>
                    <div className=" mb-1 text-center">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                      />
                    </div>
                    {this.state.password.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">
                          plase enter your password!
                        </p>
                      )}
                    <p className="small mb-2 pb-lg-2 text-center">
                      <a
                        className="text-decoration-none text-dark"
                        href="#!"
                        onClick={this.close.bind(this)}
                      >
                        Forgot password?
                      </a>
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-secondary  btn-sm px-5 "
                        type="submit"
                        onClick={this.onClick.bind(this)}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>
                      Don't have an account?{" "}
                      <span
                        className="text-white-50 text-center"
                        onClick={this.openModal.bind(this)}
                      >
                       <button className="btn btn-sm">Sign Up</button> 
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
        <RegModal
          isopen={this.state.open}
          hideModal={this.regClose.bind(this)}
        />
      </div>
    );
  }
}
