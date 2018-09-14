let employee = {
    empList: employeeList,
    comList: commandList
}
const render = function (command) {
    let content = command;
    $('#content').html(content);
}

const print = function() {
    $('#content').empty();
    let content = '';
    employee.empList.map(e => content += `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1>`);
    render(content);
}

const verify = function (event) {
    event.preventDefault();
    $('#content').empty();
    let content = (`<div class = center><input id = "verifyInput" placeholder="Who would you like to verify?"/><button class = "innerButtons" id = "innerVerify">Verify</button></div>`)+
    (`<h1 class = "pageText" id = "verifyText">EmployeeFound</h1>`)+(`</br><h1 id = "trueOrFalse"></h1>`);
    render(content);
    
    //This function is called when the Verify button @ content is clicked.
    //It checks the if the employee a user is looking for exists and prints true or false.
  
    const yesNo = function (event) {
      event.preventDefault();
      const verifyWord = $('#verifyInput').val();
      const verifyWordCase = verifyWord.toLowerCase();
      const verifyBoolean = employee.empList.some(e => e.name.toLowerCase() === verifyWordCase);
      $('#trueOrFalse').text(verifyBoolean);
    }
  
    $('#innerVerify').onClick('click', yesNo);
  }
  

  
$('.print').onClick('click', print);
$('.verify').onClick('click', verify);
$('.lookup').onClick('click', lookup);
$('.contains').onClick('click', contains);
$('.update').onClick('click', update);
$('.add').onClick('click', add);
$('.delete').onClick('click', deletes);
$('.list').onClick('click', list);