"use client"

import { useCallback, useEffect, useRef } from "react";
import { 
    ViewerApp,
    AssetManagerPlugin, 
    GBufferPlugin, 
    ProgressivePlugin, 
    TonemapPlugin, 
    SSRPlugin, 
    SSAOPlugin, 
    BloomPlugin, 
    GammaCorrectionPlugin, 
    addBasePlugins, 
    mobileAndTabletCheck, 
    AssetManagerBasicPopupPlugin,
    CanvasSnipperPlugin,
    TweakpaneUiPlugin,
    IViewerPlugin
 } from "webgi";

const WebGiViewver = () => {
    const canvasRef = useRef<HTMLCanvasElement |any>(null); 

    const setupViewer = useCallback(async() =>{
         // Initialize the viewer 
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
            await manager.addFromPath("./small_villa.glb") 

        // remove scene background
            viewer.getPlugin<any>(TonemapPlugin).config.clipBackground = true

        // disable user`s rotating
            viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});

        // set camera object
            const camera = viewer.scene.activeCamera;
            const position = camera.position
            const target = camera.target;

            // Add plugins individually. 
            await viewer.addPlugin<any>(GBufferPlugin)
            await viewer.addPlugin<any>(new ProgressivePlugin(32))
            await viewer.addPlugin<any>(new TonemapPlugin(false)) 
            await viewer.addPlugin<any>(GammaCorrectionPlugin) 
            await viewer.addPlugin<any>(SSRPlugin)
            await viewer.addPlugin<any>(SSAOPlugin)
            await viewer.addPlugin<any>(BloomPlugin)

            let needForUpdate = true;
            viewer.addEventListener("preFrame", () => {
                if (needForUpdate == true) {
                    camera.positionUpdated(true)
                    needForUpdate = false
                }
            })



    }, []) 

    useEffect(() => {
        setupViewer()
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