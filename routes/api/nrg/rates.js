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


            let OffersArray = []

            for (code of TDSPCodes){
                const response = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/offers?channelType=${code.channelType}&affiliateId=${code.affiliateId}&companyCode=${code.companyCode}&brandId=RE&languageCode=E&transactionType=MVI&tdspCodeCCS=${code.tdspCodeCCS}&promoCode=${code.promoCode}&esid`, config);
                // console.log(response.data.affiliateOfferList)
                for(offer of response.data.affiliateOfferList){
                    let temp = new Offers(
                        code.brand,
                        code.promoCode,
                        '10259',
                        '833-785-7797',
                        'customercare@pulsepowertexas.com',
                        '8 AM - 5 PM',
                        offer.offerCode,
                        offer.campaignCode,
                        offer.sapPlanName,
                        offer.cmsProductTagline || offer.sapOfferTagline,
                        offer.planType,
                        offer.cancelFee,
                        offer.contractTerm,
                        offer.averagePrice2000,
                        offer.averagePrice500,
                        offer.averagePrice1000,
                        offer.averagePrice2000,
                        offer.eflURL,
                        offer.tosURL,
                        offer.yracURL,
                        code,
                        offer
                    )                       
    
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






router.post('/getOffer',
[
    check('RateID', 'RateID/OfferCode missing').not().isEmpty(),
    check('ZipCode', 'ZipCode missing').not().isEmpty(),
    check('Provider', 'Provider/Brand missing').not().isEmpty(),
    check('campaignCode', 'Campaign Code missing').not().isEmpty(),
],
async (req, res) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    const {RateID, Provider, campaignCode, ZipCode} = req.body;

    let i;
    
    const TDSPCodes = NRG_BRAND_IDENTIFIERS.map((brand, index) =>{
        if(brand.brand === Provider){
            i= index
            return {...brand, servZipCode: ZipCode, channelType: 'AFF', affiliateId}
        }
    });

    try{
        const INDEX = i;
        const TDSPCode = TDSPCodes[INDEX];
      
        const response = await axios(`https://stg-api.nrg.com/NRGREST/rest/sales/offer-details?channelType=AA&affiliateId=${TDSPCode.affiliateId}&companyCode=${TDSPCode.companyCode}&languageCode=E&campaignCode=${campaignCode}&promoCode=${TDSPCode.promoCode}&offerCode=${RateID}`, config)
        // console.log(response.data.affiliateOfferList[0]);

        const OfferResponse = new Offers(
            TDSPCode.brand,
            TDSPCode.promoCode,
            '10259',
            '833-785-7797',
            'customercare@pulsepowertexas.com',
            '8 AM - 5 PM',
            response.data.affiliateOfferList[0].offerCode,
            response.data.affiliateOfferList[0].campaignCode,
            response.data.affiliateOfferList[0].sapPlanName,
            response.data.affiliateOfferList[0].cmsProductTagline || response.data.affiliateOfferList[0].sapOfferTagline,
            response.data.affiliateOfferList[0].planType,
            response.data.affiliateOfferList[0].cancelFee,
            response.data.affiliateOfferList[0].contractTerm,
            response.data.affiliateOfferList[0].averagePrice2000,
            response.data.affiliateOfferList[0].averagePrice500,
            response.data.affiliateOfferList[0].averagePrice1000,
            response.data.affiliateOfferList[0].averagePrice2000,
            response.data.affiliateOfferList[0].eflURL,
            response.data.affiliateOfferList[0].tosURL,
            response.data.affiliateOfferList[0].yracURL,
            TDSPCode,
            response.data.affiliateOfferList[0]
        )   
        // console.log(response)
        res.json(OfferResponse);

    }catch(err){
        
        console.error(err.message);
        res.status(500).send('Server error');
    }
})




module.exports = router;