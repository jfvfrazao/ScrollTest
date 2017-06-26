import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert, Text, TouchableOpacity, Dimensions, ListView } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class ScrollTest extends Component {

  constructor(props) {
    super(props);

    this.dataSource = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.dataSource = this.dataSource.cloneWithRows([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Touchables in ScrollView</Text>
        <ScrollView
          style={styles.viewContainer}
          contentContainerStyle={{alignItems: 'center'}}>
          {this.renderScrollElements()}
        </ScrollView>

        <Text>Touchables in ListView</Text>
        <ListView style={styles.viewContainer}
          contentContainerStyle={{alignItems: 'center'}}
          dataSource={this.dataSource}
          renderRow={this.renderTouchables}
        />

      </View>
    );
  }

  renderScrollElements() {
    let buttons = [];
    for(let i = 0; i < 20; i++) {
      buttons.push(this.renderTouchables(i));
    }
    return buttons;
  }

  renderTouchables(index) {
    return(
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('You touched me!',)}>
        <Text>{index}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#F5FCFF',
  },
  viewContainer: {
    width: width / 2 + 50,
    maxHeight: 200
  },
  button: {
    width: width / 2,
    backgroundColor: 'red',
    height: 20,
    marginBottom: 5},
});
