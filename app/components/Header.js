'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            {this.props.headerTitle}
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
  }
});

module.exports = Header;