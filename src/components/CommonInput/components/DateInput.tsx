import { ConfigProvider, DatePicker } from 'antd';
import locale from 'antd/es/locale/vi_VN';
import moment from 'moment';
import 'moment/locale/vi';
import { FC, memo, useCallback, useMemo } from 'react';
import { IInputProps } from '../type';

const valueFormat = 'YYYY-MM-DD';

const DateInput: FC<IInputProps> = memo(
    ({
        value,
        onChange,
        typeDatePicker,
        picker = 'date',
        min,
        max,
        ...props
    }) => {
        const minDate = useMemo(() => {
            if (min) {
                return moment(min, valueFormat);
            }
            return undefined;
        }, [min]);

        const maxDate = useMemo(() => {
            if (max) {
                return moment(max, valueFormat);
            }
            return undefined;
        }, [max]);

        const displayFormat = useMemo(() => {
            switch (picker) {
                case 'date':
                    return 'DD/MM/YYYY';
                case 'month':
                    return 'MM/YYYY';
                case 'year':
                    return 'YYYY';
                case 'quarter':
                    return 'Q/YYYY';
            }
        }, [picker]);

        const placeholder = useMemo(() => {
            switch (picker) {
                case 'date':
                    return 'Chọn ngày';
                case 'month':
                    return 'Chọn tháng';
                case 'year':
                    return 'Chọn năm';
                case 'quarter':
                    return 'Chọn quý';
            }
        }, [picker]);

        const disabledDate = useCallback(
            (current: any) => {
                const today = moment().startOf('day');
                const currentDay = current?.startOf('day');
                if (currentDay) {
                    if (typeDatePicker === 'previous' && currentDay >= today) {
                        return true;
                    }
                    if (
                        typeDatePicker === 'previousAndToday' &&
                        currentDay > today
                    ) {
                        return true;
                    }
                    if (typeDatePicker === 'future' && currentDay <= today) {
                        return true;
                    }
                    if (
                        typeDatePicker === 'futureAndToday' &&
                        currentDay < today
                    ) {
                        return true;
                    }
                    if (minDate && currentDay < minDate) {
                        return true;
                    }
                    if (maxDate && currentDay > maxDate) {
                        return true;
                    }
                    return false;
                }
                return false;
            },
            [maxDate, minDate, typeDatePicker]
        );

        const handleChange = useCallback(
            (_: any, dateValue: any) => {
                onChange &&
                    onChange(
                        dateValue
                            ? moment(dateValue, displayFormat).format(
                                  valueFormat
                              )
                            : ''
                    );
            },
            [onChange, displayFormat]
        );

        const dateValue = useMemo(() => {
            // TODO: new antd version support Dayjs instead of Moment
            if (value) {
                return moment(value, valueFormat) as any;
            }
            return null;
        }, [value]);

        return (
            <ConfigProvider locale={locale}>
                <DatePicker
                    {...props}
                    size="large"
                    placeholder={props.placeholder || placeholder}
                    popupClassName="ems-picker-dropdown"
                    allowClear={true}
                    value={dateValue}
                    format={displayFormat}
                    onChange={handleChange}
                    picker={picker}
                    disabledDate={disabledDate}
                />
            </ConfigProvider>
        );
    }
);
DateInput.displayName = 'DateInput';

export default DateInput;
