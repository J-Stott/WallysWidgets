import React, { useEffect } from "react";
import { Route, useLocation, useHistory } from "react-router-dom";
import "./App.css";

import HomePage from "./Home/Pages/home";
import AboutPage from "./About/Pages/about";
import ProductsPage from "./Products/Pages/products";
import ContactPage from "./Contact/Pages/contact";
import ScrollToTop from "./Shared/Components/ScrollToTop/ScrollToTop";

import MainNavigation from "./Shared/Navigation/MainNavigation";
import { CSSTransition } from "react-transition-group";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
];

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let found = false;
    routes.forEach((route) => {
      if (route.path === location.pathname) {
        found = true;
      }
    });

    if (!found) {
      history.push("/");
    }
  }, [location, history]);

  return (
    <React.Fragment>
      <ScrollToTop />
      <MainNavigation />
      <div className="page-container">
        {routes.map(({ path, Component }) => {
          return (
            <Route key={path} path={path} exact>
              {({ match }) => (
                <CSSTransition
                  in={match !== null}
                  timeout={{ enter: 500, exit: 500 }}
                  classNames="page"
                  mountOnEnter
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
