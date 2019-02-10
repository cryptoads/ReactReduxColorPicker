import ColorPalette from '../components/ColorPalette.js';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
    return {palette: state.palette,
        proposedColor: state.proposedColor
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
            addColor: ()=>dispatch({type:'ADDCOLOR'}),
            skipColor: ()=>dispatch({type:'SKIPCOLOR'})
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);