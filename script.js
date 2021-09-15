
function myFunction() {

  if(document.getElementById('first-name').value == ""||
     document.getElementById('last-name').value == ""||
     $("input[name='gender']:checked").val() == ""|| 
     document.getElementById('user-address').value == ""|| 
     document.getElementById('pincode').value == ""|| 
     document.getElementById('state').value == ""||
     document.getElementById('country').value == ""||
     $("input[name='gender']:checked").val() == "" )
    
     {
    alert("All fields must be filled out");
     return false;
  }
 else
  {
    myInfo();
  }
}

   function myInfo() {

    


   var infoTable = document.getElementById('myTable')

    var row = infoTable.insertRow(-1);
    var td1 = row.insertCell(0);
    var td2 = row.insertCell(1);
    var td3 = row.insertCell(2);
    var td4 = row.insertCell(3);
    var td5 = row.insertCell(4);
    var td6 = row.insertCell(5);
    var td7 = row.insertCell(6);
    var td8 = row.insertCell(7);
   
    

    td1.innerText = document.getElementById('first-name').value;
    td2.innerText = document.getElementById('last-name').value;
    td3.innerText = $("input[name='gender']:checked").val();
    td4.innerText = document.getElementById('user-address').value;
    td5.innerText = document.getElementById('pincode').value;
    td6.innerText = document.getElementById('state').value;
    td7.innerText = document.getElementById('country').value;
    td8.innerText = foodSelection();
    document.getElementById("myForm").reset();
  }

  function foodSelection() {
    var fselection = document.getElementsByName("food")
    var foodResult = []
    for(var j=0; j< fselection.length;j++)
     {
      if(fselection[j].checked)
        {
         foodResult.push(fselection[j].value);
          
        }
     }
     
     if(foodResult.length < 2)
     {
       alert("Select minimum two Choice of Food")
     }
     else
     {
     console.log(foodResult.toString());
     return foodResult.toString();
     }
    
  }

  