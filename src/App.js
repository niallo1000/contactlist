//import React, { Component } from "react";
import Header from "./components/header/";
import ContactList from "./components/contactList/";
import FilterControls from "./components/filterControls/";
//import request from "superagent";
import api from "./dataStore/stubAPI"; // NEW
import React, { Component, Fragment } from "react";

class App extends Component {
    state = { search: "", gender: "all" };

    deleteContact = (key) => {
        api.delete(key);
        this.setState({});
    };
    render() {
        let contacts = api.getAll();
        return (
            <Fragment>
                <Header noContacts={contacts.length} />
                <FilterControls onUserInput={this.handleChange} />
                <ContactList
                    contacts={contacts}
                    deleteHandler={this.deleteContact}
                />
            </Fragment>
        );
    }
}

export default App;