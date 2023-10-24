import { DatePicker } from 'antd';
import moment from 'moment';
import { FC, memo, useCallback, useMemo } from 'react';
import { IInputProps } from '../type';

//const displayFormat = 'DD/MM/YYYY HH:mm:ss';
const displayFormat = 'DD/MM/YYYY HH:mm';
const valueFormat = 'YYYY-MM-DD HH:mm:ss';

const DateTimeInput: FC<IInputProps> = memo(({ value, onChange, ...props }) => {
    const handleChange = useCallback(
        (_: any, dateValue: any) => {
            onChange &&
                onChange(
                    dateValue
                        ? moment(dateValue, displayFormat).format(valueFormat)
                        : ''
                );
        },
        [onChange]
    );

    const dateValue = useMemo(() => {
        // if (value) {
        //     return moment(value, valueFormat);
        // }
        // TODO: new antd version support Dayjs instead of Moment
        return null;
    }, []);

    return (
        <DatePicker
            {...props}
            placeholder={props.placeholder || 'Chọn ngày'}
            popupClassName="ems-picker-dropdown"
            allowClear={true}
            value={dateValue}
            format={displayFormat}
            showTime={{ format: 'HH:mm' }}
            onChange={handleChange}
        />
    );
});
DateTimeInput.displayName = 'DateTimeInput';

export default DateTimeInput;
