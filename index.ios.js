import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator
} from 'react-native';

var Dashboard = require('./app/Dashboard');
var Search = require('./app/Search');
var Celebrity = require('./app/Celebrity');

class application extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'Dashboard'
        }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch(route.id) {
      case 'Dashboard':
        return(<Dashboard navigator={navigator} title="Dashboard" />);
      case 'Search':
        return(<Search navigator={navigator} title="Search" />);
      case 'Celebrity':
        return(<Celebrity navigator={navigator} title="Celebrity" />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('application', () => application);