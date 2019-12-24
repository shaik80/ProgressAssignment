import React , {Fragment , useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form , Button} from 'react-bootstrap';
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { addActor } from "../action/Actor";

const AddActor = ({addActor}) => {
  const [formData , setFormData] = useState({
    name:'',
    sex:'',
    dob:'',
    Bio:'',
    Movie:''
  });

  const {name,sex,dob,Bio,Movie} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

  const onSubmit = async e =>{
    e.preventDefault();
      addActor({name,sex,dob,Bio,Movie});
  }
    
    return (
      <Fragment>
      <>
        <Form onSubmit={e => onSubmit(e)}>
  <Form.Group controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name"  name='name' value={name} onChange={e => onChange(e)} required/>
  </Form.Group>

  <Form.Group controlId="sex">
    <Form.Label>Sex</Form.Label>
    <Form.Control type="text" placeholder="Enter sex" name='sex' value={sex} onChange={e => onChange(e)} required/>
  </Form.Group>

  <Form.Group controlId="dob">
    <Form.Label>dob</Form.Label>
    <Form.Control type="date" placeholder="DOB" name='dob' value={dob} onChange={e => onChange(e)} required/>
  </Form.Group>
  <Form.Group controlId="Bio">
    <Form.Label>Bio</Form.Label>
    <Form.Control type="text" placeholder="Bio" name='Bio' value={Bio} onChange={e => onChange(e)} required/>
  </Form.Group>  
  <Form.Group controlId="Movie">
    <Form.Label>Movie</Form.Label>
    <Form.Control type="text" placeholder="Movie" name='Movie' value={Movie} onChange={e => onChange(e)}/>
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
</>
</Fragment>
    )
}

AddActor.prototype ={
  register: PropTypes.func.isRequired,
}



export default connect(null,{addActor})(AddActor)