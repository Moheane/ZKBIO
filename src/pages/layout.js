import { Outlet, Link } from "react-router-dom";


import React, { Component } from 'react';


const Layout = () => {
    return (
      <>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="./static/Banner-2022_ZKTeco_LinkedIn_Personal.jpg" target="blank">
                <img src="./static/Banner-2022_ZKTeco_LinkedIn_Personal.jpg" width={45} height={30} className="d-inline-block align-top" alt="" />
                <span className="menu-collapsed">ZKTECO</span>
              </a>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto" style={{fontSize: 'small'}}>
                  <li className="nav-item active">
                    <a className="nav-link accessControl" href="/" id="target">ACCESS CONTROL</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link elevatorControl" href="ele_contr_lev">ELE CONTROL LEVEL</a>
                  </li>
                  <li className="nav-item dep">
                    <a className="nav-link department" href="/department">DEPARTMENT</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link accessControlDevice" href="/access_contr_dev">ACCESS CONTROL DEVICE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link elevatorControldevice" href="/ele_contr_dev">ELE CONTROL DEVICE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link doorInterface" href="/door_interface">DOOR INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link personInterface" href="/person_interface">PERSON INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link readerInterface" href="/reader_interface">READER INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link transactions" href="/transactions">TRANSACTIONS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link parkAuthorization" href="/park_auth">PARK AUTHORIZATION</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link cardInterface" href="/card_interface">CARD INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mediaInterface" href="/media_interface">MEDIA INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link areaInterface" href="/area_interface">AREA INTERFACE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link floorInterface" href="/floor_interface">FLOOR INTERFACE</a>
                  </li>
                  {/* This menu is hidden in bigger devices with d-sm-none. 
                   The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  */}
                </ul>
              </div>
            </nav>
            <Outlet />
            
          </div>
      </>
    )
  };
  
  export default Layout;