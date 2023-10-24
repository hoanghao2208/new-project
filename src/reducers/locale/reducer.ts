import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language, LanguageEnum, LanguageNamespace } from 'translation/enums';
import { ILocaleState, LocaleState } from 'reducers/locale/type';

const initialState: LocaleState = {
    resource: {},
    namespace: LanguageNamespace.COMMON,
    language: Language.VI,
};

interface LocaleCaseReducer<P>
    extends CaseReducer<LocaleState, PayloadAction<P>> {}

const STORE_LOCALE_DATA: LocaleCaseReducer<ILocaleState> = (
    state,
    { payload }
) => {
    return {
        ...state,
        ...payload,
    };
};

const SET_LANGUAGE: LocaleCaseReducer<LanguageEnum> = (state, { payload }) => {
    return {
        ...state,
        language: payload,
    };
};

const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        STORE_LOCALE_DATA,
        SET_LANGUAGE,
    },
});

export default localeSlice;
