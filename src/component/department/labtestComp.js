import React, { Component } from "react";
import LabModal from "../modals/labModal";
export default class TeleMedicineIntlComp extends Component {
  constructor() {
    super();
    this.state = {
      labData: [
        {
          labId: "1",
          testName: "Kidney",
          category: "Diabetes",
          hospital: "Shifa hospital",
          loc: "Karachi",
          labAddress: "naya nazimabad,karachi",
          deptRate: "Top Rated",
          rating: "5.0",
          priceRange: "500",
        },
        {
          labId: "2",
          hospital: "Shifa hospital",
          testName: "Daibetes",
          category: "Heart Health",
          loc: "Karachi",
          labAddress: "faisal base, karachi",
          deptRate: "Low Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "3",
          testName: "Heart",
          hospital: "Fouji Foundation hospital",
          category: "Liver",
          loc: "Islamabad",
          labAddress: "sector H-9,Islamabad",
          deptRate: "Top Rated",
          rating: "3.0",
          priceRange: "500",
        },
        {
          labId: "4",
          testName: "Lungs",
          category: "Kidney",
          hospital: "FMC hospital",
          loc: "Rawalpinidi",
          labAddress: "Rajabazaar, Rawalpindi",
          deptRate: "Two Level Rated",
          rating: "5.0",
          priceRange: "1000",
        },
        {
          labId: "5",
          testName: "Kidney",
          hospital: "CMH",
          category: "Kidney",
          loc: "Hyderabad",
          labAddress: "new city,hyderabad",
          deptRate: "Top Rated",
          rating: "4.5",
          priceRange: "2500",
        },
        {
          labId: "6",
          testName: "Liver",
          hospital: "CMH",
          category: "Blood",
          loc: "Larkana",
          labAddress: "new city,Larkana",
          deptRate: "Top Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "7",
          testName: "Temperature",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Lahore",
          labAddress: "chungi amar sadu,lahore",
          deptRate: "Low Rated",
          rating: "3.5",
          priceRange: "2000",
        },
        {
          labId: "8",
          testName: "Lungs",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Mardan",
          labAddress: "mardan city",
          deptRate: "Low Rated",
          rating: "3.0",
          priceRange: "2000",
        },
      ],
      searchInput: "",
      filteredDoc: [
        {
          labId: "1",
          testName: "Kidney",
          category: "Diabetes",
          hospital: "Shifa hospital",
          loc: "Karachi",
          labAddress: "naya nazimabad,karachi",
          deptRate: "Top Rated",
          rating: "5.0",
          priceRange: "500",
        },
        {
          labId: "2",
          hospital: "Shifa hospital",
          testName: "Daibetes",
          category: "Heart Health",
          loc: "Karachi",
          labAddress: "faisal base, karachi",
          deptRate: "Low Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "3",
          testName: "Heart",
          hospital: "Fouji Foundation hospital",
          category: "Liver",
          loc: "Islamabad",
          labAddress: "sector H-9,Islamabad",
          deptRate: "Top Rated",
          rating: "3.0",
          priceRange: "500",
        },
        {
          labId: "4",
          testName: "Lungs",
          category: "Kidney",
          hospital: "FMC hospital",
          loc: "Rawalpinidi",
          labAddress: "Rajabazaar, Rawalpindi",
          deptRate: "Two Level Rated",
          rating: "5.0",
          priceRange: "1000",
        },
        {
          labId: "5",
          testName: "Kidney",
          hospital: "CMH",
          category: "Kidney",
          loc: "Hyderabad",
          labAddress: "new city,hyderabad",
          deptRate: "Top Rated",
          rating: "4.5",
          priceRange: "2500",
        },
        {
          labId: "6",
          testName: "Liver",
          hospital: "CMH",
          category: "Blood",
          loc: "Larkana",
          labAddress: "new city,Larkana",
          deptRate: "Top Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "7",
          testName: "Temperature",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Lahore",
          labAddress: "chungi amar sadu,lahore",
          deptRate: "Low Rated",
          rating: "3.5",
          priceRange: "2000",
        },
        {
          labId: "8",
          testName: "Lungs",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Mardan",
          labAddress: "mardan city",
          deptRate: "Low Rated",
          rating: "3.0",
          priceRange: "2000",
        },
      ],
      onlineConsultants: [],
      top: [],
      selectedsearch: "",
      gender: ["male", "female"],
      ratingArr: ["5.0", "4.5", "4.0", "3.5", "3.0"],
      categoryArr: [
        "All",
        "Diabetes",
        "Heart Health",
        "Liver",
        "Kidney",
        "Blood",
        "Thyroiad",
      ],
      selectedCateogry: "Diabetes",
      CityArr: [
        "Karachi",
        "Islamabad",
        "Rawalpinidi",
        "Hyderabad",
        "Larkana",
        "Lahore",
        "Mardan",
      ],
      selectedCity: "Karachi",
      selectedBtn: "All",
      btnSearchArr: [
        {
          labId: "1",
          testName: "Kidney",
          category: "Diabetes",
          hospital: "Shifa hospital",
          loc: "Karachi",
          labAddress: "naya nazimabad,karachi",
          deptRate: "Top Rated",
          rating: "5.0",
          priceRange: "500",
        },
        {
          labId: "2",
          hospital: "Shifa hospital",
          testName: "Daibetes",
          category: "Heart Health",
          loc: "Karachi",
          labAddress: "faisal base, karachi",
          deptRate: "Low Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "3",
          testName: "Heart",
          hospital: "Fouji Foundation hospital",
          category: "Liver",
          loc: "Islamabad",
          labAddress: "sector H-9,Islamabad",
          deptRate: "Top Rated",
          rating: "3.0",
          priceRange: "500",
        },
        {
          labId: "4",
          testName: "Lungs",
          category: "Kidney",
          hospital: "FMC hospital",
          loc: "Rawalpinidi",
          labAddress: "Rajabazaar, Rawalpindi",
          deptRate: "Two Level Rated",
          rating: "5.0",
          priceRange: "1000",
        },
        {
          labId: "5",
          testName: "Kidney",
          hospital: "CMH",
          category: "Kidney",
          loc: "Hyderabad",
          labAddress: "new city,hyderabad",
          deptRate: "Top Rated",
          rating: "4.5",
          priceRange: "2500",
        },
        {
          labId: "6",
          testName: "Liver",
          hospital: "CMH",
          category: "Blood",
          loc: "Larkana",
          labAddress: "new city,Larkana",
          deptRate: "Top Rated",
          rating: "4.0",
          priceRange: "1500",
        },
        {
          labId: "7",
          testName: "Temperature",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Lahore",
          labAddress: "chungi amar sadu,lahore",
          deptRate: "Low Rated",
          rating: "3.5",
          priceRange: "2000",
        },
        {
          labId: "8",
          testName: "Lungs",
          hospital: "FMC hospital",
          category: "Thyroiad",
          loc: "Mardan",
          labAddress: "mardan city",
          deptRate: "Low Rated",
          rating: "3.0",
          priceRange: "2000",
        },
      ],
      searchArr: [],
      click: false,
      appointModal:false

    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0
    });
    let toprated =
      this.state.labData &&
      this.state.labData.filter(
        (item) => item.deptRate && item.deptRate.includes("Top Rated")
      );
    this.setState({
      top: toprated,
    });
  }
  onChange = async (e, item) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({ [id]: val });

    if (this.state.searchInput.length >= 0) {
      this.setState({
        filteredDoc: [],
      });
    }
    let filteredBtn =
      this.state.labData &&
      this.state.labData.filter(
        (item) =>
          item.category &&
          item.category
            .toLowerCase()
            .includes(this.state.selectedBtn.toLowerCase())
      );
    if (this.state.selectedBtn === "All") {
      this.setState({
        btnSearchArr: this.state.labData,
      });
    } else {
      this.setState({ btnSearchArr: filteredBtn });
    }
  };
  onClick = async () => {
    let filteredItems =
      this.state.labData &&
      this.state.labData.filter(
        (item) =>
          item.testName &&
          item.testName
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase()) &&
          item.loc &&
          item.loc
            .toLowerCase()
            .includes(this.state.selectedsearch.toLowerCase()) &&
          item.category &&
          item.category
            .toLowerCase()
            .includes(this.state.selectedCateogry.toLowerCase())
      );
    this.setState({ filteredDoc: filteredItems, click: true });
    console.log(this.state.searchInput);
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
        <div className="py-5 service-2 mt-2 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div>
                  <h2 className="text-primary mb-4">Laboratory Tests</h2>
                  <div className="divider mx-auto my-4"></div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginLeft: "30px" }}>
              <div className="col-6 text-center  mb-5 px-0 ">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  value={this.state.searchInput}
                  placeholder="Search For Lab Test"
                  onChange={this.onChange.bind(this)}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="col-2  px-0">
                <select
                  id="selectedCateogry"
                  className="form-select bg-success text-white"
                  style={{ height: "50px" }}
                  onChange={this.onChange.bind(this)}
                >
                  {this.state.categoryArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col-2  px-0">
                <select
                  id="selectedsearch"
                  className="form-select bg-success text-white"
                  style={{ height: "50px" }}
                  onChange={this.onChange.bind(this)}
                >
                  {this.state.CityArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col-1 px-0">
                <button
                  className="btn btn-success text-center"
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
                      <div
                        className=" shadow rounded text-center"
                        style={{ width: "15rem" }}
                      >
                        <div
                          className="  mt-3 col-5 p-3 text-success rounded-circle border"
                          style={{ marginLeft: "70px" }}
                        >
                          <i class="fas fa-solid fa-hospital fa-4x"></i>
                        </div>
                        <div className="card-body ">
                          <h5 className="card-title mb-0">{item.testName}</h5>
                          <p className="card-text mb-0">{item.hospital}</p>
                          <h6 className="card-text mb-0">{item.category}</h6>
                          <p className="card-text mb-0">{item.labAddress}</p>
                          <h6 className="card-text mb-0 text-success">
                            Rs:{item.priceRange}
                          </h6>
                        </div>
                        <button className="btn btn-sm w-100 btn-secondary  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                      </div>
                    </div>
                  ))}
                <hr className="mb-5"></hr>
              </div>
            )}
            <div className="row mb-5 mt-5">
              <h3 className="mb-3">Top Booked</h3>
              {this.state.top &&
                this.state.top.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div
                      className=" shadow rounded text-center"
                      style={{ width: "15rem" }}
                    >
                      <div
                        className="  mt-3 col-5 p-3 text-success rounded-circle border"
                        style={{ marginLeft: "70px" }}
                      >
                        <i class="fas fa-solid fa-hospital fa-4x"></i>
                      </div>
                      <div className="card-body ">
                        <h5 className="card-title mb-0">{item.testName}</h5>
                        <h6 className="card-text mb-0">{item.loc}</h6>
                        <p className="card-text mb-0">{item.hospital}</p>
                      </div>
                      <button className="btn btn-sm w-100 btn-secondary  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                    </div>
                  </div>
                ))}
            </div>
            <hr className="mb-5"></hr>
            <div className="row  mb-4">
              <div className="col-3">
                <h3 className="mb-3">Test By Category</h3>
              </div>
              <div className="col-9">
                {this.state.categoryArr.map((item) => (
                  <div class="form-check-inline mx-1">
                    <button
                      style={{ width: "100px" }}
                      class="btn btn-sm btn-success "
                      value={item}
                      id="selectedBtn"
                      onClick={this.onChange.bind(this)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="row mb-5">
              {this.state.btnSearchArr &&
                this.state.btnSearchArr.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div
                      className=" shadow rounded text-center"
                      style={{ width: "15rem" }}
                    >
                      <div
                        className="  mt-3 col-5 p-3 text-success rounded-circle border"
                        style={{ marginLeft: "70px" }}
                      >
                        <i class="fas fa-solid fa-hospital fa-4x "></i>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-0">{item.category}</h5>
                        <h6 className="card-text mb-0">{item.category}</h6>
                        <p className="card-text mb-0">{item.hospital}</p>
                      </div>
                      <button className="btn btn-sm w-100 btn-success  " onClick={this.onAppointClick.bind(this)}>Book Appointment</button>

                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <LabModal
            isopen={this.state.appointModal}
            hideModal={this.close.bind(this)}
          
          />
      </div>
    );
  }
}
