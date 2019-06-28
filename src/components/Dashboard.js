import React, { Component } from 'react'

export class Dashboard extends Component {
    handleFormSubmit = () => {
        this.props.history.push('/Signin')
    }
    render() {
        return (
            <div>
                <form>
                 <button type="submit" onClick={this.handleFormSubmit} >Log out</button>
                </form>
            </div>
        )
    }
}

export default Dashboard
