import React, { Component } from "react";
import Logo from "../../images/docLogo.png";
import { Link } from "react-router-dom";
import { Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modals from '../modals/loginModal'
import AdminLogin from "../modals/Adminlogin";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      AdminOpen:false,
      editProfile:"false"
 
    };
  }
  componentDidMount(){
   
   
    localStorage.setItem("editProfile","false");
  
  
  }
  close() {
    this.setState({
      open: false,
      AdminOpen:false
    });
  }
onAdminClick(){
  this.setState({
    AdminOpen:true
  })
}
  onClick(){
    localStorage.setItem("editProfile","false");
    this.setState(
   {   open:true
  
  }
    )
  
  }
  onLogClick(){
    localStorage.setItem("editProfile","false");
 
  
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
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
                <li className="dropdown mt-2 mx-3">
                  <Link
                    className=" dropdown-toggle text-white text-decoration-none"
                    data-bs-toggle="dropdown"
                    to="#"
                  >
                    TeleMedicine
                  </Link>
                  <ul className="dropdown-menu">
                  <li>
                      <Link
                        className="dropdown-item"
                        to="/departments"
                      >
                        Departments
                      </Link>
                    </li>
              
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/telemediceinternational"
                      >
                        International
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/telemedicinenational"
                      >
                        National
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
                        to="/minihospital"
                      >
                        Home Consultation
                      </Link>
                    </li>
                  <li>
                      <Link
                        className="dropdown-item"
                        to="/labtest"
                      >
                        Laboratory Test
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/veterinary"
                      >
                        Veterinary/Pet
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/pharmacy"
                      >
                        Pharmacy
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
                    Promotions
                  </Link>
                  <ul className="dropdown-menu">
                  <li>
                      <Link
                        className="dropdown-item"
                        to="/promotions"
                      >
                        Promotions
                      </Link>
                    </li>
              
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/membership"
                      >
                        Membership
                      </Link>
                    </li>
               
                    
                  </ul>
                </li>
                <li className="nav-item mt-2 mx-3">
                <Link
                   
                    to="/cartpage"
                  >
                    <i className="fas fa-solid fa-cart-plus text-white"/>
                  </Link>
                
                </li>
                <div className=" border border-2 mx-3 border-success rounded">
                <li className="dropdown mt-2 mx-2">
                  <Link
                    className=" dropdown-toggle text-white text-decoration-none"
                    data-bs-toggle="dropdown"
                    to="#"
                  >
                    <i class="fas fa-solid fa-user"></i>
                  </Link>
                  <ul className="dropdown-menu">
                  {localStorage.getItem('editProfile')==="false" &&             <li >
                      <Button
                        className="dropdown-item"
                        onClick={this.onClick.bind(this)}
                      >
                        Sign In
                      </Button>
                    </li>}
                    {localStorage.getItem('editProfile')==="true" &&   <li>
                      <Link
                        className="dropdown-item"
                        to="/profile"
                      >
                        Edit Profile
                      </Link>
                    </li>}
                  
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={this.onAdminClick.bind(this)}
                      >
                        Admin Login
                      </button>
                    </li>
                    {localStorage.getItem('editProfile')==="true" &&   <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={this.onLogClick.bind(this)}
                      >
                        LogOut
                      </a>
                    </li>}
                  </ul>
                </li> 
                </div>
                
              </ul>
            </div>
            <div>
    <Modals     
    isopen={this.state.open}
    toggle={() => this.setState({ Open: false })}
    hideModal={this.close.bind(this)}
    />
     <AdminLogin     
    isopen={this.state.AdminOpen}
    toggle={() => this.setState({ AdminOpen: false })}
    hideModal={this.close.bind(this)}
    />
        </div>
          </div>
        </nav>
      </div>
    );
  }
}
