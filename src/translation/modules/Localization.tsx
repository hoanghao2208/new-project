import { Language } from 'translation/enums';
import { memo, FC, PropsWithChildren, useEffect } from 'react';
import {
    defaultLanguage,
    defaultNamespace,
    resources,
} from 'translation/config';
import { useDispatch } from 'react-redux';
import { localeActions } from 'reducers/locale';
import { getLanguage } from 'reducers/locale/function';

interface IProps {
    lang?: TranslationLanguage;
    defaultLang?: TranslationLanguage;
}

export type TranslationLanguage = `${Language.VI}` | `${Language.EN}` | '';

export type TranslationNamespace = string;

export type TranslationReceiverProps = {
    translate: (transKey: string, params?: {}) => string;
    changeLanguage: (newLangCode: TranslationLanguage) => void;
};

export type LocalizationProps = IProps;

const Localization: FC<PropsWithChildren<LocalizationProps>> = memo(
    ({ children, lang, defaultLang }) => {
        const dispatch = useDispatch();

        useEffect(
            () => {
                let language: string = '';
                let resource: any = null;
                const namespace = defaultNamespace;
                const currentDefaultLanguage = defaultLang || defaultLanguage;

                /**
                 * temporary comment this functions. Wait for english language translated
                 */
                let currentUserLanguage =
                    lang || getLanguage() || currentDefaultLanguage;
                // get saved language
                if (currentUserLanguage) {
                    language = currentUserLanguage;
                    resource = resources[currentUserLanguage];
                }
                if (!resource) {
                    // get user's local language
                    let userLocalLanguage = window?.navigator?.language;
                    if (userLocalLanguage) {
                        for (const langCode in resources) {
                            if (
                                new RegExp(`^${langCode}\\b`).test(
                                    userLocalLanguage
                                )
                            ) {
                                language = langCode;
                                resource = resources[langCode];
                                break;
                            }
                        }
                    }
                }

                if (!resource && resources[currentDefaultLanguage]) {
                    // get default language
                    language = currentDefaultLanguage;
                    resource = resources[currentDefaultLanguage];
                }

                if (resource) {
                    resource = resource[namespace];
                }

                dispatch({
                    type: localeActions.STORE_LOCALE_DATA,
                    payload: {
                        namespace,
                        lang: language || '',
                        resource: resource || {},
                    },
                });
                // setLangCodeToUserStorage(language || '');
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [lang, defaultLang]
        );

        return <>{children}</>;
    }
);
Localization.displayName = 'Localization';

export default Localization;
