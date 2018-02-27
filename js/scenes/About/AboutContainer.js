import React, { Component } from "react";

// import PropTypes from "prop-types";
import About from "./About";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .then(err => console.log(err));
  }

  render() {
    // console.log(this.state.data);
    return <About data={this.state.data} />;
  }
}

export default AboutContainer;
