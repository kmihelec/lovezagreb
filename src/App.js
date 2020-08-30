import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPageData} from "./actions/actionsPage";
import {fetchSettingsData} from "./actions/actionsSettings";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import MainStory from "./components/MainStory/MainStory";
import style from "./App.module.css"

const App = (props) => {
    const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchPageData());
      dispatch(fetchSettingsData())
  }, []);

    const loadingPage = useSelector(state => state.page.loading)
    const loadingSetting = useSelector(state=> state.settings.loading);

    if (loadingPage || loadingSetting) return <div>Loading</div>

    else return (
    <div className={style.App}>
        <Header />
        <MainStory />
        <MainBody />
        <Footer />
    </div>
  );
}

export default App;
