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
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.isModalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}>
        <View style={styles.container}>
          <Text>DETALHES DE ORÇAMENTO</Text>
          <Text>{ 'Descrição: ' + selectedItem.description }</Text>
          <TouchableHighlight onPress={() => { this.props.hideModal() }}>
            <Text>Close</Text> 
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});

module.export = ModalDetalhes;
  