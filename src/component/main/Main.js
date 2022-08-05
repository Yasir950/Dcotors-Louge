import React, { Component } from "react";
import ListComp from "../lists/Lists";
import ImgSliderComp from "../slider/imgSlider";

export default class MainComp extends Component {
  componentDidMount(){
    localStorage.setItem("Login","false");
  }
  render() {
    return (
      <div>
        <ImgSliderComp />
        <ListComp />
      </div>
    );
  }
}
