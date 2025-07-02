import {CognitoUserPool, CognitoUser,AuthenticationDetails,CognitoUserSession,ISignUpResult, CognitoUserAttribute} from 'amazon-cognito-identity-js'
import { CLIENT_ID, USER_POOL_ID } from '@env';
const poolData = {
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
};
export const userPool = new CognitoUserPool(poolData);

//return type ISignUpResult
export const signUp = (username : string, email : string, password : string): Promise<ISignUpResult> => {
    //return if userPool.sign is either good or bad
    return new Promise ((resolve,reject) => {
        const emailAttribute = new CognitoUserAttribute({
        Name: 'email',
        Value: email,
        });
        //e = error, r = result
        //creates user and puts it in userPool
        userPool.signUp(username,password,[emailAttribute],[],(e,r) =>{
            if(e) return reject(e);
            if(r) return resolve(r);
        })
    })
}

// return type CognitoUserSession
export const signIn = (username : string, password : string) : Promise<CognitoUserSession> =>{
    //creates User, and auth details
    const user = new CognitoUser({Username : username, Pool: userPool});
    const authDetails = new AuthenticationDetails({Username: username, Password: password});

    return new Promise((resolve,reject) =>{
        //used to log a user in
        user.authenticateUser(authDetails, {
            onSuccess: (session:CognitoUserSession) => resolve(session),
            onFailure: (e) => reject(e)
        });
    });
}
// 
export const confirmUser = (username: string, code: string): Promise<string> => {
    const user = new CognitoUser({ Username: username, Pool: userPool });
  
    return new Promise((resolve, reject) => {
      user.confirmRegistration(code, true, (e, r) => {
        if (e) return reject(e);
        if (r) return resolve(r); 
      });
    });
  };