import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Oficina APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    padding: 5,
    textAlign: 'center'
  }
});
