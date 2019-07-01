import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
export class Register extends Component {

  constructor(props){
    super(props)
    this.state= {
        user: '',
        email: '',
        mobno:'',
        conpass:'',
        rememberMe: false,
      };
    }
   
 
      handleChange= (event) => {
        const input =event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[input.name]: value});
      
    };
    
     
    handleFormSubmit = (e) => {
   
      e.preventDefault();

        const { user, email, mobno, password, rememberMe} = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user: '');
        localStorage.setItem('email', rememberMe ? email : '');
        localStorage.setItem('mobno', rememberMe ? mobno : '');
        localStorage.setItem('password', rememberMe ? password : '');
      
        this.setState({
          password: e.target.value,
          conpass: e.target.value
        });
       
        if(this.state.password === this.state.conpass)
        { 
          confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                  alert('You\'ve been registered successfully')
                  window.location='/Signin';
                }
                
              },
              {
                label: 'No',
                // onClick: () => alert('We\'re sorry for your inconvenience!')
              }
            ]
          });
          
        }
        if(this.state.password !== this.state.conpass)
        {
          alert('password doesnt match')
          return false
        }
       
       
      // console.log('hello');
   
    };
  


     
      render() { /*...*/ }

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
                               <div class="clearfix"></div>
                             </div>
                          </div>
                     </div>
          
                     <form class="my-5" onSubmit={this.handleFormSubmit.bind(this)}>
                     <div class="form-group">
                         <label class="form-label">Your name</label>
                         <input type="text" class="form-control" name="user" value={this.state.user} onChange={this.handleChange} />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Your email</label>
                         <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Your Mobile Number</label>
                         <input type="text" class="form-control" name="mobno" pattern="[0-9]{10}" value={this.state.mobno} onChange={this.handleChange}/>
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Password</label>
                         <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Confirm Password</label>
                         <input type="password" class="form-control" name="conpass" value={this.state.conpass} onChange={this.handleChange}/>
                         <div class="clearfix"></div>
                     </div>
                     <label class="custom-control custom-checkbox m-0">
                                <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" class="custom-control-input" />
                                <span class="custom-control-label"> <div class="bg-lightest text-muted small p-2 mt-4">
                                 By clicking "Sign Up", you agree to our
                                <a href="javascript:void(0)">terms of service and privacy policy</a>. We’ll occasionally send you account related emails.
                                </div></span>
                    </label>
                     <button type="submit" class="btn btn-primary btn-block mt-4" >Sign Up</button>
                    
                 </form>
                 <div class="text-center text-muted">
                    Already have an account?
                   <a href="pages_authentication_login-v1.html">
                   <Link to="/Signin"> Sign In</Link></a>
                </div>

             </div>
             </div>
   
    
</div>

        )
    }
}

export default Register;