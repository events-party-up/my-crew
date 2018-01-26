import { StyleSheet } from 'react-native'
import Colors from '../../utils/colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.whiteIce,
    flex: 1,
    paddingBottom: 10
  },
  title: {
    marginTop: 0,
    marginBottom: 20
  },
  input: {
    alignSelf: 'center',
    marginBottom: 10
  },
  inputInner: {
    backgroundColor: Colors.whiteIce
  },
  buttonProfile: {
    alignSelf: 'center',
    backgroundColor: Colors.purple,
    width: '50%'
  },
  buttonPassword: {
    alignSelf: 'center',
    backgroundColor: Colors.red,
    width: '50%'
  },
  buttonText: {
    color: 'white'
  }
})
