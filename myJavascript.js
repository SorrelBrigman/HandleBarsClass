//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

var promise1 = new Promise(function(resolve, reject) {
  $.ajax({
    url : "https://randomuser.me/api/"
  })
  .done(function(data, textStatus, XHR){
    resolve(data);
  })
})







promise1.then(function(data){


  //handlebars step one: grap the html from the script tag
  var userHTML = $("#userInfo").html();

  //handlebars step two: compile it into a template
  var userCompiled = Handlebars.compile(userHTML);

  //handlebars step three:render the HTML by passing the data to the template
  var userInsert = userCompiled(data);

  //handlebars step four: put the complete HTML into the DOM

  $("#outputDiv").append(userInsert);

});
