import React, { Component } from "react";
import { Link } from "react-router-dom";
import pets from "../../images/pets.jpg";
import StarRatings from "react-star-ratings";
import AppointmentModal from "../modals/appointmentModal";
export default class MainSection extends Component {
  constructor() {
    super();
    this.state = {
      petData: [
        {
          docId: "1",
          doc: "Ali",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 5.0,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "2",
          doc: "Usman",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 4.5,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "3",
          doc: "Amna",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 4.7,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "4",
          doc: "Zahid",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 3.6,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "5",
          doc: "Qaiser",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 3.9,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
      ],
      appointModal: false

    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
  }
  onAppointClick() {
    this.setState({
      appointModal: true,
    });
  }
  close() {
    this.setState({
      appointModal: false
    });
  }
  render() {
    return (
      <div>
        <div className="bg-class">
          <div style={{ marginLeft: "450px", paddingTop: "160px" }}>
            <Link
              to="/homeconsultant"
              className="text-white text-decoration-none"
            >
              <button className="btn text-white btn-success  w-50 rounded mt-5 shadow-lg ">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="py-5 service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">International Vets</h2>
                </div>
              </div>
            </div>
            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.petData &&
                this.state.petData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                    <div className=" shadow" style={{ width: "15rem" }}>
                      <img src={pets} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.doc}</h5>
                        <div>
                          <StarRatings
                            className="px-3"
                            rating={item.rating}
                            starDimension="17px"
                            starSpacing="5px"
                            starRatedColor="yellow"
                          />
                        </div>
                        <p className="card-text">{item.deptDesc}</p>
                        <p className="card-text">Rs:{item.priceRange}</p>
                      </div>
                      <button className="btn btn-sm w-100 btn-success  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                    </div>
                  </div>
                ))}
              <div className="text-center">
                <Link
                  to="/veterinarytelemedicineintl"
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
                  <h2 className="text-success mb-4">National Vets </h2>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginLeft: "20px" }}>
              {this.state.petData &&
                this.state.petData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                    <div className=" shadow" style={{ width: "15rem" }}>
                      <img src={pets} class="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.doc}</h5>
                        <div>
                          <StarRatings
                            className="px-3"
                            rating={item.rating}
                            starDimension="17px"
                            starSpacing="5px"
                            starRatedColor="yellow"
                          />
                        </div>
                        <p className="card-text">{item.deptDesc}</p>
                        <p className="card-text">{item.priceRange}</p>
                      </div>
                      <button className="btn btn-sm w-100 btn-success  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                    </div>
                  </div>
                ))}
              <div className="text-center">
                <Link
                  to="/veterinarytelemedicinenatl"
                  className="text-white text-decoration-none"
                >
                  <button className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg ">
                    View more <i className="fas fa-solid fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 service-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">Home Visits</h2>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginLeft: "20px" }}>
              {this.state.petData &&
                this.state.petData.slice(0, 4).map((item) => (
                  <div className="col-3 mb-5 ">
                    <div className=" shadow" style={{ width: "15rem" }}>
                      <img src={pets} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.doc}</h5>
                        <div>
                          <StarRatings
                            className="px-3"
                            rating={item.rating}
                            starDimension="17px"
                            starSpacing="5px"
                            starRatedColor="yellow"
                          />
                        </div>
                        <p className="card-text">{item.deptDesc}</p>
                        <p className="card-text">{item.priceRange}</p>
                      </div>
                      <button className="btn btn-sm w-100 btn-success  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                    </div>
                  </div>
                ))}
              <div className="text-center">
                <Link
                  to="/homeconsultant"
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
        <AppointmentModal
            isopen={this.state.appointModal}
            hideModal={this.close.bind(this)}
          />
      </div>
    );
  }
}
