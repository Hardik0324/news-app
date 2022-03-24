 
import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div style={{margin : "30px 30px"}}>
        <div className="card">
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0 '}}>
        <span className="badge rounded-pill bg-danger" style={{zIndex : "1", left: "95%"}}>{source}
        </span></div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/duwzs5vxlq0gaql1_1647011190.jpeg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
