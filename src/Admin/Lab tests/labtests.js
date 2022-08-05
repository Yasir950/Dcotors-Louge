import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
export default class AddLabTest extends Component {
  constructor() {
    super();
    this.state = {
      testLabArr: [],
      testId: "",
      testName: "",
      labName: "",
      labAddress: "",
      testFee: "",
      selectedStatus: "",
      gender: "",
      resultTime: "",
      description: "",
      howItWorks: "",
      faqs: "",
      status: ["Active", "InActive"],
      
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
      [id]: value,
    });
    console.log(this.state.selectedStatus);
    //console.log(this.state.testName);
    //console.log(this.state.deptDesc);
  };

  onClick = async (index) => {
    let arr = this.state.testLabArr;

    if (this.state.added === true) {
      arr.push({
        testId: this.state.testId,
        testName: this.state.testName,
        testFee: this.state.testFee,
        labName: this.state.labName,
        resultTime: this.state.resultTime,
        labAddress: this.state.labAddress,
        selectedStatus:this.state.selectedStatus,
        image:this.state.image,
      });
      console.log(this.state.testLabArr);
    } else {
      this.setState({
        editClick:false
      })
      for (let obj of arr) {
        if (obj.testId === index) {
          obj.testId = this.state.testId;
          obj.testName = this.state.testName;
          obj.testFee = this.state.testFee;
          obj.labName = this.state.labName;
          obj.resultTime = this.state.resultTime;
          obj.labAddress = this.state.labAddress;
          obj.selectedStatus = this.state.selectedStatus;
          obj.image = this.state.image;
        }
      }
    }

    this.setState({
      addClick: false,
      testLabArr: arr,
      testId: "",
      testName: "",
      testFee: "",
      labName: "",
      resultTime: "",
      selectedStatus:'',
      labAddress: "",
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
      editClick:true,
      addClick: true,
      added: false,
      testId: item.testId,
      testName: item.testName,
      testFee: item.testFee,
      labName: item.labName,
      resultTime: item.resultTime,
      labAddress: item.labAddress,
      selectedStatus:item.selectedStatus
    });
  };
  deleteClick(item, index) {
    let array = this.state.testLabArr;

    array.splice(index, 1);
    this.setState({
      testLabArr: array,
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row text-center">
          <h2 className="text-success mb-4">Lab Test</h2>
        </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Test</h3>
            <div className="row mt-5 px-5">
              
              <div className="col-6">
                <label>Test ID</label>
                {this.state.editClick===false? (
                     <input
                     id="testId"
                     type="number"
                     className="form-control"
                     value={this.state.testId}
                     onChange={this.onChange.bind(this)}
                   />
                ):(
                  <input
                  disabled
                  id="testId"
                  type="number"
                  className="form-control"
                  value={this.state.testId}
                  onChange={this.onChange.bind(this)}
                />
                )}
             
              </div>

              <div className="col-6">
                <label>Test Name</label>
                <input
                  id="testName"
                  className="form-control"
                  value={this.state.testName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              
              <div className="col-6">
                <label>Test Fees</label>
                <input
                  id="testFee"
                  type="number"
                  className="form-control"
                  value={this.state.testFee}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>Lab Name</label>
                <input
                  type="text"
                  id="labName"
                  className="form-control"
                  value={this.state.labName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              
              <div className="col-6">
                <label>Result Time</label>
                <input
                  id="resultTime"
                  type="number"
                  className="form-control"
                  value={this.state.resultTime}
                  onChange={this.onChange.bind(this)}
                />
              </div>

              <div className="col-6">
                <label>How it works</label>
                <input
                  type="text"
                  id="howItWorks"
                  className="form-control"
                  value={this.state.howItWorks}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
              
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
              <div className="col-6">
                <label>Image</label>
                <input
                  id="image"
                  type="file"
                  className="form-control"
                  value={this.state.image}
                  onChange={this.onChange.bind(this)}
                />
              </div>
             
            </div>
            <div className="row px-5">
              
            <div className="col-12">
                <label>Lab Address</label>
                <textarea
                  type="text"
                  id="labAddress"
                  className="form-control"
                  value={this.state.labAddress}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            
            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.testId)}
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
              Add New Test
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>Test Id</th>
              <th>Test Name</th>
              <th>Lab Name</th>
              <th>Test Price</th>
              <th>Response Time</th>
              <th>Lab Address</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.testLabArr.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.testName}</td>
                <td>{item.labName}</td>
                <td>{item.testFee}</td>
                <td>{item.resultTime}</td>
                <td>{item.labAddress}</td>
                <td>{item.selectedStatus}</td>
                <td>
                  <Link to='' className="mx-2">
                  <i
                    className=" text-decoration-none text-white fas fa-solid fa-edit "
                    onClick={this.editClick.bind(this, item, index)}
                  ></i>
                  </Link>
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

