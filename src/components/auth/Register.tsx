import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { signUp } from '../../features/actions/authActions'
class Register extends Component {
    state = {
        email: '',
        password: '',
        password2: ''
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        if (this.state.password === this.state.password2) {
            const myProps: any = this.props;
            myProps.signUp(this.state);
            console.log(myProps);
        } else {
            console.log("Passwords are different");
        }
    };
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        const { authError, auth }: any = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <form className="mx-auto md:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Create your account</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Please enter your details below</p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input onChange={this.handleChange} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password2" className="leading-7 text-sm text-gray-600">Re-enter password</label>
                        <input onChange={this.handleChange} type="password" id="password2" name="password2" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit" onClick={this.handleSubmit} >Create Account</button>
                    <div className="text-red center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch: (arg0: (dispatch: (arg0: { type: string; }) => void, getState: any, { getFirebase }: any) => void) => any) => {
    return {
        signUp: (newUser: { email: string; password: string; }) => dispatch(signUp(newUser))
    }
}

export default connect<any>(mapStateToProps, mapDispatchToProps)(Register)
