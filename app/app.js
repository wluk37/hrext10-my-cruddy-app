
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
  window.localStorage.removeItem(key);
}

var clearDatabase = function(){
  window.localStorage.clear();
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
  $('tbody').html('');
  var pan = JSON.parse(window.localStorage.getItem("ingredients"));
  for (var key in pan) {
    $('tbody').append(`<tr><td>${key}</td><td>${pan[key][0]}</td><td>${pan[key][1]}</td></tr>`)
  }
}


$(document).ready(function() {
  showIngredients();

/////////////////////////////
//      button  events     //
/////////////////////////////

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

// REMOVE ALL ITEMS IN DATABASE //
$("#clear-storage").click(function(){
  if (confirm("ARE YOU SURE YOU WANT TO ERASE RECIPE?")){
    clearDatabase();
    showIngredients();
  }
})


////  FOR EQUIPMENT  ////



})



























