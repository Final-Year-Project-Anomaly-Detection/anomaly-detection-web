import FormAction from "../auth/components/FormAction";
import NavBar from "../home/components/NavBar";
import { useState } from "react";
const AddData = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      <NavBar />
      <div className="flex items-center p-10 flex-col ">
        <div className="cursor-pointer border-2 h-60 border-black max-w-lg w-[90%] flex justify-center items-center relative">
          <p className="text-8xl"> +</p>
          {!image && (
            <input
              type="file"
              onChange={onImageChange}
              id="imageInput"
              name="imageInput"
              accept="image/*"
              className="absolute opacity-0 h-full w-full"
            />
          )}
          {image && (
            <img
              alt="preview image"
              src={image}
              className="absolute h-full w-full"
            />
          )}
        </div>
        <button className="group relative w-full flex justify-center py-2 px-4 max-w-lg w-[90%] border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">
          Check Anomoly
        </button>
      </div>
    </div>
  );
};
export default AddData;
