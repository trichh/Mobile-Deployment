'use strict';
import React, {
  Component,
  StyleSheet,
  Image,
  View
} from 'react-native';

var Header = require('./components/Header');
var TopTweets = require('./components/TopTweets');
var DashboardNav = require('./components/DashboardNav');

var likeButton = <Image source={require('./assets/imgs/like.png')}></Image>;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Top 5 Tweets Of The Week",
      tweets:
        {
          tweet1: [
            "RT @FreddyAmazin: I'M SCREAMING THEY DROVE PAST A TRUMP RALLY AND PLAYED THIS https://t.co/gZAnYw1sXs", 1271, likeButton
          ],
          tweet2: [
            "@HeyNiggahItsMoe RS! And put f Donald trump on the back window", 1218, likeButton
          ],
          tweet3: [
            "@Spirit4Trump you might be right. Cruz burned his bridge with Trump ways back and Kasich belongs as the new host of MR Rogers neighborhood.", 1164, likeButton
          ],
          tweet4: [
            "RT @mitchellvii: New Ipsos/Reuters - Trump 49 - 31 over Cruzerloser https://t.co/lncG3GgWuq", 1088, likeButton
          ],
          tweet5: [
            "RT @dailydose: These dudes drove past a Donald Trump rally playing @YG &amp; @NipseyHussle's \"F*** Donald Trump\" https://t.co/YEE36xZVBA", 1027, likeButton
          ]
        }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle={this.state.header} />
        <TopTweets topTweets={this.state.tweets} />
        <DashboardNav navigator={this.props.navigator} />
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

module.exports = Dashboard;
