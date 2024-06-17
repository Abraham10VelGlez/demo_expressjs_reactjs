import React, { useEffect, useState } from 'react'
import './stylechakra.css'

export default function Starts_all() {


    useEffect(() => {
        fn_flag()

    }, []);

    const fn_flag = () => {
        const count = 200;
        const section = document.querySelector('.starlight');
        let i = 0;
        while (i < count) {
            const star = document.createElement('i');
            const x = Math.random() * 100; // Porcentaje
            const y = Math.random() * 100; // Porcentaje

            const size = Math.random() * 2;
            star.style.left = x + '%'; // Posición en porcentaje
            star.style.top = y + '%';  // Posición en porcentaje

            star.style.width = 1 + size + 'px';
            star.style.height = 1 + size + 'px';

            const duration = Math.random() * 2;
            star.style.animationDuration = 2 + duration + 's';
            star.style.animationDelay = duration + 's';

            section.appendChild(star);
            i++;
        }
    }

    return (    
            <div className="starlight"></div>       
    )
}


