'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

class RecommendedCelebs extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            {this.props.recommendedCelebsTitle}
          </Text>
        </View>
        <View style={styles.recommendedCelebsList}>
          <Text style={styles.recommendedCelebs}>
            1. {this.props.recommendedCelebs[0]}
          </Text>
          <Text style={styles.recommendedCelebs}>
            2. {this.props.recommendedCelebs[1]}
          </Text>
          <Text style={styles.recommendedCelebs}>
            3. {this.props.recommendedCelebs[2]}
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
  recommendedCelebs: {
    paddingLeft: 30,
    fontSize: 22
  }
});

module.exports = RecommendedCelebs;