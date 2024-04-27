import { Box,TextField,Typography,Divider} from '@mui/material'
import { BiSolidLandmark } from "react-icons/bi";
import { Color } from '@/constants/color';
import MyTextField from '@/components/textField/textField';
import MyButton from '@/components/button/button';
// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// Redux
import React, { useSelector, useDispatch } from "react-redux";
import {changeStatusToTrue} from '@/store/reducers/reducer'
import { useState } from 'react';
// Hook
import {useLogin} from '@/hook/index'
// toast
import {toast} from 'react-toastify';
// Cookie
import { setCookie} from '@/utils/cookie';
// Router
import { useRouter } from 'next/router';

export default function LoginPage() {
  
  const dispatch = useDispatch();
  const [username,setUsername] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const { mutate} = useLogin();
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate({ username, password },{
      onSuccess : (res : any) => {
        toast.success('موفقعیت آمیز بود', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          dispatch(changeStatusToTrue());
          setCookie('token',res.token);
          router.push(`/`);
      },
      onError : (err) => {
        toast.error('نام کاربری یا رمز عبور اشتباه است', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    });
  };
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh',backgroundImage:'linear-gradient(90deg, rgba(52,78,65,1) 0%, rgba(88,129,87,1) 35%, rgba(163,177,138,1) 100%)'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:{xs:'80%',sm:'70%',md:'40%',lg:'25%'},height:'70%',bgcolor:Color.light,borderRadius:'10px',padding:'1rem',boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}}>
        <Typography fontFamily='vazir' fontWeight='bold' fontSize='1.5rem' color={Color.black}>خوش آمدید</Typography>
        <Box sx={{mt:'10px',color:'black.main'}} >
          <BiSolidLandmark size='3rem' color={Color.black} />
        </Box>
        <Divider sx={{color:'black',width:'100%',mt:'1rem',fontSize:'1.1rem'}}>ورود</Divider>
        <Box sx={{mt:'2rem'}}>
          <MyTextField value={username} setValue={setUsername}  label='نام کاربری' />

        </Box>
        <Box sx={{mt:'1rem'}}>
          <MyTextField value={password} setValue={setPassword}   label='رمز عبور' />
        </Box>
        <Box sx={{mt:'1.5rem',mb:'1rem'}}>
        <MyButton action={handleSubmit}  text={"ورود"}/>
        </Box>
        <Divider sx={{color:'black',width:'100%',mt:'1rem',fontSize:'1.1rem'}}/>
        <Box sx={{display:'flex',flexDirection:'row',gap:'10px',mt:'1rem',cursor:'pointer'}}>
          <FaGithub size={25} color={Color.black}/>
          <FaLinkedin size={25} color={Color.black}/>
          <FaInstagramSquare size={25} color={Color.black}/>
        </Box>
        <Box sx={{cursor:'pointer'}}>
          <Typography  fontFamily='vazir' fontWeight='bold' fontSize='0.6rem' color='blue' mt='2rem'>اکانت ندارید؟ اینجا کلیک کنید</Typography>
        </Box>
      </Box>
    </Box>
  )
}
