import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";
import {fetchPageData} from "./actions/actionsPage";
import {fetchSettingsData} from "./actions/actionsSettings";

const App = (props) => {
    const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchPageData());
      dispatch(fetchSettingsData())
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
