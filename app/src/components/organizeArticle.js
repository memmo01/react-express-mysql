import React from 'react'

class OrganizeArticle extends React.Component{
    render(){
        // section name++
        //web_url
        // pub_date++
        //headline.print_headline++
        //snippet++
        //byline.original++
        console.log(this.props.organize)
        return(
            <div>

 
 <div className="card">
 <a href={this.props.organize.web_url} target="_blank">
   <div className="card-header">
     {this.props.organize.news_desk}
   </div>
   <div className="card-body">
     <blockquote className="blockquote mb-0">
     <h2>{this.props.organize.headline.print_headline}</h2>
       <p>{this.props.organize.snippet}</p>
       <footer className="blockquote-footer">{this.props.organize.byline.original} <cite title="Source Title">{this.props.organize.pub_date}</cite></footer>
     </blockquote>
   </div>
   </a>
   <div className="saveArticle">
   <button type="button" className="btn btn-outline-success">save article</button>
   </div>
    </div>
 

                </div>
        )
    }
}

export default OrganizeArticle;