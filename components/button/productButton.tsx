import { Button, styled } from "@mui/material";
import { Color } from "@/constants/color";
import { useRouter } from 'next/router';
interface Props {
    text : string;
    cardId : number;
}

export default function PRoductButton(props:Props){
    const MyButton = styled(Button)({
        width:'12rem',
        fontWeight:'bold',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        borderRadius:'15px',
        lineHeight: 1.5,
        backgroundImage:'linear-gradient(90deg, hsla(165, 60%, 11%, 1) 0%, hsla(149, 54%, 31%, 1) 100%)',
        borderColor: Color.sec,
        '&:hover': {
          backgroundColor: Color.fourth,
          borderColor: Color.third,
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: Color.third,
          borderColor: Color.fourth,
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });
      const router = useRouter();

      function pushFunc(){
        router.push(`/products/${props.cardId}`);
      }
    return(
        <MyButton onClick={pushFunc} variant="contained">{props.text}</MyButton>
    )
}