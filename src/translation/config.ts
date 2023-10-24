import { Language } from 'translation/enums';
import common_en from 'translation/resources/en/common.json';
import common_vi from 'translation/resources/vi/common.json';

export const defaultNamespace = 'common';
export const defaultLanguage = Language.VI;

export const resources = {
    [`${Language.VI}`]: {
        common: common_vi,
    },
    [`${Language.EN}`]: {
        common: common_en,
    },
};
