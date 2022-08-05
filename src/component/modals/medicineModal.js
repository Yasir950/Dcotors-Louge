import React, { Component } from "react";
import { Modal,Label, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default class AppModal extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      pharmacies: [
        "Shifa hospital Pharmacy",
        "Fouji Foundation Pharmacy",
        "FMC Pharmacy",
        "AMS Pharmacy",
        "Yasir Pharmacy",
      ],
      selectedPharmacy: "",
      message: "",
      num: "",
      appointedData: [],
    };
  }
  hideModal() {
    this.props.hideModal();
  }
  onChange = (e) => {
    let id = e.target.id;
    let val = e.target.value;
    this.setState({
      [id]: val,
    });
  };

  onSave() {
    this.props.hideModal();
    let arr = this.state.appointedData;
    let obj = {};
    obj["name"] = this.state.name;
    obj["address"] = this.state.address;
    obj["selectedPharmacy"] = this.state.selectedPharmacy;
    arr.push(obj);
    //   this.state.dateTime.push(
    //     this.state.startDate.toLocaleDateString(),

    //   );
    // this.props.hideModal();
    //       console.log(arr)
  }
  render() {
    return (
      <div >
        <div>

          <Modal
            isOpen={this.props.isopen}
            toggle={this.hideModal.bind(this)}
            scrollable={false}
          >
            <Link  to='#' onClick={this.hideModal.bind(this)} className='mx-2  text-decoration-none text-dark '>X</Link>
           
  <ModalBody>
  <div className="row">
    <div className="h-75 border-primary bg-white">
      <div className="row">
        <div class="col-lg-12 mb-2">
          <div class="form-group">
            <Label>User Name</Label>

            <input
              // name={this.state.name}
              value={this.state.name}
              onChange={(e) => {
                this.onChange(e);
              }}
              id="name"
              type="text"
              class="form-control"
              placeholder="Enter username"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <Label>User Pharmacy</Label>
          <div className="form-group ">
            <select
              className="form-select "
              id="selectedPharmacy"
              onChange={(e) => {
                this.onChange(e);
              }}
            >
              <option>Select Pharmacy</option>
              {this.state.pharmacies.map((item) => (
                <option name={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div class="form-group">
            <Label>Address</Label>
            <input
              // name={this.state.name}
              value={this.state.address}
              onChange={(e) => {
                this.onChange(e);
              }}
              id="address"
              type="text"
              class="form-control"
              placeholder="Enter Your Address"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div class="form-group">
            <Label>Mobile</Label>
            <input
              // name={this.state.name}
              value={this.state.num}
              onChange={(e) => {
                this.onChange(e);
              }}
              id="num"
              type="number"
              class="form-control"
              placeholder="Number"
            />
          </div>
        </div>
      </div>
      <div className="form-group-2 mb-4">
        <Label>Extra Tips</Label>
        <textarea
          id="message"
          // name={this.state.message}
          value={this.state.message}
          onChange={(e) => {
            this.onChange(e);
          }}
          class="form-control"
          rows="3"
          placeholder="Extra Tips"
        ></textarea>
      </div>
    </div>
  </div>
  <div className="text-center">
    <Link to="/cartpage">
      <button
        className="btn btn-success btn-sm w-25"
        onClick={this.onSave.bind(this)}
      >
        Add to cart
      </button>
    </Link>
  </div>
</ModalBody>
          </Modal>
        </div>
      
      </div>
    );
  }
}
