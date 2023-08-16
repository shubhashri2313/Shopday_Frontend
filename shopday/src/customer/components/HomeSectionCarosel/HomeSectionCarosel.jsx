import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from "../../../Data/mens_kurta";
const HomeSectionCarosel = ({data,sectionName}) => {

  const[activeIndex,setActiveIndex]=useState(0);//customised hook  bydefalut activeIndex =0

  const responsive = {
    //if width is between 0 to 568 it will show one item
    0: { items: 1 },
    //if width is between 520 to 720 it will 2 items
    520: { items: 2 },
    //if width is greater than 720 to 1024 it will 3 items
    720: { items: 3 },
    //if width is greater than 1024 it will 5 items
    1024: { items: 5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)
  const items = data.slice(0,10).map((item) => <HomeSectionCard  product ={item} />);
 
  return (
    <div className=" border ">
       <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          //buttons got disabled her
          disableButtonsControls
      
          //this component make it responsive in rendering the no of items
          responsive={responsive}
          disableDotsControls  //disabled dots
          onSlideChanged={syncActiveIndex} //slide will change if our activeindex changes
          activeIndex={activeIndex}

        />
        
       {activeIndex !==items.length-5 && <Button 
       //activeIndex!==items.length-5===>to hide arrow at bigining and end 
        varient="contained" 
        className="z-50 bg-white"
        onClick={slideNext}
         sx={{position:'absolute' ,top:"8rem",
         right:"0rem",
        transform:" translateX(50%) rotate(90deg)",bgcolor:"white"}}  
      aria-label="next">
        <KeyboardArrowLeftIcon 
        sx={{transform:" rotate(90deg)",color:"black"}}/>
        </Button> }

        {activeIndex !==0 && <Button 
        varient="contained" 
        className="z-50 bg-white" 
        onClick={slidePrev}
        sx={{position:'absolute' ,top:"8rem",
        left:"0rem",transform:" translateX(50%) rotate(-90deg)",bgcolor:"white"}}  
        aria-label="next">
        <KeyboardArrowLeftIcon 
        sx={{transform:" rotate(90deg)",color:"black"}}/>
        </Button>}


      </div>
    </div>
  );
};

export default HomeSectionCarosel;
