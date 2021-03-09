import "./comments-styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Comments from "../../components/Comments";
import Modal from "../../parts/modal/modal";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(12);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  // get current comments
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  // Change pages

  const paginate = (pageNumber) => {
    if (pageNumber === "...") {
      return;
    }
    setCurrentPage(pageNumber);
  };
  const backPage = (pageNumber) => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else setCurrentPage(Math.ceil(currentPage) - pageNumber);
  };
  const forwardPage = (pageNumber) => {
    if (currentPage >= 42) {
      setCurrentPage(42);
    } else setCurrentPage(Math.ceil(currentPage) + pageNumber);
  };

  // Close modal window

  const modalFunc = (value) => {
    setModal(value);
  };

  // Create new user data

  const createUser = (user, deleteUser) => {
    // Comments object deep copy
    const cloneComments = JSON.parse(JSON.stringify(comments));
    let commentsWithDeletedUser = [];

    const sameUser = cloneComments.findIndex(
      (element) => element.email === user.email
    );
    // Filter to delete user
    if (deleteUser === "delete") {
      commentsWithDeletedUser = cloneComments.filter(
        (eraseUser) => eraseUser.email !== user.email
      );
      setComments([...commentsWithDeletedUser]);
      // Updating user
    } else if (sameUser >= 0) {
      Object.assign(cloneComments[sameUser], user);
      setComments([...cloneComments]);
      // Add user
    } else setComments((prevState) => [user, ...prevState]);
  };

  return (
    <div className="main">
      <div>
        <h1>Comments</h1>
        <button
          type="button"
          className="create-comment"
          onClick={() => setModal((prevState) => !prevState)}
        >
          Create comment
        </button>
        {modal && <Modal createUser={createUser} modalFunc={modalFunc} />}
      </div>
      <div className="comments-div">
        <Comments comments={currentComments} loading={loading} />
        <Pagination
          commentsPerPage={commentsPerPage}
          totalComments={comments.length}
          paginate={paginate}
          currentPage={currentPage}
          backPage={backPage}
          forwardPage={forwardPage}
        />
      </div>
    </div>
  );
}
