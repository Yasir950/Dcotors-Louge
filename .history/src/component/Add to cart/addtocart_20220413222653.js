import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
export default class Addtocart extends Component {
  constructor() {
    super();
    this.state = {
      medArr: [
        {
          medId: 1,
          medName: "Panadol",
          medRate: "2",
          loc: "karachi",
          count: 1,
        },
        {
          medId: 2,
          medName: "Acetaminophen",
          medRate: "10",
          loc: "karachi",
          count: 1,
        },
       
       
      ],
      checkout: false,
      countArr: [],
      count: 0,
      totalprice: 0,
      addcart: false,
      delivery:40,
      tax:10
    };
  }
  componentDidMount(){
    let medicalArr = this.state.medArr;
    let finalprice = 0;


    for (let i = 0; i < medicalArr.length; i++) {
      finalprice += (medicalArr[i].count*medicalArr[i].medRate);
    }   
    this.setState({
     
          totalprice:finalprice
      });
  }
  onClick = async () => {

    await this.setState({
      checkout: true,
      addcart: true,
   
    });
    
  };
  onPlusClick = async (item, index) => {
    let filteredItems = this.state.medArr.filter((item, id) => id === index);
    filteredItems[0].count += 1;
    let medicalArr = this.state.medArr;
    let finalprice = 0;


    for (let i = 0; i < medicalArr.length; i++) {
      finalprice += (medicalArr[i].count*medicalArr[i].medRate);
    }

     this.setState({
      medArr: medicalArr,
        totalprice:finalprice
    });

console.log(finalprice)
  };

  onMinClick(item, index) {
    console.log(index);
    let filteredItems = this.state.medArr.filter((item, id) => id === index);
    filteredItems[0].count -= 1;
    let medicalArr = this.state.medArr;
    let finalprice = 0;

    for (let i = 0; i < medicalArr.length; i++) {
      finalprice =finalprice+ (medicalArr[i].count*medicalArr[i].medRate);
    }

    
    this.setState({
      medArr: medicalArr,
      totalprice:finalprice
    });
    console.log(this.state.totalprice)
  }
  render() {
    return (
      <div>
        <div className="">
          <div className="row p-5 ">
            <div className="col-8 h3 ">My Cart</div>
          <div className="col-4">
          <Link to="/pharmacy">
                <button className=" mx-1 btn btn-warning">
                  Continue Shopping
                </button>
              </Link>
          </div>
       

          </div>
          <div className="row px-4">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
                {this.state.medArr.map((item,index)=>(
   <tr>
   <td>
   <th scope="row">{index+1}</th>
   </td>
   <td>
   <h5 className="text-success">{item.medName}</h5>
   </td>
   <td className="col-2 ">
                    <p>Rs {item.medRate}</p>
                  </td>
               
   <td className="col-4">
                    {this.state.addcart === false ? (
                      <div className="  ">
                        {item.count === 0 ? (
                          <button className="mx-2 btn btn-sm btn-secondary " disabled>
                            -
                          </button>
                        ) : (
                          <button
                            className="mx-2 btn btn-sm btn-secondary "
                            onClick={this.onMinClick.bind(this, item, index)}
                          >
                            -
                          </button>
                        )}
                        {item.count}
                        <button
                          className="mx-2  btn btn-sm btn-success "
                          onClick={this.onPlusClick.bind(this, item, index)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <div className=" py-0 ">
                        {item.count === 0 ? (
                          <button className="mx-2 btn btn-sm btn-secondary " disabled>
                            -
                          </button>
                        ) : (
                          <button className="mx-2 btn btn-sm btn-secondary " disabled>
                            -
                          </button>
                        )}
                        {item.count}
                        <button
                          className="mx-2  btn btn-sm btn-success "
                          disabled
                          onClick={this.onPlusClick.bind(this)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </td>   
                  <td className="col-2 ">
                    <p>Rs {item.count * item.medRate}</p>
                  </td>
</tr>

                ))}
                <tr className="float-right">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub Total: Rs {this.state.totalprice}</td>
                
                </tr>
                <tr className="float-right">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Delivery Charges: Rs {this.state.delivery}</td>
                
                </tr>
                <tr className="float-right">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Tax: Rs {this.state.tax}</td>
                
                </tr>
                <tr className="float-right">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th>Grand Total: Rs {this.state.totalprice+this.state.delivery+this.state.tax}</th>
                
                </tr>
                </tbody>
            </Table>

          </div>
          <div className="col-4  text-center">
             

              {this.state.checkout === false ? (
                <button
                  className="btn btn-sm w-750 btn-success"
                  onClick={this.onClick.bind(this)}
                >
                  check out
                </button>
              ) : (
                <button className="btn btn-lg w-100">Added to cart</button>
              )}
            </div>
        </div>
      </div>
    );
  }
}
