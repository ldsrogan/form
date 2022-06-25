import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function BasicTextFields({ label, type, onChange }) {
    return (
        <TextField
            id="outlined-basic"
            type={type}
            label={label}
            variant="outlined"
            onChange={onChange}
        />
    )
}
