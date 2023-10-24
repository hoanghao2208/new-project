import useToggle from 'hooks/dataHandler/useToggle';
import { IResponse } from 'modules/apis/Response';
import { useEffect, useMemo, useState } from 'react';

interface ResponseExtended extends IResponse {
    loading: boolean;
    reload: () => void;
}

const useApi = (asyncCallback: () => Promise<IResponse | undefined>) => {
    const [response, setResponse] = useState<IResponse>({
        isSuccess: false,
        errorCode: 0,
        message: '',
        data: null,
        messageCode: '',
    });
    const [reloadFlag, toggleReloadFlag] = useToggle(false);
    const [loading, setLoading] = useState(false);

    const returnData = useMemo<ResponseExtended>(
        () => ({
            ...response,
            loading,
            reload: () => toggleReloadFlag(),
        }),
        [loading, response, toggleReloadFlag]
    );

    useEffect(() => {
        setLoading(true);
        asyncCallback()
            .then(res => {
                if (res) {
                    setResponse(res);
                }
            })
            .catch(error => {
                setResponse(prev => ({
                    ...prev,
                    message: String(error),
                }));
            })
            .finally(() => {
                setLoading(false);
            });
    }, [asyncCallback, reloadFlag]);

    return returnData;
};

export default useApi;
