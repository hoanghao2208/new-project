import { InputNumber } from 'antd';
import { FC, memo, useCallback } from 'react';
import { IInputProps } from '../type';

const NumberInput: FC<IInputProps> = memo(
    ({ value, onChange, options, ...props }) => {
        const handleChange = useCallback(
            (e: any) => {
                onChange && onChange(e);
            },
            [onChange]
        );

        return (
            <InputNumber
                {...props}
                value={value}
                onChange={handleChange}
                controls={false}
                max={
                    typeof props?.max === 'number'
                        ? String(props.max)
                        : undefined
                }
                min={
                    typeof props?.min === 'number'
                        ? String(props.min)
                        : undefined
                }
            />
        );
    }
);
NumberInput.displayName = 'NumberInput';

export default NumberInput;
