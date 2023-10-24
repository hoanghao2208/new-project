import { FC, memo, useMemo } from 'react';
import { Optional } from 'utils/commonType';
import './commonInput.scss';
import AutoComplete from './components/AutoComplete';
import Checkbox from './components/Checkbox';
import DateInput from './components/DateInput';
import DateTimeInput from './components/DateTimeInput';
import FileInput from './components/FileInput';
import NumberInput from './components/NumberInput';
import Radio from './components/Radio';
import Select from './components/Select';
import Textarea from './components/Textarea';
import TextInput from './components/TextInput';
import TimeInput from './components/TimeInput';
import { Input } from './enums';
import { useInputConfigContext } from './InputConfigContext';
import { ICommonInputProps } from './type';

interface ICommonInput extends FC<Optional<ICommonInputProps>> {
    Text?: typeof TextInput;
    TextArea?: typeof Textarea;
    Checkbox?: typeof Checkbox;
    Date?: typeof DateInput;
    DateTime?: typeof DateTimeInput;
    Time?: typeof TimeInput;
    Radio?: typeof Radio;
    File?: typeof FileInput;
    Select?: typeof Select;
    AutoComplete?: typeof AutoComplete;
    Number?: typeof NumberInput;
}
const CommonInput: ICommonInput = memo(
    ({ type, value, onChange, className, readOnly, focus, ...props }) => {
        const Component = useMemo(() => {
            switch (type) {
                case Input.TEXT:
                    return TextInput;
                case Input.TEXTAREA:
                    return Textarea;
                case Input.CHECKBOX:
                    return Checkbox;
                case Input.DATE:
                    return DateInput;
                case Input.DATETIME:
                    return DateTimeInput;
                case Input.TIME:
                    return TimeInput;
                case Input.RADIO:
                    return Radio;
                case Input.FILE:
                    return FileInput;
                case Input.SELECT:
                    return Select;
                case Input.AUTOCOMPLETE:
                    return AutoComplete;
                case Input.NUMBER:
                    return NumberInput;
                default:
                    return TextInput;
            }
        }, [type]);

        const config = useInputConfigContext();

        return (
            <div
                className={`common-input--wrapper ${className ?? ''} ${
                    value ? 'has-value' : ''
                }`}
            >
                <Component
                    value={value}
                    onChange={(!readOnly || undefined) && onChange}
                    readOnly={readOnly}
                    {...config}
                    {...props}
                />
            </div>
        );
    }
);

CommonInput.displayName = 'CommonInput';
CommonInput.Text = TextInput;
CommonInput.TextArea = Textarea;
CommonInput.Checkbox = Checkbox;
CommonInput.Date = DateInput;
CommonInput.DateTime = DateTimeInput;
CommonInput.Time = TimeInput;
CommonInput.Radio = Radio;
CommonInput.File = FileInput;
CommonInput.Select = Select;
CommonInput.AutoComplete = AutoComplete;
CommonInput.Number = NumberInput;

export default CommonInput;
