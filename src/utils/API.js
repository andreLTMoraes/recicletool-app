const urlBase = "";

export function login(username, password) {
    return sleep({
        username: "André Moraes",
        email: "andre@test.com"
    });
}

const sleep = (resData) => {
    return new Promise(resolve =>
        setTimeout(() => resolve(
            resData
        ),
        Math.random() * 1000
    )
)}