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
          count: 0,
        },
        {
          medId: 2,
          medName: "Acetaminophen",
          medRate: "10",
          loc: "karachi",
          count: 0,
        },
        {
          medId: 3,
          medName: "Ativan",
          medRate: "7",
          loc: "karachi",
          count: 0,
        },
        {
            medId: 4,
            medName: "Amlodipine",
            medRate: "9",
            loc: "karachi",
            count: 0,
          },
      ],
      checkout: false,
      countArr: [],
      count: 0,
      totalprice: 0,
      addcart: false,
    };
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
            <div className="col-7 h3 ">My Cart</div>
            <div className="col-3  ">
              <Link to="/pharmacy">
                <button className=" mx-1 btn btn-warning">
                  Continue Shopping
                </button>
              </Link>

              {this.state.checkout === false ? (
                <button
                  className="btn btn-success"
                  onClick={this.onClick.bind(this)}
                >
                  check out
                </button>
              ) : (
                <button className="btn ">Added to cart</button>
              )}
            </div>
          <div className="col-2 d-flex">
              <p>Net Price:</p>
              <p>Rs: {this.state.totalprice}</p>
          </div>

          </div>
          <div className="row px-4">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                
              </tr>
              <tr>
              th>Unit price</th>
                <th>Total price</th>
              </tr>
            </thead>
            {this.state.medArr &&
              this.state.medArr.map((item, index) => (
                <tbody>
                <tr>
      <th scope="row">{index+1}</th>
                <div className="row  ">
                  <div className="col-4 ">
                    <td className="text-success">{item.medName}</td>
                  </div>
              
                  <div className="col-2 ">
                    <td>Rs {item.medRate}</td>
                  </div>

                  <div className="col-2  text-center">
                    <td>Rs {item.count * item.medRate}</td>
                  </div>
                  <div className="col-2">
                    {this.state.addcart === false ? (
                      <div className=" py-0 ">
                        {item.count === 0 ? (
                          <button className="mx-3 btn btn-secondary " disabled>
                            -
                          </button>
                        ) : (
                          <button
                            className="mx-3 btn btn-secondary "
                            onClick={this.onMinClick.bind(this, item, index)}
                          >
                            -
                          </button>
                        )}
                        {item.count}
                        <button
                          className="mx-3  btn btn-success "
                          onClick={this.onPlusClick.bind(this, item, index)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <div className=" py-0 ">
                        {item.count === 0 ? (
                          <button className="mx-3 btn btn-secondary " disabled>
                            -
                          </button>
                        ) : (
                          <button className="mx-3 btn btn-secondary " disabled>
                            -
                          </button>
                        )}
                        {item.count}
                        <button
                          className="mx-3  btn btn-success "
                          disabled
                          onClick={this.onPlusClick.bind(this)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>

               
                </div>
                </tr>
                </tbody>
              ))}
            </Table>

          </div>
        </div>
      </div>
    );
  }
}
