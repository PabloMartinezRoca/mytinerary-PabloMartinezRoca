// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import CommentInfo from "./CommentInfo";
import server from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { getItinerariesByCityId } from "../../redux/actions/citiesActions";
import { toast } from "react-toastify";

const Comments = ({ itinerary, commentsList }) => {

  const dispatch = useDispatch()

  const { user } = useSelector((store) => store.authenticateUserReducers);
  const { _id:city } = useSelector((store) => store.citiesReducers.cityInfo);

  const sortedComments =
    commentsList.length > 0
      ? commentsList.slice().sort((a, b) => a.date - b.date)
      : {};

  console.log(sortedComments)

  function formatDate(dateString) {
    const date = new Date(dateString);

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    return `${yyyy}/${mm}/${dd} ${hh}:${min}`;
  }

  const [data, setData] = useState({
    user: user._id,
    itinerary: itinerary,
    comment: "",
  });

  const handleChangeData = (e) => {
    setData((prevState) => {
      // representa a data
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    if (data.comment.length == 0) {
      toast.error("You must enter any comment to submit!", {
        autoClose: 3000,
      });

      return false
    } else {
      console.log("Comment submitted!");
      await server.post("/cities/addCommentToItinerary", data);
      
      toast.success("Your comment has been successfully submited!", {
        autoClose: 3000,
      });
      setData((prevState) => {
        // representa a data
        return { ...prevState, comment: "" };
      });

      dispatch(getItinerariesByCityId(city))
    }
  };

  return (
    <div className="text-white mt-2 bg-black bg-opacity-40 min-w-[90%] rounded-3xl p-10 shadow-lg shadow-white/50">
      <div className="flex flex-col justify-center self-center">
        <h2 className="city-info-comments-section text-4xl self-center mb-4 px-5 border-b border-[#b43abe]">
          Comments
        </h2>
        {sortedComments.length > 0 &&
          sortedComments.map((comment) => (
            <span
              key={comment.date}
              className="flex flex-row justify-between bg-slate-500 bg-opacity-70 my-4 p-4 pb-1 rounded-md"
            >
              <span className="w-[30%]">
                <CommentInfo commentator={comment.user} />
              </span>
              <span className="flex flex-col gap-2 w-[70%] self-stretch">
                <span className="border-b pb-2">
                  {formatDate(comment.date)}
                </span>
                <span className="mt-4 italic ps-4">{comment.comment}</span>
              </span>
            </span>
          ))}
        <div className="flex flex-col self-center">
          <p className="text-center text-lg leading-relaxed mt-10 font-medium tracking-widest uppercase">
            We&lsquo;d love to hear
          </p>
          <p className="text-center text-lg leading-relaxed font-medium tracking-widest uppercase">
            from you!
          </p>
          <ul className="flex text-center my-5 gap-3 self-center">
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
            <li>⭐️</li>
          </ul>
          <p className="text-center">Please leave us a review</p>
        </div>

        <form
          onSubmit={handleSubmitData}
          className="flex flex-col justify-between bg-slate-500 bg-opacity-70 my-4 p-4 rounded-md"
        >
          <textarea
            name="comment"
            id="comment"
            autoComplete="off"
            placeholder="Add a Comment"
            value={data.comment}
            onChange={handleChangeData}
            className="p-2 rounded-sm"
            rows={5}
            style={{
              resize: "none",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              outline: "none",
            }}
          />

          <button
            type="submit"
            className="flex text-white bg-[#669966] hover:bg-[#8fbc8f] p-2 mt-4 rounded-lg self-center justify-center"
          >
            <span>Submit!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex self-center ms-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

Comments.propTypes = {
  itinerary: PropTypes.string.isRequired,
  commentsList: PropTypes.array,
};

export default Comments;
