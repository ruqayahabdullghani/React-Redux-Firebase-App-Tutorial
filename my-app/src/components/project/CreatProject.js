import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createProject} from '../../store/actions/projectAction'

class CreatProject extends Component {
  state = {
    title: "",
    content: "",
  }
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  //console.log(this.state)
  this.props.createProject(this.state);
}
  render() {
    return (
      <div className='container '>
        <form className=' white' onSubmit={this.handleSubmit}>

          <h5 className='grey-text text-darken-3'>Creat New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange}/>
          </div>

          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea type='text' id='Content' onChange={this.handleChange} className='materialize-textarea'/>
          </div>

          



          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign UP</button>
          </div>

       


        </form>
      </div>
    )
  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(CreatProject)