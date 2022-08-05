import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          medName: "pepsi",
          medRate: "10",
          loc: "karachi",
          count: 0,
        },
        {
          medId: 3,
          medName: "samosa",
          medRate: "7",
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
    let medicalArr = this.state.medArr;
//     let finalprice = this.state.totalprice;
    
//     for (let i = 0; i < medicalArr.length; i++) {
//       finalprice += (medicalArr[i].count*medicalArr[i].medRate);
//     }
// console.log(finalprice)
   
    await this.setState({
      checkout: true,
      addcart: true,
    //   totalprice:finalprice
    });
    
  };
  onPlusClick = async (item, index) => {
    let filteredItems = this.state.medArr.filter((item, id) => id === index);
    filteredItems[0].count += 1;
    let medicalArr = this.state.medArr;
    let finalprice = this.state.totalprice;
    
    for (let i = 0; i < medicalArr.length; i++) {
      finalprice += (medicalArr[i].count*medicalArr[i].medRate);
    }
console.log(finalprice)
    // for (let obj of medicalArr) {
    //   if (medicalArr[index]) {
    //     obj = filteredItems;
    //     console.log(obj)
    //   }
    // }
   
    await this.setState({
      medArr: medicalArr,
        totalprice:finalprice
    });

  };

  onMinClick(item, index) {
    console.log(index);
    let filteredItems = this.state.medArr.filter((item, id) => id === index);
    filteredItems[0].count -= 1;
    let medicalArr = this.state.medArr;
    for (let obj of medicalArr) {
      if (medicalArr[index]) {
        obj = filteredItems;
      }
    }
    this.setState({
      medArr: medicalArr,
    });
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
          <div className="col-2">
              <p>Net Price</p>
              <p>{this.state.totalprice}</p>
          </div>

          </div>
          <div className="row px-4">
            {this.state.medArr &&
              this.state.medArr.map((item, index) => (
                <div className="row shadow-sm mb-4">
                  <div className="col-4 px-5">
                    <h3 className="text-success">{item.medName}</h3>
                  </div>
                  <div className="col-2 text-center">
                    <p>Unit Price</p>
                    <p>Rs {item.medRate}</p>
                  </div>

                  <div className="col-2  text-center">
                    <p>Total Price</p>
                    <p>Rs {item.count * item.medRate}</p>
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
              ))}
          </div>
        </div>
      </div>
    );
  }
}
