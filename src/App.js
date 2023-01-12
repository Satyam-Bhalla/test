import './App.css';
import FrameFlow from './Components/FrameFlow';
import MainImage from './Components/MainImage';
import BoundingBox from './Components/BoundingBox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

function App() {
  const currentFrame = useSelector((state) => state.reducerFnA.currentFrame);
  const [imageLink, setImageLink] = useState("");
  const [newFrameStr, setNewFrameStr] = useState("00000");

  const returnFrameStr = (num) => {
    switch (num) {
      case 0:
        return "";
      case 1:
        return "0";
      case 2:
        return "00";
      case 3:
        return "000";
      case 4:
        return "0000";
      default:
        return "";
    }
  }

  const adjustFrameNumber = (num) => {
    const numLength = num.toString().length;
    const diff = 5 - numLength;
    const zeroes = returnFrameStr(diff);
    const zeroesAdded = zeroes + `${num}`;
    setNewFrameStr(zeroesAdded);
  }

  const getVideoName = async () => {
    const res = axios.get("http://invisai-frontend-interview-data.s3-website-us-west-2.amazonaws.com/video.json");
    return res.data;
  }

  async function getImage() {
    const response = await fetch(`http://invisai-frontend-interview-data.s3-website-us-west-2.amazonaws.com/frames/${newFrameStr}.jpg`, {
      method: 'GET',
      headers: { "Accept": "application/octet-stream" }
    });
    const result = response.blob();
    return result;
  }
  const demoNew = async () => {
    let response = await getImage(); //response is a blob
    //the Blob type is initially 'text/html' for some reason, so the below is trying to 'caste' that into a image mime type.
    const myBlob = new Blob([response], { type: 'image/jfif' }); //tried 'jpeg', '*',etc
    const myBlobURL = URL.createObjectURL(myBlob);
    setImageLink(myBlobURL);
  }


  useEffect(() => {
    // API call
    getVideoName();
  }, []);

  useEffect(() => {
    adjustFrameNumber(currentFrame);
    demoNew();
  }, [currentFrame]);
  console.log(imageLink);
  return (
    <div className="App">
      <FrameFlow />
      <MainImage imageSrc={imageLink} />
      <BoundingBox />
    </div>
  );
}

export default App;
