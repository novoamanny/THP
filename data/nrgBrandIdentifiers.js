const NRGBrandIdentifiers = require('../models/NRGBrandIdentifiers');

/*
    CIRRO and Discount Power/PennyWise have the same brandID.
        - May need to populate rates for these to brands...
*/
const NRG_BRAND_IDENTIFIERS = [
    new NRGBrandIdentifiers(
        'RE',
        'Reliant',
        '0121',
        'WFD5DG'
    ),
    new NRGBrandIdentifiers(
        'GM',
        'Green Mountain',
        '0271',
        'WFD7VM'
    ),
    new NRGBrandIdentifiers(
        'CE',
        'Cirro',
        '0391',
        'WFD7VT'
    ),
    new NRGBrandIdentifiers(
        'PW',
        'Discount Power',
        '0391',
        'WFD7VX'
    )
]

module.exports = NRG_BRAND_IDENTIFIERS;