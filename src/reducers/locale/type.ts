import {
    Language,
    LanguageEnum,
    LanguageNamespace,
    LanguageNamespaceEnum,
} from 'translation/enums';

interface SpecificNamespaceLanguageData {
    [key: string]: string | SpecificNamespaceLanguageData;
}

interface SpecificLanguageData {
    [LanguageNamespace.COMMON]?: SpecificNamespaceLanguageData;
}

interface LanguageData {
    [Language.EN]?: SpecificLanguageData;
    [Language.VI]?: SpecificLanguageData;
}

export interface LocaleState {
    language: LanguageEnum;
    namespace: LanguageNamespaceEnum;
    resource: LanguageData;
}

export interface ILocaleState {
    language?: LanguageEnum;
    namespace?: LanguageNamespaceEnum;
    resource?: LanguageData;
}
