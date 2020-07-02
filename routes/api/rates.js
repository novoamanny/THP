const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require('axios');
const { response } = require('express');

const router = express.Router();

const username = 'brad@texahomepower.com';
const password = 'uCRRCF2bTqBP,wN%';

const token = 'YnJhZEB0ZXhhc2hvbWVwb3dlci5jb206dUNSUkNGMmJUcUJQLHdOJQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`
        
    },
   
    
}


// GET RATES
router.post('/get/rates/',
[
    // Check if data fits the requirements...
    check('ZipCode', 'ZipCode is required...').not().isEmpty(),
],
 async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {ZipCode} = req.body;

// 
    try{
        console.log(token);
        const body = JSON.stringify({ ZipCode: ZipCode, PromoCode: 'TXHP'});

        const pulseRates = await axios.post('https://api.pulsepowerpreview.com/api/pulse/GetRates',body, config);
        const energyToGoRates = await axios.post('https://api.pulsepowerpreview.com/api/energytogo/GetRates',body, config);
        const loneStarRates = await axios.post('https://api.pulsepowerpreview.com/api/lonestar/GetRates',body, config);
        const newPowerRates = await axios.post('https://api.pulsepowerpreview.com/api/newpowertexas/GetRates',body, config);
        const powerNextRates = await axios.post('https://api.pulsepowerpreview.com/api/powernext/GetRates',body, config);



        // const response = pulseRates.data.concat(energyToGoRates.data, loneStarRates.data, newPowerRates.data, powerNextRates.data);
        // const response2 = {
        //     pulse: pulseRates.data,
        //     energytogo: energyToGoRates.data,
        //     lonestar: loneStarRates.data,
        //     newpower: newPowerRates.data,
        //     powernext: powerNextRates.data
        // }
        const response = [
            {
                name: 'pulse',
                data: pulseRates.data
            },
            {
                name: 'etg',
                data: energyToGoRates.data
            },
            {
                name: 'lonestar',
                data: loneStarRates.data
            },
            {
                name: 'newpower',
                data: newPowerRates.data
            },
            {
                name: 'powernext',
                data: powerNextRates.data
            },
        ]
        
        res.json(response);
        
    }catch(err){
        
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

});


module.exports = router;