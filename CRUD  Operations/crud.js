const customerArray = [
    {
        "id": 101,
        "name": "nandhu",
        "email": "nandhu@gmail.com",
        "age":18,
        "salary": 30000,
    },
    {
        "id": 102,
        "name": "satish",
        "email": "satish@gmail.com",
        "age":20,
        "salary": 30000,
    },
    {
        "id": 103,
        "name": "hari",
        "email": "hari@gmail.com",
        "age":19,
        "salary": 30000,
    },
    {
        "id": 104,
        "name": "prashanth",
        "email": "prashath@gmail.com",
        "age":21,
        "salary": 50000,
    },
    {
        "id": 105,
        "name": "praveen",
        "email": "praveen@gmail.com",
        "age":19,
        "salary": 50000,
    },
    {
        
        "id": 106,
        "name": "sasi",
        "email": "sasi@gmail.com",
        "age":18,
        "salary": 20000,
    }
    
]

//  onsubmit function
let selectedRow = null;
function onFormSubmit(){
   if(checkInputs()){
    const formData = readFormData();
    if(selectedRow == null){
      
        insertNewRecord(formData);
    }else{
      updateRecord(formData);
    }
    resetForm();
   }
   

}
 
const table = document.getElementById("storedata").getElementsByTagName('tbody')[0];

// default initial value
function displayData() {
  // Clear existing table rows
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Add data to table rows
  customerArray.forEach(customer => {
    const row = table.insertRow();
    const idCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const emailCell = row.insertCell(2);
    const ageCell = row.insertCell(3);
    const salaryCell = row.insertCell(4);
    const cell5 = row.insertCell(5);
   

    idCell.innerHTML = customer.id;
    nameCell.innerHTML = customer.name;
    emailCell.innerHTML = customer.email;
    ageCell.innerHTML = customer.age;
    salaryCell.innerHTML = customer.salary;
    cell5.innerHTML = `<button class="btn btn-success" onClick="onEdit(this)">Edit</button>
    <button class="btn btn-danger" onClick="onDelete(this)">Delete</button>`;
  
  });
}
// to initialize
displayData();

// retrive the data 
function readFormData(){
    const formData ={};
 formData["name"] = document.getElementById("name").value;
 formData["email"] = document.getElementById("email").value;
 formData["age"] = document.getElementById("age").value;
 formData["salary"] = document.getElementById("salary").value;
 return formData;
}
// insertnew record
recordId = 107;

function insertNewRecord(data){
    
    const row = table.insertRow(table.length);
    const idCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const emailCell = row.insertCell(2);
    const ageCell = row.insertCell(3);
    const salaryCell = row.insertCell(4);
    const cell5 = row.insertCell(5);
    
    idCell.innerHTML=recordId;
    nameCell.innerHTML = data.name;
    emailCell.innerHTML = data.email;
    ageCell.innerHTML = data.age;
    salaryCell.innerHTML = data.salary;
    cell5.innerHTML = `<button class="btn btn-success" onClick="onEdit(this)">Edit</button>
                      <button class="btn btn-danger" onClick="onDelete(this)">Delete</button>`;
  
  recordId++;
}
// editing the data 
function onEdit(td){
   selectedRow = td.parentElement.parentElement;
   document.getElementById("name").value= selectedRow.cells[1].innerHTML;
   document.getElementById("email").value= selectedRow.cells[2].innerHTML;
   document.getElementById("age").value= selectedRow.cells[3].innerHTML;
   document.getElementById("salary").value= selectedRow.cells[4].innerHTML;
}
function updateRecord(d){
  selectedRow.cells[1].innerHTML = d.name;
  selectedRow.cells[2].innerHTML = d.email;
  selectedRow.cells[3].innerHTML = d.age;
  selectedRow.cells[4].innerHTML = d.salary;
}
// delete the record
function onDelete(td){
  if(confirm("do you want to delete this Record ?")){
    row =td.parentElement.parentElement;
    document.getElementById("storedata").deleteRow(row.rowIndex);
  }
  resetForm();
}
//Reset the form
function resetForm(){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
}

//  form validation 
function checkInputs() {
    const namevalue = document.querySelector("#name");
    const emailvalue = document.querySelector("#email");
    const agevalue = document.querySelector("#age");
    const salaryvalue = document.querySelector("#salary");
   
    const name = namevalue.value.trim();
    const email = emailvalue.value.trim();
    const age = agevalue.value.trim();
    const salary = salaryvalue.value.trim();
      isValid = true;
    
    if (name == "") {
      document.querySelector(".first").innerHTML = "Please Enter Your Name !!";
      document.querySelector("#name").style.border = "2px solid red";
      var isValid = false;
      
    } else {
      document.querySelector(".first").innerHTML = "";
      document.querySelector("#name").style.border = "2px solid green";
    }
  
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
      document.querySelector(".mail").innerHTML = "Please Enter Your email !!";
      document.querySelector("#email").style.border = "2px solid red";
      isValid = false;
      
    } else if (!emailregex.test(email)) {
      document.querySelector(".mail").innerHTML = "Please Enter Your valid email !!";
      document.querySelector("#email").style.border = "2px solid red";
      isValid = false;
    } else {
     
      document.querySelector(".mail").innerHTML = "";
      document.querySelector("#email").style.border = "2px solid green";
    }
    
    // const ageregex = /^(1[8-9]|[2-2][0-9]|30)$/;
    if (age == "") {
        document.querySelector(".age").innerHTML = "Please Enter Your age !!";
        document.querySelector("#age").style.border = "2px solid red";
        isValid = false;
      }
    
    // else if (!ageregex.test(age)) {
    //     document.querySelector(".age").innerHTML = "Please Enter Your18>30 age !!";
    //     document.querySelector("#age").style.border = "2px solid red";
    //     isValid = false;
    //   }  
      else {
        document.querySelector(".age").innerHTML = "";
        document.querySelector("#age").style.border = "2px solid green";
       
      } 
      // const salaryRegex = /^\d{5,6}$/;
    if (salary == "") {
        document.querySelector(".salary").innerHTML = "Please Enter Your salary !!";
        document.querySelector("#salary").style.border = "2px solid red";
        isValid = false;
      }
       
    // else if (!salaryRegex.test(salary)) {
    //   document.querySelector(".salary").innerHTML = "Please Enter your salary in 5 to 6 digits !!";
    //   document.querySelector("#salary").style.border = "2px solid red";
    //   isValid = false;
    // }  
     else {
        document.querySelector(".salary").innerHTML = "";
        document.querySelector("#salary").style.border = "2px solid green";
        
      }
      return isValid;
}
// function searchTable(){
//   const input= document.getElementById("searchbar");
//   const  filter = input.value.toLowerCase();
//   const  tr = table.getElementsByTagName("tr")
//   for (let i = 0; i < tr.length; i++) {
//    const  td =  tr[i].getElementsByTagName("td")[0]; // Assume first column is the one to search
//    const  td1 = tr[i].getElementsByTagName("td")[1]; // Assume first column is the one to search
//    const  td2 = tr[i].getElementsByTagName("td")[2]; // Assume first column is the one to search
//    const  td3 = tr[i].getElementsByTagName("td")[3]; // Assume first column is the one to search
//     if (td || td1 || td2|| td3) {
//       let idValue = td.textContent || td.innerText;
//       idValue =idValue.toLowerCase();
//       let nameValue = td1.textContent || td1.innerText;
//       nameValue = nameValue.toLowerCase();
//       const emailValue = td2.textContent || td2.innerText;
//       const ageValue   = td3.textContent || td3.innerText;
//       if (idValue.indexOf(filter) > -1 || nameValue.indexOf(filter) > -1 || emailValue.indexOf(filter) > -1|| ageValue.indexOf(filter) > -1 ) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
//  }
function searchTable() {
  const input = document.getElementById("searchbar").value.toLowerCase();
  const tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    
    for (let j = 0; j < td.length; j++) {
      const cell = td[j];
      if (cell) {
        const cellValue = cell.textContent || cell.innerText;
        if (cellValue.toLowerCase().indexOf(input) > -1) {
          tr[i].style.display = "";
          document.querySelector(".search").innerHTML="";
          break;
        }
        else {
          document.querySelector(".search").innerHTML="No Result";
          tr[i].style.display = "none";
        }
      }
    }
  }
}