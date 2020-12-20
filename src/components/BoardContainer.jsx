import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Board from './Board'
class BoardContainer extends Component {
    render() { 
        return (
            <Box width={300} height={300}>
                <Board/>
            </Box> 
        );
    }
}
 
export default BoardContainer;