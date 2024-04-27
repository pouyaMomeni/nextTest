import { TextField, styled } from "@mui/material";
import React, { useState, SetStateAction } from 'react';
interface Props {
    label : string;
    value : string;
    setValue : React.Dispatch<React.SetStateAction<string>>;
}

export default function MyTextField({label,value,setValue}:Props){


    return(
        <TextField color="success" value={value} onChange={(e) => setValue(e.target.value)} label={label} size="small"  />
    )
}