const myPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve("I have succeeded");
        }, 1000);
    } else {
        reject("I have failed");
    }
});

myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));


const myAsyncFunction = async ()=> {
    try {
        const usersResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        const users = await usersResponse.json();
        const secondUser = users[1];

        console.log(secondUser);

        const postsResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
        );
        const posts = await postsResponse.json();

        console.log(posts);

    } catch (err) {
        console.log('there was an error');
    }
}