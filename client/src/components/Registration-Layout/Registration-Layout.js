import React from 'react';

const RegistrationLayout = ({match}) =>{
    return(
        <div>
            {console.log(match.params.zipcode)}
        </div>
    )
}


export default RegistrationLayout;