import React, { Component } from 'react'
import '../styles/home.css'

export default class App extends Component {
	constructor(){
		super()
		this.state={
			usersEmail: '',
			usersComments: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(input){

	}


	render(){
		return (
			<div className='App'>
					<div className='bg-img'>
						<div className='header'>
							<div className="boxStuff">
								<p className='title'>PADHUB</p>
								<p className="info">PadHub is a completely digital platform for maintaining your home. PadHub allows homeowners to create tasks and receive reminders telling homeowners when something needs done. Items that need regular changing or fixing can be ordered with one click through the PadHub platform. Homeowners will also be able to create a digital log of everything in their home. Eliminating the need to keep collections of manuals and warranty information stored in the home. Watch how PadHub's digital platform will help you be the best homeowner ever!</p>
							</div>

							<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allowfullscreen>
    						</iframe>
						</div>

						<div className="signUp">
							<div className='inputBox'>
								<p>BETA USER SIGN UP</p>
								<input className="input" type="text"/>
								<input className="input" type="text"/>
								<input className="input" type="text"/>
							</div>
						</div>
					</div>
			</div>
		)
	}
}