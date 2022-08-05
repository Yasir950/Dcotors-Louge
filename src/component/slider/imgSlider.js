import React, { Component } from "react";
import Modals from "../modals/loginModal";
import "bootstrap/dist/css/bootstrap.min.css";
export default class ImgSliderComp extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      timeSlots: [
        "09:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 01:00",
        "01:00 - 02:00",
        "03:00 - 04:00",
      ],
      deptData: [
        "Opthomology",
        "Cardiology",
        "Dental Care",
        "Child Care",
        "Pulmology",
        "Gynecology",
      ],
    };
  }
  render() {
    return (
      <div>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="bg-image">
              <Modals />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
