var randomColor = "#" + Math.random().toString(16).slice(2, 8);

let initialState = {
    proposedColor: randomColor,
    palette: []
}



let mainReducer = (state = initialState, action) =>{
    if(action.type == "ADDCOLOR"){
        return {
                proposedColor: state.proposedColor,
                palette: state.palette.concat(state.proposedColor)
                };
    }else if (action.type == "SKIPCOLOR") {
        return {
                proposedColor: "#" + Math.random().toString(16).slice(2, 8), 
                palette: state.palette
                };
            
    }else{
        return state;
    }
}

export default mainReducer;