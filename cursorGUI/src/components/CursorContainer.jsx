import './CursorContainer.css';
import CursorPiece from './CursorPiece.jsx';

function CursorContainer(){    
    return(
        <div className='cursorContainer'>
            <CursorPiece cursorName='cursorPiece1'></CursorPiece>
            <CursorPiece cursorName='cursorPiece2'></CursorPiece>
            <CursorPiece cursorName='cursorPiece3'></CursorPiece>
            <CursorPiece cursorName='cursorPiece4'></CursorPiece>
            <CursorPiece cursorName='cursorPiece5'></CursorPiece>
            <CursorPiece cursorName='cursorPiece6'></CursorPiece>
            <CursorPiece cursorName='displayPiece0'></CursorPiece>
        </div>
    )
}

export default CursorContainer