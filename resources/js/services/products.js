import api from '../api';

async function getProducts(){
    try
    {
        const response =  await api.get("products");
        return response.data;

    }catch(err){
        console.error(err);
    }
}

export default getProducts;