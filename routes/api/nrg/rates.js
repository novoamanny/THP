const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const axios = require('axios');
const { response } = require('express');

const router = express.Router();



// Default
const NRG_BRAND_IDENTIFIERS = require('../../../data/nrgBrandIdentifiers');
const NRG_TDSP_CODES = require('../../../data/nrgTDSPCodes');
const affiliateId = '305480';

console.log(NRG_BRAND_IDENTIFIERS);
console.log(NRG_TDSP_CODES);

const username = 'Texashome'
const password = 'Bhyqf!S56homesA'

const token = Buffer.from(`${username}:${password}`).toString('base64');

// const token ='VGV4YXNob21lOkJoeXFmIVM1NmhvbWVzQQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
        'Cookie' : 'SMCHALLENGE=YES'
  
    },
  
}



// T D S P  C O D E  &&  O F F E R S


router.post('/getOffers/',
[
    check('ZipCode', 'ZipCode is required...').not().isEmpty()
],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
        const {ZipCode}= req.body;

        try{
           
            let array = []
            

            /*
                Fetches Data from each companyCode in NRG_BRAND_IDENTIFIERS 
            */
            for (const brand of NRG_BRAND_IDENTIFIERS){
                const body = JSON.stringify({
                    servZipCode: ZipCode,
                    affiliateId,
                    companyCode: brand.companyCode,
                    channelType: 'AFF'

                })
                

                const response = await axios.post('https://stg-api.nrg.com/NRGREST/rest/sales/tdsp', body, config);
                array = [...array, response.data.tdspData[0]];
                
            };
            

            // Combine TDSP CODES
            const TDSPCodes = NRG_BRAND_IDENTIFIERS.map((brand, index) =>{
                return {...array[index], ...brand, servZipCode: ZipCode, channelType: 'AFF', affiliateId}
            });

                
  

            let OffersArray = [];

            for (code of TDSPCodes){
                const response = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/offers?channelType=${code.channelType}&affiliateId=${code.affiliateId}&companyCode=${code.companyCode}&brandId=RE&languageCode=E&transactionType=MVI&tdspCodeCCS=${code.tdspCodeCCS}&promoCode=${code.promoCode}&esid`, config);

                for(offer of response.data.affiliateOfferList){
                    let temp = {
                        brand: code.brand,
                        data: offer,
                        PUCT: '10259',
                        Phone: '833-785-7797',
                        Email_Address: 'customercare@pulsepowertexas.com',
                        HOO: '8 AM - 5 PM',
                        ...code
                    }
    
                    OffersArray = [...OffersArray, temp];
                }
                
            };

            const response = OffersArray;

            res.json(response);

        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)





module.exports = router;