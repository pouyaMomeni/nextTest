import NavBar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { Typography,Box, Divider,TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// Icons
import { IoIosWarning } from "react-icons/io";
import MyButton from '@/components/button/button';
export default function CompletePage(){

    return(
        <div>
            <NavBar/>
            <Box sx={{display:'flex',flexDirection:'column',padding:'1rem'}}>
                <Divider sx={{my:'2rem'}}><Typography sx={{fontWeight:'bold',fontSize:'1.3rem'}} fontFamily='vazir'>تکمیل اطلاعات جهت خرید</Typography></Divider>
                <Box sx={{display:'flex',gap:'2px',alignItems:'center',mb:'1rem'}}>
                    <IoIosWarning size={23} color='red' />
                    <Typography sx={{fontSize:'1.1rem'}} fontFamily='vazir'>لطفا اطلاعات زیر را با دقت پر کنید</Typography>
                </Box>
                <Box sx={{display:'flex',gap:'1rem',justifyContent:'space-evenly'}}>
                    <TextField color='success' sx={{width:'40%'}}   id="outlined-basic" label="نام" variant="outlined" />
                    <TextField color='success' sx={{width:'40%'}}  id="outlined-basic" label="نام خانوادگی" variant="outlined" />
                </Box>
                <Box sx={{display:'flex',gap:'1rem',justifyContent:'space-evenly',my:'1rem'}}>
                    <TextField color='success' sx={{width:'40%'}}   id="outlined-basic" label="شماره موبایل" variant="outlined" />
                    <TextField color='success' sx={{width:'40%'}}  id="outlined-basic" label="کد پستی" variant="outlined" />
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-evenly',gap:'1rem'}}>
                    <FormControl color='success' sx={{width:'40%'}} >
                        <InputLabel  id="demo-simple-select-label">استان</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="استان"
                        >
                            <MenuItem value={10}>مازندران</MenuItem>
                            <MenuItem value={20}>تهران</MenuItem>
                            <MenuItem value={30}>اصفحان</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl color='success' sx={{width:'40%'}} >
                        <InputLabel id="demo-simple-select-label">شهرستان</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="شهرستان"
                        >
                            <MenuItem value={10}>بابل</MenuItem>
                            <MenuItem value={20}>آمل</MenuItem>
                            <MenuItem value={30}>ساری</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',mt:'1rem'}}>
                    <TextField
                    color='success'
                    id="outlined-multiline-static"
                    label="آدرس"
                    multiline
                    rows={4}
                    defaultValue="آدرس خود را اینجا بنویسید"
                    sx={{width:'45%'}}
                    />
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',mt:'1rem'}}>
                    <MyButton action={()=>console.log('')} text='ثبت نهایی'/>
                </Box>
                <Divider sx={{my:'1rem'}}/>
            </Box>
            <Footer />
        </div>
    )
}