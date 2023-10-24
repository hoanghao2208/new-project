import { createContext, useContext } from 'react';

export interface IContext {
    tabIndex?: number;
    generateId: () => string;
    dataSeparator: string;
}

const defaultContext: IContext = {
    generateId: () => '',
    dataSeparator: '|',
};

const InputConfigContext = createContext<IContext>(defaultContext);

export const useInputConfigContext = () => useContext(InputConfigContext);

const InputConfigProvider = InputConfigContext.Provider;

export default InputConfigProvider;
