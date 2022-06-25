import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect({ value, items, onChange }) {
    return (
        <Select value={value} onChange={onChange} displayEmpty>
            <MenuItem value="">
                <em>스테이크</em>
            </MenuItem>
            {items.map((item) => {
                return <MenuItem value={item.key}>{item.value}</MenuItem>
            })}
        </Select>
    )
}
