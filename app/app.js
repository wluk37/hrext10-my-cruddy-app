
////////////////////////////
// localStorage functions //
////////////////////////////

// Ingredients Pantry //
var pantry = {}
if (window.localStorage.getItem("ingredients") !== "{}"){
  pantry = JSON.parse(window.localStorage.getItem("ingredients"));
}
window.localStorage.setItem("ingredients", JSON.stringify(pantry))


var addItem = function(key, value){
    pantry[key] = value
    window.localStorage.setItem("ingredients", JSON.stringify(pantry));
}

var updateItem = function(key, value){
    pantry[key] = value
    window.localStorage.setItem("ingredients", JSON.stringify(pantry));
}

var removeItem = function(key){
  delete pantry[key];
  window.localStorage.setItem("ingredients", JSON.stringify(pantry));
}

var clearIngredients = function(){
  window.localStorage.removeItem("ingredients");
  pantry = {}
  window.localStorage.setItem("ingredients", JSON.stringify(pantry))
}

var keyExists = function(key){
  var keys = Object.keys(pantry)
  return keys.includes(key);
}
var getIngredientKey = function(){
  return $("#ingredient-key").val();
}
var getIngredientVal = function(){
  return $("#ingredient-value").val();
}
var getIngredientScl = function(){
  return $("#ingredient-scale").val();
}
var getRecipeTitle = function(){
  return $("recipe-title").val();
}
var showIngredients = function(){
  $('#ingredient-body').html('');
  var pan = JSON.parse(window.localStorage.getItem("ingredients"));
  for (var key in pan) {
    $('#ingredient-body').append(`<tr><td>${key}</td><td>${pan[key][0]}</td><td>${pan[key][1]}</td></tr>`)
  }
}

// Equipment Cupboard //
var cupboard = {}

if (window.localStorage.getItem("equipment") !== "{}"){
  cupboard = JSON.parse(window.localStorage.getItem("equipment"));
}
window.localStorage.setItem("equipment", JSON.stringify(cupboard))

var addEquip = function(key, value){
    cupboard[key] = value
    window.localStorage.setItem("equipment", JSON.stringify(cupboard));
}

var updateEquip = function(key, value){
    cupboard[key] = value
    window.localStorage.setItem("equipment", JSON.stringify(cupboard));
}

var removeEquip = function(key){
  delete cupboard[key];
  window.localStorage.setItem("equipment", JSON.stringify(cupboard));
}

var clearEquip = function(){
  window.localStorage.removeItem("equipment");
  cupboard = {}
  window.localStorage.setItem("equipment", JSON.stringify(cupboard))
}

var equipExists = function(key){
  var keys = Object.keys(cupboard)
  return keys.includes(key);
}
var getEquipKey = function(){
  return $("#equipment-key").val();
}
var getEquipVal = function(){
  return $("#equipment-value").val();
}

var showEquip = function(){
  $('#equipment-body').html('');
  var cup = JSON.parse(window.localStorage.getItem("equipment"));
  for (var key in cup) {
    $('#equipment-body').append(`<tr><td>${key}</td><td>${cup[key][0]}</td></tr>`)
  }
}


$(document).ready(function() {
  showEquip();
  showIngredients();








/////////////////////////////
//      button  events     //
/////////////////////////////

// WIPE ENTIRE RECIPE //

$("#clear-storage").click(function(){
  if (confirm("CATASTROPHE! CALAMITY! DOOOOOOOM! \n CERTAIN YE ARE, ERASE RECIPE YOU WILL")){
    clearIngredients();
    clearEquip();
    showIngredients();
    showEquip();
  }
})
// SAVE RECIPE TITLE //

if(localStorage.getItem("recipeTitle")){
  $('#recipe-title').val(localStorage.getItem("recipeTitle"));
}

$("#save-title").click(function(){
  if (getRecipeTitle() !== ""){
    window.localStorage.setItem("recipeTitle", $("#recipe-title").val());
    $("#recipe-title").val(localStorage.getItem("recipeTitle"))
  }
})


////   FOR INGREDIENTS   ////


// ADD INGREDIENT //
$("#add-ingredient").click(function(){
  if (getIngredientKey() !== '' && getIngredientVal() !== '' && getIngredientScl() !== ''){
    if ((!keyExists(getIngredientKey())) && (!keyExists(getIngredientKey().toLowerCase()))){
       addItem(getIngredientKey(), [getIngredientVal(), getIngredientScl()]);
       showIngredients();
    } else {
      alert("Ingredient already exists!")
    }
  } else {
    alert("Please fill in the blanks")
  } 
})

// UPDATE INGREDIENT //
$("#update-ingredient").click(function(){
  if (getIngredientKey() !== '' && getIngredientVal() !== '' && getIngredientScl() !== ''){
    if ((keyExists(getIngredientKey().toLowerCase())) || (keyExists(getIngredientKey()))){
      updateItem(getIngredientKey(), [getIngredientVal(), getIngredientScl()]);
      showIngredients();
    } else {
      alert("Ingredient does not exist!")
    }
  } else {
    alert("Please fill in the blanks")
  }
})

// REMOVE INGREDIENT //
$("#remove-ingredient").click(function(){
  if (getIngredientKey() !== ''){
    (removeItem(getIngredientKey()) && removeItem(getIngredientKey().toLowerCase()))
    showIngredients();
  } else {
    alert("Please fill in the blanks")
  }
})

// REMOVE ALL INGREDIENTS IN DATABASE //
$("#clear-pantry").click(function(){
  if (confirm("Are you sure you want to clear pantry? Action irreversible.")){
    clearIngredients();
    showIngredients();
  }
})


////  FOR EQUIPMENT  ////



// ADD EQUIPMENT //
$("#add-equipment").click(function(){
  if (getEquipKey() !== '' && getEquipVal() !== ''){
    if ((!equipExists(getEquipKey())) && (!equipExists(getEquipKey().toLowerCase()))){
       addEquip(getEquipKey(), getEquipVal());
       showEquip();
    } else {
      alert("Equipment already exists!")
    }
  } else {
    alert("Please fill in the blanks")
  } 
})

// UPDATE EQUIPMENT //
$("#update-equipment").click(function(){
  if (getEquipKey() !== '' && getEquipVal() !== ''){
    if ((equipExists(getEquipKey().toLowerCase())) || (equipExists(getEquipKey()))){
      updateEquip(getEquipKey(), getEquipVal());
      showEquip();
    } else {
      alert("Equipment does not exist!")
    }
  } else {
    alert("Please fill in the blanks")
  }
})

// REMOVE EQUIPMENT //
$("#remove-equipment").click(function(){
  if (getEquipKey() !== ''){
    (removeEquip(getEquipKey()) && removeEquip(getEquipKey().toLowerCase()))
    showEquip();
  } else {
    alert("Please fill in the blanks")
  }
})

// REMOVE ALL EQUIPMENT IN DATABASE //
$("#clear-cupboard").click(function(){
  if (confirm("Are you sure you want to clear cupboard? Action irreversible.")){
    clearEquip();
    showEquip();
  }
})
})



























