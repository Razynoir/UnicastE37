import React from "react";
import Wiki from "../full_wiki";

const Journal = (props) => {
  return (
    <div className="row journal">
      <div className="col-xs-12">
        <button className="btn btn-print-book" onClick={() => {window.print();}}>Print Book</button>
      </div>

      <div className="col-xs-12 front-cover-field">
        <div className="front-cover-buffer"></div>
        <h1 className="chapter-title">Unicast37</h1>
        <h3 className="chapter-subtitle">by Raymond Gao and Username</h3>
        <div className="front-cover-buffer"></div>
      </div>

      <div className="col-xs-12 journal-field">
        {
          props.chapters.sequence.map((label) => {
            var entry = props.chapters.contents[label];
            var output = [];
            if(!!entry.title && entry.title.length > 0){
              output.push(<h1 className="chapter-title">{entry.title}</h1>);
            }
            if(!!entry.subtitle && entry.subtitle.length > 0){
              output.push(<h3 className="chapter-subtitle">{entry.subtitle}</h3>);
            }
            if(!!entry.paragraphs && entry.paragraphs.length > 0){
              entry.paragraphs.forEach(function(paragraph){
                if(!!paragraph.sectionTitle && paragraph.sectionTitle.length > 0){
                  output.push(<h5 className="chapter-sectionTitle">{paragraph.sectionTitle}</h5>);
                }
                output.push(<p className="chapter-paragraph">{paragraph.content}</p>)
              })
            }
            return output;
          })
        }
      </div>
    </div>
  )
}

export default Journal;
