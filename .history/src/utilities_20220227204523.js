export const formatNumberWithCommas = (number) => {
    return number.toLocaleString('en-US', {
        maximumFractionDigits: 2,
    })
}
