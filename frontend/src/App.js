import React from 'react';
import MainApp from './pages/MainApp';
import AppProviders from './contexts/AppProviders';

const App = () => {
    return (
        <AppProviders>
            <MainApp />
        </AppProviders>
    )
}

export default App;