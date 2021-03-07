/* eslint-disable no-unused-vars */
import "./comments-styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import list from "./list";
import Pagination from "../../components/Pagination";
import Comments from "../../components/Comments";
import Modal from "../../parts/modal/modal";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(12);
  console.log(currentPage);

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

  // change pages
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

  return (
    <div className="main">
      <div>
        <h1>Comments</h1>
        <button type="button" className="create-comment">
          Create comment
        </button>
        {/* <Modal /> */}
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
