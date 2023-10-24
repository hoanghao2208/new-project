/********************* Usage *********************/
/* Initialize with array of objects */
/*
const labelFormatter = LabelFormatter.init([
    { value: <value1>, label: <label1>, isDefault?: true },
    { value: <value2>, label: <label2> },
    { value: <value3>, label: <label3> },
    ...
]);
*/
/* Or initialize with object */
/*
const labelFormatter = new LabelFormatter({
    <value1>: <label1>,
    <value2>: <label2>,
    <value3>: <label3>,
    ...
});
*/
/* Get label */
/*
const label = labelFormatter.get(<value>);
*/
/*************************************************/

interface IData {
    [key: string]: string;
}

interface IConfig {
    defaultLabel?: string;
}

interface IInitItem {
    value: string;
    label: string;
    isDefault?: boolean;
}

class LabelFormatter {
    data: IData;
    config: IConfig;
    constructor(data?: IData, config?: IConfig) {
        this.data = data || {};
        this.config = config || {};
    }

    get = (key: string): string => {
        return this.data[key] ?? this.config.defaultLabel ?? key;
    };

    static init = (items: IInitItem[], config?: IConfig): LabelFormatter => {
        const data: IData = {};
        let defaultLabel = '';
        items.forEach(item => {
            data[item.value] = item.label;
            if (item.isDefault) {
                defaultLabel = item.label;
            }
        });
        return new LabelFormatter(data, { ...config, defaultLabel });
    };
}

export default LabelFormatter;
