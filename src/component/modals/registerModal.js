import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
// import { Alert } from 'react-alert'
export default class RegModal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      email: "",
      password: "",
      login: false,
      name: "",
      num: "",
      cnic: "",
      startDate: new Date(),
      gender: ["male", "female"],
      selectedGender: "",
      click: false,
    };
  }
  close() {
    this.props.hideModal();
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
    console.log(this.state.selectedGender);
  };
  onDateChange(date) {
    this.setState({ startDate: date, click: false });
  }

  onClick() {
    this.setState({
      click: true,
    });
    if (this.state.email === "") {
      // this.emailVal();
    } else if (this.state.password === "") {
      // this.passwordVal();
    } else if (this.state.name === "") {
      // this.nameVal();
    } else if (this.state.num === "") {
      // this.numVal();
    } else if (this.state.email === "") {
      // this.emailVal();
    } else if (this.state.startDate === "") {
      // this.DobVal();
    } else {
      this.props.hideModal();
    }
    console.log(this.state.startDate.toLocaleDateString());
  }
  render() {
    let dob = this.state.startDate.toLocaleDateString();
    return (
      <div>
        <div>
          <Modal isOpen={this.props.isopen} toggle={this.close.bind(this)}
          size="lg"
          >
            
            <Link
              to="#"
              onClick={this.close.bind(this)}
              className="mx-2  text-decoration-none text-dark "
            >
              X
            </Link>

            <ModalBody>
              <div >
                <div className=" ">
                  <div className="row pb-2">
                    <h2 className=" mb-3 text-center">Register</h2>
                    <div className="col-6  mb-1">
                      <label className="form-label" for="typeEmailX">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChange.bind(this)}
                      />
                       {this.state.name.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">plase enter your name!</p>
                      )}
                    </div>
                   
                    <div className="col-6 mb-1">
                      <label className="form-label" for="typeEmailX">
                        Mobile:
                      </label>
                      <input
                        type="number"
                        id="num"
                        className="form-control"
                        value={this.state.num}
                        onChange={this.onChange.bind(this)}
                      />
                        {this.state.num.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">plase enter your number!</p>
                      )}
                    </div>
                  
                    <div className="col-6 mb-1">
                      <label className="form-label" for="typeEmailX">
                        Cnic
                      </label>
                      <input
                        type="number"
                        id="cnic"
                        className="form-control"
                        value={this.state.cnic}
                        onChange={this.onChange.bind(this)}
                      />
                    </div>
                    <div className="col-6 mb-1">
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                      />
                         {this.state.email.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">plase enter your email!</p>
                      )}
                    </div>
                 
                    <div className="col-6 mb-1">
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                      />
                        {this.state.password.length <= 0 &&
                      this.state.click === true && (
                        <p className="text-danger">
                          plase enter your password!
                        </p>
                      )}
                    </div>
                  
                    <div className="col-6 mb-1">
                      <label className="form-label" for="typePasswordX">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        className="form-control"
                        value={this.state.startDate}
                        onChange={this.onChange.bind(this)}
                      ></input>
                    </div>
                    {dob.length <= 0 && this.state.click === true && (
                      <p className="text-danger">
                        plase enter your date of birth!
                      </p>
                    )}
                    <div className="col-12 mb-1">
                      <label className="form-label mb-2" for="typePasswordX">
                        Gender
                      </label>
                      <select
                        id="selectedGender"
                        class="form-select"
                        value={this.state.selectedGender}
                        onChange={this.onChange.bind(this)}
                      >
                        {this.state.gender &&
                          this.state.gender.map((item) => (
                            <option>{item}</option>
                          ))}
                      </select>
                    </div>
                    <div className="text-center mt-4">
                      <button
                        className="btn btn-secondary btn-sm px-5 "
                        type="submit"
                        onClick={this.onClick.bind(this)}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}
