import "./scroll.css"
import {CgArrowLongRightL} from "react-icons/cg"
import {CgArrowLongLeftL} from "react-icons/cg"
import { useEffect, useRef, useState } from "react";

function Scroll({clientHeight}){


    const [numScroll, setNumScroll]=useState(false)
    const [cHeight, setCHeight]=useState(false)
   

    useEffect(() => {
        const handleScroll = e =>{
           if (window.scrollY > 300) {
            setNumScroll(true);
           }else{
            setNumScroll(false)
           }
           if(window.scrollY > clientHeight/1.5){
            setCHeight(true)
           }else(
            setCHeight(false)
           )
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [window.scrollY]);


    

    return(
        <div className="scroll">
            <CgArrowLongLeftL className="scrollArrow scrollArrowUp" style={{visibility: numScroll? 'initial' : 'hidden'}}/>
            <h3 className="scrollCenter">SCROLL</h3>
            <CgArrowLongRightL className="scrollArrow scrollArrowDown" style={{visibility: cHeight? 'hidden' : 'initial'}}/>
        </div>
    )
}

export default Scroll;