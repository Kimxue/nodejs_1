function getuserid() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userid = 10;
            resolve(userid);
        }, 0);
    });
}

function getpostuser(userid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let post = { id: userid, name: "haha" };
            resolve(post); // Pass the `post` object instead of `userid`
        }, 0);
    });
}

function getcmt(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let cmt = post;
            resolve(cmt); // Return the comment
        }, 0);
    });
}

// Using async/await pattern for better readability
async function xyz() {
    try {
        const userid = await getuserid();            
        const post = await getpostuser(userid);      
        const cmt = await getcmt(post);              
        console.log(cmt);                            
    } catch (error) {
        console.error("Error:", error);
    }
}

xyz();

// getuserid((userid) => {
//     getpostuser(userid, function (post) {
//         getcmt(post, function (cmt) {
//             console.log(cmt);
//         })
//     });
// })