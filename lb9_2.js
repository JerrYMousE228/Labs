

var streetsGal = new Array('Галицька', 'Ставропігійська', 'Краківська', 'Театральна', 'Вірменська');

var streetsShev = new Array('Чорновола', 'Остряниці', 'Замарстинівська', 'Топольна', 'Варшавська');

var streetsFran = new Array('Сахарова', 'Наукова', 'Княгині Ольги', 'В.Великого');

var streetsLych = new Array('Личаківська', 'Пекарська', 'Нечуя-Левицького', 'Зелена');

var streetsSykh = new Array('Хоткевича', 'Червоної Калини');


var streetsAll = new Array(null, streetsGal, streetsFran, streetsLych, streetsSykh, streetsShev);



function showStreets(regionIndex, selectId) {

   if (regionIndex <= 0){

      streetsSelect.style.visibility = 'hidden';

      return false;

   }

   console.log(regionIndex)

   var streetsSelect = document.getElementById(selectId);

   clearSelect(streetsSelect);

   streetsSelect.style.visibility = 'visible';

   if (document.getElementById("reg_select").value === "All") {
      for (var i = 1; i < streetsAll.length; i++) {
         console.log(i)         
         for (var j = 0; j < streetsAll[i].length; j++) {

            var newStreet = new Option((streetsAll[i])[j], (streetsAll[i])[j]);
      
            streetsSelect.add(newStreet, j);
      
         }
   
      }
   }

   for (var i = 0; i < streetsAll[regionIndex].length; i++) {

      var newStreet = new Option((streetsAll[regionIndex])[i], (streetsAll[regionIndex])[i]);

      streetsSelect.add(newStreet, i);

   }

}

function clearSelect(selectObject) {

   while (selectObject.length)
      selectObject.remove(0);

}

var streetsAll = new Array(null, streetsGal.sort(), streetsFran.sort(), streetsLych.sort(), streetsSykh.sort(), streetsShev.sort());