function News(props) {
  console.log(props);

  return (
    <div className="news">
      <div className="news-img">
        { 
          props.article.urlToImage!==null?
          <img src={props.article.urlToImage} alt="" />:
          <img src="https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=" alt="" />
          }
      </div>
      <h1>{props.article.title}</h1>
      <p>
        {props.article.description?.substring(0, 100).concat("...")}
        <a href={props.article.url} target="blank">
          read more
        </a>
      </p>

      <div className="source">
        <p>
          <i>{props.article.author}</i>
        </p>
        <p>
          <em>{props.article.source.name}</em>
        </p>
      </div>
    </div>
  );
}

export default News;
