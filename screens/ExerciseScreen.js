import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: [],
    });
  }

  static navigationOptions = {
    title: 'Exercise Database'
  };


  componentDidMount() {
      database = firebase.database();
      var ref = database.ref('Exercises/');

      ref.on('value', (childSnapshot) => {
          const sheet = [];
          childSnapshot.forEach((doc) => {
              sheet.push({
                  key: doc.key,
                  Title: doc.toJSON().Title,
                  Description: doc.toJSON().Description,
                  Picture: doc.toJSON().Picture,
              });
              this.setState({
                  data: sheet,
              })
          });
      });

  }

  navigate(item) {
    this.props.navigation.navigate('ExerciseDes', { info: item } );
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.navigate(item.key)}
      >
        <View>
          <Text style={styles.infoText}>{item.key}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.title}>
          Exercise Database
        </Text>
          <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          // renderItem={({item}) =>
          // <View style={styles.flatview}>
          //   <Text style={styles.name}>{item.Title}</Text>
          //   <Text style={styles.name}>{item.Description}</Text>
          //   <Text style={styles.email}>{item.Picture}</Text>
          // </View>
          // }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#3498DB',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  },
  row: {
    padding: 15,
    marginBottom: 5,

  },

  signupContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'stretch',
    flexGrow: 1,
  },
  infoText: {
    color: '#FFF',
    marginBottom: 1,
    textAlign: 'left',
    paddingHorizontal: 10,
    fontFamily: 'DevanagariSangamMN',
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    marginVertical: 15,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'AvenirNext-BoldItalic',
    fontSize: 40,
    marginBottom: 40,
  },
  textInput: {
    height: 40,
    borderRadius: 4,
    borderWidth: 2,
    fontFamily: 'Verdana-Italic',
    borderColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    fontSize: 15,

  },
  totalButtonContainer: {
    marginBottom: 40,
  },
  barUI: {
    marginTop: -10,
    marginBottom: 10,
    color: '#5DADE2',
    fontSize: 20,
    fontFamily: 'Georgia-Bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 5,
    backgroundColor: '#2874A6',
    paddingVertical: 12,
   },
   buttonText: {
     textAlign: 'center',
     color: '#FFF',
     fontWeight: '500',
   }

});
