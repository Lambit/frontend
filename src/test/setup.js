import React from "react";
import { render } from '@testing-library/react';
import AuthProvider from "../context/Auth";
import { BrowserRouter } from "react-router-dom";
import LanguageButton from "../components/LanguageButton";

const RootWrapper =({ children }) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                { children }
                <LanguageButton />
            </AuthProvider>
        </BrowserRouter>
    );
};

const customRender = (ui, options) => 
render(ui, { wrapper: RootWrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };