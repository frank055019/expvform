import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'

export class UserFrom extends Component {
	state={
		step :1,
		firstName:'',
		lastName:'',
		email:'',
		occupation:'',
		city:'',
		bio:''
	}
	// proseed to next step
	nextStep =()=>{
		const {step} =this.state;
		 this.setState=({
		 		 	step: step+1
		 		 })
	}
	neprevStep =()=>{
		const {step} =this.state;
		 this.setState=({
		 		 	step: step-1
		 		 })
	}
	// Handle fileld change
	handleChange = input => e =>{
		this.setState({[input]:e.target.value});
	}

	render() {
		const { step } =this.state;
		const { firstName,lastName,email,occupation,
			city,biq } =this.state;
		const value = { firstName,lastName,email,occupation,
			city,biq } 
		
		switch (step){
			case 1:
				return(
					<FormUserDetail
					nextStep={this.nextStep}
					handleChange={this.handleChange}
					values={values}
					/>
				)
			case 2:
				return <h1>FormPersonDetails</h1> 
			case 3:
				return <h1>Confirm</h1>
			case 4:
				return <h1>Success</h1>
		}
	}
}
export default UserFrom
