import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import { Color } from "@/constants/color";
// Icons
import { BiSolidLandmark } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Box sx={{width:'100%',height:'18rem',bgcolor:Color.black,display:'flex',flexDirection:'column'}}>
        <Box sx={{display:'flex',justifyContent:'space-evenly',padding:{xs:'0.6rem',sm:'0.7rem',md:'0.8rem',lg:'1rem'},alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
                <BiSolidLandmark  color={Color.sec} size='3.2rem' />
                <Typography sx={{fontSize:{xs:'0.8rem',sm:'1rem',md:'1.2rem',lg:'1.3rem'}}} fontFamily='vazir' color={Color.light} fontWeight='bold'>فروشگاه آنلاین</Typography>
            </Box>
            <Box>
                <Box sx={{display:'flex',gap:'2px',alignItems:'center'}}>
                    <FaLocationDot fontSize='1.3rem' color={Color.sec}/>
                    <Typography fontFamily='vazir' color={Color.sec} fontWeight='bold' sx={{fontSize:{xs:'0.8rem',sm:'1rem',md:'1.2rem',lg:'1.3rem'}}}>آدرس</Typography>
                </Box>
                <Typography sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},mt:'5px'}} fontFamily='vazir' color={Color.light} >بابل - شریعتی </Typography>
            </Box>
            <Box>
                <Box sx={{display:'flex',gap:'4px',alignItems:'center'}}>
                    <FaPhone fontSize='1.3rem' color={Color.sec}/>
                    <Typography  fontFamily='vazir' color={Color.sec} fontWeight='bold' sx={{fontSize:{xs:'0.8rem',sm:'1rem',md:'1.2rem',lg:'1.3rem'}}}>شماره تماس</Typography>
                </Box>
                <Typography sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},mt:'5px'}} fontFamily='vazir' color={Color.light} >00-00-001</Typography>
            </Box>
            <Box>
                <Box sx={{display:'flex',gap:'4px',alignItems:'center'}}>
                    <MdEmail  fontSize='1.3rem' color={Color.sec}/>
                    <Typography  fontFamily='vazir' color={Color.sec} fontWeight='bold' sx={{fontSize:{xs:'0.8rem',sm:'1rem',md:'1.2rem',lg:'1.3rem'}}}>ایمیل</Typography>
                </Box>
                <Typography sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},mt:'5px'}} fontFamily='vazir' color={Color.light} >exmaple@gmail.com</Typography>
            </Box>
        </Box>
        <Divider sx={{borderColor:Color.light,mx:'2rem',paddingY:'1rem'}} />
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:'2rem',gap:'10px'}}>
            <Box sx={{display:'flex',gap:'5px',cursor:'pointer'}}>
                <Facebook sx={{fontSize:{xs:'1.9rem',sm:'2rem',md:'2.3rem',lg:'2.5rem'},color:Color.sec}}/>
                <Instagram sx={{fontSize:{xs:'1.9rem',sm:'2rem',md:'2.3rem',lg:'2.5rem'},color:Color.sec}}/>
                <Twitter sx={{fontSize:{xs:'1.9rem',sm:'2rem',md:'2.3rem',lg:'2.5rem'},color:Color.sec}}/>
            </Box>
            <Box sx={{display:'flex',gap:'5px',alignItems:'center'}}>
                <FaCopyright size='1.3rem' color={Color.first} />
                <Typography sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}} fontFamily='vazir' color={Color.light} >تمام حقوق سایت متعلق به شرکت است.</Typography>
            </Box>
        </Box>
    </Box>
  );
}