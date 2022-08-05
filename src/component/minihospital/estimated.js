import React, { Component } from "react";

export default class Estimated extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0
    });
  }
  render() {
    return (
      <div>
        <div className="row text-center mt-4">
          <h1>Estimated Price Range</h1>
        </div>

        <div className="row p-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Speciality of doctors
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Overview of doctors specialities: Allergy and immunology,
                  Anesthesiology, Dermatology, Diagnostic radiology, Emergency
                  medicine, Family medicine, Internal medicine, Medical genetics
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Nurse
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse "
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Nurse</strong> a person who cares for the sick or
                  infirm specifically : a licensed health-care professional who
                  practices independently or is supervised by a physician,
                  surgeon, or dentist and who is skilled in promoting and
                  maintaining health — compare licensed practical nurse,
                  registered nurse.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2 my-2">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Paramedics
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse "
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  paramedical personnel, also called Paramedics, health-care
                  workers who provide clinical services to patients under the
                  supervision of a physician.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Pharmacy
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse "
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Pharmacy is the clinical health science that links medical
                  science with chemistry and it is charged with the discovery,
                  production, disposal, safe and effective use, and control of
                  medications and drugs.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  Dresses
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse "
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="true"
                  aria-controls="collapseSix"
                >
                  ECG
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse "
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  An electrocardiogram (ECG) is one of the simplest and fastest
                  tests used to evaluate the heart. Electrodes (small, plastic
                  patches that stick to the skin) are placed at certain spots on
                  the chest, arms, and legs. The electrodes are connected to an
                  ECG machine by lead wires.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="true"
                  aria-controls="collapseSeven"
                >
                  Home Lab Sampling
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse "
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  IDC Home Sample Collection Services. High standard home visit
                  private blood draw or other lab tests services by providing
                  qualified trained Phlebotomists.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="true"
                  aria-controls="collapseEight"
                >
                  Hemo Dailysis
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse "
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Hemodialysis is a procedure where a dialysis machine and a
                  special filter called an artificial kidney, or a dialyzer, are
                  used to clean your blood. To get your blood into the dialyzer,
                  the doctor needs to make an access, or entrance, into your
                  blood vessels. This is done with minor surgery, usually to
                  your arm.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="true"
                  aria-controls="collapseNine"
                >
                  Cupping/Hijama
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse "
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  It is also known as vacuum cupping, hijama cupping, horn
                  treatment etc. It is a practice in which the therapist puts
                  special cups on the skin to create suction
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="true"
                  aria-controls="collapseTen"
                >
                  Cardiac Profile
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse "
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Special procedures are diagnostic or therapeutic procedures
                  usually performed under local anesthesia with some form of
                  imaging guidance by a surgical specialist or a radiologist.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingEl">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsEl"
                  aria-expanded="true"
                  aria-controls="collapsEl"
                >
                  Intensive Care Equipment
                </button>
              </h2>
              <div
                id="collapsEl"
                className="accordion-collapse collapse "
                aria-labelledby="headingEl"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item my-2">
              <h2 className="accordion-header" id="headingTw">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsTw"
                  aria-expanded="true"
                  aria-controls="collapsTw"
                >
                  Special Procedure
                </button>
              </h2>
              <div
                id="collapsTw"
                className="accordion-collapse collapse "
                aria-labelledby="headingTw"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
