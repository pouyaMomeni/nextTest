import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
// import pic
import firstPic from '@/assets/images/1.jpg';
import sec from '@/assets/images/2.jpg';
import third from '@/assets/images/3.jpg';
import { Color } from '@/constants/color';

export default function App() {
  return (
    <Box sx={{height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'30rem'},paddingX:{xs:'3rem',sm:'5rem',md:'8rem',lg:'10rem'},py:'2rem',bgcolor:Color.light}}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={firstPic} className='my-img' alt='me'/></SwiperSlide>
        <SwiperSlide><Image src={sec} className='my-img' alt='me'/></SwiperSlide>
        <SwiperSlide><Image src={third} className='my-img' alt='me'/></SwiperSlide>
      </Swiper>
    </Box>
  );
}