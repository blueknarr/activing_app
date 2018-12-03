import React, { Component } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import '../css/Tags.css';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        { id: "Bowling", text: "볼링" },
        { id: "Dart", text: "다트" }
      ],
      suggestions: [
        { id: "Alchol", text: "술" },
        { id: "Speaking", text: "영어회화" },
        { id: "Foreign", text: "외국어" },
        { id: "Trip", text: "여행" },
        { id: "Toeic", text: "토익" },
        { id: "Movie", text: "영화" }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (tags) {
    const { name, value } = this.state;
    this.setState({ [name]: value });
  };

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          placeholder="취미 태그를 입력해보세요."
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters}
          autofocus={false}
          className="form-control"
          name="tags"
          value={this.state.tags}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Tags;
