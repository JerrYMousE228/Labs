
function checker() {
   var sel = document.getElementById("city");
   if (document.getElementById("UN").value == "" || document.getElementById("pwd").value == "" || sel.selectedIndex == 0 || sel.selectedIndex == -1)

      document.getElementById("send").disabled = true;

   else

      document.getElementById("send").disabled = false;
}

function addToList() {

   if (document.getElementById("newElement").value != "") /*Якщо вміст текстового поля не пустий*/ {

      var sel = document.getElementById("city");

      var newItem = new Option();/*Оголошення нового об’єкта типу «Елемент списку»*/

      newItem.text = document.getElementById("newElement").value; /*У властивість text нового елемента списку записуємо вміст текстового поля*/

      newItem.value = sel.options.length - 1; /*У властивість value нового елемента списку записуємо його майбутній порядковий номер у списку */

      sel.add(newItem, sel.length); /*До списку додаємо визначений елемент на останню позицію */

      document.getElementById("newElement").value = ""
   }

}


function deleteItem() {

   var sel = document.getElementById("city"); /* у змінну sel запишемо посилання на випадаючий список */

   sel.remove(sel.selectedIndex); /* Видаляємо елемент, що є вибраним у списку на даний момент */

   sel.selectedIndex = 0; /* Робимо вибраним елемент з індексом 0*/

}


document.getElementById("send").addEventListener("click", function (event) {
   event.preventDefault()
   if (document.getElementById("UN").value != "" && document.getElementById("pwd").value != "")

      document.getElementById("f1").submit();
});



function testCellPhoneNumber(str) {

   if (!str.length)

      alert("Номер мобільного телефону задано некоректно");

   var cellPhoneTemplate = new RegExp("8?((063)|(093))[0-9]{7}");

   str = str.replace(cellPhoneTemplate, "");

   if (str != "")
      alert("Номер мобільного телефону задано некоректно");
   else
      alert("Nice");

}



document.getElementById("phone-check").addEventListener("click", function (event) {
   event.preventDefault()
   testCellPhoneNumber(document.getElementById("phone").value)
});



function testPhoneNumber(str) {

   if (!str.length)
      alert("Номер телефону задано некоректно");

   var phoneTemplate = new RegExp("2?[0-9]{6}");

   str = str.replace(phoneTemplate, "");

   if (str != "")
      alert("Номер телефону задано некоректно");
   else
      alert("Nice");
}



document.getElementById("sphone-check").addEventListener("click", function (event) {
   event.preventDefault()
   testPhoneNumber(document.getElementById("sphone").value)
});


function removeRedundantSpaces(text_for_Editing) {

   var extraSpaces = new RegExp("[ ]{2,}", "g");

   return text_for_Editing.replace(extraSpaces, " ");

}

function clearTextFromHTMLTags(textForEditing) {

   var tagTemplate = new RegExp("</?[a-zA-Z]{1,}/?>", "g");


   textForEditing = textForEditing.replace(tagTemplate, "");

   document.getElementById('editor').value = textForEditing
}

function checkWholePositiveNumber(str) {
   if (!str.length) 
      return alert("This is not valid whole positive number!");
   var re = new RegExp("[^0-9]", "g");
   str = str.replace(re, "a");
   if (str.indexOf("a") != -1) 
      alert("This is not valid whole positive number!"); 
   else
      alert("Nice")
}


function changePswdInput(){
   document.getElementById("pswd").style = "background-color:red; color:white; height:28px;font-size:10pt;"
}



document.getElementById("pswd-change").addEventListener("click", function (event) {
   event.preventDefault()
   changePswdInput()
});


function hideRows(){
   document.getElementById("row1").style = "display: none;"
   document.getElementById("row3").style = "visibility: hidden;"
}



document.getElementById("hide-rows").addEventListener("click", function (event) {
   event.preventDefault()
   hideRows()
});
