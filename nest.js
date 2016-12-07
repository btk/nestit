let fs = require("fs");

let obj = JSON.parse(fs.readFileSync("data.json", "utf8"));

function nestit(data, identical, by, sub) {

    // Create a temporary array for items
    // that has a parent and is not still
    // placed into an array.
    let dataWithParent = data.filter((dwp) => {
        return dwp[by];
    });

    // Create a temporary array for items
    // that don't have a parent.
    let dataHub = data.filter((dwop) => {
        return !dwop[by];
    });

    dataHub.forEach((d) => {
        let subArray = dataWithParent.filter((fd) => {
            return fd[by] == d[identical];
        });

        // TODO: xxx

        // Remove placed items from temporary array
        dataWithParent = dataWithParent.filter((fd) => {
            return fd[by] != d[identical];
        });
    });
    return dataHub;
}

console.log(nestit(obj, "itemid", "parent", "childs"));
