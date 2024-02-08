function addNewWEField() {

    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewProjectField() {

    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let projectOb = document.getElementById("project");
    let projectAddButtonOb = document.getElementById("projectAddButton");

    projectOb.insertBefore(newNode, projectAddButtonOb);

}

function addNewAQField() {

    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

// resume template

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    // document.getElementById("nameT2").innerHTML = nameField;

    // contact 
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    // email 
    document.getElementById("mailT").innerHTML = document.getElementById("mailField").value;
    // address 
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // links 

    document.getElementById("gitT").href = document.getElementById('gitField').value;
    document.getElementById("linkedinT").href = document.getElementById('linkedinField').value;
    document.getElementById("igT").href = document.getElementById('igField').value;

    // objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // we 

    let wes = document.getElementsByClassName("weField");
    let str = "";

    for (const e of wes) {
        str += `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    // projects 

    let projects = document.getElementsByClassName("projectField");
    let str1 = "";

    for (const e of projects) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("projectT").innerHTML = str1;

    // aq 

    let aqs = document.getElementsByClassName("aqField");
    let strr = "";

    for (const e of aqs) {
        strr += `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = strr;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

// print cv 

function printCV() {
    window.print();
}