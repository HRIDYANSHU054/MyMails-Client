import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //initially true

  useEffect(function () {
    async function checkUserAuthenticated() {
      setIsLoading(true);
      try {
        const resp = await fetch(`http://localhost:3000/api/auth/check`, {
          credentials: "include",
        });
        const data = await resp.json();
        console.log(data.user);
        if (!data.user) throw new Error("user not authenticated");
        setAuthUser(data.user); //either null or authenticated user
      } catch (error) {
        console.log(error.message);
        setAuthUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    checkUserAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticating: isLoading, authUser, setAuthUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const value = useContext(AuthContext);
  if (!value)
    throw new Error("useAuthContext hook used outside of AuthProvider");
  return value;
}

export { AuthProvider, useAuthContext };
