import React from 'react';
import MainApp from './pages/MainApp';
import { UserProvider as AppProviders } from './contexts/UserContext';

const App = () => {
    return (
        <AppProviders>
            <MainApp />
        </AppProviders>
    )
}

export default App;