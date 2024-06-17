import React, { useEffect, useState } from 'react'
import './styledashboard.css'
import SkeletonAvg from './skeletonmenu';
import Log from './formlog';
export default function Body({ username, userId, useremail }) {
    
    return (
        <>
            {/*<div className='overlay'>
                <Log></Log>
                <center>
                    USUARIO: { username }
                </center>
            </div>*/}
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>


            <div className="box-container">

                <div className="left-box">
                    <SkeletonAvg title={'REGISTRAR / CHAKRA'} subtitle={'CHAKRA'} url={'/regchakra_ui'} keyxx={'1'} ></SkeletonAvg>
                </div>

                <div className="right-box">
                    <SkeletonAvg title={'ACTUALIZAR / REBASS'} subtitle={'REBASS'} url={'/regchakra_uix'} keyxx={'2'} ></SkeletonAvg>
                </div>

                <div className="left-box2">
                    <SkeletonAvg title={'BORRAR / EVERGREEN'} subtitle={'EVERGREEN'} url={'/regchakra_uiq'} keyxx={'3'} ></SkeletonAvg>
                </div>

                <div className="right-box2">
                    <SkeletonAvg title={'MENU THREEJS 3D'} subtitle={'THREEJS 3D'} url={'/regchakra_uie'} keyxx={'4'} ></SkeletonAvg>
                </div>
            </div>


        </>
    )
}


