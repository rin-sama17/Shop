export const toRial = (price) => {
    console.log(price);

    if (!price) {
        return;
    }

    price = price.toString();
    JSON.stringify(price);
    price = price.replace(/\,/g, '');
    var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');

    while (objRegex.test(price)) {
        price = price.replace(objRegex, '$1,$2');
    }
    return price;
};