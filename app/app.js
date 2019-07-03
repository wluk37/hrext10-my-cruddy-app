/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to modify data? (update action, delete action)

*/

//localStorage functions
////create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

////update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

////delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

////clear database
var clearDatabase = function() {
  return window.localStorage.clear();
}

//input field functions
var getKeyInput = function() {
  return $('.key').val();
}

var getValueInput = function() {
  return $('.value').val();
}

var resetInputs = function() {
  $('.key').val('');
  $('.value').val('');
}

$(document).ready(function() {
  //click handlers
  ////create button
  $('.create').click(function() {
    createItem(getKeyInput(), getValueInput());
  });

  ////update button
  $('.update').click(function() {
    updateItem(getKeyInput(), getValueInput());
  });

  ////delete button
  $('.delete').click(function() {
    deleteItem(getKeyInput());
  });

  ////reset input
  $('.reset').click(function() {
    resetInputs();
  })

  ////clear database
  $('.clear').click(function() {
    return clearDatabase();
  })
})