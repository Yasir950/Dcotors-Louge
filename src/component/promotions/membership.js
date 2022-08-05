import React, { Component } from "react";
import PlansModal from "../modals/plansmodal";
import Plans from "./plans";
export default class Membership extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      planModal:false
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
        <div className="bg-membership">
          <div
            className="col-5 text-center p-5 "
            style={{ fontSize: "4rem", marginLeft: "360px" }}
          >    
          </div>
        </div>
        <h1 className="text-center mt-5 mb-3">Choose Your Membership Plan</h1>

        <Plans />
        <PlansModal
            isopen={this.state.planModal}
            hideModal={this.close.bind(this)}
          
          />
      </div>
    );
  }
}
