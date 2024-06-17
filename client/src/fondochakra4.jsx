import React, { useEffect, useState } from 'react'
import {  Box } from '@chakra-ui/react'
export default function OvNi() {

    const json_galaxi_naves = [
        {
            "id": 1,
            "emoji": "👾",
            "className": "rocket"
        },
        {
            "id": 2,
            "emoji": "🛸",
            "className": "rocket2"
        },
        {
            "id": 3,
            "emoji": "🚀",
            "className": "rocket3"
        },
        {
            "id": 4,
            "emoji": "🛸",
            "className": "rocket4"
        },
        {
            "id": 5,
            "emoji": "👾",
            "className": "rocket5"
        }
    ];

    const Multinaves = ({ emoji, className }) => {
        return (
            <Box className={className}>
                <p className="rocket-pp">{emoji}</p>
            </Box>
        );
    };


    return (        
            json_galaxi_naves.map((rocket) => (
                <Multinaves key={rocket.id} emoji={rocket.emoji} className={rocket.className} />
            ))        
    )
}


