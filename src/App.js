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
const URL = "https://api.nasa.gov/planetary/apod?api_key=pmW4WE9mA9HM05TfozdfR4Ej2DM7Nt79nLVJa0qU";
function App() {
  //let mockData = {"date":"2019-08-14","explanation":"What's that next to the Moon? Saturn. In its monthly trip around the Earth -- and hence Earth's sky -- our Moon passed nearly in front of Sun-orbiting Saturn earlier this week.  Actually the Moon passed directly in front of Saturn from the viewpoints of a wide swath of Earth's Southern Hemisphere.  The featured image from Sydney, Australia captured the pair a few minutes before the eclipse.  The image was a single shot lasting only 1/500th of a second, later processed to better highlight both the Moon and Saturn. Since Saturn is nearly opposite the Sun, it can be seen nearly the entire night, starting at sunset, toward the south and east.  The gibbous Moon was also nearly opposite the Sun, and so also visible nearly the entire night -- it will be full tomorrow night. The Moon will occult Saturn again during every lap it makes around the Earth this year.","hdurl":"https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_1280.jpg","media_type":"image","service_version":"v1","title":"Saturn Behind the Moon","url":"https://apod.nasa.gov/apod/image/1908/MoonSaturn_Patonai_960.jpg"};
  // let [data,setData] = useState(mockData);
  let imageData = useContext(ImageContext);
  let {data,setData,current,setCurrent,original,setOriginal} = imageData();
  let [archive, setArchive] = useState([]);

  useEffect(() => {
    let getData = () => {
      axios.get(URL)
        .then((res) => {
          setData(res.data);
          setCurrent(res.data.hdurl);
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