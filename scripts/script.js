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
      $('#studentInfo').html("<p>" + students[0].first_name + " " + students[0].last_name + "<br>" + students[0].info);
      //console.log(students[0]);
    }
  });


};//end getStudents


//display current student
var displayStudentsLeft = function () {
  console.log('in displayStudentsLeft');
  //rotate back to 18 if it hits 0
  if (now === 0){
    now = 17;
    $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
  }else{
    now --;
    $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
  }
};//end displayStudentsLeft

var displayStudentsRight = function() {
  console.log('in displayStudentsRight');
  //rotate back to 0 if it hits 18
  if (now === 17){
    now = 0;
    $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
  }
  now ++;
  $('#studentInfo').html("<p>" + students[now].first_name + " " + students[now].last_name + "<br>" + students[now].info);
};
