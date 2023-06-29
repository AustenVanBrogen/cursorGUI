import './CursorPiece.css';

// function filterString(inputString){
//     const firstIndex = 5;
//     let filteredString;
//     filteredString = inputString.substring(firstIndex, inputString.length);
//     filteredString= filteredString.substring(0, filteredString.indexOf("\""))
//     return filteredString;
// }

function CursorPiece({cursorName}){
    function changeCursor(whichPiece){
        //console.log(whichPiece)
        //let pieceData = getComputedStyle(document.querySelector(whichPiece));
        let cssifiedPiece = `.${whichPiece}`;
        let nameOfCursor = getComputedStyle(document.querySelector(cssifiedPiece)).getPropertyValue('cursor');

        // if(nameOfCursor.indexOf("url(") != -1)
        // {
        //     nameOfCursor = filterString(nameOfCursor);
        // }

        //document.querySelector(cssifiedPiece).style.setProperty('--curCursor', nameOfCursor);
        document.querySelector(':root').style.setProperty('--curCursor', nameOfCursor);


        //cursorVar.style.setProperty('--curCursor', nameOfCursor);
    }

    return(
        <div className={`cursorPiece ${cursorName}`} onClick={() => {changeCursor(cursorName)}}>
        </div>
    )
}

export default CursorPiece