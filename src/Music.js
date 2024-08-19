
import {React, useEffect, useState, useRef} from "react";
import axios from "axios";


const Music = () =>{
    const [allmusic , setallmusic ]= useState([])
    const [playing, setplaying]=useState(false)
    let audioRef = useRef([])
    useEffect(()=>{
    axios.get("https://robo-music-api.onrender.com/music/my-app")
        .then((res)=>{
            console.log(res);
            setallmusic(res.data)
            console.log(allmusic);
         }).catch((error) => {
            console.log(error);
         })

    }, )

    const playmusic = (el,i)=>{
        // console.log("working");
        let music =audioRef.current[i]
        
        console.log(el);
        if(playing ==false){
            music.play()
            setplaying(true)
        }else{
            setplaying(false)
            music.pause()
        }
        
        
    }


    return(
        <div className= 'container-fluid'>
           <div className= 'row gap-3'>

            {allmusic.map((el, i)=>(
                <>
                <div className= 'col-3' class ='card' style={{width: "18rem"}}>
                <audio ref={el=>audioRef.current[i]= el} src={el.songUrl}></audio>
                   <img src={el.songImage} class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">{el.songTitle}</h5>
                   <p class="card-text">{el.artistName}</p>
                   <button onClick ={()=>playmusic(el.songUrl,i)} class='btn btn-primary'>Go anywhere</button>
                 </div>
               </div>
               </>
            )) }
            
          </div>
        </div>
        )
  }

export default Music;