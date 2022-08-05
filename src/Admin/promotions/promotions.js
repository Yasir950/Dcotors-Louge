import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
export default class PromotionComp extends Component {
  constructor() {
    super();
    this.state = {
      promotionArr: [],
      promoId: "",
      promoName: "",
      promoDetails: "",
      status: ["Active", "InActive"],
      selectedStatus: "Active",
      promoStartDate: "",
      promoEndDate: "",
      addClick: false,
      added: false,
      editClick: false,
      timeout: 0,
      position: "",
      visible: true,
      click:false,
  
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value,
    });
  
  };

  onClick = async (index) => {
   
  let arr=this.state.promotionArr
    
    if (this.state.added === true  ) {
      arr.push({
        promoId: this.state.promoId,
        promoName: this.state.promoName,
        promoStartDate: this.state.promoStartDate,
        promoEndDate: this.state.promoEndDate,
        promoDetails: this.state.promoDetails,
        selectedStatus: this.state.selectedStatus,
      });
      console.log(this.state.promotionArr);
    } else {
      this.setState({
        editClick: false,
      });
      for (let obj of arr) {
        if (obj.promoId === index) {
          obj.promoId = this.state.promoId;
          obj.promoName = this.state.promoName;
          obj.promoStartDate = this.state.promoStartDate;
          obj.promoEndDate = this.state.promoEndDate;
          obj.promoDetails = this.state.promoDetails;
          obj.selectedStatus = this.state.selectedStatus;
        }
      }
    }

    this.setState({
      promotionArr: arr,
      addClick: false,
    });
  };
  onAddClick = async () => {
    this.setState({
      addClick: true,

      promoId: "",
      promoName: "",
      promoStartDate: "",
      promoEndDate: "",

      promoDetails: "",
      selectedStatus: "",
      added: true,
    });
  };
  editClick = async (item, index) => {
    await this.setState({
      addClick: true,
      added: false,
      editClick: true,
      promoId: item.promoId,
      promoName: item.promoName,
      promoDetails: item.promoDetails,
      selectedStatus: item.selectedStatus,
      promoEndDate: item.promoEndDate,
      promoStartDate: item.promoStartDate,
    });
  };
  deleteClick(item, index) {
    let array = this.state.promotionArr;

    array.splice(index, 1);
    this.setState({
      promotionArr: array,
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row text-center">
          <h2 className="text-success mb-4">Promotions</h2>
        </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Promotion</h3>
            <div className="row mt-5 px-5">
              <div className="col-6">
                <label>Promotion ID</label>
                {this.state.editClick === false ? (
                  <input
                    id="promoId"
                    type="number"
                    className="form-control"
                    value={this.state.promoId}
                    onChange={this.onChange.bind(this)}
                  />
                ) : (
                  <input
                    disabled
                    id="promoId"
                    type="number"
                    className="form-control"
                    value={this.state.promoId}
                    onChange={this.onChange.bind(this)}
                  />
                )}
              </div>

              <div className="col-6">
                <label>Promotion Name</label>
                <input
                  id="promoName"
                  className="form-control"
                  value={this.state.promoName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>Promo Start Date</label>
                <input
                  type="date"
                  id="promoStartDate"
                  className="form-control"
                  value={this.state.promoStartDate}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div className="col-6">
                <label>Promo End Date</label>
                <input
                  type="date"
                  id="promoEndDate"
                  className="form-control"
                  value={this.state.promoEndDate}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-6">
                <label>Status</label>
                <select
                  className="form-select"
                  onChange={this.onChange.bind(this)}
                  id="selectedStatus"
                  value={this.state.selectedStatus}
                >
                  {this.state.status.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-6">
                <label>promoDetails</label>
                <textarea
                  id="promoDetails"
                  className="form-control"
                  value={this.state.promoDetails}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>

            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.promoId)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-3">
            <button
              className="btn btn-sm btn-success mb-3"
              onClick={this.onAddClick.bind(this)}
            >
              Add New Promotion
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>Promo Id</th>
              <th>Promo Name</th>
              <th>Promo Start Date</th>
              <th>Promo End Date</th>
              <th>Promo Details</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.promotionArr.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.promoName}</td>
                <td>{item.promoStartDate}</td>
                <td>{item.promoEndDate}</td>
                <td>{item.promoDetails}</td>
                <td>{item.selectedStatus}</td>
                <td>
                  <Link to="" className="mx-2">
                    <i
                      className=" text-decoration-none text-white fas fa-solid fa-edit "
                      onClick={this.editClick.bind(this, item, index)}
                    ></i>
                  </Link>
                  <Link to="">
                    <i
                      class="fas fa-solid fa-trash  text-decoration-none text-white"
                      onClick={this.deleteClick.bind(this, item, index)}
                    ></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
