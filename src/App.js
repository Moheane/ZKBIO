
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'


import Layout from './pages/layout';

import Access_Control from './pages/acess_control/acess_control';


import Ele_contr_level from './pages/ele_control_level';
import Department from './pages/department';


import Access_contr_dev from './pages/acc_control_device';
import get_level_list from './pages/acess_control/get_level_list'
import get_level_id from './pages/acess_control/get_level_id'



import Indexpage from './pages/index';
import Ele_contr_device from './pages/ele_control_device';
import Door_interface from './pages/dorr_interface';
import Person_interface from './pages/person_interface';
import Reader_interface from './pages/reader_interface';
import Transactions from './pages/transactions';
import Park_auth from './pages/park_auth';
import Card_Interface from './pages/card_interface';
import Media_interface from './pages/media_interface';
import Area_Interface from './pages/area_interface';
import Floor_interface from './pages/floor_interface';


function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route element={<Access_Control />} > 
            <Route path="delete_person_level" element={<delete_person_level />} />
            <Route path="sync_person_level" element={<sync_person_level />} />
            <Route path="sync_level_to_device" element={<sync_level_to_device />} />
            <Route path="get_level_name" element={<get_level_name />} />
            <Route path="get_level_id" element={<get_level_id />} />
            <Route path="get_level_list" element={<get_level_list />} />
        </Route>


        <Route path="ele_contr_lev" element={<Ele_contr_level />} >


        </Route>


        <Route path="department" element={<Department />} />
        <Route index element={<Indexpage />} />
        <Route path="access_contr_dev" element={<Access_contr_dev />} />
        <Route path="ele_contr_dev" element={<Ele_contr_device />} />
        <Route path="door_interface" element={<Door_interface />} />
        <Route path="person_interface" element={<Person_interface />} />
        <Route path="reader_interface" element={<Reader_interface />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="park_auth" element={<Park_auth />} />
        <Route path="card_interface" element={<Card_Interface />} />
        <Route path="media_interface" element={<Media_interface />} />
        <Route path="area_interface" element={<Area_Interface />} />
        <Route path="floor_interface" element={<Floor_interface />} />

        
      </Route>
    </Routes>
  </BrowserRouter>
    
          
        
      
   
  )
}

export default App;
