import { TimePicker } from 'antd';
import { FC, memo, useCallback, useMemo } from 'react';
import { IInputProps } from '../type';

const timeFormat = 'HH:mm';

const TimeInput: FC<IInputProps> = memo(({ value, onChange, ...props }) => {
    const handleChange = useCallback(
        (_: any, timeValue: any) => {
            onChange?.(timeValue);
        },
        [onChange]
    );

    const timeValue = useMemo(() => {
        // if (value) {
        //     return moment(value, timeFormat);
        // }
        //TODO: new antd version support Dayjs instead of Moment
        return null;
    }, []);

    return (
        <TimePicker
            {...props}
            popupClassName="ems-picker-dropdown"
            value={timeValue}
            format={timeFormat}
            onChange={handleChange}
        />
    );
});
TimeInput.displayName = 'TimeInput';

export default TimeInput;
