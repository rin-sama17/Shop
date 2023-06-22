import React from 'react';
function convertArrayToValue(obj) {
    const outputObj = {};

    Object.keys(obj).forEach((key) => {
        outputObj[key] = obj[key][0];
    });

    return outputObj;
}
const handleErrors = (res, setErrors) => {
    const errors = convertArrayToValue(res.response.data.errors);
    setErrors(errors);
};

export default handleErrors;