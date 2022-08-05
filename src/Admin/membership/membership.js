import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
export default class MembershipComp extends Component {
  constructor() {
    super();
    this.state = {
      membershipArr: [],
      memberId: "",
      memberName: "",
      description: "",
      status: ["Active","InActive"],
      selectedStatus:'Active',
      image: "",
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
    console.log(this.state.selectedStatus)
  };

  onClick = async (index) => {
    let arr = this.state.membershipArr;
    console.log(index);

    if (this.state.added === true) {
      arr.push({
        memberId: this.state.memberId,
        memberName: this.state.memberName,
        image: this.state.image,
        description: this.state.description,
        selectedStatus: this.state.selectedStatus,
      });
    } else {
      this.setState({
        editClick:false
      })
      console.log(this.state.editClick)
      for (let obj of arr) {
        if (obj.memberId === index) {
          obj.memberId = this.state.memberId;
          obj.memberName = this.state.memberName;
          obj.image = this.state.image;
          obj.description = this.state.description;
          obj.selectedStatus = this.state.selectedStatus;
        }
      }
    
    }

    this.setState({
    
      addClick: false,
      membershipArr: arr,
      memberId: "",
      memberName: "",
      image: "",
      description: "",
      selectedStatus: "",
    });
    console.log(this.state.addClick )
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
      added: false,
      editClick:true,
      memberId: item.memberId,
      memberName: item.memberName,
      description: item.description,
      selectedStatus: item.selectedStatus,
    });
  };
  deleteClick(item, index) {
    let array = this.state.membershipArr;

    array.splice(index, 1);
    this.setState({
      membershipArr: array,
    });
  }
  render() {
    return (
      <div className="p-5">
        <div className="row text-center">
          <h2 className="text-success mb-4">Membership Plan</h2>
        </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Plan</h3>
            <div className="row mt-5 px-5">
              
              <div className="col-6">
                <label>MemberShip ID</label>
                {this.state.editClick===false?(
                      <input
                      id="memberId"
                      type="number"
                      className="form-control"
                      value={this.state.memberId}
                      onChange={this.onChange.bind(this)}
                    />
                ):(
                  <input
                  disabled
                  id="memberId"
                  type="number"
                  className="form-control"
                  value={this.state.memberId}
                  onChange={this.onChange.bind(this)}
                />
                )}
            
              </div>

              <div className="col-6">
                <label>MemberShip Name</label>
                <input
                  id="memberName"
                  className="form-control"
                  value={this.state.memberName}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row  px-5 ">
             
              <div className="col-6">
                <label>Status</label>
                <select
                className="form-select"
                onChange={this.onChange.bind(this)}
                id='selectedStatus'
                value={this.state.selectedStatus}
                >
                    {this.state.status.map(item=>(
<option key={item} value={item}>{item}</option>
                    ))}
                </select>
              </div>

              <div className="col-6">
                <label>Image</label>
                <input
                  type="file"
                  id="image"
                  className="form-control"
                  value={this.state.image}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row  px-5">
          
              <div className="col-12">
                <label>Description</label>
                <textarea
                  id="description"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChange.bind(this)}
                />
              </div>           
            </div>
          
            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.memberId)}
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
              Add New Plan
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>MemberShip Id</th>
              <th>MemberShip Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.membershipArr.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.memberName}</td>
                <td>{item.description}</td>
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
