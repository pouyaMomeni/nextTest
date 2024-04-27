import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Products from '@/model/product.model';
import { Box,Button,Pagination } from '@mui/material';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import MediaCard from '@/components/card/card';
import React, { useState } from 'react';
export default function ProductPage({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(repo.length / productsPerPage);
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = repo.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  // end Pagination
  return (
    <Box>
      <NavBar/>
      <Box sx={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:"space-evenly",my:'3rem',direction:'ltr'}}>
      {currentProducts.map((data) => (
        <MediaCard  title={data.title} description={data.description} image={data.image} price={data.price} rate={data.rating.rate} cardId={data.id}/>
      ))}
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',mb:'2rem',gap:'10px'}}>
        <Button color="success" onClick={prevPage} disabled={currentPage === 1} variant="outlined">قبلی</Button>
        <Button color="success" onClick={nextPage} disabled={currentPage === totalPages} variant="outlined">بعدی</Button>
      </Box>
      <Footer/>
    </Box>
  )
}

export const getServerSideProps = (async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const repo: Products[] = await res.json()
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Products[] }>