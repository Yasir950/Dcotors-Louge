import React, { Component } from "react";
import petsCat from "../../images/petscat.PNG";
import pets from "../../images/pets.jpg";
import AppointmentModal from "../modals/appointmentModal";
export default class HomeComp extends Component {
  constructor() {
    super();
    this.state = {
      petData: [
        {
          docId: "1",
          doc: "Ali",
          deptName: "Cats",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 5.0,
          priceRange: "500-1000",
          responceTime: "1 hour",
          loc: "Karachi",
          cat: "",
        },
        {
          docId: "2",
          doc: "Usman",
          deptName: "Dogs",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "Clinic",
          gender: "male",
          rating: 4.5,
          priceRange: "500-1000",
          responceTime: "1 hour",
          loc: "Lahore",
        },
        {
          docId: "3",
          doc: "Amna",
          deptName: "Rabbit",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "clinic",
          gender: "male",
          rating: 4.7,
          priceRange: "500-1000",
          responceTime: "1 hour",
          loc: "Karachi",
        },
        {
          docId: "4",
          doc: "Zahid",
          deptName: "DOgs",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 3.6,
          priceRange: "500-1000",
          responceTime: "1 hour",
          loc: "Islamabad",
        },
        {
          docId: "5",
          doc: "Qaiser",
          deptName: "Birds",
          deptDesc: "opthomology is very dangerous disease",
          docRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: 3.9,
          priceRange: "500-1000",
          responceTime: "1 hour",
          loc: "Rawalpnidi",
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
        { petName: "cats", loc: "Karachi", priceRange: "500-1000" },
        { petName: "Dogs", loc: "Karachi", priceRange: "1500-2000" },
        { petName: "Birds", loc: "Lahore", priceRange: "5000-10000" },
        { petName: "Rabbits", loc: "Islamabad", priceRange: "1000-2000" },
        { petName: "Fish", loc: "Lahore", priceRange: "5000-10000" },
        { petName: "Guinea pigs", loc: "Rawalpindi", priceRange: "1000-2000" },
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
      selectedsearch: "Karachi",
      click: false,
      petsCategory: [
        { petName: "cats", loc: "Karachi", priceRange: "500-1000" },
        { petName: "Dogs", loc: "Karachi", priceRange: "1500-2000" },
        { petName: "Birds", loc: "Lahore", priceRange: "5000-10000" },
        { petName: "Rabbits", loc: "Islamabad", priceRange: "1000-2000" },
        { petName: "Fish", loc: "Lahore", priceRange: "5000-10000" },
        { petName: "Guinea pigs", loc: "Rawalpindi", priceRange: "1000-2000" },
      ],
      category: ["cats", "dogs", "birds", "rabbits", "fish"],
      location: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
      selectedCat: "cats",
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
    console.log(this.state.selectedsearch);
    console.log(this.state.selectedCat);
    let filteredItems =
      this.state.petData &&
      this.state.petData.filter(
        (item) =>
          item.deptName &&
          item.deptName
            .toLowerCase()
            .includes(this.state.selectedSpeciality.toLowerCase())
      );
    if (this.state.searchInput.length >= 0) {
      this.setState({
        filteredDoc: [],
      });
    } else {
      this.setState({ btnSearchArr: filteredItems });
    }

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
          item.loc &&
          item.loc
            .toLowerCase()
            .includes(this.state.selectedsearch.toLowerCase()) &&
          item.deptName &&
          item.deptName.toLowerCase().includes(this.state.selectedCat)
      );
    this.setState({ filteredDoc: filteredItems, click: true });
    console.log(filteredItems);
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
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-success mb-4">Home Visits</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-6 text-center  mb-5 px-0">
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
                    {this.state.location.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="col-2  px-0">
                  <select
                    id="selectedCat"
                    className="form-select bg-success text-white"
                    style={{ height: "50px" }}
                    onChange={this.onChange.bind(this)}
                  >
                    {this.state.category.map((item) => (
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
                        <img src={pets} className="card-img-top" alt="..." />
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
                <hr className="mb-5"></hr>
              </div>
            )}
            <div className="row">
              {this.state.petsCategory.map((item) => (
                <div className="col-3 mb-3">
                  <div className="card shadow" style={{ width: "15rem" }}>
                    <img src={petsCat} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                      <h5 className="card-title">{item.petName}</h5>
                      <p className="card-text">{item.loc}</p>
                      <p className="card-text">Rs: {item.priceRange}</p>
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
