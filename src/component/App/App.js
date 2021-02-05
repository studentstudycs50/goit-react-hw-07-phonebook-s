import React from 'react';

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import {CSSTransition} from 'react-transition-group'
import AppStyled from '../App/AppStyled';
import { connect } from 'react-redux';

const App = ({contacts}) => {
 
    return (
        <AppStyled>
            
        <CSSTransition in={true} timeout={500} appear={true} classNames="phonebook">
            <h2 className="phbook-title">PhoneBook</h2>
        </CSSTransition>
            
            <ContactForm />
            
            <h2 className="contacts-title">Contacts</h2>
            
        <CSSTransition in={contacts.length > 1} timeout={250} appear={true} classNames="filter" unmountOnExit>
            <Filter />
        </CSSTransition>
            
        <ContactList />
      </AppStyled>
    );
  }

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
}

export default connect(mapStateToProps)(App);