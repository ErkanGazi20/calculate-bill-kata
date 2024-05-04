function calculateBill (price, vat, tip) {
    let totalPrice = sum = price + vat + tip;
    if (typeof price !== 'number') {
        return "error";
    } else {
    if (typeof vat !== 'number') {
        return "error";
    } else {
        if (typeof tip !== 'number') {
            return "error";
        } else {
    return "£" + totalPrice;
        }
    }
}
}




module.exports = calculateBill;