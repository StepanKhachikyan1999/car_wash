import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import logo from "../../images/blue_car_wash.png"
import {useTranslation} from "react-i18next";
import logOutIcon from "../../images/logOutIcon.svg";
import LogoutModal from "../modals/logoutModal";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  background: #050A25;
  transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  grid-gap: 35px;
  text-align: left;
  padding: 1.5rem;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-family: 'Poppins';
    font-style: normal;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;

    @media (max-width: 576px) {
      font-weight: 300;
      text-align: center;
      font-size: 20px;
      font-family: system-ui;
    }

    &:hover {
      color: #343078;
    }
  }

  span {
    font-size: 20px;
    color: red;
    margin: 0 auto;
  }

  i {
    color: darkred;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  display: flex;

  i {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

const Menu = ({open, setOpen}) => {
    const {t} = useTranslation()
    let roleId = localStorage.getItem('roleId')

    return (
        <StyledMenu open={open}>
            <StyledDiv>
                <div><img src={logo} style={{width: "100px"}} alt="logo"/></div>
                <i style={{fontSize: "30px"}} onClick={() => setOpen(!open)}
                   className="fa-solid fa-rectangle-xmark"></i>
            </StyledDiv>
            <Link to="/">{t('dashboard')}</Link>
            {roleId == "1" ? <Link to="/list">{t('sidebar.technics')}</Link> :
                roleId == "2" ? <Link to="/userlist">{t('sidebar.technics')}</Link> : null}


            {roleId == "2" ? <Link to="/washingMachines">{t('sidebar.washingMachines')}</Link> :
                roleId == "3" ? <Link to="/washingMachinesUser">{t('sidebar.washingMachines')}</Link> : null}
            <Link to="/change">
                {t('change_password')}
            </Link>

            <a href="#" style={{ textDecoration: "none" }}>
                    <span><LogoutModal /></span>
            </a>


        </StyledMenu>
    );
};

export default Menu;
