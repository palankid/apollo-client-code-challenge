export const priceFormatter = value => {
    return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const priceParser = value => {
    return value.replace(/\$\s?|(,*)/g, '');
};
