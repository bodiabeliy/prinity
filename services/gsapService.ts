"use client"

import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger)

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Vector3 } from "webgi";
export const scroll3dAnimation = (cameraPosition:Vector3, target:Vector3, onUpdate:()=>void) => {
    const timeline = gsap.timeline()

    timeline.to(cameraPosition,
        { 
            x:-2.4502790648,
            y:0.3911183551,
            z:-0.87956292726,
            scrollTrigger: {
                trigger:".benefits-section",
                start:"top bottom",
                end:"top top",
                scrub:0.5, // change model position,
                immediateRender: false
            },
            onUpdate
        }) ,
        timeline.to(target,
        { 
            x:-0.63,
            y:0.2,
            z:0.15,
            scrollTrigger: {
                trigger:".benefits-section",
                start:"top bottom",
                end:"top top",
                scrub:0.5, // change model position,
                immediateRender: false
            },
        }),
        timeline.to(target,
        { 
            x:-110,
            y:34.2,
            z:32.15,
            autoAlpha:0,
            scrollTrigger: {
                trigger:".portfolio-section",
                start:"top bottom",
                end:"top top",
                scrub:0.5, // change model position,
                immediateRender: false,

            },
        }),
        timeline.to(target,
        { 
            x:-110,
            y:0.2,
            z:0.15,
            autoAlpha:0,
            scrollTrigger: {
                trigger:".team-section",
                start:"top bottom",
                end:"top top",
                scrub:3, // change model position,
                immediateRender: false
            },
        })
}