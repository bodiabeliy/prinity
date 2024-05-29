"use client"

import { scroll3dAnimation } from "@/services/gsapService";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AssetManagerBasicPopupPlugin, AssetManagerLoadingBarPlugin, AssetManagerPlugin, BloomPlugin, CanvasSnipperPlugin, GBufferPlugin, GammaCorrectionPlugin, LoadingScreenPlugin, ProgressivePlugin, SSAOPlugin, SSRPlugin, TonemapPlugin, ViewerApp, addBasePlugins } from "webgi";

import { getIsLoaded3DModelSelector, setIsLoaded3DModel } from "@/providers/reducers/ScenesSlice";
import { useDispatch, useSelector } from "react-redux";


const WebGiViewver = () => {
    const canvasRef =useRef<HTMLCanvasElement |any>(null)
    const [is3dModelLoaded, setIs3dModelLoaded] = useState(false)
    const isLoadedMainModel = useSelector(getIsLoaded3DModelSelector)
    const dispatch = useDispatch()
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
            // await viewer.addPlugin<any>(AssetManagerBasicPopupPlugin)

        // preloader screen
        await viewer.addPlugin<any>(LoadingScreenPlugin).then((s) => {            
            s.background= "black"
            s.textColor = "white"
            s.loadingTextHeader="Please wait..."
            s.backgroundBlur =0
            s.backgroundOpacity =1
            s.showFileNames =true
            s.showProgress = true
            s.showProgressStates = false

            s.logoImage="https://3d-models-bodiabeliy.s3.amazonaws.com/DIM+token+logo.png"
            
            
            return s
        });
        

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
            setIs3dModelLoaded(!is3dModelLoaded)
    }, [])

    useEffect(() => {
        setupViewer()
        dispatch(setIsLoaded3DModel(true))
    }, [])




    return ( 
        <>
            <div id="webgi-canvas-container" className={!is3dModelLoaded?"splashScreenOpen":""} style={{transform:!is3dModelLoaded?"scale(2)":"scale(.5)", zIndex:1}}>
                <canvas id="webgi-canvas" ref={canvasRef} />
            </div>
        </>
    ); 
}
 
export default WebGiViewver;