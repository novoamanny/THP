const axios = require('axios');

const token = 'YnJhZEB0ZXhhc2hvbWVwb3dlci5jb206dUNSUkNGMmJUcUJQLHdOJQ=='

const config ={
    headers: {
        'Content-Type': 'application/json',
        
    },
}

const form =JSON.stringify({
    EmailAddress: 'texashomepower@gmail.com',
    FirstName: 'John',
    LastName: 'Doe',
    Phone: '1234567890',
    ZipCode: '75217'
})

const functions = {
    COMPLETED_STATUS: {
        ONE: async () =>{
            

            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '111111111',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
            
        },
        TWO: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '111111112',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        },
        THREE: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '111111113',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        } 
    },
    PENDING_STATUS: {
        ONE: async () =>{
            

            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '222222221',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
            
        },
        TWO: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '222222222',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        },
        THREE: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '222222223',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        } 
    },
    PROCESSING_STATUS: {
        ONE: async () =>{
            

            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '333333331',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
            
        },
        TWO: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '333333332',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        },
        THREE: async () =>{
            let body = JSON.stringify({
                ZipCode: '75217'
            })
            console.log('GetRates Req:\n',body);
            const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
            console.log('GetRates Res:\n', res.data, res.data[0].data);

            const rate = res.data[0].data[0];
            const rateID = rate.RateID;

            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                RateID: rateID
            })
            console.log('GetRate Req:\n',body);
            const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
            
            console.log('GetRate Res:\n', res2.data);


            body = JSON.stringify({
                ZipCode: '75217',
                Provider: 'Pulse',
                Address1: '1702 Prichard Ln'
            })            
            console.log('GetMeters Req:\n',body);
            const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
            console.log('GetMeters Res:\n', res3.data);

            const Esiid = res3.data[0].Esiid

            body = JSON.stringify({
                EmailAddress: 'texashomepower@gmail.com',
                FirstName: 'John',
                LastName: 'Doe',
                Phone: '1234567890',
                ZipCode: '75217',
                Rate: rate.Rate,
                RateID: rateID,
                Esiid: Esiid,
                SwitchType: 'Switching',
                SSN: '333333333',
                Provider: 'Pulse'
            })
            console.log('Register Req:\n',body);
            const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
            console.log('Register Res:\n', res4.data);
            return(res4)
        } 
    },
    FOUR: async () =>{
        let body = JSON.stringify({
            ZipCode: '75217'
        })
        console.log('GetRates Req:\n',body);
        const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
        console.log('GetRates Res:\n', res.data, res.data[0].data);

        const rate = res.data[0].data[0];
        const rateID = rate.RateID;

        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            RateID: rateID
        })
        console.log('GetRate Req:\n',body);
        const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
        
        console.log('GetRate Res:\n', res2.data);


        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            Address1: '1702 Prichard Ln'
        })            
        console.log('GetMeters Req:\n',body);
        const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
        console.log('GetMeters Res:\n', res3.data);

        const Esiid = res3.data[0].Esiid

        body = JSON.stringify({
            EmailAddress: 'texashomepower@gmail.com',
            FirstName: 'John',
            LastName: 'Doe',
            Phone: '1234567890',
            ZipCode: '75217',
            Rate: rate.Rate,
            RateID: rateID,
            Esiid: Esiid,
            SwitchType: 'Switching',
            SSN: '333333333',
            Provider: 'Pulse',
            MarketingEmails: true,
            MarketingPhoneCalls: true, 
            Ebilling: true,
            PriorityMoveIn: true,
            AuthorizedRep: 'Jane Doe'
        })
        console.log('Register Req:\n',body);
        const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
        console.log('Register Res:\n', res4.data);
        return(res4)
    },
    FIVE: async () =>{
        let body = JSON.stringify({
            ZipCode: '75217'
        })
        console.log('GetRates Req:\n',body);
        const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
        console.log('GetRates Res:\n', res.data, res.data[0].data);

        const rate = res.data[0].data[0];
        const rateID = rate.RateID;

        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            RateID: rateID
        })
        console.log('GetRate Req:\n',body);
        const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
        
        console.log('GetRate Res:\n', res2.data);


        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            Address1: '1702 Prichard Ln'
        })            
        console.log('GetMeters Req:\n',body);
        const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
        console.log('GetMeters Res:\n', res3.data);

        const Esiid = res3.data[0].Esiid

        body = JSON.stringify({
            EmailAddress: 'texashomepower@gmail.com',
            FirstName: 'John',
            LastName: 'Doe',
            Phone: '1234567890',
            ZipCode: '75217',
            Rate: rate.Rate,
            RateID: rateID,
            Esiid: Esiid,
            SwitchType: 'Switching',
            SSN: '333333333',
            Provider: 'Pulse',
            MarketingEmails: true,
            MarketingPhoneCalls: true, 
            Ebilling: true,
            PriorityMoveIn: true,
            AuthorizedRep: 'Jane Doe',
            Language: "Spanish"
        })
        console.log('Register Req:\n',body);
        const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
        console.log('Register Res:\n', res4.data);
        return(res4)
    },
    SIX: async () =>{
        let body = JSON.stringify({
            ZipCode: '75217'
        })
        console.log('GetRates Req:\n',body);
        const res = await axios.post('http://localhost:8080/api/pulse/rates/get/rates', body, config)
        console.log('GetRates Res:\n', res.data, res.data[0].data);

        const rate = res.data[0].data[0];
        const rateID = rate.RateID;

        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            RateID: rateID
        })
        console.log('GetRate Req:\n',body);
        const res2 = await axios.post('http://localhost:8080/api/pulse/rates/get/rate', body, config)
        
        console.log('GetRate Res:\n', res2.data);


        body = JSON.stringify({
            ZipCode: '75217',
            Provider: 'Pulse',
            Address1: '1702 Prichard Ln'
        })            
        console.log('GetMeters Req:\n',body);
        const res3 = await axios.post('http://localhost:8080/api/pulse/register/get/meters', body, config)
        console.log('GetMeters Res:\n', res3.data);

        const Esiid = res3.data[0].Esiid

        body = JSON.stringify({
            EmailAddress: 'texashomepower@gmail.com',
            FirstName: 'John',
            LastName: 'Doe',
            Phone: '1234567890',
            ZipCode: '75217',
            Rate: rate.Rate,
            RateID: 999999999,
            Esiid: Esiid,
            SwitchType: 'Switching',
            SSN: '333333333',
            Provider: 'Pulse',
            MarketingEmails: true,
            MarketingPhoneCalls: true, 
            Ebilling: true,
            PriorityMoveIn: true,
            AuthorizedRep: 'Jane Doe',
            Language: "Spanish"
        })
        console.log('Register Req:\n',body);
        const res4 = await axios.post('http://localhost:8080/api/pulse/register/', body, config)
        console.log('Register Res:\n', res4.data);
        return(res4)
    }
}

module.exports = functions;