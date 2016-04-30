'use strict';
import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Donald Trump",
      initImage: this.props.imageName
    }
  }
  
  render() {
    return (
      <View>
        <View style={styles.centerText}>
          <Text style={styles.largeText}>
            Or               
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} onChangeText={(initImage) => this.setState({initImage})} value={this.state.initImage} />
          <TouchableHighlight>
            <View style={styles.searchButton}>
              <Image source={require('../assets/imgs/searchButton.png')}></Image>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    marginBottom: 15,
    alignItems: 'center'  
  },
  largeText: {
    fontSize: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 45
  },
  input: {
    height: 40,
    width: 300,
    marginLeft: 30,
    paddingLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#f8f8f8'
  },
  searchButton: {
    height: 40,
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#f8f8f8'
  }
});

module.exports = SearchComponent;