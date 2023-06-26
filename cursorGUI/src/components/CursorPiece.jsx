import './CursorPiece.css';
import pic from '../assets/blackSquare.jpg';

function CursorPiece({cursorName}){
    function changeCursor(whichPiece){
        console.log(whichPiece)
    }

    return(
        <div className={`cursorPiece ${cursorName}`} onClick={() => {changeCursor(changeCursor(cursorName.slice(-1)))}}>
            {/* <img src={pic}></img> */}
        </div>
    )
}

export default CursorPiece