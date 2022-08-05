import React, { Component } from "react";
import pets from "../../images/pets.jpg";
import { Link } from "react-router-dom";
import AppointmentModal from "../modals/appointmentModal";
export default class VeterinaryTelemedicine extends Component {
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
          deptName: "Dental Care",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "Clinic",
          gender: "male",
          rating: 4.5,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "3",
          doc: "Amna",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "clinic",
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
      top: [],
      onlineConsultants: [],
      specialityArr: [
        "Opthomology",
        "Gynecology",
        "Pulmology",
        "Dental Care",
        "Child Care",
        "Cardiology",
      ],
      selectedSpeciality: "Opthomology",
      filteredDoc: [
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
          mode: "Clinic",
          gender: "male",
          rating: 4.5,
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          docId: "3",
          doc: "Amna",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "clinic",
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
      searchInput: "",
      selectedsearch: "Opthomology",
      click: false,
      appointModal: false,
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
    let filteredItem =
      this.state.petData &&
      this.state.petData.filter(
        (item) => item.docRate && item.docRate.includes("Top Rated")
      );
    let filteredItems =
      this.state.petData &&
      this.state.petData.filter(
        (item) => item.mode && item.mode.includes("online")
      );

    this.setState({
      top: filteredItem,
      onlineConsultants: filteredItems,
    });
  }
  onChange = async (e, item) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({ [id]: val });
    let filteredItems =
      this.state.petData &&
      this.state.petData.filter(
        (item) =>
          item.deptName &&
          item.deptName
            .toLowerCase()
            .includes(this.state.selectedSpeciality.toLowerCase())
      );
    // if (this.state.searchInput.length >= 0) {
    //   this.setState({
    //     filteredDoc: [],
    //   });
    // }
    this.setState({ btnSearchArr: filteredItems });

    console.log(this.state.filteredItems);
  };
  onClick = async () => {
    let filteredItems =
      this.state.petData &&
      this.state.petData.filter(
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
    });
  }
  render() {
    return (
      <div>
        <div className="py-5 service-2">
          <div className="container">
       
                  <h2 className="text-success text-center mb-4">National Vets</h2>

            <div>
              <div className="row">
                <div className="col-8 text-center mb-5 px-0">
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
                <div className="col-2 px-0">
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
                          <img src={pets} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">{item.doc}</h5>
                          <h6 className="card-title">{item.deptName}</h6>
                          <p className="card-text">{item.deptDesc}</p>
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
            )}
            <div className="row mb-5">
              <h3 className="mb-3">Top Rated</h3>
              {this.state.top &&
                this.state.top.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class=" shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={pets} className="card-img-top" alt="..." />
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
                    <div className="shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={pets} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.deptName}</h5>
                        <p className="card-text">{item.deptDesc}</p>
                      </div>
                      <button
                        className="btn btn-sm w-100 btn-success"
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
                <h3 className="mb-3">National Vets</h3>
              </div>
              <div className="col-8">
                {this.state.specialityArr.map((item) => (
                  <div className="form-check-inline mx-1">
                    <button
                      className="btn btn-sm btn-secondary "
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
                    <div className="card shadow" style={{ width: "15rem" }}>
                      <Link to="/doctor">
                        <img src={pets} className="card-img-top" alt="pets" />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.doc}</h5>
                        <h6 className="card-title">{item.deptName}</h6>
                        <p className="card-text">{item.deptDesc}</p>
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
        </div>
        <AppointmentModal
          isopen={this.state.appointModal}
          hideModal={this.close.bind(this)}
        />
      </div>
    );
  }
}
