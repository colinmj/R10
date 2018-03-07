import React, { Component } from "react";
import { connect } from "react-redux";
import { getSessions } from "../../redux/modules/schedule";
import { formatSessionData } from "../../redux/helpers";

import Schedule from "./Schedule";

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Schedule",
      tintColor: "white",
      fontFamily: "Montserrat"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessions());
  }

  render() {
    const { loading, sessionData } = this.props;
    return <Schedule data={formatSessionData(sessionData)} />;
  }
}

const mapStateToProps = state => ({
  loading: state.schedule.loading,
  sessionData: state.schedule.sessionData
});

export default connect(mapStateToProps)(ScheduleContainer);
