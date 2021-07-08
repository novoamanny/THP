// Need to develop a model that can work for both NRG and Pulse Power
class Offers{
    constructor(
        brand,
        promoCode,  
        puct,
        phone,
        emailAddress,
        hoursOfOperation,
        offerID,    // Pulse: RateId, NRG: offerCode
        campaignCode,
        offerName,  // Pulse: Plan.PlanName
        offerTagLine,
        offerType,
        offerCancelFee,
        offerLength,
        offerRate,
        offerRate_500,
        offerRate_1000,
        offerRate_2000,
        eflURL,
        tosURL,
        yracURL,
        other,
        data

    ){
        this.brand = brand;
        this.promoCode = promoCode;
        this.puct = puct;
        this.phone = phone;
        this.emailAddress = emailAddress;
        this.hoursOfOperation = hoursOfOperation;
        this.offerID = offerID;
        this.campaignCode = campaignCode;
        this.offerName = offerName;
        this.offerTagLine = offerTagLine;
        this.offerType = offerType;
        this.offerCancelFee = offerCancelFee;
        this.offerLength = offerLength;
        this.offerRate = offerRate;
        this.offerRate_500 = offerRate_500;
        this.offerRate_1000 = offerRate_1000;
        this.offerRate_2000 = offerRate_2000;
        this.eflURL = eflURL;
        this.tosURL = tosURL;
        this.yracURL = yracURL;
        this.other = other;
        this.data = data;
    }
}

module.exports = Offers;