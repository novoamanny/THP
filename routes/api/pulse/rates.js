const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require('axios');
const { response } = require('express');

const Offers = require('../../../models/offers');

const router = express.Router();


const token = 'YnJhZEB0ZXhhc2hvbWVwb3dlci5jb206dUNSUkNGMmJUcUJQLHdOJQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`
        
    },
   
    
}


// GET RATES
router.post('/getOffers/',
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

        const pulseResponse = await axios.post('https://api.pulsepowerpreview.com/api/pulse/GetRates',body, config);
       

       
        const response = pulseResponse.data.map( offer => {

            const temp = new Offers(
                'Pulse',
                offer.PromoCode,
                '10259',
                '833-785-7797',
                'customercare@pulsepowertexas.com',
                '8 am - 5 pm',
                offer.RateID,
                '',
                offer.Plan.PlanName,
                offer.Plan.PlanSubHeader,
                offer.CancellationFeeType,
                offer.CancellationFeeAmount,
                offer.Term,
                offer.Rate,
                offer.Rate_500,
                offer.Rate_1000,
                offer.Rate_2000,
                offer.EFLLink,
                offer.TOSLink,
                offer.YRACLink,
                null,
                offer
            )

            return temp;

            // return(
            //     {
            //         brand: 'Pulse',
            //         data: offer,
            //         PUCT: '10259',
            //         Phone: '833-785-7797',
            //         Email_Address: 'customercare@pulsepowertexas.com',
            //         HOO: '8 AM - 5 PM'
            //     }
            // )
        })
            
        

        res.json(response);
        
    }catch(err){
        
        console.error(err.message);
        res.status(500).send('Server error');
    }

    

});




router.post('/getOffer/',
[
    check('RateID', 'Need Rate ID...').not().isEmpty(),
    check('ZipCode', 'Need Zipcode...').not().isEmpty(),
],
    async (req, res) =>{
        
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }         

        const {RateID, ZipCode} = req.body;


        try{
            const body = JSON.stringify({ ZipCode: ZipCode, PromoCode: 'TXHP'});
        
            let temp;
            let i;

            const rates = await axios.post('https://api.pulsepowerpreview.com/api/pulse/GetRates',body, config);
            const rate = rates && rates.data.map((offer, index) => {
                

                if(offer.RateID == RateID){
                
                    temp = new Offers(
                        'Pulse',
                        offer.PromoCode,
                        '10259',
                        '833-785-7797',
                        'customercare@pulsepowertexas.com',
                        '8 am - 5 pm',
                        offer.RateID,
                        '',
                        offer.Plan.PlanName,
                        offer.Plan.PlanSubHeader,
                        offer.CancellationFeeType,
                        offer.CancellationFeeAmount,
                        offer.Term,
                        offer.Rate,
                        offer.Rate_500,
                        offer.Rate_1000,
                        offer.Rate_2000,
                        offer.EFLLink,
                        offer.TOSLink,
                        offer.YRACLink,
                        null,
                        offer
                    )
                    i = index;
                    return temp
                }
                    
            })
              
           
            res.json(rate[i]);
            
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)


module.exports = router;