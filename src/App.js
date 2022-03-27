import React from 'react';
import { Home, Detail } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/detail'} element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;