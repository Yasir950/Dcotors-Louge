import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MiniHospital extends Component {
  componentDidMount(){
    window.scrollTo({
      top: 0
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="bg-image-hp">
            <div className="m-5">
              <u>
            <h1 className="text-dark  mb-3 " style={{fontSize:'60px'}}>Home<br/> Consultation</h1>

              </u>

                <Link to='/appointment'>
                <button
                className=" btn btn-lg btn-success "

                style={{ marginLeft: "100px" }}
              >
                Book Appointment
              </button>
                </Link>
             
            </div>
          </div>
        </div>
        <div className="row p-3">
          <h1 className=" mt-3 text-center ">Details</h1>
          <div className="col-10 mx-5">
            <p className="p-2 mb-5">
              hospital, an institution that is built, staffed, and equipped for
              the diagnosis of disease; for the treatment, both medical and
              surgical, of the sick and the injured; and for their housing
              during this process. The modern hospital also often serves as a
              centre for investigation and for teaching. To better serve the
              wide-ranging needs of the community, the modern hospital has often
              developed outpatient facilities, as well as emergency,
              psychiatric, and rehabilitation services. In addition, “bedless
              hospitals” provide strictly ambulatory (outpatient) care and day
              surgery. hospital, an institution that is built, staffed, and
              equipped for the diagnosis of disease; for the treatment, both
              medical and surgical, of the sick and the injured; and for their
              housing during this process. The modern hospital also often serves
              as a centre for investigation and for teaching. To better serve
              the wide-ranging needs of the community, the modern hospital has
              often developed outpatient facilities, as well as emergency,
              psychiatric, and rehabilitation services. In addition, “bedless
              hospitals” provide strictly ambulatory (outpatient) care and day
              surgery.
            </p>
            <hr></hr>
          </div>
        </div>
        <div className="row p-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 Cardiac Profile
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Cardiac profile</strong>  High (elevated) levels of cardiac enzymes can be a sign of a heart attack or another heart problem. Cardiac enzymes are also called cardiac biomarkers
                  {/* <code>.accordion-body</code>, though the transition does limit */}
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                 Intensive Care Equipment
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                The ICU bed is designed to be able: To transport critically ill, ventilated patients. To support the patient comfortably. To provide room to carry portable oxygen cylinders, suction equipment, emergency resuscitation equipment, intravenous infusions and their pumps, as well as a transport monitor and ventilator.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                 Special Procedure
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Special procedures are diagnostic or therapeutic procedures usually performed under local anesthesia with some form of imaging guidance by a surgical specialist or a radiologist.

                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                 Estimated Price List
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 Here is the extimated list <Link to='/estimated'> clickHere</Link>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                 Order Services
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                In order to bill for tests and services a valid order must be present in the medical record. Valid orders include written or verbal orders and hospital approved
                  <Link to='/appointment'>BookAppointment</Link>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                 Difficulty In Deciding
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                The members of a hospital's board of directors govern the facility. Their work allows doctors, nurses and other health care professionals to focus on providing the highest level of care to patients. A hospital board of directors makes many important decisions regarding hospital policy, budgets and quality of care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
