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
                <div className='Modal-label'>
                    <h2>Change Sevice ZipCode</h2>
                </div>
                <div className='change-zip'>
                    <input type='text' name='newZip' placeholder={ZipCode} onChange={(e) => onChange(e)}/>
                </div>
                <div className='change-zip-link'>
                    <Link className='change-zip-link-l' to={`/${newZip}`}>Enter</Link>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal;