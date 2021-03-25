const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require('axios');
const { response } = require('express');

const router = express.Router();


const token = 'YnJhZEB0ZXhhc2hvbWVwb3dlci5jb206dUNSUkNGMmJUcUJQLHdOJQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`
        
    },
   
    
}



const routes = [
    {
        prov: 'Pulse',
        route: 'https://api.pulsepowerpreview.com/api/pulse/GetRates'
    },
    // {
    //     prov: 'etg',
    //     route: 'https://api.pulsepowerpreview.com/api/energytogo/GetRates'
    // },
    // {
    //     prov: 'lonestar',
    //     route: 'https://api.pulsepowerpreview.com/api/lonestar/GetRates'
    // },
    // {
    //     prov: 'newpower',
    //     route: 'https://api.pulsepowerpreview.com/api/newpowertexas/GetRates'
    // },
    // {
    //     prov: 'powernext',
    //     route: 'https://api.pulsepowerpreview.com/api/powernext/GetRates'
    // },

    
]



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
        
        const body = JSON.stringify({ ZipCode: ZipCode, PromoCode: 'TXHP'});

        const pulseRates = await axios.post(routes[0].route,body, config);
        // const energyToGoRates = await axios.post('https://api.pulsepowerpreview.com/api/energytogo/GetRates',body, config);
        // const loneStarRates = await axios.post('https://api.pulsepowerpreview.com/api/lonestar/GetRates',body, config);
        // const newPowerRates = await axios.post('https://api.pulsepowerpreview.com/api/newpowertexas/GetRates',body, config);
        // const powerNextRates = await axios.post('https://api.pulsepowerpreview.com/api/powernext/GetRates',body, config);


        const response = [
            {
                name: 'Pulse',
                data: pulseRates.data,
                PUCT: '10259',
                Phone: '833-785-7797',
                Email_Address: 'customercare@pulsepowertexas.com',
                HOO: '8 AM - 5 PM'
            },
            // {
            //     name: 'etg',
            //     data: energyToGoRates.data
            // },
            // {
            //     name: 'lonestar',
            //     data: loneStarRates.data
            // },
            // {
            //     name: 'newpower',
            //     data: newPowerRates.data
            // },
            // {
            //     name: 'powernext',
            //     data: powerNextRates.data
            // },
        ]
        
        res.json(response);
        
    }catch(err){
        
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

});

router.post('/get/rate/:id',
[
    check('RateID', 'Need Rate ID...').not().isEmpty(),
    check('ZipCode', 'Need Zipcode...').not().isEmpty(),
    check('Provider', 'Need Provider...').not().isEmpty()
],
    async (req, res) =>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }         

        const {RateID, ZipCode, Provider} = req.body;

        // const routes = [
        //     {
        //         prov: 'pulse',
        //         route: 'https://api.pulsepowerpreview.com/api/pulse/GetRates'
        //     },
        //     // {
        //     //     prov: 'etg',
        //     //     route: 'https://api.pulsepowerpreview.com/api/energytogo/GetRates'
        //     // },
        //     // {
        //     //     prov: 'lonestar',
        //     //     route: 'https://api.pulsepowerpreview.com/api/lonestar/GetRates'
        //     // },
        //     // {
        //     //     prov: 'newpower',
        //     //     route: 'https://api.pulsepowerpreview.com/api/newpowertexas/GetRates'
        //     // },
        //     // {
        //     //     prov: 'powernext',
        //     //     route: 'https://api.pulsepowerpreview.com/api/powernext/GetRates'
        //     // },

            
        // ]

        try{
            const body = JSON.stringify({ ZipCode: ZipCode, PromoCode: 'TXHP'});
        
            let temp;

            routes.forEach(provider =>{
                if(provider.prov === Provider){
                    temp = provider.route;
                }
            })
            const rates = await axios.post(temp,body, config);
            const rate = rates && rates.data.filter(item => {
                

                if(item.RateID == RateID){
                    
                    return item;
                }
                    
            })
              
           
            res.json(rate);
            
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)


module.exports = router;