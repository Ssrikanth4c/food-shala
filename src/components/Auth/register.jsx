import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {register, register_success} from '../../redux/action'
import styles from './auth.module.css';
/**
* @author
* @class Login
**/

class Register extends Component {
 constructor(props){
   super(props)
   this.myRef= React.createRef();
   this.state={
     userType: this.props.userType,
     username:'',
     email:'',
     password:'',
     food_type:'Both'
   }
 }
 handleChange=e=>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }
 componentDidMount(){
   console.log(this.props)
 }
 clearForm=(myref)=>{
  console.log(myref.current[0].value='')
  if(this.props.userType==='customer'){
    myref.current[0].value='';
    myref.current[2].value='';
    myref.current[3].value='';
  }
  else{
    for(let i=0; i<3; i++){
      myref.current[i].value='';
    }
  }
 }

 handleSubmit=e=>{
   e.preventDefault()
   console.log(this.myRef)

   this.props.register(this.state);
   this.clearForm(this.myRef)
 }
 
 render() {
  const {userType, registation_success}= this.props;
  if(registation_success ){
      return <Redirect to={`/${userType}/login`} />
    }
  else
  return(
    <>
    <div className={styles.authPage}>
      <div className={`${styles.authBox} container px-5 py-3  text-center rounded shadow text-white`}>
        <h1>Register </h1>
        <form onSubmit={this.handleSubmit} ref={this.myRef} >
          
          <div className="form-group  row  ">
            <label htmlFor="user-name" className='text-right col-4 '>UserName</label>
            <input type="text" required onChange={this.handleChange} placeholder='User Name' className='col-8' name="username" id="username"  autoComplete="off" />
          </div>
          {
            userType ==='customer' ? 
            <div className="form-group row  ">
            <label htmlFor="food-type" className='text-left col-4 '>Food Type</label>
            <div className='col-8 px-0 '>
              <select name="food_type" onChange={this.handleChange} id="food-type" className='w-100 h-100 text-center' >
                <option defaultValue value="Both">Both</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
          </div>
            :
            ""
          }
          <div className="form-group row  ">
            <label className='col-4' htmlFor="email">Email ID</label>
            <input className='col-8' required onChange={this.handleChange} type="email" placeholder='xyz@masai.com' name="email" id="email"  autoComplete="off" />
          </div>

          <div className="form-group  row " >
            <label className='col-4' htmlFor="user-name">Password</label>
            <input className='col-8' required onChange={this.handleChange}  placeholder='*****' type="password" name="password" id="password"/>
          </div>

          <div className='border-0 row rounded '>
           <button type="submit" className='btn btn-info btn-block font-weight-bold'>REGISTER</button>
          </div>

        </form>
        <div className='my-4'>
          <p>have an Account?  
              <Link to={`/${this.props.userType}/login`}>
                <span className='text-warning font-weight-bold'>
                    Login
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
  const {customer_login, registation_success}= state;
  return{
    login: customer_login,
    registation_success: registation_success
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    register: payload=>dispatch(register(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)