import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, ADD_THUMB_UP, ADD_THUMB_DOWN} from './actions';

export const comments = (state = [], action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    thumbUpFlag: 0,
                    thumbDownFlag: 0
                }
            ]
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.text
                }
                return comment;
            })
        case ADD_THUMB_UP:
            return state.map(comment => {
                if (comment.id === action.id) {
                        comment.thumbUpFlag = comment.thumbUpFlag + 1
                    }
                return comment;
            });
        case ADD_THUMB_DOWN:
            return state.map(comment => {
                if (comment.id === action.id) {
                        comment.thumbDownFlag = comment.thumbDownFlag + 1
                    }
                return comment;
            });
        default:
            return state;
    }
}