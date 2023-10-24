import { Radio as AntdRadio, Space } from 'antd';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { IInputProps } from '../type';

const Radio: FC<IInputProps> = memo(
    ({ value, onChange, options, ...props }) => {
        const [currentValue, setCurrentValue] = useState('');

        useEffect(() => {
            setCurrentValue(value || '');
        }, [value]);

        const handleChange = useCallback(
            (e: any) => {
                let targetValue = e.target.value;
                if (e.target.checked) {
                    setCurrentValue(targetValue);
                    if (onChange) {
                        onChange(targetValue);
                    }
                }
            },
            [onChange]
        );

        const handleClick = useCallback(
            (e: any) => {
                if (props.readOnly || props.disabled) return;
                if (e.target.value === `${value}`) {
                    setCurrentValue('');
                    if (onChange) {
                        onChange('');
                    }
                }
            },
            [value, onChange, props.readOnly, props.disabled]
        );

        return (
            <Space direction="horizontal">
                {options?.map((option: any, idx) => {
                    const isChecked = currentValue === option.value;
                    return (
                        <div key={idx}>
                            <AntdRadio
                                {...props}
                                value={option.value}
                                checked={isChecked}
                                onChange={handleChange}
                                onClick={handleClick}
                                name={`${option.label}-${Math.random()}` || ''}
                                // ref={idx === 0 ? inputRef : undefined}
                            >
                                {option.label && (
                                    <span className="checkbox-label">
                                        {option.label}
                                    </span>
                                )}
                            </AntdRadio>
                            {option.children ? (
                                <div className="nest-options">
                                    {option.children}
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </Space>
        );
    }
);
Radio.displayName = 'Radio';

export default Radio;
