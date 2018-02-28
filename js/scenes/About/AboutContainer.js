import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getConduct } from "../../redux/modules/about";
import About from "./About";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      // loading: true
    };
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(getConduct());
  }

  render() {
    const { loading, data } = this.props;
    return <About data={data} loading={loading} />;
  }
}

const mapStateToProps = state => ({
  loading: state.about.loading,
  data: state.about.data
});

export default connect(mapStateToProps)(AboutContainer);
