let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    const developers = arr.filter((item) => item.profession === "developer");
    console.log(developers);
}

function PrintDeveloperbyForEach() {
    arr.forEach((item) => {
        if (item.profession === "developer") {
            console.log(item);
        }
    });
}

function addData() {
    const newData = { id: 4, name: "mark", age: "22", profession: "developer" };
    arr.push(newData);
    console.log(arr);
}

function removeAdmin() {
    const filteredArray = arr.filter((item) => item.profession !== "admin");
    console.log(filteredArray);
}

function concatenateArray() {
    const arr2 = [
        { id: 4, name: "sarah", age: "21", profession: "developer" },
        { id: 5, name: "emma", age: "23", profession: "developer" },
    ];
    const concatenatedArray = arr.concat(arr2);
    console.log(concatenatedArray);
}