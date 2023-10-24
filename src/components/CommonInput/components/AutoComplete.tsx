import { AutoComplete as AntdAutoComplete, Input as AntdInput } from 'antd';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from '../enums';
import { IInputProps } from '../type';

const AutoComplete: FC<IInputProps> = memo(
    ({
        value,
        options,
        autoCompleteType,
        onChange,
        autoCompleteHintDisplay: autoCompleteHintDisplayProps,
        ...props
    }) => {
        const [inputValue, setInputValue] = useState('');
        const [optionsFilter, setOptionsFilter] = useState([]);
        const type = autoCompleteType || Input.TEXT;
        const preparedOptions = useMemo(
            () =>
                options?.map(option => ({
                    value: option.value,
                    // keySearch: toLowerCaseNonAccentVietnamese(
                    //     option.value ?? ''
                    // ),
                    keySearch: option.value ?? '',
                })) ?? [],
            [options]
        );
        const autoCompleteHintDisplay =
            autoCompleteHintDisplayProps ?? preparedOptions.length < 20;
        // By default, if the number of options is less than 20, the hint will be displayed when the input is empty

        useEffect(() => {
            setInputValue(value || '');
        }, [value]);

        const handleChange = useCallback(
            (v: any) => {
                setInputValue(v);
                onChange && onChange(v);
            },
            [onChange]
        );

        const onSearch = useCallback(
            (inputValue: string) => {
                const _options: any = `${inputValue}`.trim()
                    ? preparedOptions &&
                      preparedOptions.filter((option: any) => {
                          return `${option.keySearch}`.includes(
                              //   toLowerCaseNonAccentVietnamese(
                              //       `${inputValue}`.trim()
                              //   )
                              `${inputValue}`.trim()
                          );
                      })
                    : autoCompleteHintDisplay
                    ? preparedOptions
                    : [];
                setOptionsFilter(_options);
            },
            [autoCompleteHintDisplay, preparedOptions]
        );

        return (
            <>
                <AntdAutoComplete
                    {...props}
                    className={`common-input auto-complete ${
                        props.className || ''
                    }`}
                    value={inputValue}
                    options={optionsFilter}
                    onChange={handleChange}
                    onSearch={onSearch}
                    popupClassName="auto-complete-dropdown"
                    allowClear
                >
                    {type === Input.TEXT ? (
                        <AntdInput
                            className={`common-input ${props.className || ''}`}
                        />
                    ) : (
                        <AntdInput.TextArea
                            className={`common-input ${props.className || ''}`}
                        />
                    )}
                </AntdAutoComplete>
            </>
        );
    }
);
AutoComplete.displayName = 'AutoComplete';

export default AutoComplete;
