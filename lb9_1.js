let Dropdown = document.getElementById('dropdown');

var langArray = [
   { value: "1", text: "opt 1 - Disable button" },
   { value: "2", text: "opt 2" },
   { value: "3", text: "opt 3" },
   { value: "4", text: "opt 4" },
   { value: "5", text: "opt 5" },
   { value: "6", text: "opt 6" },
   { value: "7", text: "opt 7" },
   { value: "8", text: "opt 8" },
   { value: "9", text: "opt 9" },
   { value: "10", text: "opt 10" }
];

for (var i = 0; i < langArray.length; i++) {
   let option = document.createElement('option');
   option.text = langArray[i]['text'];
   option.value = langArray[i]['value'];
   Dropdown.add(option);
}

Dropdown.addEventListener('change', function () {
   if (Dropdown.value === "1") {
      document.getElementById("s_btn").disabled = true;
   } else {
      document.getElementById("s_btn").disabled = false;
   }
});

