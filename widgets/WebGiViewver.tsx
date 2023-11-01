"use client"

import { setupWebGiViewer } from "@/services/webgiService";
import { useCallback, useEffect, useMemo, useRef } from "react";

const WebGiViewver = () => {
    const canvasRef = useRef<HTMLCanvasElement |any>(null); 
    const setupViewer = useCallback((setupWebGiViewer), []) 

    useEffect(() => {
        setupViewer(canvasRef)
    }, [])

    return ( 
        <>
            <div id="webgi-canvas-container">
                <canvas id="webgi-canvas" ref={canvasRef} />
            </div>
        </>
    ); 
}
 
export default WebGiViewver;