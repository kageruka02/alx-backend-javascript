export default function signUpUser(firstName, lastName) {
  const promise = Promise.resolve({ firstName, lastName });
  return promise;
}
