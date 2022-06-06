function checker() {
   if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('confirm_password').style.color = 'green';
      document.getElementById('password').style.color = 'green';
      document.getElementById('confirm_password').setCustomValidity('')
   } else {
      document.getElementById('confirm_password').style.color = 'red';
      document.getElementById('password').style.color = 'red';
      document.getElementById('confirm_password').setCustomValidity('Passwords do not match!')
   }

   var sel = document.getElementById("city");
   if (document.getElementById("username").value == "" || document.getElementById("password").value == "" || document.getElementById("confirm_password").value == "" || sel.selectedIndex == 0 || sel.selectedIndex == -1)
      document.getElementById("send").disabled = true;
   else
      document.getElementById("send").disabled = false;
}

function checkPhone() {
   var inpt = document.getElementById("phone")
   var str = inpt.value
   var inform = document.getElementById("inform")

   if (!str.length) {
      inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      inform.innerHTML = "Please enter number!"
      inform.style.color = "red"
   } else {
      var phoneTemplate = new RegExp("^[+]?(380|[(]380[)])?[\s]?[0-9]{9}$");

      str = str.replace(phoneTemplate, "");

      if (str != "") {
         inform.innerHTML = "Wrong number!";
         inform.style.color = "red"
         inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      } else {
         inform.innerHTML = "Nice";
         inform.style.color = "green"
         inpt.style = "border-color: green; outline: none; border-radius: 2px;"
      }
   }
}

function checkPostIndex() {
   var inpt = document.getElementById("post_index")
   var str = inpt.value
   var inform = document.getElementById("inform2")

   if (!str.length) {
      inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      inform.innerHTML = "Please enter number!"
      inform.style.color = "red"
   } else {
      var phoneTemplate = new RegExp("^790[0-9]{2}$$");

      str = str.replace(phoneTemplate, "");

      if (str != "") {
         inform.innerHTML = "Wrong post index!";
         inform.style.color = "red"
         inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      } else {
         inform.innerHTML = "Nice";
         inform.style.color = "green"
         inpt.style = "border-color: green; outline: none; border-radius: 2px;"
      }
   }
}

function checkLandLinePhone() {
   var inpt = document.getElementById("lphone")
   var str = inpt.value
   var inform = document.getElementById("inform3")
   if (!str.length) {
      inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      inform.innerHTML = "Please enter number!"
      inform.style.color = "red"
   } else {
      var phoneTemplate = new RegExp("^([0-9]{7}|[(]032[)][0-9]{7}|[0-9]{3}-[0-9]{2}-[0-9]{2})$");
      str = str.replace(phoneTemplate, "");
      if (str != "") {
         inform.innerHTML = "Wrong number!";
         inform.style.color = "red"
         inpt.style = "border-color: red; outline: none; border-radius: 2px;"
      } else {
         inform.innerHTML = "Nice";
         inform.style.color = "green"
         inpt.style = "border-color: green; outline: none; border-radius: 2px;"
      }
   }
}

function clearComments() {
   var txt = document.getElementById('editor').value
   var tagTemplate = new RegExp("<!--.*?-->", "g");
   var textForEditing = txt.replace(tagTemplate, "");
   document.getElementById('editor').value = textForEditing
}

function clearTags() {
   var txt = document.getElementById('editor2').value
   var tagTemplate = new RegExp("(<br>)|(<hr>)|(<p>.*?</p>)|(<font>.*?</font>)", "g");
   var textForEditing = txt.replace(tagTemplate, "");
   document.getElementById('editor2').value = textForEditing
}


function removeSpaces() {
   var inform = document.getElementById("inform4")
   var txt = document.getElementById('spaces_filled').value.trim()
   inform.innerHTML = "Result: \"" + txt + "\""
}

function checkYear() {
   var inform = document.getElementById("inform5")
   var year = document.getElementById("year").value
   var regex = /^[0-9]+$/;

   if (year.length === 4) {
      if (isNaN(year)) {
         inform.style.color = "red"
         inform.innerHTML = "Please Enter Numeric Values Only"
      } else {
         if ((year < 1920) || (year > 2099)) {
            inform.style.color = "red"
            inform.innerHTML = "Year should be in range 1900 to 2099"
         } else {
            inform.style.color = "green"
            inform.innerHTML = "Nice"
         }
      }

   } else {
      inform.style.color = "red"
      inform.innerHTML = "Should be 4 digits!"
   }
}