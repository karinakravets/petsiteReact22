import React from "react";
import logo from '../imj/logo.png'
import { Link } from "react-router-dom";
import QuickSearch from "./quickSearch";
const Header = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-">
                <div className="container-fluid">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   
                    <Link to={'/'}><img src={logo} className="w-25 rounded-3" alt="logo"/></Link>
                 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page" >Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/profile' className="nav-link" >Личный кабинет</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/reg' className="nav-link" >Регистрация</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/add' className="nav-link" >Добавить объявление</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/search' className="nav-link">Поиск по объявлениям</Link>
                        </li>
                    </ul>
                    <QuickSearch/>
                    </div>
            </nav>
        </div>
    );
};
export default Header;