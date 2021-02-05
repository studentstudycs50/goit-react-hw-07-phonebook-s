import React from "react";
import { connect, useDispatch } from "react-redux";
import { setFilter, deleteContact } from "../../redux/actions/contactActions";
import { deleteContactOperation } from "../../redux/operations/contactOperations";

const ContactListItem = ({ contact, contacts, filter }) => {
  const dispatch = useDispatch();
  
  const onHandleDelete = (event) => {
    const { id } = event.target.dataset;
    dispatch(deleteContactOperation(id))
    
     if (contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length < 2) {
      setFilter('');
    }
  }

  return (
    <>
      <li className="contact-list__item" key={contact.id}>
        <div className="contact-list__item-info">
        <span className="contact-list__item-name">{contact.name}:</span>
        <span className="contact-list__item-number">{contact.number}</span>
        </div>
        <button
          type="button"
          data-id={contact.id}
          onClick={onHandleDelete}
          className="contact-list__item-btn"
        >
          Delete
        </button>
      </li>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    
    contacts: state.contacts.contacts.filter((item) =>
      item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: id => {
      dispatch(deleteContact(id))
    },
    setFilter: (value) => {
      dispatch(setFilter(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);