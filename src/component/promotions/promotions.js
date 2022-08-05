import React, { Component } from "react";
import imgCard from "../../images/cardimg.jpg";
import AppointmentModal from "../modals/appointmentModal";
export default class Promotions extends Component {
  constructor() {
    super();
    this.state = {
      promoArr: [
        {
          promoName: "Dark Circles",
          promoOff: "50%",
        },
        {
          promoName: "Hydra Facial",
          promoOff: "20%",
        },
        {
          promoName: "pigmentation Facial",
          promoOff: "30%",
        },
        {
          promoName: "Asne Scars",
          promoOff: "25%",
        },
        {
          promoName: "Hair PRP",
          promoOff: "45%",
        }, {
          promoName: "Dark Circles",
          promoOff: "50%",
        },
        {
          promoName: "Hydra Facial",
          promoOff: "20%",
        },
        {
          promoName: "pigmentation Facial",
          promoOff: "30%",
        },
        {
          promoName: "Asne Scars",
          promoOff: "25%",
        },
        {
          promoName: "Hair PRP",
          promoOff: "45%",
        },
      ],
      viewmore:false,
      appointModal: false,
    };
  }
  onClick(){
    this.setState({
      viewmore:true
    })
  }
  onAppointClick() {
    this.setState({
      appointModal: true,
    });
  }
  close() {
    this.setState({
      appointModal: false,
    });
  }
  render() {
    return (
      <div>
        <div className="bgpromote"></div>
        <div className="row text-center mt-3 mb-3">
          <h1>Most Viewed</h1>
        </div>
        <div className="row text-center mt-3 mb-3">
          {this.state.promoArr &&
            this.state.promoArr.slice(0,5).map((item) => (
              <div className="col-2 mx-3 px-5 mb-5 ">
                <div class="card shadow " style={{ width: "14rem" }}>
                    <div className="row">
                  
                  <div className="col-6">
                  <img
                    src={imgCard}
                    className="card-bg rounded-pill mt-4 "
                    alt="s"
                    height={"100px"}
                    width={"100px"}
                    style={{ marginLeft: "55px" }}
                  />
                  </div>
                  <div
                    className="col-6 bg-secondary  rounded-pill text-white"
                    style={{ height: "50px", width: "50px",marginLeft: "55px" }}
                  >
                    <p className="mt-3" style={{fontSize:'12px'}}> {item.promoOff}</p>
                  </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">{item.promoName}</h5>
                    <p class="card-title text-center">Treatment</p>
                  </div>
                  <button
                          className="btn btn-sm btn-success  "
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                </div>
              </div>
            ))}
        </div>
        <div className="row text-center mt-3 mb-3">
          <h1>All speical offers</h1>
        </div>
        {this.state.viewmore===false ? (
          <div>
          <div className="row text-center mt-3 mb-3">
          {this.state.promoArr &&
            this.state.promoArr.slice(0,5).map((item) => (
              <div className="col-2 mx-3 px-5 mb-5 ">
                <div class="card shadow " style={{ width: "14rem" }}>
                    <div className="row">
                  
                  <div className="col-6">
                  <img
                    src={imgCard}
                    className="card-bg rounded-pill mt-4 "
                    alt="s"
                    height={"100px"}
                    width={"100px"}
                    style={{ marginLeft: "55px" }}
                  />
                  </div>
                  <div
                    className="col-6 bg-secondary  rounded-pill text-white"
                    style={{ height: "50px", width: "50px",marginLeft: "55px" }}
                  >
                    <p className="mt-3" style={{fontSize:'12px'}}> {item.promoOff}</p>
                  </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">{item.promoName}</h5>
                    <p class="card-title text-center">Treatment</p>
                  </div>
                  <button
                          className="btn btn-sm btn-success  "
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                </div>
              </div>
            ))}
        </div>
            <div className="text-center mb-5">
            <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg " onClick={this.onClick.bind(this)}>
              View more <i class="fas fa-solid fa-angle-right"></i>
            </button>
            </div> 
            </div>
        ):(
          <div className="row text-center mt-3 mb-3">
          {this.state.promoArr &&
            this.state.promoArr.map((item) => (
              <div className="col-2 mx-3 px-5 mb-5 ">
                <div class="card shadow " style={{ width: "14rem" }}>
                    <div className="row">
                  
                  <div className="col-6">
                  <img
                    src={imgCard}
                    className="card-bg rounded-pill mt-4 "
                    alt="s"
                    height={"100px"}
                    width={"100px"}
                    style={{ marginLeft: "55px" }}
                  />
                  </div>
                  <div
                    className="col-6 bg-secondary  rounded-pill text-white"
                    style={{ height: "50px", width: "50px",marginLeft: "55px" }}
                  >
                    <p className="mt-3" style={{fontSize:'12px'}}> {item.promoOff}</p>
                  </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center">{item.promoName}</h5>
                    <p class="card-title text-center">Treatment</p>
                  </div>
                  <button
                          className="btn btn-sm btn-success  "
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                </div>
              </div>
            ))}
        </div>
        )}
          <AppointmentModal

            isopen={this.state.appointModal}
            hideModal={this.close.bind(this)}
          />
      </div>
    );
  }
}
