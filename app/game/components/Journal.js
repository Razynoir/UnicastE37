import React from "react";
import Wiki from "../full_wiki";

const Journal = (props) => {
  function print(){
    var doc = new jsPDF();

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
    	'#editor': function(element, renderer){
    		return true;
    	}
    };

    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML($('journal-field').get(0), 15, 15, {
    	'width': 170,
    	'elementHandlers': specialElementHandlers
    });

  }

  return (
    <div className="row journal">
      <div className="col-xs-12">
        <button className="btn btn-default" onClick={print}>Print PDF</button>
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
