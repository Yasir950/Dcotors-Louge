import React, { Component } from "react";
import { Link } from "react-router-dom";
import doc from "../../images/02.jpg";
export default class DepartmentComp extends Component {
  constructor() {
    super();
    this.state = {
      deptData: [
        {
          deptId: "1",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "2",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "3",
          deptName: "Dental Care",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "4",
          deptName: "Child Care",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "5",
          deptName: "Pulmology",
          deptDesc: "opthomology is very dangerous disease",
        },
        {
          deptId: "6",
          deptName: "Gynecology",
          deptDesc: "opthomology is very dangerous disease",
        },
      ],
    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
  }
  render() {
    return (
      <div>
        <div className="py-5 service-2 mt-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div>
                  <h2 className="text-primary mb-4">Departments</h2>
                  <div className="divider mx-auto my-4"></div>
                </div>
              </div>
            </div>
            <div className="row " style={{ marginLeft: "20px" }}>
              {this.state.deptData &&
                this.state.deptData.map((item) => (
                  <div className="col-3 mb-5 ">
                    <div class=" shadow" style={{ width: "15rem" }}>
                      <Link to="/deptdetail">
                        <img src={doc} class="card-img-top" alt="..." />
                      </Link>
                      <div class="card-body">
                        <h5 class="card-title">{item.deptName}</h5>
                        <p class="card-text">{item.deptDesc}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
