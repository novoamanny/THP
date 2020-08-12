import React, {useState} from 'react';

import AddressListLayout from '../Address-List-Layout/Address-List-Layout';

import './Question-Form-Square.css';

const QuestionFormSquare = ({getMeters, ZipCode, Provider, setMainFormIndex, meters, setMainFormData, mainFormData, setChangeZipCodeModal}) =>{

    const [formData, setFormData] = useState({
        Address1: '',
        ZipCode: ZipCode,
        Provider: Provider
    })

    const [formSlideIndex, setFormSlideIndex] = useState(0);
    

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{

        e.preventDefault();
        
        getMeters(formData);
        
        
    }

    

    return(
        <div className='QFS'>
            <div className='qfs-top'>
                <div className='qfs-question'>
                    <h2>Where Do You Need Electricity Service?</h2> 
                </div>
                <div className='qfs-label'>
                    <h2>Featured Plans</h2>
                </div>
            </div>
           
            <div className='qfs-layout'>
                <div className='qfs-one'>
                    <div className='qfs-text'>
                        <h2>What Type of Home is This Service For?</h2>
                    </div>
                    <div className='qfs-options'>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(2)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Apartment</p>
                            </div>
                        </div>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(1)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Home</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ formSlideIndex === 1 ? 'qfs-two' : (formSlideIndex === 3 ? 'qfs-two' : 'not-active')}>
                    <div className={ formSlideIndex === 1 ? 'qfs-text' : (formSlideIndex === 3 ? 'qfs-text' : 'no-display')}> 
                        <h2>What Type of Home is This?</h2>
                    </div>
                    <div className={ formSlideIndex === 1 ? 'qfs-options' : (formSlideIndex === 3 ? 'qfs-options' : 'no-display')}>
                        <div className='qfs-option' onClick={() => setFormSlideIndex(3)}>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            
                            <div className='qfs-option-text'>
                                <p>Own</p>
                            </div>
                        </div>
                        <div className='qfs-option'>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text' onClick={() => setFormSlideIndex(3)}>
                                <p>Rent</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className={ formSlideIndex === 2 ? 'qfs-three' : (formSlideIndex === 3 ? 'qfs-three' : 'not-active')}>
                    <div className={ formSlideIndex === 2 ? 'qfs-text' : (formSlideIndex === 3 ? 'qfs-text' : 'no-display')}>
                        <h2>Type in either your service address or Esiid</h2>
                        <div className='ofs-text-red'>
                            <span>*ESIID can be found on your current electric bill*</span>
                        </div>
                    </div>
                    <div className={ formSlideIndex === 2 ? 'qfs-address' : (formSlideIndex === 3 ? 'qfs-address' : 'no-display')}>
                        
                        <div className='qfs-address-input'>
                            <div>
                                <p>Address</p>
                            </div>
                            <div>
                                <input name='Address1' type='text' placeholder='123 Main Street' onChange={(e) => onChange(e)}/>
                            </div>
                        </div>

                        <div className='qfs-zip-input'>
                            <div>
                                <p>Zip</p>
                            </div>
                            <div>
                                <input disabled value={ZipCode} type='text'/>
                            </div>
                            <div className='zip-text' onClick={() => setChangeZipCodeModal(true)}>
                                <p>Change Zip</p>
                            </div>
                        </div>


                        <div className='qfs-search'>
                           <div className='qfs-search-button' onClick={(e) => onSubmit(e)}>
                               <li>Search</li>
                           </div>
                            
                        </div>
                    </div>
                    </div>
                
            </div>
                {
                    meters && <AddressListLayout meters={meters} setFormData={setMainFormData} formData={mainFormData} setMainFormIndex={setMainFormIndex}/>
                }
        </div>
    )
}


export default QuestionFormSquare