import React from 'react';
import Profile from "../common/Profile";
import Registration from "../common/Registration";
import Login from "../common/Login";
import PasswordRecovery from "../common/PasswordRecovery";
import NewPassword from "../common/NewPassword";
import Test from "../common/Test";
import { Navigate, Route, Routes } from 'react-router-dom';

const RoutesInProject = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'newPassword'} element={<NewPassword/>}/>
                <Route path={'passwordRecovery'} element={<PasswordRecovery/>}/>
                <Route path={'test'} element={<Test/>}/>
                <Route path={'/404'} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </div>
    );
};

export default RoutesInProject;