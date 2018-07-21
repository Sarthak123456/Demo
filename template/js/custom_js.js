'use strict';

var cgpa_data = [
  {"count": 1, "cgpa": 1},
  {"count": 2, "cgpa": 2},
  {"count": 10, "cgpa": 3},
  {"count": 10, "cgpa": 4},
  {"count": 16, "cgpa": 5},
  {"count": 40, "cgpa": 6},
  {"count": 60, "cgpa": 7},
  {"count": 65, "cgpa": 8},
  {"count": 40, "cgpa": 9},
  {"count": 5, "cgpa": 10}
];

var top_schools_data = [
  {"school":"IIIT Bengaluru" , "applicant":52},
  {"school":"IIT Hyderabad","applicant":50},
  {"school":"IIIT Hyderabad","applicant":47},
  {"school":"IIT Chennai","applicant":46},
  {"school":"Harvard University","applicant":16},
  {"school":"MIT","applicant":12},
  {"school":"Carnegie Mellon","applicant":12},
  {"school":"LSE","applicant":11},
  {"school":"Columbia University","applicant":10}
];

$(".button-collapse").sideNav();


if ($(window).width() < 900) {
    $('.shrink').find('.offset-m3').removeClass();
} else {
   $('.shrink').find('#rem').addClass('offset-m3');
}


var width = (100 + '%');                                                                             //Insert width for progressbar
var time= (40 + 's');                                                                        //Insert Time in seconds for progressbar
$(document).ready(function(){
 $(".card2").find('.determinate:lt(2)').css({"width":width,"transition":time});

});

var densityCanvas = document.getElementById("cgpaChart");
var count = cgpa_data.map(a => a.count);
var cgpa = cgpa_data.map(a => a.cgpa);
var school = top_schools_data.map(a => a.school);
var applicant = top_schools_data.map(a => a.applicant);
console.log('count' + count)
console.log('cgpa' + cgpa)
console.log('cgpa' + school[0])
console.log('cgpa' + applicant)
console.log(top_schools_data.length)

for (var i=0; i<top_schools_data.length; i++){
  console.log('i =  ' + i);
 $('.schools').append('<li>' + school[i] + '</li>');
 $('.applicants').append('<li>' + applicant[i] + '</li>');
}

var cgpaData = {
  label: 'CGPA',
  data: count,
  backgroundColor: [
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',
  'rgba(54, 162, 235, 0.5)',

  ]
};

var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: {
    labels: cgpa,
    datasets: [cgpaData]
  }
});








