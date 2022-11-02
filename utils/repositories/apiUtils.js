import qs from 'qs';
export const apiParamsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'comma' });
};
