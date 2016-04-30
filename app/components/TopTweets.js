'use strict';
import React, {
  Component,
  View,
  ListView
} from 'react-native';

var DashboardListView = require('./DashboardListView');

class TopTweets extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.topTweets)
    }
  }
  
  renderRow(rowData) {
    return (
      <View>
        <DashboardListView rowData={rowData} />
      </View>
    )
  }
  
  render() {
    return (
      <View>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    )
  }
}

module.exports = TopTweets;