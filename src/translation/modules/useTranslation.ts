import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getTranslatedText, updateLocaleData } from 'translation/functions';
import {
    TranslationLanguage,
    TranslationReceiverProps,
} from 'translation/modules/Localization';
import { getLocaleResourceSelector } from 'translation/modules/selectors';

const useTranslation = (): TranslationReceiverProps => {
    const { resource, namespace } = useSelector(getLocaleResourceSelector);

    const translate = useCallback(
        (transKey: string, params?: {}): string => {
            return getTranslatedText(transKey, params, resource);
        },
        [resource]
    );

    const changeLanguage = useCallback(
        (newLangCode: TranslationLanguage): void => {
            updateLocaleData(newLangCode, namespace);
        },
        [namespace]
    );

    return {
        translate,
        changeLanguage,
    };
};

export default useTranslation;
