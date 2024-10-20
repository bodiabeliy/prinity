"use client"
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {getScenesSelector} from "../providers/reducers/ScenesSlice"

import Modal from "@/shared/Modal/Modal";
import SlideShow from "@/widgets/SlideShow"

export const slideAtom = atom(0);


export default function Overlay () {
  const extraSmallScreen = window.matchMedia( '(max-width : 768px)').matches;


  const scenes = useSelector(getScenesSelector)

  const [slide, setSlide] = useAtom(slideAtom);
  const [displaySlide, setDisplaySlide] = useState(slide);
  const [visible, setVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    const element =document.querySelector(".portfolio-section__overlay");
    let heightToShowFrom = 1300;
    let heightToHideAfter = 2000;

    const winScroll = document.body.scrollTop || 
    document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToShowFrom && winScroll < heightToHideAfter) { 
      element.classList.add("show") 
         isVisible && setIsVisible(false);
    } else {
      element.classList.remove("show") 
        setIsVisible(true);
    }  
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setDisplaySlide(slide);
      setVisible(true);
    }, 2600);
  }, [slide]);


  const MoveUp = () => {
    const element =document.querySelector(".benefits-section");
     window.scrollTo({
      top : element?.getBoundingClientRect().top, 
      left : 0,
      behavior : "smooth"
    })
  }

  const MoveDown = () => {
     window.scrollTo({
      top : extraSmallScreen? (screen.height <700?2070:screen.height <900?2700:2900):2250, 
      left : 0,
      behavior : "smooth"
    })
  }

  const handleClick = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };
  return (
    <div div className="portfolio-section__overlay">
        <SlideShow images={scenes[displaySlide]?.photos} modelData={scenes[displaySlide]} isOpen={show} onClose={onClose}/>
      <div
        className={`fixed z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${
          visible ? "" : "opacity-0"
        } transition-opacity duration-1000`}
      >
         <div className="actions-btns absolute left-0 pointer-events-auto z-3">
          <div className="actions-btn up" >
          {/* <svg onClick={() => MoveUp()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fil l-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg> */}
          </div>
          
        </div>
        <div className="actions-btns absolute right-0 pointer-events-auto z-3">
          <div className="actions-btn up" >
          <svg onClick={() => MoveUp()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fil l-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
          </div>
          <div className="actions-btn down">
          <svg onClick={() =>MoveDown()} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
          </div>
        </div>
        <svg
          className="w-40 mx-auto mt-8"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path> */}
        </svg>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex-1 flex items-center justify-between p-4">
          {/* <svg
            onClick={() =>
              setSlide((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg> */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 pointer-events-auto hover:opacity-60 transition-opacity cursor-pointer"
            onClick={() =>
              setSlide((prev) => (prev < scenes.length - 1 ? prev + 1 : 0))
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg> */}
        </div>
        <div className="pt-5 pb-20 p-4 flex items-center flex-col text-center">
          <h1 className="text-5xl font-extrabold">
            {/* {scenes[displaySlide]?.name} */}
          </h1>
          <p className="text-opacity-60 italic">
            {/* {scenes[displaySlide]?.description} */}
          </p>
          <div className="flex items-center gap-12 mt-10">
            {/* <button onClick={() => handleClick(scenes[displaySlide]?.photos)} className="portfolio-section__button-mobile border-2 border-black rounded-3xl p-3 pointer-events-auto  hover:bg-black  hover:text-white">show gallery</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
