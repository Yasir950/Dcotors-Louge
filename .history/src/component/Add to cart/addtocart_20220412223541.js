import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Addtocart extends Component {
  constructor() {
    super();
    this.state = {
        medArr: [
            {
              medName: "Panadol",
              medRate: "25-45",
              loc: "karachi",
            },
            {
              medName: "Acetaminophen",
              medRate: "55-75",
              loc: "Lahore",
            },
            {
              medName: "Adderall",
              medRate: "50-95",
              loc: "Islamabad",
            },
            {
              medName: "Amlodipine",
              medRate: "45-55",
              loc: "karachi",
            },
            {
              medName: "Atorvastatin",
              medRate: "15-25",
              loc: "Lahore",
            },
            {
              medName: "Azithromycin",
              medRate: "150-250",
              loc: "Rawalpindi",
            },
            {
              medName: "Ativan",
              medRate: "5-15",
              loc: "Lahore",
            },
            {
              medName: "Amlodipine",
              medRate: "35-45",
              loc: "Rawalpindi",
            },
          ],
      checkout: false,
      count: 0,
      quantity: 75,
    };
  }
  onClick() {
    this.setState({
      checkout: true,
    });
  }

  onPlusClick() {
    let countplus = this.state.count;
    countplus = countplus + 1;
    let quantitymin = this.state.quantity;
    quantitymin = quantitymin - 1;
    console.log(countplus);
    this.setState({
      count: countplus,
      quantity: quantitymin,
    });
  }
  onMinClick() {
    let countmin = this.state.count;
    countmin = countmin - 1;
    let quantityplus = this.state.quantity;
    quantityplus = quantityplus + 1;
    console.log(countmin);
    this.setState({
      count: countmin,
      quantity: quantityplus,
    });
  }
  render() {
    return (
      <div>
        <div className="">
          <div className="row p-5 ">
            <div className="col-8 h3 ">My Cart</div>
            <div className="col-3  ">
                <Link to='/pharmacy'>
                <button className=" mx-1 btn btn-warning">Continue Shopping</button>
                </Link>
           
              {this.state.checkout === false ? (
                <button
                  className="btn btn-success"
                  onClick={this.onClick.bind(this)}
                >
                  check out
                </button>
              ) : (
                <button className="btn " onClick={this.onClick.bind(this)}>
                  Added to cart
                </button>
              )}
            
            </div>
            
          </div>
          <div className="row ">
          {this.state.medArr &&
            this.state.medArr.map((item) => (
                <div className="row shadow">
  <div className="col-4">
                  <h1 className="text-success">{item.medName}</h1>
                </div>
                <div className="col-2">
                  <h5>Unit Price</h5>
                  <h5>Rs {item.medRate}</h5>
                </div>

                <div className="col-2  ">
                  <h5>Total Price</h5>
                  <h5>{this.state.count * 25}</h5>
                </div>
                <div className="col-2">
                  <div className=" py-0 ">
                    {this.state.count === 0 ? (
                      <button
                        className="mx-3 btn btn-secondary "
                        disabled
                        onClick={this.onMinClick.bind(this)}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        className="mx-3 btn btn-secondary "
                        onClick={this.onMinClick.bind(this)}
                      >
                        -
                      </button>
                    )}
                    {this.state.count}
                    <h5
                      className="mx-3  btn btn-success "
                      onClick={this.onPlusClick.bind(this)}
                    >
                      +
                    </h5>
                  </div>
                </div>
                </div>
              
            
            ))}
          </div>
         
        </div>
      </div>
    );
  }
}
