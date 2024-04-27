import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Color } from '@/constants/color';
import Cards from '@/model/card.model';
import PRoductButton from '@/components/button/productButton';

import { PiBasketFill } from "react-icons/pi";
import { Box, Divider } from '@mui/material';
import {addItemToList,SortList} from '@/store/reducers/reducer'
// Redux
import { useSelector,useDispatch } from "react-redux";
// toast
import {toast} from 'react-toastify';
export default function MediaCard(props:Cards) {
  const dispatch = useDispatch();

  const statusRedux = useSelector((state : any ) => state.myredux.isLogedIn)
  const addItem = () => {
    dispatch(addItemToList({id:props.cardId, img: props.image,title:props.title,price:props.price,num:1}))
    dispatch(SortList());
    toast.success('به سبد اضافه شد', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <Card  sx={{ width: 345,boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}}>
      <CardMedia
      component="img"
        sx={{objectFit: "contain",height:250,padding:'5px' }} 
        image={props.image}
        title={props.title}
      />
      <Divider/>
      <CardContent sx={{height:'5rem',display:'flex',alignItems:'center',direction:'ltr',justifyContent:'center'}}>
        <Typography dir='ltr' sx={{fontSize:'1rem',color:Color.black,fontWeight:'bold'}}>
          {props.title}
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions sx={{display:'flex',justifyContent:'center',gap:'6px',alignItems:'center'}}>
        <PRoductButton  text='مشاهده' cardId={props.cardId} />
        <Box sx={{cursor:'pointer',display:statusRedux ? 'flex':'none'}}>
            <PiBasketFill onClick={addItem} size='2rem' />
        </Box>
      </CardActions>
    </Card>
  );
}