export const toRial = (price) => {
    if (!price) { return; }
    price = price.toString();
    JSON.stringify(price);
    price = price.replace(/\,/g, '');
    var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');

    while (objRegex.test(price)) {
        price = price.replace(objRegex, '$1,$2');
    }
    return price;
};

export const totalProductsPrice = (products) => {
    let TPrice;
    let TDiscount;
    let TDiscountPersent;
    if (products.length > 0) {
        TPrice = products.reduce((a, b) => a + b.price * b.count, 0);
        const prevPrice = Math.round(
            products.reduce(
                (a, b) => a + (b.price / (1 - b.discount / 100)) * b.count,
                0,
            ),
        );
        TDiscount = prevPrice - TPrice;
        TDiscountPersent = Math.round((100 * (prevPrice - TPrice)) / prevPrice);
    }
    return { TPrice, TDiscount, TDiscountPersent };
};