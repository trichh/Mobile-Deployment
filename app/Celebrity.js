'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

var RecommendedCelebs = require('./components/RecommendedCelebs');
var YourCelebs = require('./components/YourCelebs');
var NegativeTweets = require('./components/NegativeTweets');
var PositiveTweets = require('./components/PositiveTweets');
var api = require('./util/api');

class Celebrity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedCelebsHeader: "Recommended Celebrities",
      recommendedCelebs: ["Donald Trump", "Mike Tyson", "Kanye West"],
      yourCelebsHeader: "Celebrities You Follow",
      yourCelebs: ["Donald Trump", "Miley Cyrus"],
      negativeTweetsHeader: "Negative Tweets",
      negativeTweets: [],
      positiveTweetsHeader: "Positive Tweets"
    }
  }

  componentWillMount() {
    api.getTweets().then((res) => {
      var response = res.tweets;
      this.setState({
        negativeTweets: response
      });
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <RecommendedCelebs recommendedCelebsTitle={this.state.recommendedCelebsHeader} recommendedCelebs={this.state.recommendedCelebs} />
          <YourCelebs yourCelebsTitle={this.state.yourCelebsHeader} yourCelebs={this.state.yourCelebs} />
          <NegativeTweets negativeTweetsTitle={this.state.negativeTweetsHeader} yourCelebs={this.state.yourCelebs} negativeTweets={this.state.negativeTweets} />
          <PositiveTweets positiveTweetsTitle={this.state.positiveTweetsHeader} yourCelebs={this.state.yourCelebs} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = Celebrity;
