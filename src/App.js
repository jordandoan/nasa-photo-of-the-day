import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import "./App.css";
import ArchiveBar from "./components/Archive/ArchiveBar";
import NavBar from "./components/NavBar/NavBar";
import Error from "./components/Misc/Error";
import Loading from "./components/Misc/Loading";
import ImageSection from "./components/Image/Main";
import styled from "styled-components";
import ImageContext, {ImageProvider} from "./ImageContext"
import {oldDates} from "./components/Archive/Dates";

/*
  API:
    1000 per hour
    date: Date of Picture of the day
    explanation: A caption. Story?
    hdurl: link to hd img
    media_type: image
    service-version: "v1"
    title: 
    url: smaller image link
  QUERY: &date=YYYY-MM-DD
*/
const URL = "https://api.nasa.gov/planetary/apod?api_key=uXT4531jbPEaeOzwwqMGmNR2rkLV4Lhz2ssdj6TI";
function App() {
  let imageData = useContext(ImageContext);
  let {data,setData,current,setCurrent,original,setOriginal} = imageData();
  let [archive, setArchive] = useState([]);

  useEffect(() => {
    let getData = () => {
      axios.get(URL)
        .then((res) => {
          setData(res.data);
          setOriginal(res.data.hdurl);
        })
        .catch(err => console.log(err));
      axios.all(oldDates.map((date) =>{
          return (axios.get(`${URL}&date=${date}`)
              .then(res => res.data))
      })).then(results => {
          setArchive(results);
      });
      console.log("data fetched!");
    }
    getData();
  }, [])

  let Main = styled.div`
    display:flex;
    justify-content: space-evenly;
    max-width:1500px;
    width:80%;
    margin-top:20px;
  `
  if (!data) {
    return ( <Loading/>)
  }
  return (
    <ImageProvider value={
      {data:data,
        setData:setData,
        current:current,
        setCurrent:setCurrent,
        original:original,
        setOriginal:setOriginal,
      }
    }
    > 
      <div className="App">
        <NavBar/>
        <Main>
          <ArchiveBar archive={archive}/>
          <ImageSection/>
        </Main>
      </div>
    </ImageProvider>
  );
}

export default App;
export {URL};