import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import Mypic from "../../images/mypic.jpeg";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
export default class ReviewModal extends Component {
  constructor() {
    super();
    this.state = {
      reviewsArr: [
        {
          userName: "Abbas",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Ahmed",
          userReview: 4,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Ali",
          userReview: 5.0,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Usman",
          userReview: 3.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Obaid",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
        {
          userName: "Bilal",
          userReview: 4.5,
          reviewDetails:
            "he is a good doctor,very well, good behaviour, very nice ,handsome",
        },
      ],
    };
  }
  hideModal() {
    this.props.hideModal();
  }
  render() {
    return (
      <div>

        <Modal isOpen={this.props.isopen} toggle={this.hideModal.bind(this)}>
        <Link  to='#' onClick={this.hideModal.bind(this)} className='mx-2  text-decoration-none text-dark '>X</Link>

          <ModalBody>
            {this.state.reviewsArr.map((item) => (
              <div className="row">
                <div className="col-2">
                  <img
                    src={Mypic}
                    className="d-flex rounded-pill mt-4"
                    alt="..."
                    style={{
                      height: "60px",
                      width: "60px",
                      marginLeft: "10px",
                    }}
                  />
                </div>

                <div className="col-10 mt-4 ">
                  <h5 className=" ">{item.userName}</h5>
                  <StarRatings
                    className="float-end"
                    rating={item.userReview}
                    starDimension="20px"
                    starSpacing="5px"
                    starRatedColor="yellow"
                  />
                </div>

                <p className="">{item.reviewDetails}</p>
              </div>
            ))}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
