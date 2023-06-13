import React from 'react';
function convertArrayToValue(obj) {
    const outputObj = {};

    Object.keys(obj).forEach((key) => {
        outputObj[key] = obj[key][0];
    });

    return outputObj;
}
const handleErrors = (res, setErrors) => {
    console.log(res.response.data.errors);

    const errors = convertArrayToValue(res.response.data.errors);
    console.log(errors);
};

export default handleErrors;