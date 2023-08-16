import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10' >
        {/* space-y-10 coz we r going to use multiple carousel here */}
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Men's shoes"}/> 
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Men's shirt"}/>
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Women's Kurta"}/>
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Women's saree"} />
        <HomeSectionCarosel  data={mens_kurta} sectionName={"Women's tops"} />
    
      </div>
    </div>
  );
};
export default HomePage;
