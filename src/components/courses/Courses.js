import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../redux/actions/courseActions';
class CoursesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            course: {
                title:''
            }
        };
        this.handleChange= this.handleChange.bind(this); // to use this keyword in the handle change 
        this.saveCourse= this.saveCourse.bind(this);
    }
    handleChange(event)
    { 
        const course= {...this.state.course, title: event.target.value };
        this.setState({course:course});   
    }
    // if you do not want bind this keyword to the function then prefer declaring funciton as arrow function, this automatically gives the access of this keyword to the funciton as arrow funciton has no this for themself
    
    saveCourse(event){
        event.preventDefault();
        //this.props.dispatch(courseActions.createCourse(this.state.course)); // we will manually call the dispatch funciton and pass the actionCreator of our choice. This is only vailid when we have not defined mapDispatchToState
        //this.props.createCourse(this.state.course); // manual binding approach 
        this.props.actions.createCourse(this.state.course); // bind the aciton with bindActionCreator method.

        //alert(this.state.course.title);
    }
    render(){
        return (
          <form onSubmit={this.saveCourse}>
            <input id="coursename" onChange={this.handleChange} />
            {this.props.courses.map((course) => (
              <div key={course.title}>{course.title}</div>
            ))}
          </form>
        );
    }
}
function mapPropsToState(state, ownProps)
{
    return {
        courses: state.courses
    };
}
// manual way to calling: we are mapping each action manually
// we will get the dispatch funciton here in parameter and we can call the action 
// function mapDispatchToProps(dispatch)
// {
//     return {
//         createCourse: course => dispatch(courseActions.createCourse(course))
//     }
// }
// bind automatically all the action with bindActionCreators mehtod magically for you 
function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators(courseActions,dispatch)
    }
}

// defining the mapDispatchToProps as object 
// we have to return all the action which are relevant for the component here, connect function automatically bind the dispatch with them for us.
// const mapDispatchToProps={ 
//         createCourse: courseActions.createCourse
//     };



export default connect(mapPropsToState,mapDispatchToProps)(CoursesPage);