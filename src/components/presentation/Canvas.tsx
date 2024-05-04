import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { jsPDF } from 'jspdf';


const Canvas = () => {
    const canvasEl = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasEl.current, {
            backgroundColor: 'white'
        });

        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 200,
            height: 100,
            angle: 0
        });
        canvas.add(rect);

        const updateCanvasSize = () => {
            const maxWidth = 960;
            const minWidth = 480;
            const aspectRatio = 16 / 9;

            const windowWidth = window.innerWidth;
            const canvasWidth = Math.min(maxWidth, Math.max(minWidth, windowWidth - 100));
            const canvasHeight = canvasWidth / aspectRatio;

            canvas.setWidth(canvasWidth);
            canvas.setHeight(canvasHeight);
            canvas.renderAll();
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            canvas.dispose();
        };
    }, []);

    // Placeholder functions for download actions
    const handleDownloadPDF = () => {
        const dataUrl = canvasEl.current.toDataURL({
            format: 'jpeg',
            quality: 0.8
        });
        // Create a PDF
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvasEl.current.width, canvasEl.current.height]
        });
        pdf.addImage(dataUrl, 'JPEG', 0, 0, canvasEl.current.width, canvasEl.current.height);
        pdf.save('canvas.pdf');
    };

    const handleDownloadPPT = () => {
        alert("PPT download functionality needs to be implemented");
    };

    return (
        <div>
            <canvas ref={canvasEl} style={{ border: '1px solid black' }}></canvas>
            <button onClick={handleDownloadPDF}>Download as PDF</button>
            <button onClick={handleDownloadPPT}>Download as PPT</button>
        </div>
    );
};

export default Canvas;
