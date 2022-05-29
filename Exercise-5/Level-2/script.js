// 1.
let marks = window.prompt("Enter your marks : ");
if(marks > 90 && marks <= 100) document.write('A');
else if(marks > 70 && marks <= 90) document.write('B');
else if(marks > 60 && marks <= 70) document.write('C');
else if(marks > 50 && marks <= 60) document.write('D');
else if(marks > 0 && marks <= 60) document.write('F');

// 2.
let month = window.prompt("Enter a month :");
if(month == "January") document.write("The season is Winter");
else if(month == "February") document.write("The season is Winter");
else if(month == "March") document.write("The season is Spring");
else if(month == "April") document.write("The season is Spring");
else if(month == "May") document.write("The season is Spring");
else if(month == "June") document.write("The season is Summer");
else if(month == "July") document.write("The season is Summer");
else if(month == "August") document.write("The season is Summer");
else if(month == "September") document.write("The season is Autumn");
else if(month == "October") document.write("The season is Autumn");
else if(month == "November") document.write("The season is Autumn");
else if(month == "December") document.write("The season is Winter");

// 3.
let day = window.prompt("Enter a day :");
if(day.toLowerCase() == 'saturday' || day.toLowerCase() == 'sunday') document.write(day.toUpperCase()+' IS A WEEKEND.');
else if(day.toLowerCase() == 'monday' || day.toLowerCase() == 'tuesday' || day.toLowerCase() == 'wednesday' || day.toLowerCase() == 'thursday' || day.toLowerCase() == 'friday') document.write(day.toUpperCase()+' IS A WEEK DAY.');
else document.write('DAY DOES NOT EXIST.');