import React, { Component } from 'react';
import ModalDetalhes from './components/ModalDetalhes';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

class Item extends Component { 
  _onPress = () => { 
    this.props.onPressItem(this.props.item); 
  }; 
  render() { 
    return(
      <TouchableOpacity 
        {...this.props}
        onPress={this._onPress}
        style={styles.item} >
        <Text style={styles.texto}> { ['\nCliente: ' + this.props.item.customer + 
                  '\nVendedor: ' + this.props.item.seller + 
                  '\nValor: ' +  this.props.item.value] } </Text>
      </TouchableOpacity>
    ) 
  } 
}

export default class App extends Component<Props> {

  constructor(props){
    super(props);

    this.state = {
      orcamentos: [],
      url: 'https://my-json-server.typicode.com/codificar/oficina/proposals',
      isModalVisible: false,
      selectedItem: null
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

  _onPressItem = (item) => { 
    this._showModal(item);
  };

  _hideModal = () => {
    this.setState({isModalVisible: false})
  }

  _showModal = (item) => this.setState({ isModalVisible: true, 
  selectedItem: item })

  _renderItem = ({item}) => (
    <Item 
      item={item}
      onPressItem={() => this._onPressItem(item)}
    />
  );

  renderSeparator = () => {
    return (
      <View style={{height: 1, width: "95%", backgroundColor: "#CED0CE", marginVertical: 2}}></View>
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Oficina APP</Text>
        <ScrollView style={styles.lista}>
          <Text style={styles.subtitulo}>Controle de Orçamentos</Text>
          <FlatList data={this.state.orcamentos}
            renderItem={this._renderItem}                    
            keyExtractor = {(item, index) => index.toString()}
            ItemSeparatorComponent = {this.renderSeparator}
          />
        </ScrollView>
        { this.state.isModalVisible && <ModalDetalhes selectedItem={this.state.selectedItem} modalVisible={this.state.isModalVisible} hideModal={this._hideModal} /> }
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
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    padding: 5,
    textAlign: 'center'
  },
  lista: {
    margin: 20,
  },
  subtitulo: {
    fontSize: 18,
  },
  texto: {
    paddingVertical: 3
  }
});
