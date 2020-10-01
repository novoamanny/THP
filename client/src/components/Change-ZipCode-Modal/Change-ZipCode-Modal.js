import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Change-ZipCode-Modal.css';

const ConfirmationModal = ({ZipCode, setChangeZipModal}) =>{

    const [newZip, setNewZip] = useState('');

    const onChange = e => setNewZip(e.target.value);

    return(
        <div className='Confirmation-Modal'>
            <div className='backdrop-zip' onClick={() => setChangeZipModal(false)}></div>
            <div className='zip-modal-UI'>
                <div className='Modal-label'>
                    <h2>Change Sevice ZipCode</h2>
                </div>
                <div className='zip-text'>
                    <h2>Enter in a Zip Code to see New Rates</h2>
                </div>
                <div className='change-zip'>
                    <input type='text' name='newZip' placeholder={ZipCode} onChange={(e) => onChange(e)}/>
                </div>
                <div className='change-zip-link'>
                    <a className='change-zip-link-l' href={`/${newZip}`}>Compare</a>
                </div>
            </div>
        </div>
    )
}


export default ConfirmationModal;