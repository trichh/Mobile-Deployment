'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';

class DashboardNav extends Component {
  onSearchButtonPress(){
    this.props.navigator.push({
      id: 'Search'  
    }); 
  }
  
  onCelebrityButtonPress(){
    this.props.navigator.push({
      id: 'Celebrity'  
    });
  }
  
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight onPress={this.onSearchButtonPress.bind(this)}>
          <View style={styles.searchButton}>
            <Image source={require('../assets/imgs/search.png')}></Image>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onCelebrityButtonPress.bind(this)}>
          <View style={styles.celebrityButton}>
            <Image source={require('../assets/imgs/celebrities.png')}></Image>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  searchButton: {
    marginLeft: 50,
    marginBottom: 15,
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50
  },
  celebrityButton: {
    marginRight: 50,
    marginBottom: 15,
    padding: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50
  }
});

module.exports = DashboardNav;