import commonReducer from 'reducers/common';
import errorReducer from 'reducers/error';
import localeReducer from 'reducers/locale';
import profileReducer from 'reducers/profile';
import settingReducer from 'reducers/setting';
import tokenReducer from 'reducers/token';

const reducers = {
    common: commonReducer,
    error: errorReducer,
    locale: localeReducer,
    profile: profileReducer,
    setting: settingReducer,
    token: tokenReducer,
};

export default reducers;
