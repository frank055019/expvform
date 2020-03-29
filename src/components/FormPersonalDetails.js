import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
	continue = e=>{
		e.preventDefault();
		this.props.nextStep();
	};
	back = e=>{
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {values,handleChange} = this.props;
		const styles ={margen:15} 
		
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='Enter User Details'/>
					<TextField
						hintText='Enter Your Ocupation'
						floatingLabelText='Occupation'
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br/>
					<TextField
						hintText='Enter Your City'
						floatingLabelText='City'
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br/>
					<TextField
						hintText='Enter Your Biq'
						floatingLabelText='Biq'
						onChange={handleChange('biq')}
						defaultValue={values.biq}
					/>
					<br/>
					<RaisedButton
					label="Continue"
					primary={true}
					style={styles.button}
					onClick={this.continue}
					/>
					<RaisedButton
					label="back"
					primary={true}
					style={styles.button}
					onClick={this.back}
					/>
				</React.Fragment>
			</MuiThemeProvider>
		) 
	}
}

export default FormPersonalDetails