import React from 'react'
import {Button} from 'react-bootstrap'

import './Form.css';

export default class Form extends React.Component {
    
    state={
        firstName:"",
        userName:"",
        email:"",
        password:""
    };
    change=e=>{
        this.props.onChange({[e.target.name]:e.target.value})
        this.setState({[e.target.name]:e.target.value});
    };
    onSubmit=(e)=>{
        e.preventDefault();
        //this.props.onSubmit(this.state);
        this.setState({
            firstName:"",
            userName:"",
            email:"",
            password:""   
          })
          this.props.onChange({
            firstName:"",
            userName:"",
            email:"",
            password:""})
    }
    
    render(){
        return (<div className="wrapper">
        <form className="form-wrapper">
        <label >firstName</label><br/>
         <input name="firstName"
          placeholder="first Name" 
         value={this.state.firstName}
          onChange={e=>this.change(e)}/><br/>
        <label>userName </label><br/>
          <input name="userName"
           placeholder="user Name" 
          value={this.state.userName}
          onChange={e=>this.change(e)}/><br/>
        <label>e-mail</label><br/>
          <input name="email"
           placeholder="mail" 
          value={this.state.email}
          onChange={e=>this.change(e)}/><br/>
          <label> password </label><br/>
          <input name="password"
           placeholder="password" 
          value={this.state.password}
          onChange={e=>this.change(e)}/><br/>
          <Button onClick={e=>this.onSubmit(e)}>submit</Button>  
        </form>
     </div>
            );
    }
}
