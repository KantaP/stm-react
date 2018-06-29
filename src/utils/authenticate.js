import { AsyncStorage } from 'react-native'

export const KEY = "rickyfiguresitout";
export const onSignIn = () => AsyncStorage.setItem(KEY, "true");
// set storage to hold key as TRUE
export const setStorage = (key , data) => AsyncStorage.setItem(key , JSON.stringify(data));
// set storage to hold user data
export const onSignOut = () => AsyncStorage.removeItem(KEY);
//if user signs out, remove TRUE key
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};