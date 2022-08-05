import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BookApointment extends Component {
  constructor() {
    super();
    this.state = {
      departments: [
        "Opthomology",
        "Gynecology",
        "Pulmology",
        "Dental Care",
        "Child Care",
        "Cardiology",
      ],

      Deptcheck: false,
      nurseCheck: false,
      paramedicesCheck: false,
      genderCheck: false,
      selectedDept: "",
      optionsArr: ["Male", "Female", "Any", "Both"],
    };
  }
  onChange = async (e) => {
    let id = e.target.id;
    await this.setState({
      [id]: true,
      // [id]: val,
    });
    console.log(this.state.Deptcheck);
  };
  componentDidMount(){
    window.scrollTo({
      top: 0
    });
  }
  render() {
    return (
      <div>
        <div className="row text-center mb-5 mt-3">
          <h1>Home Consultation</h1>
        </div>

        <div class="form-check col-8 mx-4 px-5">
          <input
            class="form-check-input "
            type="checkbox"
            id="Deptcheck"
            onChange={this.onChange.bind(this)}
          />

          {this.state.Deptcheck === false ? (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                  disabled
                >
                  <option selected>Speciality of doctors</option>
                  {this.state.departments.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                >
                  <option selected>Speciality of doctors</option>
                  {this.state.departments.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>

        {this.state.Deptcheck === true && (
          <div class="form-check col-8 mx-4  px-5 my-3">
            <input
              class="form-check-input "
              type="checkbox"
              id="genderCheck"
              onChange={this.onChange.bind(this)}
            />
            {this.state.genderCheck === false ? (
              <div className="row">
                <label class="form-check-label" for="flexCheckChecked">
                  <select
                    class="form-select"
                    aria-label="Default select example "
                    disabled
                  >
                    <option selected>Gender</option>
                    {this.state.optionsArr.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
            ) : (
              <div className="row">
                <label class="form-check-label" for="flexCheckChecked">
                  <select
                    class="form-select"
                    aria-label="Default select example "
                  >
                    <option selected>Gender</option>
                    {this.state.optionsArr.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
            )}
          </div>
        )}

        <div class="form-check col-8 mx-4  px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="nurseCheck"
            onChange={this.onChange.bind(this)}
          />

          {this.state.nurseCheck === false ? (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                  disabled
                >
                  <option selected>Nurse</option>
                  {this.state.optionsArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                >
                  <option selected>Nurse</option>
                  {this.state.optionsArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />

          {this.state.paramedicesCheck === false ? (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                  disabled
                >
                  <option selected>Paramedics</option>

                  {this.state.optionsArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : (
            <div className="row">
              <label class="form-check-label" for="flexCheckChecked">
                <select
                  class="form-select"
                  aria-label="Default select example "
                >
                  <option selected>Paramedics</option>
                  {this.state.optionsArr.map((item) => (
                    <option>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          )}
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />

          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Pharmacy
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="dressesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Dresses
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3 ">
          <input
            class="form-check-input "
            type="checkbox"
            id="pharmacyCheck"
            onChange={this.onChange.bind(this)}
          />

          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              ECG
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="pharmacyCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Home Lab Sampling
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4  px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Hemo Dialysis
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Cupping/Hijama
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Cardiac
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4 px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Intensive Care Equipment
            </label>
          </div>
        </div>
        <div class="form-check col-8 mx-4  px-5 my-3">
          <input
            class="form-check-input "
            type="checkbox"
            id="paramedicesCheck"
            onChange={this.onChange.bind(this)}
          />
          <div className="row border-bottom">
            <label class="form-check-label" for="flexCheckChecked">
              Special Procedure
            </label>
          </div>
        </div>

        <div class="form-group col-8 mx-4  px-5 my-3">
          <label for="exampleFormControlTextarea1">Special Instructions</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-6 text-center mt-4 mb-4">
          <Link to="/estimated">
            <button className="btn btn-warning ">Estimated price list </button>
          </Link>
        </div>
      </div>
    );
  }
}
