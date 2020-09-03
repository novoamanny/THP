const express = require('express');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const axios = require('axios');
const { response } = require('express');

const router = express.Router();


const token = 'YnJhZEB0ZXhhc2hvbWVwb3dlci5jb206dUNSUkNGMmJUcUJQLHdOJQ=='

const affiliateId = '';
const promoCode = '';
const companies = [
    {
        name: 'Reliant',
        code: '0121'
    },
    {
        name: 'Green Mountain',
        code: '0271',
    },
    {
        name: 'Cirro',
        code: '0391'
    },
    {
        nmae: 'Pennywise',
        code: '0391'
    },
    {
        name: 'Everything Energy',
        code: '0400'
    }
]

// NRG Config needs to change. May not need an auth...
const config = {
    headers: {
        'Content-Type': 'application/json',
        
        
    },
   
    
}


// Main URL
// http://datafeeds.iprospect.com/9090/


// E S I D  S T A N D  A L O N E
//  /ws/simple/getEsidDetails/

router.post('/esid/',
[
    check('ZipCode', 'ZipCode is required...').not().isEmpty()
],
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
        const {ZipCode}= req.body;

        try{
            let esidData = [];
            companies.forEach(prov => {
                if(prov.code === '0391'){
                    if(prov.name === 'Cirro'){
                        const body = JSON.stringify({servZipCode:ZipCode,affiliateId, companyCode: prov.code, brandId: 'CE' })
                        const tdsp = await axios.post('http://datafeeds.iprospect.com/9090/ws/simple/getEsidDetails/', body, config);
                        // Concat Data
                    }
                    if(prov.name === 'Pennywise'){
                        const body = JSON.stringify({servZipCode:ZipCode,affiliateId, companyCode: prov.code, brandId: 'PW' })
                        const tdsp = await axios.post('http://datafeeds.iprospect.com/9090/ws/simple/getEsidDetails/', body, config);
                        // Concat Data
                    }
                }else{
                    const body = JSON.stringify({servZipCode:ZipCode, affiliateId, companyCode: prov.code})
                    const tdsp = await axios.post('http://datafeeds.iprospect.com/9090/ws/simple/getEsidDetails/', body, config);
                    // Concat Data
                }
            });


            

        }
        catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)
// O F F E R  C A L L S
// /ws/simple/getAffiliateOffers/

