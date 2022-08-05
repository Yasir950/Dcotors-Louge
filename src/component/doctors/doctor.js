import React, { Component } from "react";
import Mypic from "../../images/mypic.jpeg";
import ReviewModal from "../modals/reviewModal";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import AppointmentModal from "../modals/appointmentModal";
export default class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      docData: [
        {
          docName: "Yasir",
          reviews: 3.7,
          speciality: "Cardiology",
          exp: "2 years",
          fees: "Rs 2000",
          responceTime: "2 hours",
          Availability: "9:00-6:00",
          verfied: "PMC Verified",
        },
      ],
      Tags: [
        "Opthomology",
        "Gynecology",
        "Pulmology",
        "Dental Care",
        "Child Care",
        "Cardiology",
      ],
      reviewsArr: [
        {
          userName: "Abbas",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Ahmed",
          userReview: 4,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Ali",
          userReview: 5.0,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Usman",
          userReview: 3.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Obaid",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Bilal",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
      ],
      similarDoc: [
        {
          deptId: "1",
          doc: "Ali",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: "5.0",
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          deptId: "2",
          doc: "Abbas",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "Clinic",
          gender: "male",
          rating: "4.0",
          priceRange: "1500-2000",
          responceTime: "2 hour",
        },
        {
          deptId: "3",
          doc: "Aliya",
          deptName: "Dental Care",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "hospital",
          gender: "female",
          rating: "3.0",
          priceRange: "500-1000",
          responceTime: "30 min",
        },
        {
          deptId: "4",
          doc: "Amna",
          deptName: "Child Care",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Two Level Rated",
          mode: "hospital",
          gender: "female",
          rating: "5.0",
          priceRange: "1000-1500",
          responceTime: "1 hour",
        },
      ],
      selectedTag: "",
      modalOpen: false,
      appointModal: false,
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
    console.log(this.state.tags);
  }
  onChange = async (e, item) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({ [id]: val });
    console.log(this.state.tags);
  };
  close() {
    this.setState({
      modalOpen: false,
      appointModal: false,
    });
  }
  onClick() {
    this.setState({
      modalOpen: true,
    });
  }
  onAppointClick() {
    this.setState({
      appointModal: true,
    });
  }
  render() {
    return (
      <div>
        <div className="row mt-5 p-5">
          <div className="col-2 d-flex mt-3 justify-content-center">
            <img
              src={Mypic}
              alt="yasir"
              className="rounded-pill    "
              style={{ height: "150px", width: "150px" }}
            ></img>
          </div>
          <div className="col-8 px-0 ">
            {this.state.docData.map((item) => (
              <div>
                <h3 className="my-0">{item.docName}</h3>
                <div>
                  <StarRatings
                    className="px-3"
                    rating={item.reviews}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="yellow"
                  />
                </div>

                <p className="my-0"> {item.speciality}</p>
                <p className="my-0">{item.exp}</p>
                <p className="my-0">
                  {" "}
                  {item.verfied}{" "}
                  <i class="fas fa-solid fa-check text-success"></i>
                </p>
                <div className="row mt-3">
                  <h6 className="col-4">Fees:{item.fees}</h6>
                  <h6 className="col-4">Response Time:{item.responceTime}</h6>
                  <h6 className="col-4">Availability:{item.Availability}</h6>
                </div>

                {this.state.Tags &&
                  this.state.Tags.map((item) => (
                    <button
                      class="btn btn-sm btn-success mt-4 mx-2"
                      value={item}
                      id="selectedTag"
                      onClick={this.onChange.bind(this)}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            ))}
          </div>
          <div className="col-2 ">
            <div>
              <i class="fas fa-solid fa-circle text-success mx-1"></i>
              Online Now
            </div>
            <button
              className="btn btn btn-danger my-2"
              style={{ width: "170px" }}
              onClick={this.onAppointClick.bind(this)}
            >
              Book Appointment
            </button>
            <button
              className="btn btn btn-success"
              style={{ width: "170px" }}
              onClick={this.onAppointClick.bind(this)}
            >
              Video Consultant
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <h1 className="text-center mt-3">About</h1>
          <div className="col-9 ">
            <p>
              Building a website is an exercise of willpower. The bells and
              whistles of the design process are tempting to focus on, but
              compelling content is what makes a website work for your business.
              There are few pieces of content on your website that are more
              compelling than your mission, vision, values, and team. And all of
              these elements are typically found on the About page of your
              website. Building a website is an exercise of willpower. The bells
              and whistles of the design process are tempting to focus on, but
              compelling content is what makes a website work for your business.
              There are few pieces of content on your website that are more
              compelling than your mission, vision, values, and team. And all of
              these elements are typically found on the About page of your
              website.
            </p>
            <hr className="mt-5"></hr>
          </div>
        </div>
        <div className="row">
          <div className="py-5 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div>
                    <h2 className=" mb-4">Reviews</h2>
                  </div>
                </div>
              </div>
              <div className="row " style={{ marginLeft: "20px" }}>
                {this.state.reviewsArr &&
                  this.state.reviewsArr.slice(0, 4).map((item) => (
                    <div className="col-3 mb-5 ">
                      <div class=" shadow " style={{ width: "15rem" }}>
                        <img
                          src={Mypic}
                          class="card-img-top rounded-pill mt-4"
                          alt="..."
                          style={{
                            height: "80px",
                            width: "80px",
                            marginLeft: "80px",
                          }}
                        />
                        <div class="card-body">
                          <h5 class="card-title text-center">
                            <StarRatings
                              className="float-end"
                              rating={item.userReview}
                              starDimension="20px"
                              starSpacing="5px"
                              starRatedColor="yellow"
                            />
                          </h5>

                          <p class="card-text">{item.reviewDetails}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="text-center">
                  <button
                    className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg "
                    onClick={this.onClick.bind(this)}
                  >
                    View more <i class="fas fa-solid fa-angle-right"></i>
                  </button>
                </div>
                <hr className="mt-5"></hr>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="py-5 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div>
                    <h2 className=" mb-4">Similar Doctors</h2>
                  </div>
                </div>
              </div>

              <div className="row " style={{ marginLeft: "20px" }}>
                {this.state.similarDoc &&
                  this.state.similarDoc.slice(0, 4).map((item) => (
                    <div className="col-3 mb-5 ">
                      <div className="card shadow" style={{ width: "15rem" }}>
                        <img src={Mypic} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{item.doc}</h5>
                          <h6 className="card-title">{item.deptName}</h6>
                          <p className="card-text">{item.deptDesc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="text-center">
                <Link
                  className="btn btn-sm btn-success text-center w-25 rounded-pill shadow-lg "
                  to="/telemedicinenational"
                >
                  View more <i class="fas fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ReviewModal
          isopen={this.state.modalOpen}
          hideModal={this.close.bind(this)}
        />
        <AppointmentModal
          isopen={this.state.appointModal}
          hideModal={this.close.bind(this)}
        />
      </div>
    );
  }
}
