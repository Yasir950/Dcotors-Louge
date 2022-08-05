import React, { Component } from "react";
import Pic from "../../images/02.jpg";
import { Table } from "reactstrap";
export default class MedInfo extends Component {
  constructor() {
    super();
    this.state = {
      test: "",
      inpText: [],
      file: "",
      imgArr: [],
      update: false,
      condText: "",
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    let val = e.target.value;
    await this.setState({
      [id]: val,
    });
    console.log(this.state.test);
  };
  Save() {
    let arr = this.state.inpText;
    arr.push(this.state.test);
    this.setState({
      condText: this.state.test,
      inpText: arr,
      update: false,
      test: "",
    });
  }
  onClick() {
    this.setState({
      update: true,
    });
  }
  render() {
    return (
      <div>
        <div className=" mt-5 ">
          {this.state.update === true && (
            <div className="form-control ">
              <div className="form-group-2 mb-4">
                <h2 className="text-center m-2">Add New Record</h2>
                <textarea
                 maxLength={100}
                    id="test"
                    // name={this.state.message}
                    value={this.state.test}
                    onChange={(e) => {
                      this.onChange(e);
                    }}
                    class="form-control"
                    rows="6"
                    placeholder="Your problem"
                  ></textarea>
                 
                </div>
              <div className="mb-3">
                <label for="formFile" class="form-label">
                  upload Test Image
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn m-5"
                  onClick={this.Save.bind(this)}
                  style={{ width: "200px" }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          <div className="text-center">
            <h1>History of patients</h1>
          </div>

          <button
            className="btn btn-success btn-md btn-center btn mt-3 mb-3"
            onClick={this.onClick.bind(this)}
          >
            Update Medical Info
          </button>
        </div>
        <div className="mb-5">
          <h4>Test Records</h4>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Disease</th>
              </tr>
            </thead>
            {this.state.condText === "" ? (
              <tbody>
                    <tr>
          <th scope="row">1</th>
          <td>I was ill yesterday</td>   
        </tr>
         <tr>
         <th scope="row">2</th>
         <td>I have a pain two days before yesterday</td>
       </tr>
              </tbody>
      
            ) : (
              <tbody>
                 
                {this.state.inpText.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>

          <h4 className="mb-2">Test Images</h4>
          <div className="row">
            <img
              src={Pic}
              alt="pic"
              style={{ height: "170px", width: "200px" }}
            ></img>
            <img
              src={Pic}
              alt="pic"
              style={{ height: "170px", width: "200px" }}
            ></img>
            <img
              src={Pic}
              alt="pic"
              style={{ height: "170px", width: "200px" }}
            ></img>
            <img
              src={Pic}
              alt="pic"
              style={{ height: "170px", width: "200px" }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
