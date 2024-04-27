import { Button, styled } from "@mui/material";
import { Color } from "@/constants/color";

interface Props {
    text : string;
    action : ()=>void;
}

export default function NavBarButton({text,action}:Props){
    
    return(
        <Button onClick={action} color="success" variant="contained">{text}</Button>
    )
}