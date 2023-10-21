export function validarTexto(texto){
    if(texto.trim()===""){
        return {titulo:{error:true, mensaje:'Este campo es requerido'}};
    } else if(texto.length >=3){
        return {titulo:{error:false, mensaje:''}};
    } else {
        return {titulo:{error:true, mensaje:'Debe ser al menos 3 caracteres'}}
    }
}

export function validarUrl(url){
    if(url.trim()===''){
        return {link:{error:true, mensaje:'la url es requerida'}};
    } else if(url.includes('www.')|| url.includes('.')){
        return {link:{error:false,mensaje:''}};
    } else {
        return {link:{error:true, mensaje:'Debes ingresar una url correctamente'}};
    }
}

export function validarTextArea(texto){
    if (texto.trim()==='') {
        return{descripcion:{error:true,mensaje:'Este campi es requerido'}}
    } else if(texto.length>=4 && texto.length<=300){
        return {descripcion:{error:false,mensaje:''}};
    } else{
        return {descripcion:{error:true,mensaje:'Entre 4 a 300 caracteres'}};
    }
}

export function validarSelect(categoria){
    if(categoria!==''){
        return {categoria:{error:false,mensaje:''}};
    }else {
        return {categoria:{error:false,mensaje:''}};
    }
}