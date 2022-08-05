import React, { Component } from 'react'
import doc from "../../images/02.jpg";

export default class Addtocart extends Component {
    constructor(){
        super();
        this.state=
           {
               medArr: [{
                medName: "Panadol",
                medRate: "25",
                loc: "karachi",
              }
            
            ],
            checkout:false,
            count:0,
            quantity:75
        }
        
    }
    onClick(){
        this.setState({
            checkout:true

        })
    }

onPlusClick(){
    let countplus=this.state.count
    countplus=countplus+1
    let quantitymin=this.state.quantity
    quantitymin=quantitymin-1
    console.log(countplus)
    this.setState({
        count:countplus,
        quantity:quantitymin
    })
} 
onMinClick(){
    let countmin=this.state.count
    countmin=countmin-1
    let quantityplus=this.state.quantity
    quantityplus=quantityplus+1
    console.log(countmin)
    this.setState({
        count:countmin,
        quantity:quantityplus
    })
} 
  render() {
    return (
      <div>
          <div className="card">
          <div className="h2 p-5">My Cart</div>
          {this.state.medArr && this.state.medArr.map(item=>(
              <div className="row px-5">
             <div className="col-4">
            
                  <h1 className='text-success'>{item.medName}</h1>
                     <h4>Price: Rs {item.medRate}</h4>
                     <h6>location: {item.loc}</h6>
                    <h6>Quantity Available: {this.state.quantity}</h6>
                  </div>

              <div className="col-6 px-0">
              <div className='row '>
             
                    <div className="col-6  ">
                      <h4>Total Price</h4>
                       <h2>{this.state.count * 25}</h2>
                    </div>
                    <div className="col-6  d-inline-flex text-center  ">
                        <div className=" py-0 ">
                            {this.state.count===0 ?(
                               
                        <button className='mx-3 btn btn-secondary ' disabled onClick={this.onMinClick.bind(this)} >-</button>

                            ):(
                        <button className='mx-3 btn btn-secondary ' onClick={this.onMinClick.bind(this)}>-</button>

                            )}
                        {this.state.count}
                        <h5 className='mx-3  btn btn-success ' onClick={this.onPlusClick.bind(this)}>+</h5>

                        </div>
                       
                    </div>
                   
                   </div>
                  
              </div>
              <div className="col-2">
                  {this.state.checkout===false ? (
                        <button className='btn btn-success' onClick={this.onClick.bind(this)}>check out</button>
                  ):(
                    <p className='btn ' onClick={this.onClick.bind(this)}>Added to cart</p>
                  )}
                     
                   </div>
          </div>
          ))}
             
          </div>
      </div>
    )
  }
}
