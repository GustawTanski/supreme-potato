import React from "react";
import { Button } from "antd";
import AnswersList from "../AnswersList";
import QuestionHeader from "../QuestionHeader";
import "./style.css";

export default class Question extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<div className="question">
				<QuestionHeader>{this.props.question.question}</QuestionHeader>
				<AnswersList question={this.props.question} />
				<Button block={true} type="primary">
					Check answer
				</Button>
			</div>
		);
	}
}