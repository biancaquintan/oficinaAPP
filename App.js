import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      orcamentos: [],
      url: 'https://my-json-server.typicode.com/codificar/oficina/proposals'
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {

    fetch(this.state.url)
    .then(res => res.json())
    .then( res => {

      this.setState({
        orcamentos: res
      })
    })
  }

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
