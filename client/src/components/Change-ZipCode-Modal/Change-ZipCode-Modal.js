import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Change-ZipCode-Modal.css';

const ConfirmationModal = ({ZipCode}) =>{

    const [newZip, setNewZip] = useState('');

    const onChange = e => setNewZip(e.target.value);

    return(
        <div className='Confirmation-Modal'>
            <div className='backdrop'></div>
            <div className='confirm-modal-UI'>
                <div>
                    <h2>Change Sevice ZipCode</h2>
                </div>
                <div>
                    <input type='text' name='newZip' placeholder={ZipCode} onChange={(e) => onChange(e)}/>
                </div>
                <div>
                    <Link to={`/${newZip}`}>Enter</Link>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal;