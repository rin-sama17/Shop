const convertToForm = (values) => {
    const fields = Object.entries(values).map(([key, value]) => {
        return [key, value];
    });
    console.log("aaaaaaaaa", values);
    const formData = new FormData();
    for (const [key, value] of fields) {
        formData.append(key, value);
    }
    return formData;
};
export default convertToForm;