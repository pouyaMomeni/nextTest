import { Color } from "@/constants/color";
import Products from "@/model/product.model"
import { Box, Divider, Typography } from "@mui/material";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Image from "next/image";
import NavBar from '@/components/navbar/navbar'
// Icons
import { MdTitle } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import ShopButton from "@/components/button/shopButton";
import {addItemToList,SortList} from '@/store/reducers/reducer'
// Redux
import { useSelector,useDispatch } from "react-redux";

import {toast} from 'react-toastify';
export default function SingleProductPage({
    repo,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addItemToList({id:repo.id, img: repo.image,title:repo.title,price:repo.price,num:1}))
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
      <> 
        <NavBar/>
        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'},height:'20rem',alignItems:'center',padding:'1rem',gap:'20px'}}>
          <Box>
            <Image width={250} height={250} alt="pic" src={repo.image} />
          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <Box sx={{display:'flex',gap:'2px',alignItems:'center',mb:'1rem'}}>
              <Typography fontFamily='vazir' sx={{fontSize:'1.3rem',fontWeight:'bold'}}> {repo.title} </Typography>
            </Box>
            <Box sx={{display:'flex',gap:'2px',alignItems:'center'}}>
              <MdDescription size={22} color={Color.fourth} />
              <Typography sx={{color:Color.black,fontSize:'1.1rem'}} fontFamily='vazir'> توضیحات : </Typography>
            </Box>
            <Box>
              <Typography fontFamily='vazir'> {repo.description} </Typography>
            </Box>
            <Box sx={{display:'flex',gap:'2px',alignItems:'center'}}>
              <IoIosPricetag size={22} color={Color.fourth} />
              <Typography sx={{color:Color.black,fontSize:'1.1rem'}} fontFamily='vazir'> قیمت : </Typography>
              <Typography fontFamily='vazir'> {repo.price} $ </Typography>
            </Box>
            <Box sx={{display:'flex',gap:'2px',alignItems:'center'}}>
              <IoMdStar size={22} color={Color.fourth} />
              <Typography sx={{color:Color.black,fontSize:'1.1rem'}} fontFamily='vazir'> امتیاز : </Typography>
              <Typography fontFamily='vazir'> {repo.rating.rate}/5  </Typography>
            </Box>
            <Box sx={{mt:'2rem'}}>
              <ShopButton action={addItem} text='افزودن به سبد'/>
            </Box>
          </Box>
        </Box>
      </>
    )
  }

export const getServerSideProps = (async ({query}) => {
    const { id } = query;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const repo: Products = await res.json()
    return { props: { repo } }
  }) satisfies GetServerSideProps<{ repo: Products }>