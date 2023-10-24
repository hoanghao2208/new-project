import { Input } from 'antd';
import { FC, memo, useCallback } from 'react';
import { IInputProps } from '../type';

const PasswordInput: FC<IInputProps> = memo(
    ({ value, onChange, options, ...props }) => {
        const handleChange = useCallback(
            (e: any) => {
                onChange && onChange(e.target.value);
            },
            [onChange]
        );

        return (
            <Input.Password
                {...props}
                placeholder={props.placeholder || 'Mật khẩu'}
                value={value}
                onChange={handleChange}
                required={true}
            />
        );
    }
);
PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
