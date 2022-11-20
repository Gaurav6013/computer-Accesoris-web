import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Container/Home";
import About from "./Container/About";
import Computer from "./Container/Computer";
import Laptop from "./Container/Laptop";
import Product from "./Container/Product";
import Contact from "./Container/Contact";
import { Switch } from "react-router-dom";
import Login from "./Container/Login";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute exact path="/About" component={About} />
              <PublicRoute exact path="/Computer" component={Computer} />
              <PublicRoute exact path="/Laptop" component={Laptop} />
              <PublicRoute exact path="/Product" component={Product} />
              <PrivateRoute exact path="/Contact" component={Contact} />
              <PublicRoute
                exact
                path="/Login"
                restricted={true}
                component={Login}
              />
            </Switch>
          </PersistGate>
          <Footer />
        </Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
