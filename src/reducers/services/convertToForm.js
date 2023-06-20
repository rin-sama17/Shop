const convertToForm = (values) => {
    function appendArrayToFormData(formData, key, array) {
        for (let i = 0; i < array.length; i++) {
            formData.append(`${key}[]`, array[i]);
        }
        return formData;
    }
    const fields = Object.entries(values).map(([key, value]) => {
        return [key, value];
    });
    const formData = new FormData();
    for (const [key, value] of fields) {
        if (key === "tags") {
            appendArrayToFormData(formData, "tags", value);
        } else {
            formData.append(key, value);
        }
    }
    return formData;
};
export default convertToForm;
