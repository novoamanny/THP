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

const routes = [
    {
        prov: 'pulse',
        route: 'https://api.pulsepowerpreview.com/api/pulse/GetMeters'
    },
    {
        prov: 'etg',
        route: 'https://api.pulsepowerpreview.com/api/energytogo/GetMeters'
    },
    {
        prov: 'lonestar',
        route: 'https://api.pulsepowerpreview.com/api/lonestar/GetMeters'
    },
    {
        prov: 'newpower',
        route: 'https://api.pulsepowerpreview.com/api/newpowertexas/GetMeters'
    },
    {
        prov: 'powernext',
        route: 'https://api.pulsepowerpreview.com/api/powernext/GetMeters'
    },

    
]

router.post('/get/meters',
[
    check('Address1', 'Need Address...'),
    check('ZipCode', 'need ZipCode...'),
    check('Provider', 'need Provider')
],
    async(req, res) =>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }         

        const {ZipCode, Provider, Address1} = req.body;

        


        try{
            const body = JSON.stringify({
                ZipCode,
                Address1
            });
           
            let temp;

            routes.forEach(provider =>{
                if(provider.prov === Provider){
                    temp = provider.route;
                }
            })
            

            const response = await axios.post(temp,body, config);
            
            res.json(response.data[0]);

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)



router.post('/',
[
    check('FirstName', 'Need FIrst Name...').not().isEmpty(),
    check('LastName', 'Need Last Name...').not().isEmpty(),
    check('EmailAddress', 'Need Email...').isEmail(),
    check('Phone', 'Need Phone...').not().isEmpty(),
    check('ZipCode', 'Need Zipcode...').not().isEmpty(),
    check('Esiid', 'Need Esiid...').not().isEmpty(),
    check('ServiceType', 'Service Type...').not().isEmpty(),
    check('SSN', 'Need SSN...').not().isEmpty(),
    check('RateID', 'RateID...').not().isEmpty(),
    check('Rate', 'Rate...').not().isEmpty(),
    check('Provider', 'Need Provider').not().isEmpty()
],
    async (req, res) =>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }         

        const {FirstName, LastName, EmailAddress, Phone, ZipCode, Esiid, ServiceType, SSN, RateID, Rate, Provider} = req.body;


        try{
            const body = JSON.stringify({
                ZipCode,
                PromoCode: 'TXHP',
                FirstName,
                LastName,
                EmailAddress,
                MobilePhone: Phone,
                Esiid,
                ServiceType,
                SSN,
                RateID,
                Rate
            });
            
            let temp;

            routes.forEach(provider =>{
                if(provider.prov === Provider){
                    temp = provider.route;
                }
            })
            console.log(temp)

            const response = await axios.post(temp,body, config);
            console.log(response)
            res.json(response.data[0]);
            
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)

module.exports = router;