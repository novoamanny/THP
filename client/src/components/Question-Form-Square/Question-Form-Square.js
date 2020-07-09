import React, {useState} from 'react';

import './Question-Form-Square.css';

const QuestionFormSquare = ({getMeters, ZipCode, Provider}) =>{

    const [formData, setFormData] = useState({
        Address1: '',
        ZipCode: ZipCode,
        Provider: Provider
    })
    

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{

        e.preventDefault();

        getMeters(formData);
        
    }

    return(
        <div className='QFS'>
            <div className='qfs-top'>
                <div className='qfs-question'>
                    <h2>Where Do You Need Service?</h2> 
                </div>
                <div className='qfs-label'>
                    <h2>Featured Plan</h2>
                </div>
            </div>
           
            <div className='qfs-layout'>
                <div className='qfs-one'>
                    <div className='qfs-text'>
                        <h2>What Type of Home is This?</h2>
                    </div>
                    <div className='qfs-options'>
                        <div className='qfs-option'>
                            <div className='qfs-option-box-container'>
                                <div className='qfs-option-box'>

                                </div>
                            </div>
                            <div className='qfs-option-text'>
                                <p>Apartment</p>
                            </div>
                        </div>
                        <div className='qfs-option'>
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
                <div className='qfs-two'>
                    <div className='qfs-text'> 
                        <h2>What Type of Home is This?</h2>
                    </div>
                    <div className='qfs-options'>
                        <div className='qfs-option'>
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
                            <div className='qfs-option-text'>
                                <p>Rent</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='qfs-three'>
                    <div className='qfs-text'>
                        <h2>Type in either your service address or Esiid</h2>
                        <div className='ofs-text-red'>
                            <span>*ESIID can be found on your current electric bill*</span>
                        </div>
                    </div>
                    <div className='qfs-address'>
                        
                        <div className='qfs-address-input'>
                            <div>
                                <p>Address</p>
                            </div>
                            <div>
                                <input name='Address1' type='text' onChange={(e) => onChange(e)}/>
                            </div>
                        </div>

                        <div className='qfs-zip-input'>
                            <div>
                                <p>Zip</p>
                            </div>
                            <div>
                                <input disabled value={ZipCode} type='text'/>
                            </div>
                            <div>
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
        </div>
    )
}


export default QuestionFormSquare