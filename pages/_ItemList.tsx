import { Box, Typography } from "@mui/material";
import { Color } from "@/constants/color";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Image from "next/image";
import fire1 from '@/assets/images/fire1.png';
import fire2 from '@/assets/images/fire2.png';
export default function ItemList () {
    return(
        <Box sx={{width:'100%',height:{xs:'20rem',sm:'20rem',md:'13rem',lg:'13rem'},bgcolor:Color.first,display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:{xs:'column',sm:'row',md:'row',lg:'row'}}}>
            <Box sx={{width:{xs:'80%',sm:'70%',md:'35%',lg:'35%'},height:'60%',display:'flex',bgcolor:Color.black,margin:'1rem',borderRadius:'5px',alignItems:'center',padding:'1rem',gap:'1rem',justifyContent:'center'}}>
                <Image src={fire1} width={90} height={90} alt="pic"/>
                <Box sx={{display:'flex',gap:'5px',flexDirection:'column'}}>
                    <Typography fontFamily='vazir' color={Color.light}>مشاهده لیست پیراهن ها</Typography>
                    <Box sx={{display:'flex',gap:'5px',alignItems:'center',fontWeight:'bold'}}>
                    <Typography fontFamily='vazir' sx={{cursor:'pointer'}} color='blue'>
                        نمایش
                    </Typography>
                    <FaLongArrowAltLeft color="blue" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{width:{xs:'80%',sm:'70%',md:'35%',lg:'35%'},height:'60%',display:'flex',bgcolor:Color.black,margin:'1rem',borderRadius:'5px',alignItems:'center',padding:'1rem',gap:'1rem',justifyContent:'center'}}>
                <Image src={fire2} width={90} height={90} alt="pic"/>
                <Box sx={{display:'flex',gap:'5px',flexDirection:'column'}}>
                    <Typography fontFamily='vazir' color={Color.light}>مشاهده لیست شلوار ها</Typography>
                    <Box sx={{display:'flex',gap:'5px',alignItems:'center',fontWeight:'bold'}}>
                    <Typography fontFamily='vazir' sx={{cursor:'pointer'}} color='blue'>
                        نمایش
                    </Typography>
                    <FaLongArrowAltLeft color="blue" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}