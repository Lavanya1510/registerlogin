import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
export class Register extends Component {


    state = {
        user: '',
        email: '',
        mobno:'',
        password:'',
        conpass:''

      };
     
      handleChange = (event) => {
        const input = event.target;
        const value = 'password' === 'conpass' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => {};

      handleFormSubmit = () => {
        const { user, email, mobno, password, conpass } = this.state;
        localStorage.setItem('email', email);
        localStorage.setItem('mobno', mobno);
        localStorage.setItem('password', password);
        localStorage.setItem('conpass', conpass);
        localStorage.setItem('user', password ? user : '');
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
          
                     <form onSubmit={this.handleFormSubmit}
                           class="my-5">
                     <div class="form-group">
                         <label class="form-label">Your name</label>
                         <input type="text" class="form-control" name="user" />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Your email</label>
                         <input type="text" class="form-control" name="email" />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Your Mobile Number</label>
                         <input type="text" class="form-control" name="mobno" />
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Password</label>
                         <input type="password" class="form-control" name="Password"/>
                         <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="form-label">Confirm Password</label>
                         <input type="password" class="form-control" name="conpass"/>
                         <div class="clearfix"></div>
                     </div>
                     <button type="button" class="btn btn-primary btn-block mt-4">Sign Up</button>
                     <div class="bg-lightest text-muted small p-2 mt-4">
                       By clicking "Sign Up", you agree to our
                       <a href="javascript:void(0)">terms of service and privacy policy</a>. We’ll occasionally send you account related emails.
                    </div>
                 </form>
                 <div class="text-center text-muted">
                    Already have an account?
                   <a href="pages_authentication_login-v1.html">
                   <Link to="Signin"> Sign In</Link></a>
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

export default Register;

