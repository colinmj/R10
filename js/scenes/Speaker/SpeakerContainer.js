import React, { Component } from "react";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.route.params);
    return <Speaker speakerData={this.props.route.params.speakerData} />;
  }
}

export default SpeakerContainer;
