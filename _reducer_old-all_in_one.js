import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, ADD_THUMB_UP, ADD_THUMB_DOWN} from './actions';

const initialState = {
    comments: [],
    users: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, {
                id: action.id,
                text: action.text,
                thumbUpFlag: 0,
                thumbDownFlag: 0
            }]}
            /*//też powinno działać
            return Object.assign({}, {...state, comments: [...state.comments, {
                id: action.id,
                text: action.text,
                thumbUpFlag: 0,
                thumbDownFlag: 0
            }]})
            */
        case REMOVE_COMMENT:
            return {...state, comments: state.comments.filter(comment => comment.id !== action.id)}
        case EDIT_COMMENT:
            return {...state, comments: state.comments.map(comment => {
                if (comment.id === action.id) {
                        comment.text = action.text
                    }
                return comment;
            })}
        case ADD_THUMB_UP:
            return {...state, comments: state.comments.map(comment => {
                if (comment.id === action.id) {
                        comment.thumbUpFlag = comment.thumbUpFlag + 1
                    }
                return comment;
            })}
        case ADD_THUMB_DOWN:
            return {...state, comments: state.comments.map(comment => {
                if (comment.id === action.id) {
                        comment.thumbDownFlag = comment.thumbDownFlag + 1
                    }
                return comment;
            })}
        default:
            return state;
    }
}