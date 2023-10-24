import { KeyboardEventHandler, ReactNode } from 'react';
import { FileStatusEnum, Input, InputType } from './enums';
import { IContext } from './InputConfigContext';

// for specific input
export interface IInputOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface FileItem {
    name: string;
    uid: string;
    status: FileStatusEnum;
    url: string;
    file?: File;
    ordinal: number;
    itemCode?: string;
    itemOrdinal?: number;
}
export interface IInputProps extends IContext {
    value?: string;
    onChange?: (value: string) => void;
    onFilesChange?: (value: FileItem[], changed: boolean) => void;
    placeholder?: string;
    options?: Array<IInputOption>;
    suffixIcon?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    focus?: boolean;
    prefix?: any;
    suffix?: any;
    onKeyDown?: KeyboardEventHandler;
    onBlur?: () => void;
    className?: string;
    autoCompleteType?: Input.TEXT | Input.TEXTAREA;
    autoCompleteHintDisplay?: boolean;
    maxLength?: any;
    minLength?: any;
    max?: any;
    min?: any;
    tooltip?: any;
    picker?: 'date' | 'month' | 'year' | 'quarter';
    typeDatePicker?: string;
    gridOptionLayout?: number;
}

// for wrapper component
export interface ICommonInputProps extends IInputProps {
    type?: InputType;
}
