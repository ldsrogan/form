import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AssignmentIcon from '@mui/icons-material/Assignment'
import Button from '@mui/material/Button'
import { ids } from '../data/stakes'
import { SelectBox, TextField } from '../components'

import './signin.style.scss'

const SignInPage = () => {
    const [stake, setStake] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    return (
        <div className="signin-container">
            <AssignmentIcon className="signin-icon" color="primary" />
            <div className="required-fields">
                <SelectBox
                    label="스테이크"
                    value={stake}
                    items={ids.map((id) => ({ key: id, value: id }))}
                    onChange={(e) => {
                        setStake(e.target.value)
                    }}
                />
                <TextField
                    label="password"
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <Button
                variant="contained"
                disabled={!stake || !password}
                onClick={() => {
                    // move to main page
                    navigate('/dashboard')
                }}
            >
                Enter
            </Button>
        </div>
    )
}

export default SignInPage
