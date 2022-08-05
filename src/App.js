import React, { Component } from "react";
import "./App.css";
import NavbarComp from "./component/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComp from "./component/main/Main";
import FooterComp from "./component/footer/footer";
import TeleMedicineNatlComp from "./component/department/telemednatlComp";
import TeleMedicineIntlComp from "./component/department/telemedintlComp";
import LabTestComp from "./component/department/labtestComp";
import DepartmentComp from "./component/department/departmentComp";
import Profile from "./component/profile/profile";
import Doctor from "./component/doctors/doctor";
import MiniHospital from "./component/minihospital/miniHospital";
import BookApointment from "./component/minihospital/bookappointment";
import Estimated from "./component/minihospital/estimated";
import MainSection from "./component/Veterinary/mainSection";
import VeterinaryTelemedicine from "./component/Veterinary/telemedicineintl";
import VeterinaryTelemedicinenatl from "./component/Veterinary/telemedicinenatl";
import HomeComp from "./component/Veterinary/home";
import Pharmacy from "./component/pharmacy/pharmacy";
import Promotions from "./component/promotions/promotions";
import Membership from "./component/promotions/membership";
import Departmentdetail from "./component/department/deptdetail";
import MedDetail from "./component/pharmacy/meddetail";
import Addtocart from "./component/Add to cart/addtocart";
import AddDept from "./Admin/AddTelemedicine/addDept";
import AddTelemedicineIntl from "./Admin/AddTelemedicine/addtelemedicineintl";
import AddMedicine from "./Admin/Medicine/addmedicine";
import AddIntetNationalVets from "./Admin/Vets/internationalvets";
import AddLabTest from "./Admin/Lab tests/labtests";
import NavbarAdmin from "./component/navbar/navbaradmin";
import MembershipComp from "./Admin/membership/membership";
import PromotionComp from "./Admin/promotions/promotions";
import EstimatedPriceList from "./Admin/estimatedprice/estimatedprice";
import Admindashboard from "./Admin/adminDashboard/admindashboard";
import HomeConsultation from "./Admin/homeconsultation/homeconsultation";
import ConsultantFields from "./Admin/fields/fields";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      adminLogin: "false",
     
    };
  }
  componentDidMount() {
    console.log(localStorage.getItem("Login"));
    if(localStorage.getItem("Login") === undefined){
      localStorage.setItem("Login","false");
    }
    const rememberMe = localStorage.getItem("Login");
    console.log(rememberMe)
    this.setState({
      adminLogin: rememberMe,
    });
  }
  render() {
    return (
      <>
        <Router>
          {/* {this.state.adminLogin ===true?( <NavbarComp/> ):(<NavbarAdmin/>)}     */}
          {this.state.adminLogin === "false" && <NavbarComp  />}
          {this.state.adminLogin === "true" && <NavbarAdmin />}
          
          <Routes>
            <Route path="/" element={<MainComp />}></Route>
            <Route path="/departments" element={<DepartmentComp />}></Route>
            <Route
              path="/telemediceinternational"
              element={<TeleMedicineIntlComp />}
            ></Route>
            <Route
              path="/telemedicinenational"
              element={<TeleMedicineNatlComp />}
            ></Route>
            <Route path="/labtest" element={<LabTestComp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/doctor" element={<Doctor />}></Route>
            <Route path="/minihospital" element={<MiniHospital />}></Route>
            <Route path="/appointment" element={<BookApointment />}></Route>
            <Route path="/estimated" element={<Estimated />}></Route>
            <Route path="/veterinary" element={<MainSection />}></Route>
            <Route
              path="/veterinarytelemedicineintl"
              element={<VeterinaryTelemedicine />}
            ></Route>
            <Route
              path="/veterinarytelemedicinenatl"
              element={<VeterinaryTelemedicinenatl />}
            ></Route>
            <Route path="/homeconsultant" element={<HomeComp />}></Route>
            <Route path="/pharmacy" element={<Pharmacy />}></Route>
            <Route path="/promotions" element={<Promotions />}></Route>
            <Route path="/membership" element={<Membership />}></Route>
            <Route path="/deptdetail" element={<Departmentdetail />}></Route>
            <Route path="/medicine" element={<MedDetail />}></Route>
            <Route path="/cartpage" element={<Addtocart />}></Route>
            <Route
                  path="/admindashboard"
                  element={<Admindashboard />}
                ></Route>
            <Route path="/adddepartment" element={<AddDept />}></Route>
               
                <Route
                  path="/addtelemedicineintl"
                  element={<AddTelemedicineIntl />}
                ></Route>
                <Route path="/addmedicine" element={<AddMedicine />}></Route>
             
                <Route
                  path="/addinternationalvets"
                  element={<AddIntetNationalVets />}
                ></Route>
                <Route path="/addlabtest" element={<AddLabTest />}></Route>
                <Route
                  path="/adminmembership"
                  element={<MembershipComp />}
                ></Route>
                <Route
                  path="/adminpromotion"
                  element={<PromotionComp />}
                ></Route>
                <Route
                  path="/estprice"
                  element={<EstimatedPriceList />}
                ></Route>
                  <Route
                  path="/consultation"
                  element={<HomeConsultation />}
                ></Route>
                    <Route
                  path="/consultantfields"
                  element={<ConsultantFields />}
                ></Route>
          
          </Routes>
             
          <FooterComp />
        </Router>
      </>
    );
  }
}
