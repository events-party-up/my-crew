import { StyleSheet } from 'react-native'
import Colors from '../../utils/colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.whiteIce,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    marginTop: 70,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: '50%'
  },
  form: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: Colors.whiteIce
  },
  input: {
    marginTop: 20
  },
  buttonConfirm: {
    backgroundColor: Colors.purpleLight,
    marginTop: 30,
    width: '50%'
  },
  buttonCancel: {
    backgroundColor: Colors.grey,
    marginTop: 20,
    marginBottom: 20,
    width: '50%'
  },
  logoBridge: {
    resizeMode: 'contain',
    width: '25%',
    marginTop: 0
  }
})