import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function PhotoDetails() {

    const params = useParams();
    const [photoDetails, setPhotoDetails] = useState([]);

    useEffect(() => {
     fetchPhotos();
    },[params.id]);
 
    const fetchPhotos = async () => {
     await axios.get(`https://api.pexels.com/v1/photos/${params.id}`, {
         headers: {
           Accept: 'application/json',
           Authorization: process.env.REACT_APP_ACCESS_KEY,
         }
       })
       .then((res) => {
         setPhotoDetails(res.data.photos)
       })
       .catch((err) => {
           console.log(err);
       })
 }
  return (
    <div>
        {photoDetails.map((item) => {
          return (
            <h1>{item.id}</h1>
          )
        })}
    </div>
  )
}

export default PhotoDetails;


