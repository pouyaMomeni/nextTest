// Redux
import { useSelector,useDispatch } from "react-redux";
// components
import NavBar from '../../components/navbar/navbar';
import BuyCard from "../../components/card/buycard";
import { Box, Divider, Typography } from "@mui/material";
import MyButton from "../../components/button/button";
import Footer from "../../components/footer/footer";
import { Color } from "../../constants/color";
import { useRouter } from "next/router";

export default function BuyListPage() {
    const BuyingList = useSelector((state : any ) => state.myredux.BuyList);
    let lengthOfList = useSelector((state : any ) => state.myredux.lengthList);
    let TotalBuy : number = 0 ;
    for (let index = 0; index < lengthOfList; index++) {
        let numbers : number = BuyingList[index].price * BuyingList[index].num;
        TotalBuy =  numbers + TotalBuy;
    }
    const router = useRouter();
    return(
        <div>
            <NavBar/>
            <Divider sx={{my:'2rem'}}><Typography sx={{fontWeight:'bold',fontSize:'1.3rem'}} fontFamily='vazir'>لیست خرید شما</Typography></Divider>
            <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center'}}>
                {BuyingList.map((data:any)=> (
                    <BuyCard id={data.id} title={data.title} img={data.img} price={data.price} num={data.num} />
                ))}
            </Box>
            {lengthOfList === 0 ? 
            <Box sx={{display:'flex',justifyContent:'center',my:'5rem'}}>
                <Typography fontFamily='vazir' sx={{fontSize:'1.4rem',fontWeight:'bold',color:Color.black}}>سبد شما خالی است</Typography>
            </Box> 
            :
            <Box></Box>
            }
            {lengthOfList === 0?
            <Box sx={{mt:'3rem',display:'flex',my:'2rem',flexDirection:'column',alignItems:'center'}}>
                <MyButton action={()=>router.push('/products')} text='رفتن به صفحه محصولات'/>
                <Divider sx={{my:'1rem'}}/>
            </Box>
            :
            <Box sx={{mt:'3rem',display:'flex',justifyContent:'center',my:'2rem'}}>
             <Box sx={{display:'flex',justifyContent:'center',mt:'1rem',alignItems:'center',gap:'2rem'}}>
                 <Typography color={Color.fourth} fontFamily='vazir' fontWeight='bold'>قیمت کل کالا ها : {Math.round(TotalBuy)}$</Typography>
                 <MyButton action={()=>router.push('/complete')} text='مرحله بعد'/>
             </Box>
             <Divider sx={{my:'1rem'}}/>
            </Box>
            }
        </div>
    )
}