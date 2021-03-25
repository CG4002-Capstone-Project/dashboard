import axios from 'axios';

const ACCESSTOKEN = 'accessToken';
const ROLE = 'role';
const NAME = 'name';
const EMAIL = 'email';

export const getAccessToken = () => {
    return localStorage.getItem(ACCESSTOKEN);
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(ACCESSTOKEN, accessToken);
}

export const getName = () => {
    return localStorage.getItem(NAME);
}

export const setName = (name) => {
    localStorage.setItem(NAME, name);
}

export const getRole = () => {
    return localStorage.getItem(ROLE);
}

export const setRole = (role) => {
    localStorage.setItem(ROLE, role);
}

export const getEmail = () => {
    return localStorage.getItem(EMAIL);
}

export const setEmail = (email) => {
    localStorage.setItem(EMAIL, email);
}

export const checkAccessToken = async () => {
    try {
        const accessToken = getAccessToken();
        const data = await axios.get('http://localhost:3333/user/access', {}, accessToken);
        return data;
    } catch (error) {
        logout();
        throw new Error(error);
    }
}

export const logout = () => {
    localStorage.removeItem(ACCESSTOKEN);
    localStorage.removeItem(NAME);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(EMAIL);

}

export const register = async (data) => {
    const response = await axios.post('http://localhost:3333/register/create', data)
    const accessToken = response.data.accessToken;
    const name = response.data.name;
    const email = response.data.email;
    const role = response.data.role;
    // console.log('access token: ' + JSON.stringify(accessToken));
    setAccessToken(accessToken);
    setName(name);
    setEmail(email);
    setRole(role);
}

export const test = async (data) => {
    const accessToken = getAccessToken();
        const can = await axios.post(' http://localhost:3333/register/decode', { 
            data: 'helo'
        }, { headers: { 
                'authorization': accessToken
            }
        })
        console.log('access token: ' + accessToken);
        console.log('can', can);
}