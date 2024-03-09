import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://medicine-delivery-app.onrender.com',
});



export const fetchPharmacy = async () => {
	const { data } = await instance.get(`/pharmacys/all`);
	return data;
};

export const fetchPreparation = async (id) =>{
    const {data} = await instance.get(`/pharmacy/${id}`);
    return data;
} 