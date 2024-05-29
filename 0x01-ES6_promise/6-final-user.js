import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const signUPUser = await signUpUser(firstName, lastName);
  const fileNam = await uploadPhoto(fileName);
  return Promise.all([signUPUser, fileNam]).then((response) => response);
}
