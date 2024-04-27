import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import listBuy from '@/model/listBuy.model';
import { Color } from '../../constants/color';
import { Box } from '@mui/material';
// Icon
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useSelector,useDispatch } from "react-redux";
import {minusFunc,plusFunc} from '../../store/reducers/reducer'
export default function BuyCard(props : listBuy) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 340,boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' }}>
      <CardMedia
      component="img"
      sx={{objectFit: "contain",height:250,padding:'5px' }} 
      image={props.img}
      title={props.title}
      />
      <CardContent sx={{height:'5rem',display:'flex',alignItems:'center',direction:'ltr',justifyContent:'center'}}>
        <Typography dir='ltr' sx={{fontSize:'1rem',color:Color.black,fontWeight:'bold'}}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{padding:'1rem',display:'flex',justifyContent:'space-evenly'}}>
        <Typography  fontFamily='vazir' sx={{fontSize:'1rem',color:Color.fourth}}>
          قیمت کل : {props.num * props.price}$
        </Typography>
        <Box sx={{display:'flex',gap:'7px',alignItems:'center'}}>
          <CiCirclePlus onClick={()=>dispatch(plusFunc({id:props.id}))} color='green' size={24} cursor='pointer'/>
          <Typography sx={{fontWeight:'bold'}}>{props.num}</Typography>
          <CiCircleMinus onClick={()=>dispatch(minusFunc({id:props.id}))} color='red' size={24} cursor='pointer'/>
        </Box>
      </CardActions>
    </Card>
  );
}