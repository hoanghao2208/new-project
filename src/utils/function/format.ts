import { camelCase, forEach, snakeCase } from 'lodash';
import moment from 'moment';

export const generateId = (): string => {
    return Math.random().toString(36).slice(2);
};

export const toCamelCase = (str: string): string => {
    return camelCase(str);
};

export const toSnakeCase = (str: string): string => {
    return snakeCase(str);
};

export const dateFormat = (date: string, format: string = 'DD/MM/YYYY') => {
    try {
        return date ? moment(date).format(format) : '--';
    } catch (error) {
        return '--';
    }
};

export const escapeForRegex = (str?: string) => {
    return String(str).replace(/[.*+?^=!:${}()|[\]/\\]/g, '\\$&');
};

export const numberFormatter = (value: any) => {
    return value?.toLocaleString();
};
export const toLowerCaseNonAccentVietnamese = (str: string): string => {
    let result = str.toLowerCase();
    result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    result = result.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    result = result.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    result = result.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return result;
};

export const toNonAccentVietnamese = (str: string): string => {
    let result = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, 'A');
    result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    result = result.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, 'E');
    result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    result = result.replace(/I|Í|Ì|Ĩ|Ị/g, 'I');
    result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    result = result.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, 'O');
    result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    result = result.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, 'U');
    result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    result = result.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, 'Y');
    result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    result = result.replace(/Đ/g, 'D');
    result = result.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    result = result.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    result = result.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return result;
};

const formatClassName = (className: string) => {
    return className.replace(/([A-Z])/g, '-$1').toLowerCase();
};

export const cls = (
    ...classes: Array<
        string | undefined | boolean | { [key: string]: boolean | undefined }
    >
) => {
    const classList = classes.reduce((acc: string[], cur) => {
        if (typeof cur === 'string') {
            acc.push(cur);
        } else if (typeof cur === 'object') {
            forEach(cur, (value, key) => {
                if (value) {
                    acc.push(formatClassName(key));
                }
            });
        }
        return acc;
    }, [] as string[]);
    return classList.join(' ');
};
