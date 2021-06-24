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
console.log(token)
// const token ='VGV4YXNob21lOkJoeXFmIVM1NmhvbWVzQQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
        'Cookie' : 'SMCHALLENGE=YES'
        
       
        
    },
   
   
    
}



// T D S P  C O D E


router.post('/tdsp/',
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
                
            }
            

            // Combine
            const response = NRG_BRAND_IDENTIFIERS.map((brand, index) =>{
                return {...array[index], ...brand, servZipCode: ZipCode, channelType: 'AFF', affiliateId}
            })

            // Respond
            res.json(response);

        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)



// O F F E R  C A L L S

router.post('/getOffers/',
    [
        check('affiliateId', 'Affiliate ID').not().isEmpty(),
        check('companyCode', 'Company Code').not().isEmpty(),
        check('tdspCodeCCS', 'TDSP CODE CCS').not().isEmpty(),
        check('promoCode', 'Promo Code').not().isEmpty()
    ],
        async (req, res) =>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }


            const {affiliateId, companyCode, tdspCodeCCS, promoCode} = req.body;

            try{

                const response = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/offers?channelType=AA&affiliateId=${affiliateId}&companyCode=${companyCode}&brandId=RE&languageCode=E&transactionType=MVI&tdspCodeCCS=${tdspCodeCCS}&promoCode=${promoCode}&esid`, config);

                
                res.json(response.data);
            }catch(err){
                console.error(err.message);
            res.status(500).send('Server error');
            }
    }
)




module.exports = router;