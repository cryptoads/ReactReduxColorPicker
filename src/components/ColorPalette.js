import React from 'react';

let ColorPalette = ({ palette, proposedColor, addColor, skipColor }) =>{
    let jsx = palette.map((color,index)=>{return(<div key={index} style={{backgroundColor: color}} className="color">color</div>)})
    return(<div className="par">
            <div className="color" style={{backgroundColor: proposedColor}}>Color</div><br / >
            <button onClick={addColor}>add</button><button onClick={skipColor}>skip</button>
            <div>{jsx}</div>
            </div>);
}

export default ColorPalette;