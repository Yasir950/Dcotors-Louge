import React, { Component } from "react";
import PlansModal from "../modals/plansmodal";

export default class Plans extends Component {
  constructor() {
    super();
    this.state = {
      listItem: [
        "1 Doctor",
        "1 Nurse",
        "Lab Test",
        "5 Medicines",
        "Hair Treatment",
        "Eye Treatment",
        "Head Treatment",
        "Full Body Treatment",
      ],
      date: new Date(),
      planModal: false

    };
  }
  onPlanClick() {
    this.setState({
      planModal: true,
    });
}
close() {
  this.setState({
  planModal: false,

  });
}
  

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-3 m-5 ">
            <div className="card shadow" style={{ width: "22rem" }}>
              <div className="row text-center">
                <h1 className="m-3">Basic Plan</h1>
                <div className="row mb-2">
                  <div className="col-6">
                    <del>$9.99</del>
                  </div>
                  <div className="col-6">
                    <button className="btn text-white btn-danger  w-75 rounded shadow-lg ">
                      Save 80%
                    </button>
                  </div>
                </div>

                <h1 className="text-success" style={{ fontSize: "50px" }}>
                  $1.99/mo
                </h1>
                <div className="text-center mb-1">
                  <button className="btn  btn-success text-center w-50 rounded-pill shadow-lg mt-4"  onClick={this.onPlanClick.bind(this)}>
                    Select
                  </button>
                  <p className="text-secondary mt-2">$3.99/mo when you renew</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-unstyled mx-3">
                  {this.state.listItem.map((item) => (
                    <li>
                      <i class="fas fa-solid mt-3 fa-check text-success mx-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3 m-5 ">
            <div className="card shadow" style={{ width: "22rem" }}>
              <div className="row text-center">
                <h1 className="m-3">Standard Plan</h1>
                <div className="row mb-2">
                  <div className="col-6">
                    <del>$15.99</del>
                  </div>
                  <div className="col-6">
                    <button className="btn text-white btn-danger  w-75 rounded shadow-lg ">
                      Save 50%
                    </button>
                  </div>
                </div>

                <h1 className="text-success" style={{ fontSize: "50px" }}>
                  $7.99/mo
                </h1>
                <div className="text-center mb-1">
                  <button className="btn  btn-success text-center w-50 rounded-pill shadow-lg mt-4" onClick={this.onPlanClick.bind(this)}>
                    Select
                  </button>
                  <p className="text-secondary mt-2">$4.99/mo when you renew</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-unstyled mx-3">
                  {this.state.listItem.map((item) => (
                    <li>
                      <i class="fas fa-solid mt-3 fa-check text-success mx-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3 m-5 ">
            <div className="card shadow" style={{ width: "22rem" }}>
              <div className="row text-center">
                <h1 className="m-3">Premium Plan</h1>
                <div className="row mb-2">
                  <div className="col-6">
                    <del>$20.99</del>
                  </div>
                  <div className="col-6">
                    <button className="btn text-white btn-danger  w-75 rounded shadow-lg ">
                      Save 47%
                    </button>
                  </div>
                </div>

                <h1 className="text-success" style={{ fontSize: "50px" }}>
                  $11.99/mo
                </h1>
                <div className="text-center mb-1">
                  <button className="btn  btn-success text-center w-50 rounded-pill shadow-lg mt-4" onClick={this.onPlanClick.bind(this)}>
                    Select
                  </button>
                  <p className="text-secondary mt-2">$8.99/mo when you renew</p>
                </div>
              </div>
              <div className="row">
                <ul className="list-unstyled mx-3">
                  {this.state.listItem.map((item) => (
                    <li>
                      <i class="fas fa-solid mt-3 fa-check text-success mx-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <PlansModal
            isopen={this.state.planModal}
            hideModal={this.close.bind(this)}
          
          />
      </div>
    );
  }
}
