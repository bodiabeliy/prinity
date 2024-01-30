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


import { scroll3dAnimation } from "./gsapService";
 

 function SetupWebGiViewer() {
  
} 