import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponents";
import AccountComponent from "./pages/AccountComponent";
import CardsComponent from "./pages/CardsComponent";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "./useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div className="ui container">
      <h2>Example</h2>
      <Router>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/accounts">Accounts (Protected)</a>
          </li>
          <li>
            <a href="/cards">Cards (UnProtected)</a>
          </li>
        </ul>
        {isAuth ? (
          <>
            <div className="ui message brown">You are logged in..</div>
            <button className="ui button blue" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="ui message violet">You are logged out..</div>
            <button className="ui button blue" onClick={login}>
              Login
            </button>
          </>
        )}
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/cards" component={CardsComponent} />
          <ProtectedRoute
            path="/accounts"
            component={AccountComponent}
            auth={isAuth}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
