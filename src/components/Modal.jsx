import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Modal = (props) => {
  const {
    onSubmit,
    postTitle,
    postContent,
    setPostContent,
    setPostTitle,
    formHeader,
    closeModal,
    buttonText = "Post",
  } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="absolute flex justify-center  h-full w-3/4">
      <div className="rounded-lg bg-blue-500 w-[500px] h-[300px] space-y-4 absolute mt-32 ml-72 justify-center py-4 px-6 bg- flex flex-col ">
        <div
          onClick={() => closeModal(false)}
          className=" mr-2 flex  justify-end text-white hover:cursor-pointer"
        >
          <FaWindowClose className="" />
        </div>
        {formHeader}
        <input
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          type="text"
          placeholder="Post title"
          className="bg-white rounded-3xl h-10 px-4 black"
        />
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          name="content"
          id="content-area"
          rows={3}
          placeholder="Describe your post..."
          className="bg-white rounded-xl px-4 py-2 mt-3 black"
        ></textarea>
        <button
          loading={loading}
          onClick={async () => {
            setLoading(true);
            await onSubmit();
            setLoading(false);
          }}
          className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md px-4 py-1"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default Modal;
