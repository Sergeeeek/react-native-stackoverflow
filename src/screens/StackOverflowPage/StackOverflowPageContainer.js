import React from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "./actions";
import {
    LOADING_STATE_IDLE,
    LOADING_STATE_LOADED,
    LOADING_STATE_LOADING,
    LOADING_STATE_ERROR,
} from "./reducer";
import StackOverflowPageView from "./StackOverflowPageView";

class StackOverflowPageContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onRefresh = this.onRefresh.bind(this);
        this.onLoadNext = this.onLoadNext.bind(this);
    }

    componentDidMount() {
        this.onRefresh();
    }

    onRefresh() {
        const loading = this.props.questions.loadingState;
        this.props.fetchQuestions(1);
    }

    onLoadNext() {
        this.props.fetchQuestions(this.props.questions.page + 1);
    }

    render() {
        return <StackOverflowPageView 
            {...this.props.questions}
            onRefresh={this.onRefresh}
            onLoadNext={this.onLoadNext}
        />
    }
}

const mapStateToProps = state => ({
    questions: state.questions,
});

export default connect(mapStateToProps, { fetchQuestions })(StackOverflowPageContainer);