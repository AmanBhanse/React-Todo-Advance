//Thunk is function is function which returns functions which contains actual logic we want to perform when triggered

export const displayAlter = () => () => {
    alert("Hello");
};
