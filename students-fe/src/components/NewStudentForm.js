import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewStudentForm extends React.Component {
  state = {
    businessId: 0,
    name: "testi",
    registrationDate: "12-12-2020",
    companyForm: "OY",
    detailsUri: "https:\\testi.fi"
  };

  componentDidMount() {
    if (this.props.student) {
      const { businessId, name, registrationDate, companyForm, detailsUri } = this.props.student;
      this.setState({ businessId, name, registrationDate, companyForm, detailsUri });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="businessId">Y-tunnus:</Label>
          <Input
            type="number"
            name="Y-tunnus"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Nimi:</Label>
          <Input
            type="text"
            name="Nimi"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="registrationDate">Rekisteröintipäivä:</Label>
          <Input
            type="date"
            name="Rekisteröintipäivä"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="companyForm">Yhtiömuoto:</Label>
          <Input
            type="text"
            name="Yhtiömuoto"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="detailsUri">WWW-osoite:</Label>
          <Input
            type="web-addres"
            name="Yhtiömuoto"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewStudentForm;
