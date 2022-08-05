import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import { Row, Col, Nav } from "react-bootstrap";
import PerInfo from "./perInfo";
import MedInfo from "./medInfo";
import Appointmenthistory from "./appointmenthistory";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2} className="bg-dark ">
              <Nav variant="pills" className="flex-column ">
                <button className=" btn btn-sm ">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      className="btn btn-link btn-outline-dark text-white"
                    >
                      {" "}
                      Personal Info
                    </Nav.Link>
                  </Nav.Item>
                </button>
                <button className=" btn btn-sm">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="btn btn-link btn-outline-dark text-white"
                    >
                      Medical Info
                    </Nav.Link>
                  </Nav.Item>
                </button>
                <button className=" btn btn-sm">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="Third"
                      className=" btn-outline-dark text-white"
                    >
                      History Of Appointments
                    </Nav.Link>
                  </Nav.Item>
                </button>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <PerInfo />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <MedInfo />
                </Tab.Pane>
                <Tab.Pane eventKey="Third">
                  <Appointmenthistory />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
