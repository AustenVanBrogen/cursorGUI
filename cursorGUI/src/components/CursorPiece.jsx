import './CursorPiece.css';
import pic from '../assets/blackSquare.jpg';

function CursorPiece({cursorName}){
    return(
        <div className={`cursorPiece ${cursorName}`}>
            {/* <img src={pic}></img> */}
        </div>
    )
}

export default CursorPiece