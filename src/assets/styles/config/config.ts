import { Platform } from "react-native"

const AppStyleConfig: any = {
  statusbarStyle: Platform.OS === 'ios' ? 'dark' : 'light',
}

export {
  AppStyleConfig 
}
