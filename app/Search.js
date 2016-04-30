'use strict';
import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

var Header = require('./components/Header');
var CelebImage = require('./components/CelebImage');
var SearchComponent = require('./components/SearchComponent');

var celebrityObject = {
    array: [{
      name: "Donald Tump",
      image: "trump"
    },
    {
      name: 'Kanye Test',
      image: "kanye"
    }]
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Search Celebrities",
      name: "Donald Trump",
      image: "Trump"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle={this.state.header} />
        <CelebImage navigator={this.props.navigator} imageName={this.state.image} />
        <SearchComponent imageName={this.state.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Search;
