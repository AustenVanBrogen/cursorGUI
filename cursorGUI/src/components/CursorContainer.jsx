import './CursorContainer.css';
import CursorPiece from './CursorPiece.jsx';
import React, {useState, useEffect} from 'react';

function CursorContainer(){    
    const [highlightedPiece, setHighlightedPiece] = useState('');
    return(
        <div className='cursorContainer'>
            <CursorPiece cursorName='cursorPiece1' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='cursorPiece2' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='cursorPiece3' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='cursorPiece4' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='cursorPiece5' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='cursorPiece6' highlightedPiece={highlightedPiece} setHighlightedPiece={setHighlightedPiece}></CursorPiece>
            <CursorPiece cursorName='displayPiece0'></CursorPiece>
        </div>
    )
}

export default CursorContainer