import { LanguageEnum } from 'translation/enums';
import _get from 'lodash/get';
import { localeActions } from 'reducers/locale';
import { setLanguage } from 'reducers/locale/function';
import { dispatch } from 'store/Store';
import {
    TranslationLanguage,
    TranslationNamespace,
} from 'translation/modules/Localization';

export const setLangCodeToUserStorage = (lang: LanguageEnum): void => {
    setLanguage(lang);
};

export const getTranslatedText = (
    transKey: string,
    params: {} | null | undefined,
    resource: {}
): string => {
    if (transKey) {
        if (!params) {
            return _get(resource, transKey) || '';
        }
        const _isObject = require('lodash/isObject');
        if (_isObject(params)) {
            const _forIn = require('lodash/forIn');
            let text = _get(resource, transKey) || '';
            if (text) {
                _forIn(params, (paramValue: any, paramKey: any) => {
                    text = text.replace(
                        new RegExp(`{{${paramKey}}}`),
                        paramValue
                    );
                });
            }
            return text;
        }
    }
    return '';
};

export const updateLocaleData = (
    newLangCode: TranslationLanguage,
    namespace: TranslationNamespace
): void => {
    dispatch({
        type: localeActions.STORE_LOCALE_DATA,
        payload: {
            namespace,
            lang: newLangCode || '',
        },
    });
};
