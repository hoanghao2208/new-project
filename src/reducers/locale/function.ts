import { localeActions } from "reducers/locale";
import { storeFunc } from "store/Store";
import { LanguageEnum } from "translation/enums";

export const setLanguage = (lang: LanguageEnum) => {
    storeFunc.dispatch(localeActions.SET_LANGUAGE, lang);
};

export const getLanguage = () => {
    return storeFunc.getState()?.locale?.language;
};
