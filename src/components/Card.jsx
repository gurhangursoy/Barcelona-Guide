import React from "react";

function Cards(props) {
  const { title, text, imgURL } = props.item;

  return (
    <div className="card my-3">
      <img src={imgURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}

export default Cards;
