import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Start() {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 4000);
    }, []);

    return (
        <section>
            <header>
                <h2>Welcoming Session</h2>
            </header>
        </section>
    );
}
