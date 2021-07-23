const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentsNodes = xmlDOM.querySelector("list").querySelectorAll("student");

console.log(studentsNodes[0]);
console.log(studentsNodes[1]);

const fullName0Stud = `${
    studentsNodes[0].querySelector("name").querySelector("first").textContent
} ${studentsNodes[0].querySelector("name").querySelector("second").textContent}`;

const fullName1Stud = `${
    studentsNodes[1].querySelector("name").querySelector("first").textContent
} ${studentsNodes[1].querySelector("name").querySelector("second").textContent}`;

const resultObj = {
    list: [
        {
            name: fullName0Stud,
            age: Number(studentsNodes[0].querySelector("age").textContent),
            prof: studentsNodes[0].querySelector("prof").textContent,
            lang: studentsNodes[0].querySelector("name").getAttribute("lang"),
        },
        {
            name: fullName1Stud,
            age: Number(studentsNodes[1].querySelector("age").textContent),
            prof: studentsNodes[1].querySelector("prof").textContent,
            lang: studentsNodes[1].querySelector("name").getAttribute("lang"),
        }
    ]
};

console.log(resultObj);