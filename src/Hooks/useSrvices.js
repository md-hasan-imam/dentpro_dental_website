import React, { useEffect, useState } from 'react';

const useSrvices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/programming-hero-web-course-4/independent-service-provider-md-hasan-imam/main/public/data.json?token=GHSAT0AAAAAABPXMH4HOM4DIRLB74DHK7TAYS46CAQ')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return [services, setServices]
};

export default useSrvices;