
////////////////////////////
// localStorage functions //
////////////////////////////
var addItem = function(key, value){
    window.localStorage.setItem(key, value);
}

var updateItem = function(key, value){
    window.localStorage.setItem(key, value);
}

var removeItem = function(key){
  window.localStorage.removeItem(key);
}

var clearDatabase = function(){
  window.localStorage.clear();
}


var keyExists = function(key){
  return window.localStorage.getItem(key) !== null;
}
var getIngredientKey = function(){
  return $("#ingredient-key").val();
}
var getIngredientVal = function(){
  return $("#ingredient-value").val();
}

var showDatabaseContents = function(){
    $('tbody').html('');

  for (var i = 0; i < window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    $('tbody').append(`<tr><td>${key}</td><td>${window.localStorage.getItem(key)}</td></tr>`)
  }
}

$(document).ready(function() {
  showDatabaseContents();
////////////////////////////
//     button  events     //
////////////////////////////

// ADD INGREDIENT //
$("#add-ingredient").click(function(){
  if (getIngredientKey() !== 'INGREDIENT' && getIngredientVal() !== 'AMOUNT'){
    if ((!keyExists(getIngredientKey())) && (!keyExists(getIngredientKey().toLowerCase()))){
       addItem(getIngredientKey(), getIngredientVal());
       showDatabaseContents();
    } else {
      alert("Ingredient already exists!")
    }
  } else {
    alert("Please fill in the blanks")
  } 
})

// UPDATE INGREDIENT //
$("#update-ingredient").click(function(){
  if (getIngredientKey() !== '' && getIngredientVal() !== ''){
    if ((keyExists(getIngredientKey().toLowerCase())) || (keyExists(getIngredientKey()))){
      addItem(getIngredientKey(), getIngredientVal());
      showDatabaseContents();
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
    showDatabaseContents();
  } else {
    alert("Please fill in the blanks")
  }
})

// REMOVE ALL ITEMS IN DATABASE //
$("#clear-storage").click(function(){
  if (confirm("ARE YOU SURE YOU WANT TO ERASE RECIPE?")){
    clearDatabase();
    showDatabaseContents();
  }
})



})











