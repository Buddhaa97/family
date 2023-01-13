import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTE_CONSTANT } from '../models/constants/navigation-constant';
import Header from '../components/header/header';

export const Navigation = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    {
                        ROUTE_CONSTANT.map((page) => {
                        const Component = page.page;
                        return <Route path={page.name} element={<Component />} />
                    }
                        )
                    }
                </Routes>
            </Router>
        </>
    )
}

export default Navigation;
