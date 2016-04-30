'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class NegativeTweets extends Component {
  render() {
    if( this.props.negativeTweets.length < 1 ) {
      return (
        <View>
          <View style={styles.headerWrapper}>
            <Text style={styles.header}>
              {this.props.negativeTweetsTitle}
            </Text>
          </View>
          <View style={styles.celebsNegativeTweets}>
            <Text style={styles.yourCelebs}>
              {this.props.yourCelebs[0]}
            </Text>
            <Text style={styles.tweet}>
              Loading....
            </Text>
            <Text style={styles.yourCelebs}>
              {this.props.yourCelebs[1]}
            </Text>
          </View>
        </View>
      )
    }


    var negTweets = this.props.negativeTweets
      .map((tweet,index) => {
          return (
            <View style={styles.tweetWrapper} key={++index}>
              <Text  style={styles.tweet}>
                {index}. {tweet.tweet}
              </Text>
              <View style={styles.likeWrapper}>
                <Text style={styles.likeCount}>
                  0
                </Text>
                <Image source={require('../assets/imgs/like.png')}></Image>
              </View>
            </View>
          )
    })

    return (
      <View>
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>
            {this.props.negativeTweetsTitle}
          </Text>
        </View>
        <View style={styles.celebsNegativeTweets}>
          <Text style={styles.yourCelebs}>
            {this.props.yourCelebs[0]}
          </Text>
          {negTweets}
          <Text style={styles.yourCelebs}>
            {this.props.yourCelebs[1]}
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
    paddingBottom: 10,
    fontSize: 22
  },
  tweetWrapper: {
    marginBottom: 15,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  tweet: {
    paddingLeft: 30,
    paddingRight: 5,
    fontSize: 19
  },
  likeWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  likeCount: {
    marginLeft: 30,
    marginRight: 10,
    marginBottom: 5,
    fontSize: 14
  }
});

module.exports = NegativeTweets;
