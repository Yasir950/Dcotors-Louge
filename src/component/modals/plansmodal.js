import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
export default class PlansModal extends Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
   name:'',
   cvc:'',
   date:'',
   num:'',
   appointedData:[],
   dateTime:''
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
  onDateChange=async(date)=> {

    this.setState({ startDate: date });
    let selectedDate=date.toLocaleDateString();
    //  selectedDate = this.state.startDate.toLocaleDateString();
   await this.setState({ dateTime: selectedDate });
console.log(this.state.dateTime)
  }
    onSave() {
    this.props.hideModal();
            let arr=this.state.appointedData
      let obj = {};
      obj["name"] = this.state.name;
      obj["cvc"] = this.state.cvc;
      obj["dateTime"] = this.state.dateTime;
      obj["num"] = this.state.num;
      arr.push(obj);
    //   this.state.dateTime.push(
    //     this.state.startDate.toLocaleDateString(),
  
    //   );
    // this.props.hideModal();
          console.log(arr)
    }
  render() {
    return (
      <div> 

        <Modal isOpen={this.props.isopen}
        toggle={this.hideModal.bind(this)}
        >
        <Link  to='#' onClick={this.hideModal.bind(this)} className='mx-2  text-decoration-none text-dark '>X</Link>

          <ModalBody>

              <div className="row"><h3 className="m-3 text-success text-center">Get your Plan</h3></div>
            <div className="row mb-4">
              <div className="h-75 border-primary bg-white">
                <div className="row">
                <div class="col-lg-6 mb-4">
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
                        placeholder="Name on card"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 mb-4">
                    <div class="form-group">
                      <input
                        // name={this.state.name}
                        value={this.state.num}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="num"
                        type="number"
                        class="form-control"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 mb-2">
                    <div className="form-group">
                       <DatePicker
                       minDate={ new Date()}
                            selected={this.state.startDate}
                            onChange={this.onDateChange.bind(this)}
                            className="red-border form-control"
                          /> 
                    </div>
                  </div>
                  <div class="col-lg-6 mb-2">
                    <div class="form-group">
                      <input
                        // name={this.state.name}
                        value={this.state.cvc}
                        onChange={(e) => {
                          this.onChange(e);
                        }}
                        id="cvc"
                        type="number"
                        class="form-control"
                        placeholder="Cvc code"
                      />
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
            <div className="text-center">
            <button className="btn btn-success " onClick={this.onSave.bind(this)}>Done</button>

            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
