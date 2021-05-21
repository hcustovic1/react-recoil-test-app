import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
    let history = useHistory();
    history.push('/start');
    return <div>Sarma ovo je tvoj dashboard</div>;
}
