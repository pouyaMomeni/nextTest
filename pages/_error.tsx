import React from 'react';
import MyButton from '@/components/button/button';
import { Color } from '@/constants/color';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';


const Custom404 = () => {
    const router = useRouter();

    return (
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh',bgcolor:Color.black,flexDirection:'column',gap:'1rem'}}>
            <Typography sx={{fontSize:'2rem',fontWeight:'bold',color:Color.light}} >صفحه مد نظر پیدا نشد - 404</Typography>
            <MyButton action={()=> router.push('/')} text='رفتن به صفحه اصلی'/>
        </Box>
        );
};

export default Custom404;