import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
export default class LabModal extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      laboratories: [
        "Shifa hospital",
        "Ams lab",
        "Minhas lab",
        "Obaid lab",
        "bilal lab",
        "sheikh lab",
      ],
      medName: "",
      date: "",
      num: "",
      selectedMed: [],
      dateTime: "",
      message: "",
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
  onDateChange = async (date) => {
    this.setState({ startDate: date });
    let selectedDate = date.toLocaleDateString();
    await this.setState({ dateTime: selectedDate });
    console.log(this.state.dateTime);
  };
  onSave() {
    this.props.hideModal();
    let arr = this.state.appointedData;
    let obj = {};
    obj["name"] = this.state.medName;
    obj["selectedMed"] = this.state.selectedMed;
    obj["dateTime"] = this.state.dateTime;
    obj["num"] = this.state.num;
    obj["message"] = this.state.message;
    arr.push(obj);
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isopen} 
        toggle={this.hideModal.bind(this)}
        >
          <Link
            to="#"
            onClick={this.hideModal.bind(this)}
            className="mx-2  text-decoration-none text-dark "
          >
            X
          </Link>

          <ModalBody>
            <h3 className="m-3 text-success text-center">Get Laboratory Tests</h3>
            <div className="row mb-4">
              <div className="h-75 border-primary bg-white">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <input
                        value={this.state.medName}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="medName"
                        type="text"
                        className="form-control"
                        placeholder="Test name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="form-group">
                      <select
                        className="form-select"
                        id="doc"
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                      >
                        <option>Select Laboratory</option>
                        {this.state.laboratories &&
                          this.state.laboratories.map((item) => (
                            <option name={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <DatePicker
                        minDate={new Date()}
                        selected={this.state.startDate}
                        onChange={this.onDateChange.bind(this)}
                        className="red-border form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="form-group">
                      <input
                        value={this.state.num}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="num"
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea
                      id="message"
                      value={this.state.message}
                      onChange={(e) => {
                        this.onChange(e);
                      }}
                      className="form-control"
                      rows="6"
                      placeholder="Extra Requirements"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success "
                onClick={this.onSave.bind(this)}
              >
                Done
              </button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
