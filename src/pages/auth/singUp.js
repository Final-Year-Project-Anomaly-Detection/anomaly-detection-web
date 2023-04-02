import { useState, useContext } from "react";
import { signupFields } from "./formField";
import FormAction from "./components/FormAction";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { GlobalContext } from "../../GlobalData";
import { addUser } from "../../utils/backend";

import Input from "./components/Input";

const provider = new GoogleAuthProvider();
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const { userDetails, setUserDetails } = useContext(GlobalContext);
  const [signupState, setSignupState] = useState(fieldsState);
  const [toggle, setToggle] = useState(false);
  console.log({userDetails})

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("dfjdlkfjdlkfj")
    await addUser(userDetails)
  };

  //handle Signup API Integration here
  const createAccount = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log({ user });
        setSignupState({ ...signupState, username: user.displayName });
        setUserDetails(user.reloadUserInfo);
        setToggle(true);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center">
          {toggle && (
            <img
              alt="img"
              src={userDetails.photoUrl}
              className="rounded-full"
            />
          )}
        </div>
        <div className="">
          {fields.map((field) => (
            <>
              <Input
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            </>
          ))}

          {toggle ? (
            <FormAction handleSubmit={handleSubmit} text="Signup" href={'/home'}/>
          ) : (
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
              onClick={createAccount}
            >
              signUp with google
            </button>
          )}
        </div>
      </form>
    </>
  );
}
