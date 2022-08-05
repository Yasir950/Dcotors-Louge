import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
export default class AppointmentModal extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
      dept: "",
      doc: "",
      date: "",
      time: "",
      name: "",
      num: "",
      message: "",
      selecteddDate: [],
      deptData: [
        { deptId: "1", deptName: "opthomology" },
        { deptId: "2", deptName: "opthomology" },
        { deptId: "3", deptName: "opthomology" },
        { deptId: "4", deptName: "opthomology" },
        { deptId: "5", deptName: "opthomology" },
        { deptId: "6", deptName: "opthomology" },
      ],
      docData: [
        { deptId: "1", deptName: "opthomology" },
        { deptId: "2", docName: "Yasir" },
        { deptId: "3", docName: "Obaid" },
        { deptId: "4", docName: "Ali" },
        { deptId: "5", docName: "Bilal" },
        { deptId: "6", docName: "Jabbar" },
      ],
      button: [
        "All Department",
        "Cardiology",
        "Dental",
        "Neurology",
        "Medicine",
        "Pediatric",
        "Traumatology",
      ],
      timeSlots: ["09:00", "10:00", "11:00", "12:00", "01:00", "03:00"],
      appointedData: [],
      dateTime: "",
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
  onTimeChange = (e) => {
    let id = e.target.id;
    let val = e.target.value;
    this.setState({
      [id]: val,
    });
    // for (let obj of this.state.timeSlots) {
    //   if (obj === this.state.time) {
    //     this.state.selectedTime.push(obj);
    //     let times = this.state.timeSlots.filter((item) => item !== obj);
    //     this.setState({
    //       timeSlots: times,
    //     });
    //   }
    // }
    // console.log(this.state.timeSlots)
  };
  onDateChange(date) {
    this.setState({ startDate: date });
    let selectedDate = date.toLocaleDateString();
    //  selectedDate = this.state.startDate.toLocaleDateString();
    this.setState({ dateTime: selectedDate });
  }
  onSave() {
    let arr = this.state.appointedData;
    let obj = {};
    obj["dept"] = this.state.dept;
    obj["doc"] = this.state.doc;
    obj["time"] = this.state.time;
    obj["dateTime"] = this.state.dateTime;
    obj["name"] = this.state.name;
    obj["dept"] = this.state.dept;
    obj["message"] = this.state.message;
    obj["num"] = this.state.num;
    arr.push(obj);
    //   this.state.dateTime.push(
    //     this.state.startDate.toLocaleDateString(),

    //   );
    this.props.hideModal();
    console.log(arr);
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
            <div className="row">
              <h3 className="m-3 text-success text-center">
                Book An Appointment
              </h3>
            </div>
            <div className="row">
              <div className="h-75 border-primary bg-white">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <div className="form-group ">
                      <select
                        className="form-select "
                        id="dept"
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                      >
                        <option>Select Departments</option>
                        {this.state.deptData.map((item) => (
                          <option name={item.deptName} value={item.deptName}>
                            {item.deptName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <select
                        className="form-select"
                        id="doc"
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                      >
                        <option>Select Doctors</option>
                        {this.state.docData.map((item) => (
                          <option name={item.docName} value={item.docName}>
                            {item.docName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-6 mb-2">
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
                      <select
                        className="form-select"
                        id="time"
                        onChange={(e) => {
                          this.onTimeChange(e);
                        }}
                      >
                        <option>Select TimeSlot</option>
                        {this.state.timeSlots.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-2">
                    <div class="form-group">
                      <input
                        // name={this.state.name}
                        value={this.state.name}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 mb-2">
                    <div class="form-group">
                      <input
                        // name={this.state.num}
                        value={this.state.num}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="num"
                        type="Number"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group-2 mb-4">
                  <textarea
                    id="message"
                    // name={this.state.message}
                    value={this.state.message}
                    onChange={(e) => {
                      this.onChange(e);
                    }}
                    class="form-control"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success "
                onClick={this.onSave.bind(this)}
              >
                Book Appointment
              </button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
