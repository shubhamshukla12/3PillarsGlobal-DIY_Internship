function addRow() {
    var myfName = document.getElementById("fname");
    var mylname = document.getElementById("lname");
    var myCountry = document.getElementById("country");
    var myScore = document.getElementById("score");
    var table = document.getElementById("myTableData");
    if (
      myfName.value == "" ||
      mylname.value == "" ||
      myCountry.value == "" ||
      myScore.value == ""
    ) {
      let message = document.getElementById("warn");
      message.style.display = "";
      return;
    } else {
      let message = document.getElementById("warn");
      message.style.display = "none";
    }
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var name = myfName.value + " " + mylname.value;
    // row.insertCell(0).innerHTML = myfName.value;
    // row.insertCell(1).innerHTML = mylname.value;
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = myCountry.value;
    row.insertCell(2).innerHTML = myScore.value;
    row.insertCell(3).innerHTML =
      '<i class="fa fa-trash" onClick="Javacsript:deleteRow(this)" ></i>';
    row.insertCell(4).innerHTML =
      "<button onClick='Javacsript:substractScore(this)' class='badge badge-info'>-5</button>";
    row.insertCell(5).innerHTML =
      "<button onClick='Javacsript:increaseScore(this)' class='badge badge-info;''>+5</button>";
    sortTable();

    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("country").value="";
    document.getElementById("score").value="";
  }
  function substractScore(obj) {
    var scoreTd = obj.parentNode.parentNode.getElementsByTagName("TD")[2];
    scoreTd.innerHTML = Number(scoreTd.innerHTML) - 5;
    sortTable();
  }
  function increaseScore(obj) {
    var scoreTd = obj.parentNode.parentNode.getElementsByTagName("TD")[2];
    scoreTd.innerHTML = Number(scoreTd.innerHTML) + 5;
    sortTable();
  }

  function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
  }
  function sortTable() {
    // console.log("sorting");
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTableData");
    // console.log(table);
    switching = true;
    /*Make a loop that will continue until
  no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      // console.log(rows);
      /*Loop through all table rows (except the
    first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
      one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        console.log(x, y);
        //check if the two rows should switch place:
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }