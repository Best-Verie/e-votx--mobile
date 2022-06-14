import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { getToken } from "../utils/token";

type User = {
  id: string;
  name: string;
}

const AuthContext = createContext<{
  authedUser: User | undefined;
  setAuthUser: (user: User | undefined) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}>({
  authedUser: undefined,
  setAuthUser: (user: User | undefined) => null,
  isLoggedIn: false,
  setIsLoggedIn: (val: boolean) => null,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
