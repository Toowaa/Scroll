import React, { useEffect } from 'react';

function Imagen() {
    useEffect(() => {
        const img = document.querySelector('#img');
        let maxScrollValue = document.documentElement.scrollHeight - window.innerHeight;
        const maxFrames = 151;
        
        window.addEventListener('resize', () => {
            maxScrollValue = document.documentElement.scrollHeight - window.innerHeight;
        });
        
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const scrollPorcent = scrollPosition / maxScrollValue;
            const frame = Math.floor(scrollPorcent * maxFrames) || 1;
            const id = frame.toString().padStart(3, '0');
            img.src = `/Scroll/frames/moto-${id}.webp`;  
        });
    }, []);
    
    return (
        <img id="img" src='/Scroll/frames/moto-001.webp' alt='Moto'></img>  
    );
}

export default Imagen;