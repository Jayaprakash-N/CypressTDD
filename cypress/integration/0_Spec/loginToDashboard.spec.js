/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import guestDashboardPG from "../../pageObjects/guestDashboard";
import loginPG from "../../pageObjects/login";
import userDashboardPG from "../../pageObjects/userDashboard";
import configJson from '../../fixtures/config.json';

describe.only('loginToDashboard',()=>{

    const guestDashboard = new guestDashboardPG();
    const login= new loginPG();
    const userDashboard = new userDashboardPG();

    it('loginToDashboard',()=>{
        guestDashboard.dashboardCheck();
        guestDashboard.navToLogin();
        login.loginCheck();
        login.setUsername(configJson.email);
        login.setPassword(configJson.password);
        login.submitLogin();
        userDashboard.dashboardCheck();
    })

    it('loginWithWrongPassword',()=>{
        guestDashboard.dashboardCheck();
        guestDashboard.navToLogin();
        login.loginCheck();
        login.setUsername("test@gmail.com");
        login.setPassword("test");
        login.submitLogin();
        login.validateInvalidateLogin();
    })

});