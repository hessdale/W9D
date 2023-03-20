
//creating a array with ten object tweets all containing tweet,username,date created and user age
let tweets = [
    {
        tweet: `lorem ipsum 1`,
        username: `@twotter1`,
        created_at: `03/18/2023`,
        age: 7
    },
    {
        tweet: `lorem ipsum 2`,
        username: `@twotter2`,
        created_at: `03/18/2023`,
        age: 17
    },
    {
        tweet: `lorem ipsum 3`,
        username: `@twotter3`,
        created_at: `03/18/2023`,
        age: 27
    },
    {
        tweet: `lorem ipsum 4`,
        username: `@twotter4`,
        created_at: `03/18/2023`,
        age: 37
    },
    {
        tweet: `lorem ipsum 5`,
        username: `@twotter5`,
        created_at: `03/18/2023`,
        age: 47
    },
    {
        tweet: `lorem ipsum 6`,
        username: `@twotter6`,
        created_at: `03/18/2023`,
        age: 57
    },
    {
        tweet: `lorem ipsum 7`,
        username: `@twotter7`,
        created_at: `03/18/2023`,
        age: 67
    },
    {
        tweet: `lorem ipsum 8`,
        username: `@twotter8`,
        created_at: `03/18/2023`,
        age: 77
    },
    {
        tweet: `lorem ipsum 9`,
        username: `@twotter9`,
        created_at: `03/18/2023`,
        age: 87
    },
    {
        tweet: `lorem ipsum 10`,
        username: `@twotter10`,
        created_at: `03/18/2023`,
        age: 97
    },
];
// using while loop that prints out tweet followed by the username, followed by the created_at field only if the user is 18 and up
let counter = 0;
while (counter < tweets.length) {
    if ((tweets[counter][`age`]) >= 18) {
        console.log(`${tweets[counter].tweet} by:${tweets[counter].username} date:${tweets[counter].created_at} over 18`)
    } counter = counter + 1;
}
//using while loop that prints out tweet followed by the username, followed by the created_at field only if the user is under 18
for (let counter = 0; counter < tweets.length; counter = counter + 1) {
    if ((tweets[counter][`age`]) <= 18) {
        console.log(`${tweets[counter].tweet} by:${tweets[counter].username} date:${tweets[counter].created_at} under 18`)
    }
}
