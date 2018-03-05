import React, { Component } from "react";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Speaker speakerData={this.props.route.params.speakerData} />;
  }
}

export default SpeakerContainer;
