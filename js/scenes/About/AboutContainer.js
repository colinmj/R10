import React, { Component } from "react";

import PropTypes from "prop-types";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getConduct } from "../../redux/modules/about";
import About from "./About";
import Accordian from "../../components/Accordian";
import { styles } from "./styles";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
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
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={"#9963ea"} />
      </View>
    ) : (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image
              style={{ marginBottom: 10 }}
              source={require("../../assets/images/r10_logo.png")}
            />
          </View>
          <Text style={styles.text}>
            R10 is a conference that focuses on just about any topic related to
            dev
          </Text>
          <Text style={styles.title}>Date & Time</Text>
          <Text style={styles.text}>
            The R10 conference will take place on June 27, 2017, in Vancouver
            B.C.
          </Text>
          <Text style={styles.title}>Code of Conduct</Text>
          <View>
            {data.map((item, i) => {
              return (
                <Accordian
                  title={item.title}
                  description={item.description}
                  key={i}
                />
                // <Text> {item.title}</Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

AboutContainer.defaultProps = {
  loading: true,
  data: {},
  dispatch: null
};

const mapStateToProps = state => ({
  loading: state.about.loading,
  data: state.about.data
});

export default connect(mapStateToProps)(AboutContainer);
