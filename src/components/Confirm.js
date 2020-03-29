import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
	continue = e=>{
		e.preventDefault();
		this.props.nextStep();
	};
	back = e=>{
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {values:{firstName,lastName,email,occupation,
			city,bio}} = this.props;
		const styles ={margen:15} 
		
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title='Confirm Yours Data'/>
					<List>
						<ListItem
						primaryText="FirstName"
						secondaryText={firstName}
						/>
						<ListItem
						primaryText="LastName"
						secondaryText={lastName}
						/>
						<ListItem
						primaryText="Email"
						secondaryText={email}
						/>
						<ListItem
						primaryText="Occupation"
						secondaryText={occupation}
						/>
						<ListItem
						primaryText="City"
						secondaryText={city}
						/>
						<ListItem
						primaryText="Bio"
						secondaryText={bio}
						/>
					</List>
					<br/>
					<RaisedButton
					label="Confirm & Continue"
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

export default Confirm