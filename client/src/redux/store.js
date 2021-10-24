const { createStore } = require("redux");
const rootReducer = require("./reducer")

const store = createStore(rootReducer);

export default store;