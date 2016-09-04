console.log('sourced');
//globals
var students = [];
var now = 0;
//runs onload to find students when body is loaded
var getStudents = function () {
  console.log('in getStudents');

  $.ajax({
    url: 'http://devjana.net/pi/pi_students.json',
    dataType: 'JSON',
    success: function(data){
      //console.log('in ajax success');
      //console.log(data);
      //add ajax data to our studentArray
      students = data.students;
      console.log(students);
      $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
      //console.log(students[0]);
      updateCounter();
      displayButtons();
    }
  });


};//end getStudents


//display current student
var displayStudentsLeft = function () {
  console.log('in displayStudentsLeft');
  //rotate back to 18 if it hits 0
  if (now === 0){
    now = 17;
    displayStudent(now);
  }else{
    now --;
    displayStudent(now);
  }
  updateCounter();
};//end displayStudentsLeft

var displayStudentsRight = function() {
  console.log('in displayStudentsRight');
  //rotate back to 0 if it hits 18
  if (now === 17){
    now = 0;
    displayStudent(now);
  }else{
    now ++;
    displayStudent(now);
}
updateCounter();
};

var updateCounter = function () {
  $('.counter').html("<p>" + (now + 1) + "/18</p>");
};

var displayButtons = function () {
  for (var i = 0; i < students.length; i++) {
    $('.buttons').append("<button onClick='displayStudent(" + i + ")'>" + students[i].first_name + " " + students[i].last_name + "</button>");
  }
};

var displayStudent = function(index){
  now = index;
  $('#studentInfo').fadeOut(1000, function(){
    $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
    updateCounter();
  });
  $('#studentInfo').fadeIn(1000);
};
