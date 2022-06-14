import * as SecureStore from "expo-secure-store";

export async function getToken() {
  const token = await SecureStore.getItemAsync("token");
  return token;
}

export async function logout() {
  await SecureStore.deleteItemAsync("token");
}
