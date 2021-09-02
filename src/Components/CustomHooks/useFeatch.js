import React, { useEffect, useState } from 'react'

export const useAddFeatch = (url, method, result) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        fetch(url, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(result)
        }).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

    }, []);

    return ;
}

export const useFetch = (url) => {
    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
}
