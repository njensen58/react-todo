import React from 'react';
import AuthForm from './auth/AuthForm'
import Form from '../shared/Form'
import Toggle from '../shared/Toggle'
import { connect } from 'react-redux'
import { signUp, signIn } from '../redux/auth'


const SignupLoginPage = (props) => {
    // Err msg display to form //
    let sErrCode =  props.user.authErrCode.signup
    let lErrCode =  props.user.authErrCode.signin
    let sErrMsg, lErrMsg = ""

    if(sErrCode < 500 && sErrCode > 399){
        sErrMsg = "Invalid username or password!"
    } else if (sErrCode > 499){
        sErrMsg = "Server error!"
    }
    if(lErrCode < 500 && lErrCode > 399){
        lErrMsg = "Invalid username or password!"
    } else if (lErrCode > 499){
        lErrMsg = "Server error!"
    }

    return (
        <div>
            <Toggle render={({ toggle, isToggled }) =>
                <React.Fragment>
                { !isToggled
                    ?   <div>
                            <h3>Sign Up</h3>
                            <Form
                                 reset
                                 inputs={{ username: '', password: '' }}
                                 submit={ inputs => props.signUp( inputs ) }
                                 render={ props => <AuthForm {...props} errMsg={ sErrMsg }/> }/>
                             <span onClick={ toggle }> Already have a Login? </span>
                        </div>
                    :   <div>
                            <h3>Login</h3>
                            <Form
                                 reset
                                 inputs={{ username: '', password: '' }}
                                 submit={ inputs => props.signIn( inputs ) }
                                 render={ props => <AuthForm {...props} errMsg={ lErrMsg }/> }/>
                            <span onClick={ toggle }>First time visiting this site?</span>
                        </div>
                }
                </React.Fragment>
            }/>
        </div>
    )
}

export default connect(state=>state, { signUp, signIn })(SignupLoginPage);
