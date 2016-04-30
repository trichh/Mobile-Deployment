'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var windowWidth = windowSize.width;
var windowHeight = windowWidth - 114;

class CelebImage extends Component {
  onHomeButtonPress(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View>
        <View style={styles.swipeContainer}>
          <Image style={styles.celebImage} source={imageMap[this.props.imageName]} />
        </View>
        <View style={styles.searchIcons}>
          <View style={styles.denyButton}>
            <Image source={require('../assets/imgs/deny.png')}></Image>
          </View>
          <TouchableHighlight onPress={this.onHomeButtonPress.bind(this)}>
            <View style={styles.homeButton}>
              <Image source={require('../assets/imgs/home.png')}></Image>
            </View>
          </TouchableHighlight>
          <View style={styles.acceptButton}>
            <Image source={require('../assets/imgs/accept.png')}></Image>
          </View>
        </View>
      </View>
    )
  }
}

const imageMap = {
  'Trump': require("../assets/imgs/trump.jpg"),
  'Kanye': require("../assets/imgs/kanye.jpg")
}

const styles = StyleSheet.create({
  swipeContainer: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  celebImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight
  },
  searchIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  denyButton: {
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50
  },
  homeButton: {
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50
  },
  acceptButton: {
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50
  }
});

module.exports = CelebImage;
