import React, { Component } from "react";
import doc from "../../images/02.jpg";
import { Link } from "react-router-dom";
import AppointmentModal from "../modals/appointmentModal";
import LabModal from "../modals/labModal";
export default class ListComp extends Component {
  constructor() {
    super();
    this.state = {
      deptData: [
        {
          deptId: "1",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "2",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "3",
          deptName: "Dental Care",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "4",
          deptName: "Child Care",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "5",
          deptName: "Pulmology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "6",
          deptName: "Gynecology",
          deptDesc: "opthomology is very dangerous disease",
        },
      ],
      more: false,
      appointModal: false,
      medModal:false

    };
  }
  onClick() {
    this.setState({
      more: true,
    });
  }
  onMedClick(){
    this.setState({
      medModal:true
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
      medModal:false

    });
  }
  render() {
    return (
      <div>
        <div className="py-5 service-2" id="department">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">Departments</h2>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.deptData &&
                this.state.deptData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class=" shadow" style={{ width: "15rem" }}>
                      <img src={doc} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{item.deptName}</h5>
                        <p class="card-text">{item.deptDesc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="text-center">
                <Link
                  to="/departments"
                  className="text-white text-decoration-none"
                >
                  <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg">
                    View more <i class="fas fa-solid fa-angle-right"></i>
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">
                    TeleMedicine International
                  </h2>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.deptData &&
                this.state.deptData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                  <div class=" shadow" style={{ width: "15rem" }}>
                    <img src={doc} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 class="card-title">{item.deptName}</h5>
                      <p class="card-text">{item.deptDesc}</p>
                    </div>
                    <button
                          className="btn btn-sm w-100 btn-success  "
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                  </div>
                </div>
                ))}
              <div className="text-center">
                <Link
                  to="/telemediceinternational"
                  className="text-white text-decoration-none "
                >
                  <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg ">
                    View more <i class="fas fa-solid fa-angle-right"></i>
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">TeleMedicine National</h2>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.deptData &&
                this.state.deptData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                  <div class=" shadow" style={{ width: "15rem" }}>
                    <img src={doc} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{item.deptName}</h5>
                      <p class="card-text">{item.deptDesc}</p>
                    </div>
                    <button
                          className="btn btn-sm w-100 btn-success  "
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                  </div>
                </div>
                ))}
              <div className="text-center">
                <Link
                  to="/telemedicinenational"
                  className="text-white text-decoration-none"
                >
                  <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg ">
                    View more <i className="fas fa-solid fa-angle-right"></i>
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">Laboratory Test</h2>
                </div>
              </div>
            </div>

            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.deptData &&
                this.state.deptData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                  <div className=" shadow" style={{ width: "15rem" }}>
                  <div
                          className="  mt-3 col-5 p-3 text-success rounded-circle border"
                          style={{ marginLeft: "70px" }}
                        >
                          <i className="fas fa-solid fa-hospital fa-4x"></i>
                        </div> 
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.deptName}</h5>
                      <p className="card-text">{item.deptDesc}</p>
                    </div>
                    <button className="btn btn-sm w-100 btn-secondary  " onClick={this.onMedClick.bind(this)}>Book Appointment</button>

                  </div>
                </div>
                ))}
              <div className="text-center">
                <Link to="/labtest" className="text-white text-decoration-none">
                  <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg ">
                    View more <i class="fas fa-solid fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AppointmentModal
            isopen={this.state.appointModal}
            hideModal={this.close.bind(this)}
          />
           <LabModal
            isopen={this.state.medModal}
            hideModal={this.close.bind(this)}
          
          />
      </div>
    );
  }
}
