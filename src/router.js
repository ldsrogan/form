import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignInPage from './page/signin'
import Dashboard from './page/dashboard'
import SearchPage from './page/search'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<SearchPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
