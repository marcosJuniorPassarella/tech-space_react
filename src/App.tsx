import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { RoutesPaths } from "./models/enums/routesPaths";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { auth } from "./firebase/firebaseConection";

function App() {
  const navigate = useNavigate();

  const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate(RoutesPaths.Feed);
      } else {
        navigate(RoutesPaths.Login);
      }
    });
  };

  // Aki é onde nós chamamos uma função quando a tela é renderizada pela primeira vez
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
        <Route path={RoutesPaths.Feed} element={<Feed />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
