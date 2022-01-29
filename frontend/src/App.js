import React, {useMemo} from "react";
import "./App.scss";
import Main from "./containers/Main";
import { useDispatch, useSelector } from "react-redux";
import {listData, listDataGithub  } from "./redux/actions/dataAction";
import Loading from "./containers/loading/Loading";




const  App = ()=> {  
  

    const dispatch = useDispatch();
   useMemo(() => {
     dispatch(listData());
     dispatch(listDataGithub());

    

   },[dispatch])

  const dataList = useSelector((state) => state.dataList);

  const {loading} = dataList;

  return (
    <div>
        {loading ?  <Loading /> : <Main /> }      
    </div>
  );
}

export default App;