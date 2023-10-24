import { Input } from 'antd';
import { FC, memo, useCallback } from 'react';
import { IInputProps } from '../type';

const TextInput: FC<IInputProps> = memo(
    ({ value, onChange, options, ...props }) => {
        const handleChange = useCallback(
            (e: any) => {
                onChange && onChange(e.target.value);
            },
            [onChange]
        );

        return (
            <Input
                {...props}
                type="text"
                value={value}
                onChange={handleChange}
                allowClear
            />
        );
    }
);
TextInput.displayName = 'TextInput';

export default TextInput;
