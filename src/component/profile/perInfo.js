import React, { Component } from "react";
import Avatar from "react-avatar";
import mypic from "../../images/mypic.jpeg";
export default class PerInfo extends Component {
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
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value,
    });
  };

  emailVal() {
    alert("please enter your email!");
  }
  passwordVal() {
    alert("please enter your Password!");
  }
  nameVal() {
    alert("please enter  your name!");
  }
  numVal() {
    alert("please enter your mobile number");
  }
  DobVal() {
    alert("please enter your date of birth");
  }
  onClick() {
    if (this.state.email === "") {
      this.emailVal();
    } else if (this.state.password === "") {
      this.passwordVal();
    } else if (this.state.name === "") {
      this.nameVal();
    } else if (this.state.num === "") {
      this.numVal();
    } else if (this.state.email === "") {
      this.emailVal();
    } else if (this.state.startDate === "") {
      this.DobVal();
    } else {
    }
  }
  render() {
    return (
      <div>
        <div className="row justify-content-center  p-2 mx-5 mt-3">
          <Avatar name={mypic} className="mb-4" size="100" round={true} />
          <div className=" row ">
            <div className="col-6">
              <div className=" mb-1">
                <label className="form-label" for="typeEmailX">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className=" form-control form-control"
                  value="Yasir Abbas"
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className=" mb-1">
                <label className="form-label" for="typeEmailX">
                  Mobile:
                </label>
                <input
                  disabled
                  type="number"
                  id="num"
                  className="form-control form-control"
                  value={this.state.num}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className=" mb-1">
                <label className="form-label" for="typeEmailX">
                  Cnic
                </label>
                <input
                  disabled
                  type="number"
                  id="cnic"
                  className="form-control form-control"
                  value={this.state.cnic}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-1">
                <label className="form-label" for="typeEmailX">
                  Email
                </label>
                <input
                  disabled
                  type="email"
                  id="email"
                  className="form-control form-control"
                  value={this.state.email}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-1">
                <label className="form-label" for="typePasswordX">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control"
                  value={this.state.password}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-1">
                <label className="form-label" for="typePasswordX">
                  Date of Birth
                </label>
                <input
                  disabled
                  type="date"
                  id="startDate"
                  className="form-control form-control"
                  value={this.state.startDate}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mb-1">
                <label className="form-label" for="typePasswordX">
                  Gender
                </label>
                <select
                  disabled
                  id="selectedGender"
                  class="form-select"
                  value={this.state.selectedGender}
                  onChange={this.onChange.bind(this)}
                >
                  {this.state.gender &&
                    this.state.gender.map((item) => <option>{item}</option>)}
                </select>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success   btn-center  px-5 m-5"
                type="submit"
                onClick={this.onClick.bind(this)}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
