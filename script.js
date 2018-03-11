function start() {
  var app = React.createElement(App);
  ReactDOM.render(app, document.getElementById('app'));
};

start ();

$('button').click(function() {  
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var id = contacts.length +1;
  var newContact = {id, firstName, lastName, email};
  contacts.push(newContact);
  console.log(contacts);
  start ();
 });