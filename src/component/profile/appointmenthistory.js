import React, { Component } from "react";
import { Table } from "reactstrap";
export default class Appointmenthistory extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h3 className="text-center text-success mt-5">Doctor Appointments</h3>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Problem</th>
                  <th>Feedback</th>
                  {/* <th>Doctor</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Abbas</td>
                  <td>06/04/2021</td>
                  <td>Kidney problem</td>
                  <td>One of the best doctor</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Yasir</td>
                  <td>07/04/2022</td>
                  <td>Lungs problem</td>
                  <td>Greet treatment</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center text-success mt-5">Vets Appointments</h3>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Problem</th>
                  <th>Feedback</th>
                  {/* <th>Doctor</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Abbas</td>
                  <td>06/04/2021</td>
                  <td>Cat problem</td>
                  <td>One of the best doctor</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Yasir</td>
                  <td>07/04/2022</td>
                  <td>Dog problem</td>
                  <td>Greet treatment</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center text-success mt-5">Laboratory Tests</h3>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Test Name</th>
                  <th>Lab Name</th>
                  <th>Date</th>
                  <th>Feedback</th>
                  {/* <th>Doctor</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Abbas</td>
                  <td>Fouji foundation hospital</td>
                  <td>06/04/2021</td>
                  <td>One of the best laboratory</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Yasir</td>
                  <td>Shifa Hospital</td>
                  <td>07/04/2022</td>
                  <td>Greet treatment</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="row">
          <h3 className="text-center text-success mt-5">Pharmacy Details</h3>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Medicine Name</th>
                  <th>Pharmacy Name</th>
                  <th>Date</th>
                  <th>Feedback</th>
                  {/* <th>Doctor</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Panadol</td>
                  <td>Minhas pharmacy</td>
                  <td>06/04/2021</td>
                  <td>One of the best laboratory</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Calpol</td>
                  <td>AMS pharmacy</td>
                  <td>07/04/2022</td>
                  <td>Greet treatment</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
