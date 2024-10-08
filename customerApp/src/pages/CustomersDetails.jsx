import React from 'react';

const CustomersDetails = ( { customerName, customerGender, customerBorn } ) => {
    return(
         <div>
            <h1>Customers Details Page</h1>
            <p>Müşterinin Adı {customerName} </p>
            <p>Müşterinin Cinsiyeti {customerGender}</p>
            <p>Müşterinin Doğum Tarihi {customerBorn}</p>
        </div>
    );
};

export default CustomersDetails;