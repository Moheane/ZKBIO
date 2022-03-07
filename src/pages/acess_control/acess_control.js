import { Outlet, Link } from "react-router-dom";


import React, { Component } from 'react';


const Access_Control = () => {

    return <div className="row accessControlTab" style={{backgroundColor: 'greenyellow'}} id="body-row">
              <div id="sidebar-container" className=" col-4 side1" >
                <ul className="list-group" >
                  <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                    <small>ACCESS CONTROL</small>
                  </li>
                  <a href data-toggle="collapse" aria-expanded="false" className="bg-secondary text-light list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Delete Person Level</span>
                    </div>
                  </a>
                  <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-secondary text-light list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Sync Person Level</span>
                    </div>
                  </a>
                  <a href="#" className="bg-secondary text-light list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Sync level Info To Device</span>
                    </div>
                  </a>
                  <a href="#" className="bg-secondary text-light list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Get Access Level By Name</span>
                    </div>
                  </a>
                  <a href="#" className="bg-secondary text-light list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Get Access Level By Id</span>
                    </div>
                  </a>
                  <a href="#" className="bg-secondary text-light list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-start align-items-center">
                      <span className="menu-collapsed">Get Access Level List</span>
                    </div>
                  </a>
                </ul>{/* List Group END*/}
              </div>{/* sidebar-container END */}
              {/* MAIN */}
              <div className="col-8 main1">

              <Outlet />
                
              </div>{/* Main Col END */}
            </div>
        

  };
  
  export default Access_Control;




  