import { Checkbox as AntdCheckbox } from 'antd';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { IInputProps } from '../type';

const Checkbox: FC<IInputProps> = memo(
    ({
        value,
        onChange,
        options,
        gridOptionLayout = 1,
        dataSeparator,
        ...props
    }) => {
        const [currentValue, setCurrentValue] = useState([]);

        const optionGroups = useMemo(() => {
            const groups = Array.from(
                { length: gridOptionLayout },
                () => [] as any[]
            );
            options?.forEach((option, index) => {
                groups[index % gridOptionLayout].push(option);
            });
            return groups;
        }, [options, gridOptionLayout]);

        useEffect(() => {
            let newValue: any = [];
            if (value) {
                newValue = `${value}`.split(dataSeparator);
            }
            setCurrentValue(newValue);
        }, [dataSeparator, value]);

        const handleChange = useCallback(
            (e: any) => {
                let targetValue = e.target.value;
                let selectedValues: any = [...currentValue];
                if (e.target.checked) {
                    if (!selectedValues.some((v: any) => v === targetValue)) {
                        selectedValues = [...selectedValues, targetValue];
                    }
                } else {
                    selectedValues = selectedValues.filter(
                        (v: any) => v !== targetValue
                    );
                }
                setCurrentValue(selectedValues);
                if (onChange) {
                    const valueString = selectedValues
                        .sort()
                        .join(dataSeparator);
                    onChange(valueString);
                }
            },
            [currentValue, onChange, dataSeparator]
        );

        return (
            <div className={`option-group-wrapper col-${gridOptionLayout}`}>
                {optionGroups.map((group, index) => (
                    <div key={index} className={`option-group`}>
                        {group.map(option => {
                            const isChecked = currentValue.some(
                                v => `${v}`.trim() === option.value
                            );
                            return (
                                <div
                                    key={option.value}
                                    className="checkbox-option"
                                >
                                    <AntdCheckbox
                                        {...props}
                                        value={option.value}
                                        checked={isChecked}
                                        onChange={handleChange}
                                    >
                                        {option.label && (
                                            <span className="checkbox-label">
                                                {option.label}
                                            </span>
                                        )}
                                    </AntdCheckbox>
                                    {option.children ? (
                                        <div className="nest-options">
                                            {option.children}
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    }
);
Checkbox.displayName = 'Checkbox';

export default Checkbox;
