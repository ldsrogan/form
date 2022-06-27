import * as React from 'react'
import TextField from '@mui/material/TextField'

export default function BasicTextFields({ label, value, type, onChange }) {
    return (
        <TextField
            id="outlined-basic"
            type={type}
            value={value}
            label={label}
            variant="outlined"
            onChange={onChange}
        />
    )
}
