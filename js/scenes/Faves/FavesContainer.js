import React, { Component } from "react";
import { connect } from "react-redux";
// import realm, { queryFaves } from "../../config/model";
import { letsFetchSomeFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../redux/helpers";

import Faves from "./Faves";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(letsFetchSomeFaves());
  }

  render() {
    // console.log(this.props.faves);
    // console.log(this.props.sessionData);
    return (
      <Faves faves={this.props.faves} sessionData={this.props.sessionData} />
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves,
  sessionData: state.schedule.sessionData
});

export default connect(mapStateToProps)(FavesContainer);
