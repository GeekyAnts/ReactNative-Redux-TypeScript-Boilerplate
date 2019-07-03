import { AsyncStorage } from "react-native";

export function fetchImageService(page?: number, limit?: number) {
  return new Promise((resolve, reject) => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
      .then(res => {
        return res.json();
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function loginUserService(username: string, password: string) {
  return new Promise((resolve, reject) => {
    let userToken = `${username}${password}`;
    AsyncStorage.setItem("userToken", userToken)
      .then(() => {
        resolve(userToken);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem("userToken")
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
