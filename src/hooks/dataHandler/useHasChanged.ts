import _isEqual from 'lodash/isEqual';
import { useRef } from 'react';

const isEqual = (value: any, prevVal: any) => {
    if (typeof value === 'object') {
        return !_isEqual(value, prevVal);
    }
    return prevVal !== value;
};

const useHasChanged = (value: any) => {
    const preValueRef = useRef();
    const hasValueRef = useRef(false);
    if (!hasValueRef.current) {
        hasValueRef.current = true;
        preValueRef.current = value;
        return false;
    }
    let hasChanged = isEqual(value, preValueRef.current);
    preValueRef.current = value;
    return hasChanged;
};

export default useHasChanged;
