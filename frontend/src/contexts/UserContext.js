import React, { useContext, useState, useEffect } from 'react';
import { Component } from 'react';
import { ThemeConsumer } from 'styled-components';
import { checkAccessToken } from '../utils/Auth';

/**
 * Sources: https://github.com/kentcdodds/bookshelf/blob/main/src/context/auth-context.js
 * https://github.com/CareYourPets/frontend/blob/master/src/contexts/UserContext.jsx
 * 
 * class based context: https://www.taniarascia.com/using-context-api-in-react/
 */



const defaultProps = {
    email: '',
    role: '',
    isAuth: false,
    isFetching: true,
}

const defaultContextProps = {
    ...defaultProps,
    handleUser: Function.prototype()
};

const UserContext = React.createContext(defaultContextProps);

class UserProvider extends Component {
    state = {
        user: {
            email: '',
            role: '',
            isAuth: false,
            isFetching: true,
        }
    }

    async componentDidUpdate() {
        await this.checkUserAuth();
    }

    async componentDidMount() {
        await this.checkUserAuth();
    }

    checkUserAuth = async () => {
        this.handleUser({...this.state.user, isFetching: true})

        try {
            const { email, role } = await checkAccessToken();
            await this.handleUser({ email, role, isAuth: true, isFetching: false });
        } catch (error) {
            this.handleUser({ ...this.state.user, isAuth: false, isFetching: false });
        }
    }

    handleUser = async (user) => {
        console.log('userrrr', user);
        await this.setState((prevState) => ({user}));
    }

    // TODO useEffect equivalent ... see below
    render() {
        const { children } = this.props;
        const { user } = this.state;
        const { handleUser } = this;

        return (
            <UserContext.Provider value={{user, handleUser}}>
                {children}
            </UserContext.Provider>
        )
    }
}

// const UserProvider = props => {
//     // user is the state
//     // handleUser is setState equivalent
//     const [user, handleUser] = useState(defaultProps);

//     const checkUserAuth = async () => {
//         handleUser({ ...user, isFetching: true });
//         try {
//             const { email, role } = await checkAccessToken();
//             handleUser({ email, role, isAuth: true, isFetching: false });
//         } catch {
//             handleUser({ ...user, isAuth: false, isFetching: false });
//         }
//     };

//     // useEffect is the componentDidUpdate and componentDidMount equivalent 
//     useEffect(() => {
//         checkUserAuth();
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, handleUser }} {...props}/>
//     )
// };

// const useUser = () => {
//     const context = useContext(UserContext);
//     if (context === undefined) {
//         throw new Error('useUser must be used within a provider');
//     }
//     return context; 
// }

export { UserProvider, UserContext };
// export default UserContext;

