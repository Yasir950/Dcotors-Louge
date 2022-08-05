import React, { Component } from "react";
// import { Modal, ModalBody } from "reactstrap";
import {Link} from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { OffcanvasTitle } from "react-bootstrap";
import { Label, OffcanvasBody, OffcanvasHeader } from "reactstrap";
export default class MedicineModal extends Component {
  constructor() {
    super();
    this.state = {
   name:'',
   address:'',
   pharmacies:['Shifa hospital Pharmacy','Fouji Foundation Pharmacy','FMC Pharmacy','AMS Pharmacy','Yasir Pharmacy'],
   selectedPharmacy:'',
   message:'',
   num:'',
   appointedData:[]
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
      let arr=this.state.appointedData
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
      <div>
       
   
         
        <Offcanvas show={this.props.isopen} onHide={this.hideModal.bind(this)}>
      
          <Link  to='#' onClick={this.hideModal.bind(this)} className='mx-2  text-decoration-none text-dark '>X</Link>
        <OffcanvasHeader>
       <OffcanvasTitle>Buy Medicine</OffcanvasTitle> 

        </OffcanvasHeader>
          <OffcanvasBody>

            <div className="row">
              <div className="h-75 border-primary bg-white">
                <div className="row">
                <div class="col-lg-12 mb-2">
                    <div class="form-group">
                      <Label>
                        FULL NAME
                      
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
                      </Label>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-2">
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
                  <div class="col-lg-12 mb-2">
                    <div class="form-group">
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
                  <div class="col-lg-12 mb-2">
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
                        placeholder="Number"
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
                    rows="3"
                    placeholder="Extra Tips"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
              to='/cartpage'
              >
            <button className="btn btn-secondary btn-sm w-25" onClick={this.onSave.bind(this)}>Add to cart</button>

              </Link>

            </div>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    );
  }
}
