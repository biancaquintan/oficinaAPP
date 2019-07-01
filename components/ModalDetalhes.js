import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal
} from 'react-native';

export default class ModalDetalhes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: props.modalVisible
    };
  };
  
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {

    const { selectedItem } = this.props;

    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
          <View style={styles.content}>
            <Text style={styles.titulo}>DESCRIÇÃO</Text>
            <Text>{ selectedItem.description }</Text>
            <TouchableHighlight onPress={() => { this.props.hideModal() }}>
              <Text style={styles.close}>Fechar</Text> 
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    top: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    padding: 35,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    elevation: 6
  },
  close: {
    color: 'lightblue',
    paddingTop: 15
  },
  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5
  }
});

module.export = ModalDetalhes;
  