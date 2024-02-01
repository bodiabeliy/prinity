"use client"

import { scroll3dAnimation } from "@/services/gsapService";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { AssetManagerBasicPopupPlugin, AssetManagerPlugin, BloomPlugin, CanvasSnipperPlugin, GBufferPlugin, GammaCorrectionPlugin, ProgressivePlugin, SSAOPlugin, SSRPlugin, TonemapPlugin, ViewerApp, addBasePlugins } from "webgi";

const WebGiViewver = () => {
    const canvasRef =useRef<HTMLCanvasElement |any>(null)
    // Initialize the viewer 

    const memorizedPosition = useCallback((position:any, target:any, onUpdate:any) => {
        if (position && target && onUpdate) {
            scroll3dAnimation(position, target, onUpdate)
        }
    }, [])


    const setupViewer = useCallback(async() => {
        const viewer = new ViewerApp({ 
            canvas:canvasRef?.current
        })
    // Add some plugins 
    const manager = await viewer.addPlugin<any>(AssetManagerPlugin) 

    // Add a popup(in HTML) with download progress when any asset is downloading.
        await viewer.addPlugin<any>(AssetManagerBasicPopupPlugin)

    // or use this to add all main ones at once.
        await addBasePlugins(viewer) 

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas. 
        await viewer.addPlugin<any>(CanvasSnipperPlugin) 

    // This must be called once after all plugins are added. 
        viewer.renderer.refreshPipeline();

    // download 3d model
        // await manager.addFromPath("./small_villa.glb"); 
        await  manager.addAsset({path:'./small_villa.glb'})
        


    // remove scene background
        viewer.getPlugin<any>(TonemapPlugin).config.clipBackground = true
        console.log(" viewer.getPlugin<any>(TonemapPlugin).config",  viewer.getPlugin<any>(TonemapPlugin).config);
        

    // disable user`s rotating
        viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});

    // set camera object
    const camera = viewer.scene.activeCamera;
    const position = camera.position
    const target = camera.target;

    // Add plugins individually. 
    // await viewer.addPlugin<any>(GBufferPlugin)
    // await viewer.addPlugin<any>(new ProgressivePlugin(32))
    // await viewer.addPlugin<any>(new TonemapPlugin(false)) 
    // await viewer.addPlugin<any>(GammaCorrectionPlugin) 
    // await viewer.addPlugin<any>(SSRPlugin)
    // await viewer.addPlugin<any>(SSAOPlugin)
    // await viewer.addPlugin<any>(BloomPlugin)

    let needForUpdate = true;
    const onUpdate = () => {
        needForUpdate = true;
        viewer.setDirty()
    }
        window.scrollTo(0, 0)

        viewer.addEventListener("preFrame", () => {
            if (needForUpdate == true) {
                camera.positionUpdated(true)
                needForUpdate = false
            }
        })
        memorizedPosition(position, target, onUpdate)
    }, [])

    useEffect(() => {
        setupViewer()
    })




    return ( 
        <>
            <div id="webgi-canvas-container">
                <canvas id="webgi-canvas" ref={canvasRef} />
            </div>
        </>
    ); 
}
 
export default WebGiViewver;