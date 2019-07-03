import React, { Component } from 'react'
import {  Link } from "react-router-dom";

export class Signin extends Component {
    constructor(props){
        super(props);
      console.log(this.props)
    }

handleChange= (event) => {
    const input =event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({[input.name]: value});
   
};

handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({email: event.target.value});
      this.setState({password: event.target.value});
    const emailid=this.state.email;
    const pass=this.state.password;
    // let password = document.getElementById('password').value;
    //  console.log(emailid)
    const emailJson = localStorage.getItem('email');
    const password1 = localStorage.getItem('password');
    // console.log(emailJson)
    // if(!emailJson){
    //     alert('empty');
    // }
    //emailJson = JSON.parse(emailJson);
    for (let i = 0; i < emailJson.length; i++) {
        if (emailid === emailJson && pass === password1) {
            this.props.history.push('/Dashboard')
            return;
    }
    if (emailid !== emailJson && pass !== password1){
        alert('Error');
        return false;
    }
}
   
    //   const { password} = this.state;
     
    //   if(this.props.password !== this.state.password1){
    //     console.log(this.props);

    //   }
    //   if(this.props.password === this.state.password1){
    //     this.props.history.push('/Dashboard')
    //   }

};
 
    render() {
        return ( 

 <div>  
                 <div class="page-loader">
                       <div class="bg-primary"></div>
                 </div>

                <div class="authentication-wrapper authentication-1 px-4">
                    <div class="authentication-inner py-5">
                         <div class="d-flex justify-content-center align-items-center">
                           <div class="ui-w-60">
                            <div class="w-100 position-relative">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                            </div>
                           </div>
                         </div>
                         <form class="my-5" onSubmit={this.handleFormSubmit}>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input name= "email" type="email" class="form-control"  onChange={this.handleChange}/>
                            <div class="clearfix"></div>
                        </div>
                        <div class="form-group">
                            <label class="form-label d-flex justify-content-between align-items-end">
                                <span>Password</span>
                                <a href="pages_authentication_password-reset.html" class="d-block small">Forgot password?</a>
                            </label>
                            <input name="password" type="password" class="form-control"  onChange={this.handleChange}/>
                            <div class="clearfix"></div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center m-0">
                            <label class="custom-control custom-checkbox m-0">
                                <input name="rememberMe"  onChange={this.handleChange} type="checkbox" class="custom-control-input" />
                                <span class="custom-control-label">Remember me</span>
                            </label>
                            
                            <button type="submit" class="btn btn-primary" >Sign In</button>
                        </div>   
                        
                    </form>

               <div class="text-center text-muted">
                Don't have an account yet?
                <a href="pages_authentication_register-v1.html">
                <Link to="/Register" 
                > Sign Up</Link></a>
                
                 
               </div>

           </div>
         </div>
   
    <script src="assets/js/pace.js"></script>
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <script src="assets/libs/popper/popper.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/sidenav.js"></script>
    <script src="assets/js/layout-helpers.js"></script>
    <script src="assets/js/material-ripple.js"></script>

  
    <script src="assets/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

    
    <script src="assets/js/demo.js"></script><script src="assets/js/analytics.js"></script>
    </div>
 
        )
    }
}

export default Signin
