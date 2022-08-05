import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../images/docLogo.png";

export default class NavbarAdmin extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}
  close() {
    this.setState({
      open: false,
    });
  }
  onChange() {
    this.props.change();
  }
  onClick() {
    // this.setState(chnagelogin)
    this.setState({ open: true });
    
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success nav-center">
          <div className="container">
          <Link className="navbar-brand" to="/">
              <img src={Logo} alt="doctor" style={{ width: "200px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
              <li className="  mt-2 mx-3">
                      <Link  to="/adddepartment"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                        Departments
                      </Link>
                    </li>
                    <li className="  mt-2 mx-3">
                      <Link  to="/addtelemedicineintl"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                        Doctors
                      </Link>
                    </li>
           
                    <li className="  mt-2 mx-3">
                      <Link  to="/addinternationalvets"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                        Vets
                      </Link>
                    </li>
                <li className="  mt-2 mx-3">
                      <Link  to="/addlabtest"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                        Lab Tests
                      </Link>
                    </li>
                <li className="  mt-2 mx-3">
                      <Link  to="/addmedicine"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                        Pharmacy
                      </Link>
                    </li>
                    <li className="dropdown mt-2 mx-3">
                  <Link
                    className=" dropdown-toggle text-white text-decoration-none"
                    data-bs-toggle="dropdown"
                    to="#"
                  >
                    Promotions
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/adminmembership"
                      >
                        Membership
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/adminpromotion"
                      >
                        Promotions
                      </Link>
                    </li>
                   
                  </ul>
                </li>
                <li className="dropdown mt-2 mx-3">
                  <Link
                    className=" dropdown-toggle text-white text-decoration-none"
                    data-bs-toggle="dropdown"
                    to="#"
                  >
                    Mini Hospital
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/consultation"
                      >
                        Home Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/consultantfields"
                      >
                        Appointment Fields
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/estprice"
                      >
                        Estimated Price Lists
                      </Link>
                    </li>
                   
                  </ul>
                </li>
                <li className="  mt-2 mx-3">
                      <a  href="/"
                      className=" nav-item text-white text-decoration-none"
                      >
                        
                      <button className="btn btn-sm btn-light"> LogOut</button>  
                      </a>
                    </li>
              </ul>
            </div>
            <div></div>
          </div>
        </nav>
      </div>
    );
  }
}
