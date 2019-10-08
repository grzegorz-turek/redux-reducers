const state = {
    comments: [
        {
            id: 1012,
            text: 'sampletext 1',
            thumbUpFlag: 0,
            thumbDownFlag: 0
        },
        {
            id: 2012,
            text: 'sampletext 2',
            thumbUpFlag: 2,
            thumbDownFlag: 1
        }
    ],
    users: [
        {fn: 'John', ln: 'Travolta'},
        {fn: 'Johnny', ln: 'Cash'},
    ]
};

const addComment = Object.assign(
    {},
    {
        comments: [
            {
                id: 9999,
                text: 'new comment',
                thumbUpFlag: 4,
                thumbDownFlag: 5
            }
        ],
        ...state
    }
);

const addComment2 = Object.assign({}, state, {
    comments: [
    {
        id: 0000,
        text: 'kkkkkkkkks',
        thumbUpFlag: 4,
        thumbDownFlag: 5
    }
    /*, ...state*/]
})

const newState3 = ({
    comments: [
        {
            id: 12342415,
            text: 'wtvwvtrweg12EW',
            thumbUpFlag: 40,
            thumbDownFlag: 50
        }
    ]
});
const addComment3 = {...state, ...newState3};


/*
const newState2 = Object.assign(
    {},
    {
        comments: state.comments.filter(comment => comment.id !== action.id)
*/

const newState = state.comments.map(comment => {
    if (comment.id === 2012) {
        return {...comment, text: 'after mapping'}
    }
    return comment
})

//console.log(state);
//console.log(newState);
//console.log(addComment3);

const obj1 = {
    comments: [
        {id: 1, text: 'text 1'},
        {id: 2, text: 'text 2'}
    ],
    users: [
        {fn: 'Alam', ln: 'Green'},
        {fn: 'Johan', ln: 'Cruyf'},
    ]

};

const obj2 = {
    comments: [
        {id: 3, text: 'text 3'},
        {id: 4, text: 'text 4'}
    ],
    users: [
        {fn: 'Greg', ln: 'Turek'},
        {fn: 'Anna', ln: 'Jantar'},
    ]
};

const obj3 = {
    comments: [
        {
            id: 5,
            text: 'text 5'
        }
    ],
};

const objJoined = ({...obj1, ...obj2});
const objAssigned = Object.assign({}, {comments: [...state.comments, ...obj2.comments]});
const objJoined2 = {comments: [...obj1.comments, ...obj2.comments]};
const objJoined3 = {comments: [...obj1.comments, {
    id: 5,
    text: 'hahaha'
}]};
const objJoined4 = {...state, comments: [...state.comments, {
    id: 5,
    text: 'hahdsasdfadfadfafdaha',
    thumbUpFlag: 900,
    thumbDownFlag: 0
}]};

const objJoined40 = [
    ...state.comments, {
        id: 40,
        text: 'krótsza wersja',
        thumbUpFlag: 0,
        thumbDownFlag: 0
    }
];

const objJoined7 = Object.assign({}, {...state, comments: [...state.comments, {
    id: 5,
    text: 'hahdsasdfadfadfafdaha',
    thumbUpFlag: 900,
    thumbDownFlag: 0
}]});



const objJoined5 = {...state, comments: [{
    id: 5,
    text: 'hahdsasdfadfadfafdaha',
    thumbUpFlag: 900,
    thumbDownFlag: 0
}]};

const objJoined6 = {comments: [
    {
        id: 49499494,
        text: 'uahahahauhahahauhahaha',
        thumbUpFlag: 0,
        thumbDownFlag: 0
    }
],
...state}


// w obu przypadkach dostaję { comments: [ { id: 3, text: 'text 3' }, { id: 4, text: 'text 4' } ] } a chciałbym dostać { comments: [ { id: 1, text: 'text 1' }, { id: 2, text: 'text 2' }, { id: 3, text: 'text 3' }, { id: 4, text: 'text 4' } ] }


console.log(objJoined40);
//console.log(objJoined7);
//console.log(objAssigned);
//console.log(objJoined2);
//console.log(objJoined3);
//console.log(objJoined4);

//console.log(addComment);

const object10 = {
    comments: [
        {id: 1, text: 'text 1', flag: 0},
        {id: 2, text: 'text 2', flag: 0},
        {id: 3, text: 'text 3', flag: 0},
        {id: 4, text: 'text 4', flag: 0},
        {id: 5, text: 'text 5', flag: 0}
    ],
    users: [
        {fn: 'Alam', ln: 'Green'},
        {fn: 'Johan', ln: 'Cruyf'},
        {fn: 'Greg', ln: 'Turek'},
        {fn: 'Anna', ln: 'Jantar'}
    ]
}

const addFlag = object10.comments.map(comment => {
    if (comment.id === 3) {
        comment.text = 'CHCHCHCHANGE'
        }
    return comment;
});

//console.log(addFlag);

//const delComment = object10.comments.filter(comment => comment.id === action.id)
//const delComment = object10.comments.filter(comment => comment.id !== 4);

//console.log(object10);
//console.log(delComment);

