import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Addtocart extends Component {
  constructor() {
    super();
    this.state = {
      medArr: [
        {
            medId:1,
          medName: "Panadol",
          medRate: "2",
          loc: "karachi",
          count:0
        },
        {
            medId:2,
            medName: "pepsi",
            medRate: "10",
            loc: "karachi",
          count:0
          },
          {
            medId:3,
            medName: "samosa",
            medRate: "7",
            loc: "karachi",
          count:0
          },
     
      ],
      checkout: false,
      counter: 0,
      quantity: 75,
      totalprice:0,
      addcart:false
    };
  }
  onClick=async()=> {
    await this.setState({
      checkout: true,
      addcart:true
    });
    console.log(this.state.addcart)
  }

  onPlusClick(index,item) {
      let num=index+1
      console.log(num)
    let countplus = item.count;
    countplus = countplus + 1;
console.log(item.medId)
   if(num===item.medId){
       this.setState({
counter:countplus
       })
   }
 
    this.setState({
      count: countplus
      
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
                <button className="btn " >
                  Added to cart
                </button>
              )}
            </div>
          </div>
          <div className="row px-4">
            {this.state.medArr &&
              this.state.medArr.map((item,index) => (
                <div className="row shadow-sm mb-4">
                  <div className="col-4 px-5">
                    <h3 className="text-success">{item.medName}</h3>
                  </div>
                  <div className="col-2 text-center">
                    <h5>Unit Price</h5>
                    <h5>Rs {item.medRate}</h5>
                  </div>

                  <div className="col-2  text-center">
                    <h5>Total Price</h5>
                    <h5 >Rs {(this.state.counter) * (item.medRate)}</h5>
                  </div>
                  <div className="col-2">
                      {this.state.addcart===false ? (
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
                               onClick={this.onMinClick.bind(this,index,item)}
                             >
                               -
                             </button>
                           )}
                           {this.state.counter}
                           <button
                             className="mx-3  btn btn-success "
                             
                             onClick={this.onPlusClick.bind(this,index,item)}
                           >
                             +
                           </button>
                         </div>
                      ): (
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
                            disabled
                            onClick={this.onMinClick.bind(this)}
                          >
                            -
                          </button>
                          
                        )}
                         {this.state.count}
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
