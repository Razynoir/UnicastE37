import React from "react";
import Wiki from "../full_wiki";

const Journal = (props) => {
  var sequence = props.chapters.sequence;
  var contents = props.chapters.contents;

  return (
    <div className="row journal">
      <div className="col-xs-12 journal-field">
        {
          sequence.map((label) => {
            var entry = contents[label];
            var output = [];
            if(!!entry.title && entry.title.length > 0){
              output.push(<h1>{entry.title}</h1>);
            }
            if(!!entry.subtitle && entry.subtitle.length > 0){
              output.push(<h3>{entry.subtitle}</h3>);
            }
            if(!!entry.paragraphs && entry.paragraphs.length > 0){
              entry.paragraphs.forEach(function(paragraph){
                if(!!paragraph.sectionTitle && paragraph.sectionTitle.length > 0){
                  output.push(<h5>{paragraph.sectionTitle}</h5>);
                }
                output.push(<p>{paragraph.content}</p>)
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
