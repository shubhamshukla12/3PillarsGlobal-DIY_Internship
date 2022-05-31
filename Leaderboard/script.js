function addRow() {
         
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var myCountry = document.getElementById("country");
    var myScore = document.getElementById("score");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML= myName.value;
    row.insertCell(1).innerHTML= age.value;
    row.insertCell(2).innerHTML=myCountry.value;
    row.insertCell(3).innerHTML=myScore.value;
    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';

}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}