import { StyleSheet } from 'react-native'
import Colors from '../../utils/colors'

export default StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.whiteIce,
  },
  contentContainer: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    alignItems: 'center',
    flex: 2,
    width: '100%'
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: '50%'
  },
  input: {
    marginTop: 10
  },
  buttonLogin: {
    backgroundColor: Colors.purple,
    marginTop: 10,
    width: '50%'
  },
  logoBridge: {
    resizeMode: 'contain',
    width: '25%',
  }
})
