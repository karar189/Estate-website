import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key':'2edb62221fmsh0b3c29197e1471cp1b55acjsn79365d12abee',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });

    return data; 
}