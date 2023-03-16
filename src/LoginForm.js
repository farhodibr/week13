import React from "react";


export default class TestLoginForm extends React.Component {
  constructor(props) {
  super(props);
  
  
              }
  render() {
 
    return (
      <div className="container">
         <div className="row d-flex justify-content-center">
          <div className="col-md-4  border border-primary">
        <form id ='box' className="Auth-form ">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
      </div>
      </div>
      
    )
  }
}