let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    const developers = arr.filter((employee) => employee.profession === "developer");
    developers.map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
    const newData = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newData);
    console.log(arr);
}

function removeAdmin() {
    const filteredArray = arr.filter((employee) => employee.profession !== "admin");
    console.log(filteredArray);
    arr = filteredArray;
}

function concatenatedArray() {
    const newArray = [
        { id: 4, name: "emma", age: "21", profession: "designer" },
        { id: 5, name: "james", age: "23", profession: "developer" },
        { id: 6, name: "sophia", age: "22", profession: "developer" },
    ];
    const concatenatedArray = arr.concat(newArray);
    arr = concatenatedArray;
    console.log(concatenatedArray);
}