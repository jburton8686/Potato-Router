import React from "react";
import { Link, Route } from "react-router-dom";
import Idea from './Idea';

const Ideas = props => (
    <div>
        <ul>
            <li>
                <Link to={`${props.match.url}/orange`}>
                    Rendering Oranges, good work!
                </Link>
            </li>
            <li>
                <Link to={`${props.match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${props.match.url} /props-v-state`}>Props v. State</Link>
            </li>
        </ul>
        <Route path={`${props.match.url}/:ideaId`} component={Idea} />
        <Route exact path={props.match.url} render={() => (
            <h3>Please select the orange, or something else</h3>
        )} />
    </div >
);

export default Ideas;