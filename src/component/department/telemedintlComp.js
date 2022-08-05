import React, { Component } from "react";
import doc from "../../images/02.jpg";
import { Link } from "react-router-dom";
import AppointmentModal from "../modals/appointmentModal";
export default class TeleMedicineIntlComp extends Component {
  constructor() {
    super();
    this.state = {
      deptData: [
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
        {
          deptId: "5",
          doc: "Maria",
          deptName: "Pulmology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "online",
          gender: "female",
          rating: "4.5",
          priceRange: "2500-3000",
          responceTime: "10 min",
        },
        {
          deptId: "6",
          doc: "saba",
          deptName: "Gynecology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "clinic",
          gender: "female",
          rating: "4.0",
          priceRange: "1000-1500",
          responceTime: "2 hour",
        },
        {
          deptId: "7",
          doc: "Ahmed",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "clinic",
          gender: "male",
          rating: "3.5",
          priceRange: "2000-2500",
          responceTime: "10 min",
        },
        {
          deptId: "8",
          doc: "Laraib",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "clinic",
          gender: "female",
          rating: "3.0",
          priceRange: "1500-2000",
          responceTime: "1 hour",
        },
      ],
      searchInput: "",
      filteredDoc: [
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
        {
          deptId: "5",
          doc: "Maria",
          deptName: "Pulmology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "online",
          gender: "female",
          rating: "4.5",
          priceRange: "2500-3000",
          responceTime: "10 min",
        },
        {
          deptId: "6",
          doc: "saba",
          deptName: "Gynecology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "clinic",
          gender: "female",
          rating: "4.0",
          priceRange: "1000-1500",
          responceTime: "2 hour",
        },
        {
          deptId: "7",
          doc: "Ahmed",
          deptName: "opthomology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "clinic",
          gender: "male",
          rating: "3.5",
          priceRange: "2000-2500",
          responceTime: "10 min",
        },
        {
          deptId: "8",
          doc: "Laraib",
          deptName: "Gynecology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "clinic",
          gender: "female",
          rating: "3.0",
          priceRange: "1500-2000",
          responceTime: "1 hour",
        },
      ],
      onlineConsultants: [],
      top: [],
      searchArr: [
        "rating",
        "gender",
        "priceRange",
        "speciality",
        "responceTime",
      ],
      selectedsearch: "Opthomology",
      gender: ["male", "female"],
      ratingArr: ["5.0", "4.5", "4.0", "3.5", "3.0"],
      priceRangeArr: [
        "500-1000",
        "1000-1500",
        "1500-2000",
        "2000-2500",
        "2500-3000",
      ],
      specialityArr: [
        "Opthomology",
        "Gynecology",
        "Pulmology",
        "Dental Care",
        "Child Care",
        "Cardiology",
      ],
      responceTimeArr: ["1 hour", "30 min", "2 hour", "10 min"],
      selectedSpeciality: "opthomology",
      btnSearchArr: [
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
      ],
      click: false,
      appointModal: false,
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
    let toprated =
      this.state.deptData &&
      this.state.deptData.filter(
        (item) => item.deptRate && item.deptRate.includes("Top Rated")
      );
    this.setState({
      top: toprated,
    });
    let onlineConsultant =
      this.state.deptData &&
      this.state.deptData.filter(
        (item) => item.mode && item.mode.includes("online")
      );
    this.setState({
      onlineConsultants: onlineConsultant
    });
  }
  onChange = async (e, item) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({ [id]: val });
    let filteredItems =
      this.state.deptData &&
      this.state.deptData.filter(
        (item) =>
          item.doc &&
          item.deptName
            .toLowerCase()
            .includes(this.state.selectedSpeciality.toLowerCase())
      );
    if (this.state.searchInput.length >= 0) {
      this.setState({
        filteredDoc: [],
      });
    }
    this.setState({ btnSearchArr: filteredItems });
    console.log(this.state.deptData);
    console.log(this.state.btnSearchArr);
  };
  onClick = async () => {
    let filteredItems =
      this.state.deptData &&
      this.state.deptData.filter(
        (item) =>
          item.doc &&
          item.doc
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase()) &&
          item.deptName &&
          item.deptName
            .toLowerCase()
            .includes(this.state.selectedsearch.toLowerCase())
      );
    this.setState({ filteredDoc: filteredItems, click: true });
  };
  onAppointClick() {
    this.setState({
      appointModal: true,
    });
  }
  close() {
    this.setState({
      appointModal: false,
      planModal: false,
    });
  }

  render() {
    return (
      <div>
        <div className="py-5 service-2 mt-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div>
                  <h2 className="text-primary mb-4">
                    TeleMedicine International
                  </h2>
                  <div className="divider mx-auto my-4"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-8 text-center  mb-5 px-0">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  value={this.state.searchInput}
                  placeholder="Search For Doctors"
                  onChange={this.onChange.bind(this)}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="col-2  px-0">
                <select
                  id="selectedsearch"
                  className="form-select bg-success text-white"
                  style={{ height: "50px" }}
                  onChange={this.onChange.bind(this)}
                >
                  {this.state.specialityArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col-1 px-0">
                <button
                  className="btn btn-success"
                  style={{ height: "50px" }}
                  onClick={this.onClick.bind(this)}
                >
                  Search
                </button>
              </div>
            </div>
            {this.state.click === false ? (
              <div className="row "></div>
            ) : (
              <div className="row ">
                {this.state.filteredDoc &&
                  this.state.filteredDoc.map((item) => (
                    <div className="col-3 mb-5 ">
                      <div className="card shadow" style={{ width: "15rem" }}>
                        <Link to="/doctor">
                          <img src={doc} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">{item.doc}</h5>
                          <h6 className="card-title">{item.deptName}</h6>
                          <p className="card-text">{item.deptDesc}</p>
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

            <div className="row mb-5">
              <h3 className="mb-3">Top Rated</h3>
              {this.state.top &&
                this.state.top.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class=" shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={doc} className="card-img-top" alt="..." />
                      </Link>
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
            </div>
            <div className="row mb-5">
              <h3 className="mb-3">Online Consultants</h3>
              {this.state.onlineConsultants &&
                this.state.onlineConsultants.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class=" shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={doc} className="card-img-top" alt="..." />
                      </Link>
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
            </div>
            <div className="row  mb-3">
              <div className="col-4">
                <h3 className="mb-3">TeleMedicine International</h3>
              </div>
              <div className="col-8">
                {this.state.specialityArr.map((item) => (
                  <div class="form-check-inline mx-1">
                    <button
                      class="btn btn-sm btn-secondary "
                      value={item}
                      id="selectedSpeciality"
                      onClick={this.onChange.bind(this)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="row ">
              {this.state.btnSearchArr &&
                this.state.btnSearchArr.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class="card shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={doc} className="card-img-top" alt="..." />
                      </Link>

                      <div class="card-body">
                        <h5 class="card-title">{item.doc}</h5>
                        <h6 class="card-title">{item.deptName}</h6>
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
            </div>
          </div>
          <AppointmentModal
            isopen={this.state.appointModal}
            hideModal={this.close.bind(this)}
          />
        </div>
      </div>
    );
  }
}
