import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';




const Random = () => {
//     const API_KEY = "C7O3T0iFZmdjQncwM8akefCxY9dtdsPb";
   
// const[gif,setgif] =useState('');
// const[load ,setload] =useState(false);

// async function fetchdata(){
//     setload(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//    const {data} =  await axios.get(url);
//    const imgurl = data.data.images.downsized_large.url;
//    setload(false);
//    setgif(imgurl);
//    console.log(imgurl);

// }
// useEffect(()=>{
//     fetchdata()
// },[]);
const{gif,load,fetchdata} = useGif();
function clickhandler(){
    fetchdata();
}

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border
     border-black flex items-center gap-y-5 mt-[15px] flex-col p-4'>
        <h1 className='text-3xl underline uppercase font-extrabold p-4'>Random Gif</h1>
        {
            load ? <Spinner></Spinner> : <img src={gif} width={450}></img>
        }
        <button onClick={clickhandler} 
         className='bg-green-300 text-black w-10/12 p-2 text-lg rounded-lg font-semibold uppercase'>
            Generate
        </button>
    </div>
  )
}

export default Random