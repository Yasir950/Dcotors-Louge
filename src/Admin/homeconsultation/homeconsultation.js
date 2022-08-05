import React, { Component } from "react";
import { Table } from "reactstrap";
import {Link} from 'react-router-dom'
export default class HomeConsultation extends Component {
  constructor() {
    super();
    this.state = {
      itemPriceArr: [],
      itemPriceId: "",
      itemPriceName: "",
      itemPriceDesc: "",
      itemPrice:'',
      status: ["Active", "InActive"],
      selectedStatus:'',
      addClick: false,
      added: false,
      editClick:false
    };
  }
  componentDidMount(){
    

  }
  onChange = async (e) => {
    let id = e.target.id;
    let value = e.target.value;
    await this.setState({
      [id]: value,
    });

  };

  onClick = async (index) => {

    let arr = this.state.itemPriceArr;
   
    if (this.state.added === true) {
      arr.push({
        itemPriceId: this.state.itemPriceId,
        itemPriceName: this.state.itemPriceName,
        itemPriceDesc: this.state.itemPriceDesc,
        itemPrice:this.state.itemPrice,
        selectedStatus: this.state.selectedStatus,
      })

    }
else{
  this.setState({
    editClick:false
  })
  for (const obj of arr) {
    if (obj.itemPriceId === index) {
      obj.itemPriceName = this.state.itemPriceName;
      obj.itemPriceDesc=this.state.itemPriceDesc;
      obj.itemPrice=this.state.itemPrice;
      obj.selectedStatus= this.state.selectedStatus
    }
  }

}
    this.setState({
      addClick: false,
      itemPriceArr: arr,
      itemPriceId: "",
      itemPriceName: "",
      itemPriceDesc: "",
      selectedStatus:''
    });
  };
  onAddClick = async () => {
    await this.setState({
      addClick: true,
      added: true,
    });
  };
  editClick = async (item) => {
    await this.setState({
      addClick: true,
      editClick:true,
      added: false,
      itemPriceId: item.itemPriceId,
      itemPriceName: item.itemPriceName,
      itemPriceDesc: item.itemPriceDesc,
      itemPrice:item.itemPrice,
      selectedStatus:item.selectedStatus
    });
  };
  deleteClick(item, index) {
    let array = this.state.itemPriceArr;

    array.splice(index, 1);
    this.setState({
      itemPriceArr: array,
    });
  }
  render() {
    return (
      <div className="p-5">
          <div className="row text-center">
                  <h2 className="text-success mb-4">Consultant Items</h2>
                  
                </div>
        {this.state.addClick === true && (
          <div className="bg-secondary card shadow-lg mb-5">
            <h3 className="text-center">Add New Item</h3>
            <div className="row mt-2 px-5">
              <div className="col-6">
                <label>Item ID</label>
                {this.state.editClick===false?(
                     <input
                     id="itemPriceId"
                     type="number"
                     className="form-control"
                     value={this.state.itemPriceId}
                     onChange={this.onChange.bind(this)}
                   />
                ):(
                  <input
                  disabled
                  id="itemPriceId"
                  type="number"
                  className="form-control"
                  value={this.state.itemPriceId}
                  onChange={this.onChange.bind(this)}
                />
                )}
             
              </div>

              <div className="col-6">
                <label>Item Name</label>
                <input
                  id="itemPriceName"
                  className="form-control"
                  value={this.state.itemPriceName}
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
    <label>Item Price</label>
    <input id="itemPrice" type='number' className="form-control" value={this.state.itemPrice} onChange={this.onChange.bind(this)}/>
</div>
              <div className="col-2"></div>
            </div>
            <div className="row px-5">
            <div className="col-12">
                <label>Item Description</label>
                <textarea
                  id="itemPriceDesc"
                  className="form-control"
                  value={this.state.itemPriceDesc}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <div className="row text-center m-5">
              <div className="col-4 " style={{ marginLeft: "390px" }}>
                <button
                  className="btn btn-sm text-center w-50 btn-dark "
                  onClick={this.onClick.bind(this, this.state.itemPriceId)}
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
              Add New Item
            </button>
          </div>
        </div>
        <Table dark>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Desc</th>
              <th>Status</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemPriceArr.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.itemPriceName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.itemPriceDesc}</td>
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
