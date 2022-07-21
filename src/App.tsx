import Overview from './components/Header/Overview';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { getData } from './store/Actions';
import { useDispatch } from 'react-redux';

import classes from "./App.module.css"


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className={classes.container}>
      <Overview />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
