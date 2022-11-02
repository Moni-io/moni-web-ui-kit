import { round, splitDigits } from './';
/**
 * @description - rounds number to the needed digit and adds digit postfix
 * @example - (50000, 'k') => 50K, (50000000, 'k', true) => 50 000K
 */
export const shortenLongNumberByDigit = (num, digit, options) => {
    const mapped = digitMap[digit];
    const { formatDigits, threshold, precision } = Object.assign(Object.assign({}, defaultOptions), options);
    if (!mapped) {
        return String(num);
    }
    if (isNaN(num)) {
        return String(num);
    }
    if (num / mapped < threshold) {
        return formatDigits ? splitDigits(num) : String(num);
    }
    if (Number(num) < mapped) {
        if (formatDigits) {
            return splitDigits(num);
        }
        else {
            return String(num);
        }
    }
    const result = round(num / mapped, precision);
    if (formatDigits) {
        return `${splitDigits(result)}${digit.toUpperCase()}`;
    }
    else {
        return `${result}${digit.toUpperCase()}`;
    }
};
/**
 * @description - @see shortenLongNumber
 * @example - @see shortenLongNumber
 **/
export const shortenLongNumber = (num, startDigit = 'b', options) => {
    if (isNaN(num)) {
        return String(num);
    }
    const newOptions = Object.assign(Object.assign({}, defaultOptions), options);
    const { threshold } = newOptions;
    let result;
    if (num > digitMap.t) {
        if (num / digitMap.t < threshold) {
            if (startDigit === 'k' ||
                startDigit === 'm' ||
                startDigit === 'b') {
                result = shortenLongNumberByDigit(num, 'b', newOptions);
            }
        }
        else {
            result = shortenLongNumberByDigit(num, 't', newOptions);
        }
    }
    else if (num > digitMap.b) {
        if (num / digitMap.b < threshold) {
            if (startDigit === 'k' || startDigit === 'm') {
                result = shortenLongNumberByDigit(num, 'm', newOptions);
            }
        }
        else {
            result = shortenLongNumberByDigit(num, 'b', newOptions);
        }
    }
    else if (num > digitMap.m) {
        if (num / digitMap.m < threshold) {
            if (startDigit === 'k') {
                result = shortenLongNumberByDigit(num, 'k', newOptions);
            }
        }
        else {
            if (startDigit === 'k' || startDigit === 'm') {
                result = shortenLongNumberByDigit(num, 'm', newOptions);
            }
        }
    }
    else if (num > digitMap.k && startDigit === 'k') {
        result = shortenLongNumberByDigit(num, 'k', newOptions);
    }
    if (!result) {
        result = newOptions.formatDigits ? splitDigits(num) : String(num);
    }
    return result;
};
const digitMap = {
    t: 1000000000000,
    b: 1000000000,
    m: 1000000,
    k: 1000,
};
const defaultOptions = {
    formatDigits: true,
    threshold: 1,
    precision: 2,
};
