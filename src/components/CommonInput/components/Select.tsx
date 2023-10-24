import { Select as SelectAntd } from 'antd';
import ArrowIcon from '../icons/ArrowIcon';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { IInputProps } from '../type';

const { Option } = SelectAntd;

const Select: FC<IInputProps> = memo(
    ({ value, onChange, options, ...props }) => {
        const [inputValue, setInputValue] = useState('');
        const ref = useRef(null);

        useEffect(() => {
            setInputValue(value || '');
        }, [value]);

        const handleChange = useCallback(
            (value: any) => {
                setInputValue(value || '');
                onChange && onChange(value || '');
            },
            [onChange]
        );

        return (
            <SelectAntd
                {...props}
                value={inputValue || void 0}
                onChange={handleChange}
                ref={ref}
                suffixIcon={<ArrowIcon />}
                showSearch={true}
            >
                {options?.map(option => (
                    <Option
                        value={option.value}
                        key={option.value}
                        disabled={
                            option.disabled || props.disabled || props.readOnly
                        }
                    >
                        {option.label}
                    </Option>
                ))}
            </SelectAntd>
        );
    }
);
Select.displayName = 'Select';

export default Select;
