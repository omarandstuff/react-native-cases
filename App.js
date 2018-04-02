import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import * as icons from './icons'

const list = []

let iconsValues = Object.values(icons)

for(var i = 1; i <= 1000000; i++) {
  list.push({
    key: i,
    title: `Item ${i}`,
    note: `This is item #${i}`,
    icon: iconsValues[Math.floor(Math.random() * (iconsValues.length - 1))]
  })
}

class ListItem extends React.PureComponent {
  render() {
    const item = this.props.item
    return (
      <View style={styles.item}>
        <Image source={item.icon} style={styles.itemImage} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.note}</Text>
        </View>
      </View>
    )
  }
}

export default class App extends React.Component {
  _renderItem = ({item}) => (
    <ListItem item={item} />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  title: {
    fontWeight: 'bold'
  }
});
