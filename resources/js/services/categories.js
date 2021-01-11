import api from '../api';

async function getCategories(){
    try
    {
        const response =  await api.get("categories");
        return response.data;

    }catch(err){
        console.error(err);
    }
}

export default getCategories;