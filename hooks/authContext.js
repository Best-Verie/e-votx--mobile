import { View, Text } from "react-native";
import { createContext, useEffect, useState } from "react";
import { getToken } from "../utils/token";
const AuthContext = createContext({
  authedUser: {},
  setAuthUser: (user) => null,
  isLoggedIn: () => null,
  setIsLoggedIn: () => null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      let token = await getToken();
      setIsLoggedIn(token != null);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading ....</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        authedUser: user,
        setAuthUser: setUser,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
