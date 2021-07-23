import { useState } from "react";

export default (apiFunc, ...args) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async () => {
        setLoading(true);
        setError(false);
        const response = await apiFunc(...args);
        if (!response.ok) {
            return setError(true);
        }
        setData(response.data);
        setLoading(false);
    };

    return {
        data,
        error,
        loading,
        request,
    };
};
