import React from 'react'
import Choice from './Choice'

var Single = React.createClass({
  getInitialState: function(props){
    return this.props;
  },

  componentDidMount: function(){
    if(!!this.props.node.shouldLog && this.props.node.shouldLog(this.props.store)){
      this.props.addJournalEntry(this.props.node);
    }
  },

  componentDidUpdate: function(){
    if(!!this.props.node.shouldLog && this.props.node.shouldLog(this.props.store)){
      this.props.addJournalEntry(this.props.node);
    }
  },

  render: function(){
    if(!this.props.node.shouldDisplay){
      this.props.switchNode(this.props.node.nextNode);
      return (<div></div>);
    }

    var store = this.props.store;
    var currentNode = this.props.node;

    var content = [];
    if(!!currentNode.title && currentNode.title.length > 0){
      content.push(<h1 key={currentNode.title}>{currentNode.title}</h1>);
    }
    if(!!currentNode.subtitle && currentNode.subtitle.length > 0){
      content.push(<h3 key={currentNode.subtitle}>{currentNode.subtitle}</h3>)
    }
    if(!!currentNode.paragraphs && currentNode.paragraphs.length > 0){
      currentNode.paragraphs.forEach(function(paragraph, idx){
        if(!!paragraph.sectionTitle && paragraph.sectionTitle.length > 0){
          content.push(<h5 key={paragraph.sectionTitle}>{paragraph.sectionTitle}</h5>);
        }
        content.push(<p key={paragraph.content.slice(0,10)}>{paragraph.content}</p>)
      })
    }

    return (
      <div className="row single">
        <div className="col-xs-12 single-content">
          {content}
        </div>
        <hr/>
        <div className="col-xs-12 single-choices">
          {
            currentNode.choices.map((choice, idx) => {
              if(!choice.hasDisplayCondition || (choice.hasDisplayCondition && choice.satisfyDisplayCondition(store))){
                return(<Choice store={store} key={idx} choice={choice} switchNode={this.props.switchNode} modifyInventoryWithSpecs={this.props.modifyInventoryWithSpecs} />);
              }else{
                return("");
              }
            })
          }
        </div>
      </div>
    )
  }
})

export default Single;
