import React, { Component } from "react";
import { Link } from "react-router-dom";
import doc from "../../images/02.jpg";
import AppointmentModal from "../modals/appointmentModal";
export default class Departmentdetail extends Component {
  constructor() {
    super();
    this.state = {
      toprated: [
        {
          deptId: "1",
          doc: "Ali",
          deptName: "Opthomology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "online",
          gender: "male",
          rating: "5.0",
          priceRange: "500-1000",
          responceTime: "1 hour",
        },
        {
          deptId: "2",
          doc: "Abbas",
          deptName: "Cardiology",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Low Rated",
          mode: "Clinic",
          gender: "male",
          rating: "4.0",
          priceRange: "1500-2000",
          responceTime: "2 hour",
        },
        {
          deptId: "3",
          doc: "Aliya",
          deptName: "Dental Care",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Top Rated",
          mode: "hospital",
          gender: "female",
          rating: "3.0",
          priceRange: "500-1000",
          responceTime: "30 min",
        },
        {
          deptId: "4",
          doc: "Amna",
          deptName: "Child Care",
          deptDesc: "opthomology is very dangerous disease",
          deptRate: "Two Level Rated",
          mode: "hospital",
          gender: "female",
          rating: "5.0",
          priceRange: "1000-1500",
          responceTime: "1 hour",
        },
      ],
      appointModal: false,

    };
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
    });
  }
  onAppointClick() {
    this.setState({
      appointModal: true,
    });
  }
  close() {
    this.setState({
      appointModal: false,
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="text-center mt-5 mb-2">Cardiology</h1>
          <div className="row px-5">
            <h4>Specializations</h4>
            <div className="p-3">
              All cardiologists study the disorders of the heart, but the study
              of adult and child heart disorders are through different training
              pathways. Therefore, an adult cardiologist (often simply called
              "cardiologist") is inadequately trained to take care of children,
              and pediatric cardiologists are not trained to take care of adult
              heart disease. The surgical aspects are not included in cardiology
              and are in the domain of cardiothoracic surgery. For example,
              coronary artery bypass surgery (CABG), cardiopulmonary bypass and
              valve replacement are surgical procedures performed by surgeons,
              not cardiologists. However, some minimally invasive procedures
              such as the cardiac catheterization and pacemaker implantation are
              performed by cardiologists with additional training in
              non-surgical interventions (interventional cardiology and
              electrophysiology respectively).
            </div>
          </div>
          <div className="row  px-5">
            <h4>Adult cardiology</h4>
            <div className="p-3">
              Cardiology is a specialty of internal medicine. To be a
              cardiologist in the United States, a three-year residency in
              internal medicine is followed by a three-year fellowship in
              cardiology. It is possible to specialize further in a
              sub-specialty. Recognized sub-specialties in the United States by
              the ACGME are cardiac electrophysiology, echocardiography,
              interventional cardiology, and nuclear cardiology. Recognized
              subspecialties in the United States by the American Osteopathic
              Association Bureau of Osteopathic Specialists (AOABOS) include
              clinical cardiac electrophysiology and interventional
              cardiology.[3] While in India, a person needs to undergo three
              years of residency in General Medicine or Pediatrics after M.B.B.S
              and then three years of residency in Cardiology to be a
              D.M/Diplomate of National Board (DNB) in Cardiology.[citation
              needed] Per Doximity, adult cardiologists make an average of
              $436,849 in the United States.
            </div>
          </div>

          <div className="row px-5">
            <h4>Cardiac electrophysiology</h4>
            <div className="p-3">
              Cardiac electrophysiology is the science of elucidating,
              diagnosing, and treating the electrical activities of the heart.
              The term is usually used to describe studies of such phenomena by
              invasive (intracardiac) catheter recording of spontaneous activity
              as well as of cardiac responses to programmed electrical
              stimulation (PES). These studies are performed to assess complex
              arrhythmias, elucidate symptoms, evaluate abnormal
              electrocardiograms, assess risk of developing arrhythmias in the
              future, and design treatment. These procedures increasingly
              include therapeutic methods (typically radiofrequency ablation, or
              cryoablation) in addition to diagnostic and prognostic procedures.
              Other therapeutic modalities employed in this field include
              antiarrhythmic drug therapy and implantation of pacemakers and
              automatic implantable cardioverter-defibrillators (AICD).{" "}
            </div>
          </div>
<h2 className="text-center mt-2">Top Rated Doctors</h2>
          <div className="row text-center m-5">
            {this.state.toprated &&
              this.state.toprated.map((item) => (
                <div className="col-3 px-2 ">
                  <div className="card shdow" style={{ width: "15rem" }}>
                    <Link to="/telemediceinternational">
                      <img src={doc} className="card-img-top" alt="..." />
                    </Link>
                    <div class="card-body">
                      <h5 class="card-title">{item.deptName}</h5>
                      <p class="card-text">{item.deptDesc}</p>
                    </div>
                    <button
                          className="btn btn-sm w-100 btn-success"
                          onClick={this.onAppointClick.bind(this)}
                        >
                          Book Appointment
                        </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <AppointmentModal
          isopen={this.state.appointModal}
          hideModal={this.close.bind(this)}
        />
      </div>
    );
  }
}
