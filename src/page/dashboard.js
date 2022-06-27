import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '../components'

import './dashboard.style.scss'

export default function Dashboard() {
    const [selected, setSelected] = useState()
    const [edit, setEdit] = useState(false)
    const [list, setList] = useState([
        { id: 1, name: '홍길동' },
        { id: 2, name: '유재석' },
    ])

    return (
        <div className="dashboard-container">
            <div className="dashboard-side">
                <div className="create-button-wrapper">
                    <Button
                        className="create-btn"
                        variant="contained"
                        onClick={() => {
                            // create new
                            setList([...list, { id: list.length, name: '' }])
                        }}
                    >
                        추천서 생성
                    </Button>
                </div>
                <div className="list">
                    {list.map((person) => (
                        <div
                            className={`person-item${
                                selected?.id === person.id ? '-selected' : ''
                            }`}
                            onClick={() => {
                                setSelected(person)
                            }}
                        >
                            {person.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="dashboard-main">
                <div className="dashboard-bar">
                    {selected && (
                        <>
                            {edit ? (
                                <div className="button-group">
                                    <Button
                                        className="create-btn"
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            // create new
                                            setEdit(false)
                                        }}
                                    >
                                        저장
                                    </Button>
                                    <Button
                                        className="create-btn"
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            // create new
                                            setEdit(false)
                                        }}
                                    >
                                        취소
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    className="create-btn"
                                    variant="contained"
                                    onClick={() => {
                                        setEdit(true)
                                    }}
                                >
                                    수정
                                </Button>
                            )}
                        </>
                    )}
                </div>
                <div className="dashboard-body">
                    {edit ? (
                        <TextField
                            label="이름"
                            value={selected?.name}
                            type="text"
                            onChange={(e) => {
                                setSelected({
                                    ...selected,
                                    name: e.target.value,
                                })
                            }}
                        />
                    ) : (
                        selected?.name
                    )}
                </div>
            </div>
        </div>
    )
}
