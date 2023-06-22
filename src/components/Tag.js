import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';




const Tag = () => {
    const API_KEY = "C7O3T0iFZmdjQncwM8akefCxY9dtdsPb";
   
// const[gif,setgif] =useState('');
// const[load ,setload] =useState(false);
const[formdata,setformdata] = useState('')

function changehandler(event){
 setformdata(event.target.value);

}

// async function fetchdata(){
//     setload(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${formdata}`;
//    const {data} =  await axios.get(url);
//    const imgurl = data.data.images.downsized_large.url;
//    setload(false); 
//    setgif(imgurl);
//    console.log(imgurl);

// }
// useEffect(()=>{
//     fetchdata()
// },[]);

function clickhandler(){
    fetchdata(formdata);
}
const{gif,load,fetchdata} = useGif(formdata);
  return (
    <div className='w-1/2  bg-blue-600 rounded-lg border
     border-black flex items-center gap-y-5 mt-[15px] flex-col p-4'>
        <h1 className='text-3xl underline uppercase font-extrabold p-4'>Random {formdata} Gif</h1>
        {
            load ? <Spinner></Spinner> : <img src={gif} width={450}></img>
        }

        <input type='text' name='giftxt' className='w-10/12 py-2 rounded-lg mb-[20px] text-center ' value={formdata} onChange={changehandler}></input>
        <button onClick={clickhandler} 
         className='bg-green-300 text-black w-10/12 p-2 text-lg rounded-lg font-semibold uppercase'>
            Generate
        </button>
    </div>
  )
}

export default Tag