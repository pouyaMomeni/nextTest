import { Box, Typography } from "@mui/material";
import { Color } from "@/constants/color";
import Image from "next/image";
import shop from '@/assets/images/shop2.png';
import MyButton from "@/components/button/button";

export default function About (){
    return(
    <Box sx={{display:'flex',width:'100%',height:'20rem',justifyContent:'space-evenly',alignItems:'center',bgcolor:Color.light}}>
        <Box sx={{display:'flex',flexDirection:'column',width:{xs:'100%',sm:'45%',md:'45%',lg:'45%'},gap:'10px',padding:'1rem',margin:'1rem'}}>
            <Typography fontFamily='vazir' sx={{fontSize:'1.3rem',fontWeight:'bold',color:Color.fourth}}>درباره ما</Typography>
            <Box sx={{}}>
                <Typography sx={{color:Color.black}} fontFamily='vazir'>با دانلودهای نامحدود قالب های وردپرس، افزونه ها، قالب های ویدئویی و موارد دیگر، پروژه های بهتری را سریعتر ایجاد کنید. میلیون ها دارایی خلاقانه همه با یک هزینه کم.</Typography>
            </Box>
            <Box sx={{mt:'1rem'}}>
                <MyButton action={()=> console.log('hi')} text="خواندن"/>
            </Box>
        </Box>
        <Box sx={{width:'40%',padding:'1rem',display:{xs:'none',sm:'flex',md:'flex',lg:'flex'}}}>
        <Box sx={{width:'30%'}}></Box>
            <Image src={shop} width={300} height={250} alt="pic"/>
        </Box>
    </Box>
    )
}