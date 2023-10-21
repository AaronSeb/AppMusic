import { Box, Typography } from "@mui/material";
import SliderCarrusel from './Slider'
import VideoCard from './VideoCard'
import { HashLink } from "react-router-hash-link";
import { BoxCaja } from "../../css/UI";

export const Carrusel = ({url,categoria,nombre,color,videos})=>{
    return<>
    {
        videos.length>0 && 
        <Box sx={{
            padding:'4rem',
            color:'#c58c75',
            width:'100%',
            height:'100%',
            
         }} component='section'>
            <Typography sx={{ backgroundColor:`${color}` }} variant="h2">{nombre}</Typography>
            <h2 style={{ color:`${color}` }}>{nombre}</h2>
            <SliderCarrusel>
                {
                    videos.map((video)=>{
                        const {id,titulo,url,miniatura,categoria,descripcion}=video;
                        return(
                            <BoxCaja key={id}>
                                <HashLink to={`/videos/${id}#${titulo}`}>
                                    <VideoCard miniatura={miniatura} url={url}/>
                                </HashLink>
                            </BoxCaja>
                        )
                    })
                }
            </SliderCarrusel>
        </Box>
    }
    </>
}