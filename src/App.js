import './App.css';
import './helpers/Currency';
import './helpers/Date';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.indigo-lime.min.css';
import 'material-design-lite/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/actions';
import { LandingPage } from './LandingPage';
import { FilmDetails } from './FilmDetails';
import { PickSeats } from './PickSeats';
import { Checkout } from './Checkout';
import { NotFound } from './NotFound';
import { Login } from './authentication/Login';
import { Logout } from './authentication/Logout';
import { Account } from './authentication/Account';

function App() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(actions.fetchInitialData());
    }, []);

  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" className="mdl-layout-title"  style={{ ...styles.navlink, ...styles.topMenuNavLink }} >Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="/account" className="mdl-layout__tab">My account</a>
            <a href="/logout" className="mdl-layout__tab">logout</a>
            <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
            <a href="/login" className="mdl-layout__tab">Login</a>
            <a href="/register" className="mdl-layout__tab">Register</a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title" style={{...styles.navlink, ...styles.topMenuNavLink}}>Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content" style={styles.pageContent}>
        {
          <>
            <LandingPage />
            <hr/>
            <FilmDetails />
            <hr/>
            <PickSeats />
            <hr/>
            <NotFound />
            <hr/>
            <Checkout />
            <hr/>
            <Account></Account>
            <hr/>
            <Login />
            <hr/>
            <Logout />
            <hr/>
          </>
        }
      </main>
      <footer>
      </footer>
    </div>
  );

  // console.log("1234567".toCurrency());
}

const styles = {
  navlink: {
    padding: '10px',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  drawerNavLink: {
    color: '#424242',
  },
  topMenuNavLink: {
    color: 'white',
  },
  pageContent : {
    backgroundColor: "indigo"
  }
}

export default App;