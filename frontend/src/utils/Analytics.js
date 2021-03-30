import axios from 'axios';
import { getAccessToken, logout } from './Auth';


export const getResultsSummary = async () => {
    console.log('[Analytics] Get Results Summary');
    try {
        const accessToken = getAccessToken();
        const response = await axios.get('http://localhost:3333/analytics/results', {}, {
            headers: {
                'authorization': accessToken
            }
        });
        return response.data;
    } catch (error) {
        logout();
        console.log(error);
        throw new Error(error);
    }
}