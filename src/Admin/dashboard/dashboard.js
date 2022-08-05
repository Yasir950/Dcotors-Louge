import React, { Component } from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {
  render() {
    return (
      <div>

    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" className='bg-dark'>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adddepartment" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Department</CDBSidebarMenuItem>
            </NavLink>
             <NavLink exact to="/addtelemedicinenatl" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Telemedicine National</CDBSidebarMenuItem>
            </NavLink>
          <NavLink exact to="/addtelemedicineintl" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Telemedicine InterNational</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addmedicine" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Medicine</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/addnationalvets"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">National Vets</CDBSidebarMenuItem>
            </NavLink>  
            <NavLink exact to="/addinternationalvets"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">InterNational Vets</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addlabtest"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">InterNational Vets</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

     
      </CDBSidebar>
    </div>

      </div>
    )
  }
}
