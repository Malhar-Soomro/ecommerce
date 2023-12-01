import { sliderData } from "../../data";
import { useState } from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

const Slider = () => {
      const [transform, setTransform] = useState(0);

      const handleClick = (direction) => {
        if(direction === "prev"){
          if(transform === 0)
        setTransform(-200);
        else if(transform === -200){
          setTransform(-100);
        }
        else setTransform(0);

        }
        else {
          if(transform === 0)
          setTransform(-100);
          else if(transform === -100){
            setTransform(-200);
          }
          else setTransform(0);
        }
        console.log(transform)

      }

  return (
    <div className="flex h-[100vh] w-[100%] overflow-hidden">

      <div className="z-10" onClick={(e)=> handleClick(e.target.id)}>
      <ArrowLeftOutlined id="prev" className="absolute left-10 top-[50%] cursor-pointer bg-amber-500 border-r-[50%] text-3xl"/>
      <ArrowRightOutlined id="next" className="absolute right-10 top-[50%] cursor-pointer bg-amber-500 border-r-[50%] text-3xl"/>
      </div>

      <div
      style={{"--slider-transform": `${transform}vw`}} 
      className={`flex translate-x-[--slider-transform] transition-all duration-1000`}
      >

        {sliderData.map((item => {
          return(
            <div key={item.id} style={{"--bg-color":`${item.bg}`}} className={`flex gap-16 h-[100vh] w-[100vw] bg-[--bg-color]`}>
                <div className="w-[45%] h-[100vh]">
                    <img className="w-[100%] h-[80%] object-cover" src={item.image} alt="Slider Image" />
                </div>

                <div className="flex justify-center gap-10 flex-col w-[40%]">
                    <h1 className="text-7xl font-bold">{item.title}</h1>
                    <p className=" text-xl font-medium tracking-widest">{item.desc}</p>
                    <button className={`w-max border-2 border-black p-2 text-xl`}>SHOW NOW</button>
                </div>
            </div>
          )
        }))}
      </div>

    </div>
  )
}

export default Slider