import React, { Component } from "react";
import Session from "./Session";
import { formatDataObject } from "../../redux/helpers";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speaker: ""
    };
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    let speakerId = this.props.route.params.sessionData.item.speaker;
    fetch(
      `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    )
      .then(res => res.json())
      .then(name => {
        let thisName = formatDataObject(name);
        this.setState({ speaker: thisName.name });
      })

      .catch(err => console.log(err));
  }

  render() {
    return (
      <Session
        list={this.props.route.params.sessionData}
        name={this.state.speaker}
      />
    );
  }
}

export default SessionContainer;
