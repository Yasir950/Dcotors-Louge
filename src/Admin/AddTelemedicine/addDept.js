import React, { Component } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
export default class AddDept extends Component {
  constructor() {
    super();
    this.state = {
      addDept: [],
      deptId: "",
      deptName: "",
      deptDesc: "",
      deptImg:'',
      status: ["Active", "InActive"],
      selectedStatus:'',
      addClick: false,
      added: false,
      editClick: false,
    };
  }
  componentDidMount() {
  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value,
    });
  };

  onClick = async (index) => {
    let arr = this.state.addDept;

    if (this.state.added === true) {
      arr.push({
        deptId: this.state.deptId,
        deptName: this.state.deptName,
        deptDesc: this.state.deptDesc,
        selectedStatus: this.state.selectedStatus,
        deptImg:this.state.deptImg
      });
      console.log(this.state.addDept);
    } else {
      this.setState({
        editClick: false,
      });
      for (const obj of arr) {
        if (obj.deptId === index) {
          obj.deptName = this.state.deptName;
          obj.deptDesc = this.state.deptDesc;
          obj.selectedStatus = this.state.selectedStatus;
          obj.deptImg=this.state.deptImg
        }
      }
    }
    this.setState({
      addClick: false,
      addDept: arr,
      deptId: "",
      deptName: "",
      deptDesc: "",
      selectedStatus: "",
      deptImg:""
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
      editClick: true,
      added: false,
      deptId: item.deptId,
      deptName: item.deptName,
      deptDesc: item.deptDesc,
      selectedStatus: item.selectedStatus,
    });
  };
  deleteClick(item, index) {
    let array = this.state.addDept;

    array.splice(index, 1);
    this.setState({
      addDept: array,
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row text-center">
          <h2 className="text-success mb-4">Departments</h2>
        </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Department</h3>
            <div className="row mt-2 px-5">
              <div className="col-6">
                <label>Department ID</label>
                {this.state.editClick === false ? (
                  <input
                    id="deptId"
                    type="number"
                    className="form-control"
                    value={this.state.deptId}
                    onChange={this.onChange.bind(this)}
                  />
                ) : (
                  <input
                    disabled
                    id="deptId"
                    type="number"
                    className="form-control"
                    value={this.state.deptId}
                    onChange={this.onChange.bind(this)}
                  />
                )}
              </div>

              <div className="col-6">
                <label>Department Name</label>
                <input
                  id="deptName"
                  className="form-control"
                  value={this.state.deptName}
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
                  id="deptImg"
                  type='file'
                  className="form-control"
                  value={this.state.deptImg}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row px-5">
            
            <div className="col-12">
                <label>Description</label>

                <textarea
                  id="deptDesc"
                  className="form-control"
                  value={this.state.deptDesc}
                  onChange={this.onChange.bind(this)}
                />
              </div>

            </div>
         
            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.deptId)}
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
              Add New Department
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>DeptId</th>
              <th>Department</th>
              <th>Dept desc</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.addDept.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.deptName}</td>
                <td>{item.deptDesc}</td>
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
