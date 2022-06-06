function checkboxes() {
   var inputs = document.getElementsByTagName("input");
   var inputObj;
   var selectedCount = 0;
   for (var count1 = 0; count1 < inputs.length; count1++) {
      inputObj = inputs[count1];
      var type = inputObj.getAttribute("type");
      if (type == 'checkbox' && inputObj.checked) {
         selectedCount++;
      }
   }

   if (selectedCount < 5) {
      document.getElementById('text').innerHTML = "Selected less than 5, Please select more!"
      document.getElementById('text').style.color = "red"
   } else {
      document.getElementById('text').innerHTML = "Nice!"
      document.getElementById('text').style.color = "green"
      
   }

}