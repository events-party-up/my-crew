import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
  header: {
    backgroundColor: colors.grey
  },
  headerRightContainer: {
    flexDirection: 'row'
  },
  icon: {
    height: '90%',
    resizeMode: 'contain'
  }
});
