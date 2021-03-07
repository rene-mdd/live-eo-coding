import React from "react";
import PropTypes from "prop-types";

export default function Comments({ comments, loading }) {
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="comments-outter-div">
      {comments.map((item) => (
        <div key={item.id} className="comments">
          <div key={item.id}>
            <h2 key={item.name}>{item.name.split(" ")[0]}</h2>
            <address key={item.mail}>{item.email}</address>
          </div>
          <div>
            <p key={item.id}>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Type checking

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

Comments.defaultProps = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number,
      id: 0,
      name: "No name",
      email: "No email",
      body: "There is no body",
    })
  ),
  loading: false,
};
