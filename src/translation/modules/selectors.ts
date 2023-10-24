import { StoreState } from 'store/type';
import { createSelector } from 'reselect';

const selectLocale = (state: StoreState) => state.locale;

export const getLocaleResourceSelector = createSelector(
    selectLocale,
    localeData => ({
        resource: localeData.resource,
        namespace: localeData.namespace,
    })
);
