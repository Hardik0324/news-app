import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner1 from "./Spinner1";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;

  const updatedNews= async ()=> {
    //console.log(page);
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=72ea95b4a2924532a4ec99219b0a08d8&page=${page}&pageSize=${props.pageSize}`;
    ///console.log(this.state.page)
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setPage(page + 1)
    //console.log(articles.length)
    //console.log(totalResults)
    setLoading(false)
    props.setProgress(100);
  }



  useEffect(() => { 
    //console.log(page);
    document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;
    updatedNews();
  }, [])

  const fetchMoreData = async () => {
    //setPage(page + 1); 
    //console.log(page);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=72ea95b4a2924532a4ec99219b0a08d8&page=${page}&pageSize=${props.pageSize}`;
    //console.log(page);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setPage(page + 1); 
  };

  //  handlePrevClick = () => {
  // console.log(this.state.page)
  //    this.setState(
  //      {
  //        page: this.state.page - 1,
  //      },
  //     () => {
  //       this.updatedNews();
  //      }
  //    );
  //    console.log(this.state.page);
  //  };

  //  handleNextClick = () => {
  //console.log(this.state.page)
  //    this.setState(
  //      {
  //       page: this.state.page + 1,
  //      },
  //      () => {
  //        this.updatedNews();
  //      }
  //    );
  //console.log(this.state.page)
  //this.updatedNews();
  //  };
    return (
      <>
        <h1 className="text-center" style= {{marginTop: '90px'}}>
          DailyNews - Top {capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {/*console.log("//")*/}
        {loading && <Spinner1/>}
        {/*console.log(page)*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner1/>}
        >
          <div className="continer">
          <div className="row">
            {articles.map((element) => {
              return(
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
