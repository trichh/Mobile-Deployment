'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

var likeButton = <Image source={require('../assets/imgs/like.png')}></Image>;

class DashboardListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <View>
        <View style={styles.tweetWrapper}>
          <Text style={styles.tweet}>
            {this.props.rowData[0]}
          </Text>
          <View style={styles.likeWrapper}>
            <Text style={styles.likeCount}>
              {this.props.rowData[1]}
            </Text>
            {this.props.rowData[2]}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tweetWrapper: {
    marginBottom: 15,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  tweet: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 18
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

module.exports = DashboardListView;
