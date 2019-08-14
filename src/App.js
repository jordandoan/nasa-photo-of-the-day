import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Button from "./components/Buttons/Button";
import ArchiveBar from "./components/Archive/ArchiveBar"
const URL = "https://api.nasa.gov/planetary/apod?api_key=pmW4WE9mA9HM05TfozdfR4Ej2DM7Nt79nLVJa0qU";
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

function App() {

  let [data,setData] = useState("hey");
  let [query,setQuery] = useState("");
  // useEffect(() => {
  //   let fetchData = () => {
  //     axios.get(URL + query)
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err))
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Button data={data}/>
      <ArchiveBar/>
      {/* <img src={data.url}/>
      <p>{data.explanation}</p> */}
    </div>
  );
}

export default App;
