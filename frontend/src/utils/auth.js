import axios from 'axios';

const ACCESSTOKEN = 'accessToken';

export const getAccessToken = () => {
    return localStorage.getItem(ACCESSTOKEN);
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(ACCESSTOKEN, accessToken);
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
}

export const register = async (data) => {
    const response = await axios.post('http://localhost:3333/register/create', data)
    const accessToken = response.data.accessToken;
    // console.log('access token: ' + JSON.stringify(accessToken));
    setAccessToken(accessToken);
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