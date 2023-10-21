import axios from "axios";

export const api = axios.create({baseURL:"https://651c3ab3194f77f2a5af9498.mockapi.io"})

export const cargar = async(url,setData)=>{
    try {
        const resp = await api.get(url)
        console.log(resp)
        setData(resp.data)
        
    } catch (error) {
        console.error("Error al buscar datos",error)
    }
}

export const crear = async (url,datos,callback)=>{

    try {
        const resp = await api.post(url,datos)
        if(callback){
            callback(resp.data);
        }
    } catch (error) {
        console.error("Error al crear datos",error)
    }
}


export const actualizar = async(url,datos,callback)=>{
    try {
        const resp = await api.put(url,datos);
        if(callback){
            callback(resp.data);
        }
    } catch (error) {
        console.error("Error al actualizar datos:",error)
    }
}

export const eliminar = async(url,callback)=> {
    try {
        const resp = await api.delete(url);
        if (callback) {
            callback(resp.data)
        }
    } catch (error) {
        console.error("Error al eliminar datos:", error)
    }
}

export const getDatos = async (url,setData)=>{
    try {
        const resp = await api.get(url)
        setData(resp.data)
    } catch (error) {
        console.error("Error al mostrar datos:",error);
    }
} 