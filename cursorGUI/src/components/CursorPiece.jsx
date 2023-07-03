import './CursorPiece.css';

function CursorPiece({cursorName, highlightedPiece, setHighlightedPiece}){
    function changeCursor(whichPiece){
        if(whichPiece == 'displayPiece0'){
            return;
        }
        let cssifiedPiece = `.${whichPiece}`;
        let nameOfCursor = getComputedStyle(document.querySelector(cssifiedPiece)).getPropertyValue('cursor');

        if(highlightedPiece != ''){
            document.querySelector(highlightedPiece).style.setProperty('border-color', 'black');
        }
        document.querySelector(cssifiedPiece).style.setProperty('border-color', 'red');
        //setHighlightedPiece(cssifiedPiece);
        setHighlightedPiece(cssifiedPiece);
        document.querySelector(':root').style.setProperty('--curCursor', nameOfCursor);
    }

    return(
        <div className={`cursorPiece ${cursorName}`} onClick={() => {changeCursor(cursorName)}}>
        </div>
    )
}

export default CursorPiece