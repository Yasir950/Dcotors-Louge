import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
export default class AddMedicine extends Component {
  constructor() {
    super();
    this.state = {
      medArr: [],
      medId: "",
      medName: "",
      medPrice: "",
      medDescription: "",
      formulaName: "",
      medFaqs: [" Is it possible to have a free trial?"," How do I subscribe to doctors Louge?"," How will I renew my subscription when it expires?"],
      status: ["Active", "InActive"],
      selectedFaq:'Is it possible to have a free trial?',
      selectedStatus: "Active",
      image:'',
      addClick: false,
      added: false,
      editClick:false
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value
    });
     console.log(this.state.selectedFaq)
     console.log(this.state.selectedStatus)
  };

  onClick = async (index) => {
    let arr = this.state.medArr;

    if (this.state.added === true) {
      arr.push({
        medId: this.state.medId,
        medName: this.state.medName,
        medPrice: this.state.medPrice,
        selectedStatus: this.state.selectedStatus,
        formulaName: this.state.formulaName,
        selectedFaq: this.state.selectedFaq,
        medDescription: this.state.medDescription,
        image:this.state.image
      });
      console.log(this.state.medArr);
    } else {
      this.setState({
        editClick:false
      })
      for (let obj of arr) {
        if (obj.medId === index) {
          obj.medId = this.state.medId;
          obj.medName = this.state.medName;
          obj.medPrice = this.state.medPrice;
          obj.selectedStatus = this.state.selectedStatus;
          obj.formulaName = this.state.formulaName;
          obj.selectedFaq = this.state.selectedFaq;
          obj.medDescription = this.state.medDescription;
           obj.image=this.state.image

        }
      }
      console.log(arr);
    }

    this.setState({
      addClick: false,
      medArr: arr,
      medId: "",
      medName: "",
      medPrice: "",
      selectedStatus: "",
      selectedFaq:'',
      image:''
    });
  };
  onAddClick = async () => {
    await this.setState({
      addClick: true,
      added: true,
    });
  };
  editClick = async (item, index) => {
    await this.setState({
      addClick: true,
      editClick:true,
      added: false,
      medId: item.medId,
      medName: item.medName,
      medPrice: item.medPrice,
      selectedStatus: item.selectedStatus,
      formulaName: item.formulaName,
      selectedFaq: item.selectedFaq,
      medDescription: item.medDescription,
    
    });
  };
  deleteClick(item, index) {
    let array = this.state.medArr;

    array.splice(index, 1);
    this.setState({
      medArr: array,
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row text-center">
          <h2 className="text-success mb-4">Medicine</h2>
        </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Medicine</h3>
            <div className="row mt-5 px-5">
              
              <div className="col-6">
                <label>Medicine ID</label>
                {this.state.editClick===false?(
                   <input
                   id="medId"
                   type="number"
                   className="form-control"
                   value={this.state.medId}
                   onChange={this.onChange.bind(this)}
                 />
                ):(
                  <input
                  disabled
                  id="medId"
                  type="number"
                  className="form-control"
                  value={this.state.medId}
                  onChange={this.onChange.bind(this)}
                />
                )}
               
              </div>

              <div className="col-6">
                <label>Medicine Name</label>
                <input
                  id="medName"
                  className="form-control"
                  value={this.state.medName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5 ">
              
              <div className="col-6">
                <label>Medicine Price</label>
                <input
                  id="medPrice"
                  type="number"
                  className="form-control"
                  value={this.state.medPrice}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Status</label>
                <select
                  className="form-select"
                  id="selectedStatus"
                  value={this.state.selectedStatus}
                  onChange={this.onChange.bind(this)}
                >
               
                  {this.state.status && this.state.status.map((item) => (
                    <option
                      value={item}
                     key={item}
                    >
                      {item}
                    </option>
                  ))}
                  /
                </select>
              </div>
            </div>
            <div className="row px-5  ">
             
              <div className="col-6">
                <label>Medicine Faqs</label>
                <select
                  className="form-select"
                 id="selectedFaq"
                 value={this.state.selectedFaq}
                  onChange={this.onChange.bind(this)}
                >
               
                  {this.state.medFaqs && this.state.medFaqs.map((item) => (
                    <option
                    key={item}
                      value={item}
                     
                    >
                      {item}
                    </option>
                  ))}
                  /
                </select>
              </div>

              <div className="col-6">
                <label>Formula Name</label>
                <input
                  type="text"
                  id="formulaName"
                  className="form-control"
                  value={this.state.formulaName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row  px-5 ">
             
              <div className="col-6">
                <label>Image</label>
                <input
                  id="image"
                  type='file'
                  className="form-control"
                  value={this.state.image}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div className="col-6">
                <label>Medicine Description</label>
                <textarea
                  id="medDescription"
                  className="form-control"
                  value={this.state.medDescription}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.medId)}
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
              Add New Medicine
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>Medicine Id</th>
              <th>Medicine Name</th>
              <th>Formula Name</th>
              <th>Medicine Rate</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.medArr.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.medName}</td>
                <td>{item.formulaName}</td>
                <td>{item.medPrice}</td>
                <td>{item.selectedStatus}</td>          
                <td>
                  <Link to='' className="mx-2">
                  <i
                    className=" text-decoration-none text-white fas fa-solid fa-edit "
                    onClick={this.editClick.bind(this, item, index)}
                  ></i></Link>
                  <Link to=''>
                  <i
                    class="fas fa-solid fa-trash  text-decoration-none text-white"
                    onClick={this.deleteClick.bind(this, item, index)}
                  ></i></Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
