'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class YourCelebs extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            {this.props.yourCelebsTitle}
          </Text>
        </View>
        <View style={styles.yourCelebsList}>
          <Text style={styles.yourCelebs}>
            1. {this.props.yourCelebs[0]}
          </Text>
          <Text style={styles.yourCelebs}>
            2. {this.props.yourCelebs[1]}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    marginTop: 17,
    marginBottom: 15,
    backgroundColor: '#58AEE9',
    alignItems: 'center'
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 30
  },
  yourCelebs: {
    paddingLeft: 30,
    fontSize: 22
  }
});

module.exports = YourCelebs;