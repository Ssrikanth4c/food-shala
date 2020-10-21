import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {login} from '../../redux/action'
import styles from './auth.module.css';
/**
* @author
* @class Auth
**/

class Auth extends Component {
  constructor(props){
    super(props);
    this.state={
      userType: this.props.userType,
      username: '',
      password:''
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  
  handleChange=e=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit=e=>{
    e.preventDefault();
    console.log(this.props);
    this.props.login(this.state);
  }
  render() {
    const {userType, login_success}= this.props;
    if(login_success){
      if(userType==='customer'){
        return(
          <Redirect to='/menu' />
        )
      }else if(userType==='restaurant'){
        return(
          <Redirect to='/menu' />
        )
      }
    }else
    return(
      <>
      <div className={styles.authPage}>
        <div className={`${styles.authBox} container px-5 py-3 text-center rounded shadow text-white`}>
          <h1>Login </h1>
          <form action="#" onSubmit={this.handleSubmit} >
            <div className="form-group row">
              <label className='col-4' htmlFor="user-name">UserName</label>
              <input className='col-8' type="text" onChange={this.handleChange} placeholder='User Name' name="username" id="username"  autoComplete="off" />
            </div>
            <div className="form-group row">
              <label className='col-4' htmlFor="user-name">Password</label>
              <input className='col-8' placeholder='*****' onChange={this.handleChange} type="password" name="password" id="username"/>
            </div>
            <div className='row rounded '>
            <button type="submit" className='btn btn-info btn-block font-weight-bold'>LOGIN</button>
            </div>
          </form>
          <div className='my-4'>
            <p>Dont't have an Account?  
                <Link to={`/${this.props.userType}/register`}>
                  <span className='text-warning font-weight-bold'>
                      Register
                  </span>
                </Link>
            </p>
          </div>
        </div>
        
      </div>
      </>
      )
   }
 }

const mapStateToProps=state=>{
  const {token, login_success, userType}= state
  return{
    token: token,
    login_success: login_success,
    
  }
}
 const mapDispatchToProps=dispatch=>{
  return{
    login:payload=> dispatch(login(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)