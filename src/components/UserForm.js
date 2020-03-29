import React, { Component } from 'react';
import {FormUserDetails} from './FormUserDetails'
import {FormPersonalDetails} from './FormPersonalDetails'

export class UserForm extends Component {
	constructor(){
		super();
		this.state={
			step :1,
			firstName:'',
			lastName:'',
			email:'',
			occupation:'',
			city:'',
			bio:''
		};
	}

	// proseed to next step
	nextStep =()=>{
		let step =this.state.step;
		this.setState({step: step+1});
	};
	prevStep =()=>{
		let step =this.state.step;
		 this.setState({step: step - 1});
	};
	// Handle fileld change
	handleChange = input => e =>{
		this.setState({[input]:e.target.value});
	};

	render() {
		const { step } =this.state;
		const { firstName,lastName,email,occupation,
			city,biq } =this.state;
		const values = { firstName,lastName,email,occupation,
			city,biq } 
		
		switch (step){
			case 1:
				return(
					<FormUserDetails
					nextStep={this.nextStep}
					handleChange={this.handleChange}
					values={values}
					/>
				)
			case 2:
				return (
					<FormPersonalDetails
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
					values={values}
					/>)
			case 3:
				return <h1>Confirm</h1>
			case 4:
				return <h1>Success</h1>
			default:
    console.log('Sorry, we are out of ' + step + '.');
		}
	}
}
export default UserForm
