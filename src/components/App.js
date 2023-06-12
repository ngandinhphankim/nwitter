import AppRouter from "./Router";
import { useEffect, useState } from "react";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
    setInit(true)
  }, [])

  return (
    <>
      {init ? <div><AppRouter isLoggedIn={isLoggedIn} /></div> : "Loading..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
