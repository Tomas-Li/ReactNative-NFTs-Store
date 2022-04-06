import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
  //This will tell us when the focus is in the status bar!
  const isFocused = useIsFocused(); 
  
  return isFocused ? <StatusBar animated={true} {...props}/> : null
}

export default FocusedStatusBar