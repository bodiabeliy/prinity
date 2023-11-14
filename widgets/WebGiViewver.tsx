"use client"

import { useCallback, useEffect, useMemo, useRef } from "react";

const WebGiViewver = () => {
    const canvasRef = useRef<HTMLCanvasElement |any>(null); 

    useEffect(() => {
        const init =async () => {
          const {setupWebGiViewer}  = await import('@/services/webgiService');
          setupWebGiViewer(canvasRef)
        }
        init()
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