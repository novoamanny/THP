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
const Offers = require('../../../models/offers');
const affiliateId = '305480';

// console.log(NRG_BRAND_IDENTIFIERS);
// console.log(NRG_TDSP_CODES);

const username = 'Texashome'
const password = 'Bhyqf!S56homesA'

const token = Buffer.from(`${username}:${password}`).toString('base64');

// const token ='VGV4YXNob21lOkJoeXFmIVM1NmhvbWVzQQ=='


const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${token}`,
        'Cookie' : 'SMCHALLENGE=YES',
        'Accept': 'application/json'
  
    },
  
}

//  R E G I S T E R
router.post('/',
[
    
],
    async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {Provider, SSN, DL} = req.body;

      

        let companyCode;
        const channelType = 'AFF';

        for(item of NRG_BRAND_IDENTIFIERS){
            if(item.brand === Provider){
                companyCode = item.companyCode
            }
        }


        try{
            // I M  H E R E 
        console.log(req.body)


        }catch(err){

            console.error(err.message);
            res.status(500).send('Server error');
    } 
})


// A D D R E S S  C L E A N  U P

router.post('/addressCleanUp/',
[
    check('Address', 'Need Address Variables').not().isEmpty()
],
    async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {Address} = req.body;

      

        let companyCode;

        for(brand of NRG_BRAND_IDENTIFIERS){
            if(brand.brand === Address.brand){
                companyCode = brand.companyCode
            }
        }

        try{
            const body = JSON.stringify({
                ...Address, companyCode, affiliateId, channelType: 'AFF'
            })
            

            const response = await axios.post('https://stg-api.nrg.com/NRGREST/rest/sales/cleanup-address', body, config)
            
            

            res.json(response.data)


        }catch(err){

            console.error(err.message);
            res.status(500).send('Server error');
    }   

})




// G E T  E S I D
router.post ('/getESID/',
[
    check('Address', 'Need Address Variables').not().isEmpty()
],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        const {Address, brand, zipCode} = req.body;

      

        let companyCode;

        for(item of NRG_BRAND_IDENTIFIERS){
            if(item.brand === brand){
                companyCode = item.companyCode
            }
        }

        try{
            const body = JSON.stringify({
                servStreet: Address.streetNum + ' ' + Address.streetName,
                servZipCode: zipCode,
                servCity: Address.city,
                companyCode,
                affiliateId,
                channelType: 'AFF'
            })
    

            const response = await axios.post('https://stg-api.nrg.com/NRGREST/rest/sales/esid/residential', body, config)
            
         

            res.json(response.data.esidList[0])


        }catch(err){

            console.error(err.message);
            res.status(500).send('Server error');
    }   
})



//  T O K E N I Z E
router.post('/tokenize/',
[

],
    async (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {brand, SSN, DL} = req.body;

      

        let companyCode;
        const channelType = 'AFF';

        for(item of NRG_BRAND_IDENTIFIERS){
            if(item.brand === brand){
                companyCode = item.companyCode
            }
        }


        try{
            // const body = JSON.stringify({
            //     actionCode: 'SE',
            //     numToBeTokenized: SSN,
            //     companyCode,
            //     affiliateId,
            //     channelType: 'AFF'
            // })

            


        

            const SSNResponse = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/token?channelType=${channelType}&affiliateId=${affiliateId}&companyCode=${companyCode}&languageCode=E&actionCode=${'SE'}&numToBeTokenized=${SSN}`,config)
            


            const DLResponse = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/token?channelType=${channelType}&affiliateId=${affiliateId}&companyCode=${companyCode}&languageCode=E&actionCode=${'PE'}&numToBeTokenized=${DL}`,config)


            const response = {
                SSN: SSNResponse.data.returnToken,
                DL: DLResponse.data.returnToken
            }
            res.json(response)


        }catch(err){

            console.error(err.message);
            res.status(500).send('Server error');
    } 
})


module.exports = router;