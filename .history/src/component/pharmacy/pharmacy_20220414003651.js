import React, { Component } from "react";
import { Link } from "react-router-dom";
import medImg from "../../images/medimg.jpg";
import MedicineModal from "../modals/medicineModal";
export default class Pharmacy extends Component {
  constructor() {
    super();
    this.state = {
      medArr: [
        {
          medName: "Panadol",
          medRate: "25-45",
          loc: "karachi",
        },
        {
          medName: "Acetaminophen",
          medRate: "55-75",
          loc: "Lahore",
        },
        {
          medName: "Adderall",
          medRate: "50-95",
          loc: "Islamabad",
        },
        {
          medName: "Amlodipine",
          medRate: "45-55",
          loc: "karachi",
        },
        {
          medName: "Atorvastatin",
          medRate: "15-25",
          loc: "Lahore",
        },
        {
          medName: "Azithromycin",
          medRate: "150-250",
          loc: "Rawalpindi",
        },
        {
          medName: "Ativan",
          medRate: "5-15",
          loc: "Lahore",
        },
        {
          medName: "Amlodipine",
          medRate: "35-45",
          loc: "Rawalpindi",
        },
      ],
      searchInput: "",
      selectedsearch: "Karachi",
      filteredMed: [],
      clickSearch: false,
    appointModal: false,

    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({ [id]: val });
    // let filteredItems =
    //   this.state.medArr &&
    //   this.state.medArr.filter(
    //     (item) =>
    //     (  item.medName &&
    //       item.medName
    //         .toLowerCase()
    //         .includes(this.state.searchInput.toLowerCase())&&  (item.medName &&
    //         item.loc
    //           .toLowerCase()
    //           .includes(this.state.selectedsearch.toLowerCase())))
    //   );
    //   this.setState({
    //     filteredMed:filteredItems
    //   })
    console.log(this.state.selectedsearch);
    console.log(this.state.searchInput);
  };
  onClick() {
    let filteredItems =
      this.state.medArr &&
      this.state.medArr.filter(
        (item) =>
          item.medName &&
          item.medName
            .toLowerCase()
            .includes(this.state.searchInput.toLowerCase()) &&
          item.medName &&
          item.loc
            .toLowerCase()
            .includes(this.state.selectedsearch.toLowerCase())
      );
    this.setState({
      filteredMed: filteredItems,
      clickSearch: true,
    });
    console.log(filteredItems);
  }

  render() {
    return (
      <div>
        <div className="backgroundImg">
          <div
            className="row  "
            style={{ marginLeft: "200px", paddingTop: "220px" }}
          >
            <div class="col-8   mb-5 px-0">
              <input
                type="text"
                className="form-control"
                id="searchInput"
                value={this.state.searchInput}
                placeholder="Search For Medicines"
                onChange={this.onChange.bind(this)}
                style={{ height: "50px" }}
              />
            </div>
            <div className="col-2   px-0">
              <select
                id="selectedsearch"
                className="form-select bg-success text-white"
                style={{ height: "50px" }}
                onChange={this.onChange.bind(this)}
              >
                {this.state.medArr.map((item) => (
                  <option>{item.loc}</option>
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

        <div className="row">
          {this.state.clickSearch === false ? (
            <div></div>
          ) : (
            <div>
              <div className="row text-center mt-5 mb-4">
                <h1> Search Resullts</h1>
              </div>
              <div className="row " style={{ marginLeft: "20px" }}>
                {this.state.filteredMed.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div className="card shadow" style={{ width: "17rem" }}>
                      <Link to='/medicine'>
                      <img src={medImg} className="card-img-top" alt="..." />

                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.medName}</h5>
                        <h6 className="card-text">Rs: {item.medRate}</h6>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="row text-center mt-5 mb-4">
          <h1> Medicines</h1>
        </div>
        <div className="row" style={{ marginLeft: "20px" }}>
          {this.state.medArr &&
            this.state.medArr.map((item) => (
              <div className="col-3 mb-5 ">
                <div className="card shadow" style={{ width: "17rem" }}>
                <Link to='/medicine'>
                  <img src={medImg} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{item.medName}</h5>
                    <h6 className="card-text">Rs: {item.medRate}</h6>
                  </div>
                  <Link to='/addcart'>
                  
                  <button className="btn btn-sm w-100 btn-success" >Buy Medicine</button>
                  </Link>
                 

                </div>
              </div>
            ))}
        </div>
       
      </div>
    );
  }
}
