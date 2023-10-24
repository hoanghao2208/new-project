export enum Language {
    VI = 'VI',
    EN = 'EN',
}

export type LanguageEnum = keyof typeof Language;

export enum LanguageNamespace {
    COMMON = 'COMMON',
}

export type LanguageNamespaceEnum = keyof typeof LanguageNamespace;
