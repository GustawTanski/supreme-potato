import { combineReducers } from "redux";
import questionsList from "./questionsList";
import question from "./question";
import answer from "./answer";
import points from "./points";
import { test } from "./test";
import { routerContext } from "./routerContext";
import { history } from "./history";

export default combineReducers({ questionsList, question, answer, points, test, routerContext, history });
