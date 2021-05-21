import React from 'react';
import NameInputForm from '../components/NameInputForm';

export default function Start() {
    const associateUser = formData => {
        return formData;
    };

    return (
        <section>
            <header>
                <h2>Welcoming Session</h2>
            </header>
            <NameInputForm onSubmit={associateUser} />
        </section>
    );
}
