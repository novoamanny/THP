import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () =>{
    return(
        <div style={{}}>
            <img src={spinner} style={{width: '200px', display: 'block'}} alt='Loading...'/>
        </div>
    );
}

export default Spinner;