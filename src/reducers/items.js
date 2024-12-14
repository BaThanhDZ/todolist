let defaultState = [
    {id: "A1", name: "ReactJS", level: 0},
    {id: "A2", name: "NodeJS", level: 1},
    {id: "A3", name: "React Native", level: 2},
];

let tasks = JSON.parse(localStorage.getItem("task"));
defaultState = (tasks !== null && tasks.length > 0 ) ? tasks : defaultState;

const items = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default items;