 export default function signUpUser(firstName, lastName) {
    let promise = Promise.resolve({ firstName, lastName });
    return promise;
}