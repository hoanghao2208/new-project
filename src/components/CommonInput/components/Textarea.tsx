import { Input } from 'antd';
import { FC, memo, useCallback } from 'react';
import { IInputProps } from '../type';

const Textarea: FC<IInputProps> = memo(({ value, onChange, ...props }) => {
    const handleChange = useCallback(
        (e: any) => {
            onChange && onChange(e.target.value);
        },
        [onChange]
    );

    return <Input.TextArea {...props} value={value} onChange={handleChange} />;
});
Textarea.displayName = 'Textarea';

export default Textarea;
