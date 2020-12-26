import React from 'react';

class News extends React.Component {
  render() {
    const {page} = this.props;
    const newsImage = (page.urlToImage === null) ?
      '/news-image.jpeg' : page.urlToImage;
    return (
      <div className="Main-News-Single-News">
        <a href={`${page.url}`} target="_blank" rel="noreferrer">
          <div className="Main-News-Single-Source">
            {page.source.name}
          </div>
          <div className="Main-News-Content-Container">
            <div className="Main-News-Subcontent">
              <div className="Main-News-Title">
                {page.title}
              </div>
              <div className="Main-News-Desc">
                {page.description}
              </div>
            </div>
            <div className="Main-News-Content-Image-Container">
              <img
                src={newsImage}
                alt={`${page.content}`}
                className="Main-News-Content-Image" />
            </div>
          </div>
        </a>
      </div>

    );
  }
}

export default News;
