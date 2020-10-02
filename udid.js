import {NativeModules} from 'react-native'
const UDID = NativeModules.UDID

export async function getUdid() {
  return UDID.get()
}

