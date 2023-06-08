import React, { useEffect, useState, useRef, useCallback } from 'react';

export default function PdfViewer({ url }) {
    const canvasRef = useRef();

    const [pdfRef, setPdfRef] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const renderPage = useCallback((pageNum, pdf = pdfRef) => {
        pdf &&
        pdf.getPage(pageNum).then(function (page) {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = canvasRef.current;
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: viewport,
            };
            page.render(renderContext);
        });
    }, [pdfRef]);

    useEffect(() => {
        renderPage(currentPage, pdfRef);
    }, [pdfRef, currentPage, renderPage]);

    useEffect(() => {
        const loadPdf = async () => {
            const pdfjsLib = await import('pdfjs-dist/build/pdf');
            const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
            const loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise
                .then((loadedPdf) => {
                    setPdfRef(loadedPdf);
                })
                .catch((reason) => {
                    console.error(reason);
                });
        };

        loadPdf();
    }, [url]);

    const nextPage = () => {
        pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        currentPage > 1 && setCurrentPage(currentPage - 1);
    }

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
            <button onClick={() => prevPage()}>Prev</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    );
}