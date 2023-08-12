import React, { Component } from 'react'

class SingUpAuth extends Component {
  state = {
    email: '',
    password: '', 
    firstName: '',
    lastName: '',
  }
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state)
}
  render() {
    return (
      <div className='container '>
        <form className=' white' onSubmit={this.handleSubmit}>

          <h5 className='grey-text text-darken-3'>SignUp</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange}/>
          </div>

          <div className='input-field'>
            <label htmlFor='password'>password</label>
            <input type='password' id='password' onChange={this.handleChange}/>
          </div>

          <div className='input-field'>
            <label htmlFor='fistName'>FirstName</label>
            <input type='text' id='fistName' onChange={this.handleChange}/>
          </div>

          <div className='input-field'>
            <label htmlFor='lastName'>LastName</label>
            <input type='text' id='lastName' onChange={this.handleChange}/>
          </div>




          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign UP</button>
          </div>

       


        </form>
      </div>
    )
  }
}


export default SingUpAuth