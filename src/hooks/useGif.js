
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";






const useGif = (tag) => {
    const API_KEY = "C7O3T0iFZmdjQncwM8akefCxY9dtdsPb";

    
const rurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const turl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;




  
    const[gif,setgif] =useState('');
    const[load ,setload] =useState(false);
    // function changehandler(event){
    //  setformdata(event.target.value);
    
    // }
    
    async function fetchdata(tag){
        setload(true);
       const {data} =  await axios.get(tag?turl:rurl);
       const imgurl = data.data.images.downsized_large.url;
       setload(false); 
       setgif(imgurl);
       console.log(imgurl); 
    }
    useEffect(()=>{
        fetchdata('car')
    },[]);

    return{gif,load,fetchdata};
};
export default useGif;
