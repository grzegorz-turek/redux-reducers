export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_THUMB_UP = 'ADD_THUMB_UP';
export const ADD_THUMB_DOWN = 'ADD_THUMB_DOWN';

const boundAddComment = (text) => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundRemoveComment = (id) => dispatch(removeComment(id));
const boundAddThumbUp = (id, thumbUpFlag) => dispatch(addThumbUp(id, thumbUpFlag));
const boundAddThumbDown = (id, thumbDownFlag) => dispatch(addThumbDown(id, thumbDownFlag));

addComment = (text) => (
    {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text
    }
);

editComment = (id, text) => (
    {
        type: EDIT_COMMENT,
        id,
        text
    }
);

removeComment = (id) => (
    {
        type: REMOVE_COMMENT,
        id
    }
);

addThumbUp = (id, thumbUpFlag) => (
    {
        type: ADD_THUMB_UP,
        id,
        thumbUpFlag
    }
);

addThumbDown = (id, thumbDownFlag) => (
    {
        type: ADD_THUMB_DOWN,
        id,
        thumbDownFlag
    }
)