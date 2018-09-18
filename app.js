
let employee = {
  empList: employeeList,
  comList: commandList,
  
  main: function(event){
    event.preventDefault();
    $('#content').empty();
    let content = `<h1 id = 'mainTitleText'>WELCOME TO <section id = 'yellowTitle'>SIMPLICITY</section></h1> <h2>The Minimalists Directory</h2>`;
    render(`#content`,content);
  },
  print: function (event) {
    event.preventDefault();
    $('#content').empty();
    let content = '';
    employee.empList.map(e => content += `<h1 class = 'positionText'>${e.name}</h1><h1 class = 'positionText'>#${e.officeNum}</h1><h1 class = 'positionText'>${e.phoneNum}</h1>`);
    render('#content', content);
  },
  verify: function (event) {
    event.preventDefault();
    $('#content').empty();
    let content = (`<div class = center><input id = "verifyInput" placeholder="Who would you like to verify?"/><button class = "innerButtons" id = "innerVerify">Verify</button></div>`) +
      (`<h1 class = "pageText" id = "verifyText">EmployeeFound</h1>`) + (`</br><h1 id = "trueOrFalse"></h1>`);
    render('#content', content);

    const yesNo = function (event) {
      event.preventDefault();
      const verifyWord = $('#verifyInput').val();
      const verifyWordCase = verifyWord.toLowerCase();
      const verifyBoolean = employee.empList.some(e => e.name.toLowerCase() === verifyWordCase);
      render('#trueOrFalse', verifyBoolean);
    }
    $('#innerVerify').onClick('click', yesNo);
  },
  lookup: function (event) {
    event.preventDefault();
    $('#content').empty();
    let content = (`<div class = "center"><input id = "lookupInput" placeholder="Who would you like to lookup?"/><button class = "innerButtons" id = "innerLookup">Lookup</button></div>`) +
      (`<h1 class = "pageText" id = "lookupText"></h1>`) + (`<h1 id = "lookupInfo"></h1>`);
    render('#content', content);

    const lookupWho = function (event) {
      event.preventDefault();
      const lookupWord = $('#lookupInput').val();
      const lookupWordCase = lookupWord.toLowerCase();
      let lookupInformation = employee.empList.filter(e => e.name.toLowerCase() === lookupWordCase);

      if (lookupInformation.length) {
        let lookupContent = '';
        lookupInformation.map(e => lookupContent += `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1>`);
        render('#lookupInfo', lookupContent);
      } else {
        render('#lookupInfo', 'No one of that name');
      }
    }
    $('#innerLookup').onClick('click', lookupWho);
  },
  contains: function (event) {
    event.preventDefault();
    $('#content').empty();

    let content = (`<div class = "center"><input id = "containsInput" placeholder="Which charaters are in the name?"/><button class = "innerButtons" id = "innerContains">Contains</button></div>`) +
      (`<h1 class = "pageText" id = "containsText"></h1>`) + (`<h1 id = "containsInfo"></h1>`)

    render('#content', content);

    const containsWho = function (event) {
      event.preventDefault();
      $('#containsInfo').empty();
      const containsWord = $('#containsInput').val();
      const containsInformation = employee.empList.filter(e => e.name.toLowerCase().includes(containsWord.toLowerCase()));

      if (containsInformation) {
        let infoContain = '';
        containsInformation.map(e => infoContain += `<h1>${e.name}</h1><h1>${e.officeNum}</h1><h1>${e.phoneNum}</h1>`)
        render('#containsInfo', infoContain);
      } else {
        $('#containsInfo').text('No one of that name');
      }
    }
    $('#innerContains').onClick('click', containsWho);
  },
  update: function (event) {
    event.preventDefault();
    $('#content').empty();
  
    let content = (`<div class = "center"> <p class = "greyWord">Name</p> <input id = "updateName"/></div>`) +
      (`<div class = "center"> <p class = "greyWord">Number</p> <input id = "updateOffNum"/></div>`) +
      (`<div class = "center"> <p class = "greyWord">Phone</p> <input id = "updatePhoneNum"/></div>`) +
      (`<button id = "innerUpdate"> Update </button><br/>`) +
      (`<h1 class = "pageText" id = "updateText"></h1>`) +
      (`<h1 id = "updateInfo"></h1>`);
  
    render(`#content`, content);
  
    const updateWho = function (event) {
      event.preventDefault();
      $('#updateInfo').empty();
      let updateName = $('#updateName').val();
      let updateOff = $('#updateOffNum').val();
      let updatePhone = $('#updatePhoneNum').val();
  
      const containList = employee.empList.filter(e => e.name.toLowerCase() === updateName.toLowerCase());
      const containName = containList.map(e => e.name.toLowerCase());
      const updateNameLower = updateName.toLowerCase();
      console.log(containName[0]);
      console.log(updateNameLower);
  
      employee.empList.forEach(e => {
        if (e.name.toLowerCase() === updateName.toLowerCase()) {
          e.officeNum = updateOff;
          e.phoneNum = updatePhone;
          const infoUpdate = `<h1>${e.name}</h1><h1>#${e.officeNum}</h1><h1>${e.phoneNum}</h1>`;
          render('#updateInfo', infoUpdate);
        }
      });
    }
    $('#innerUpdate').onClick('click', updateWho);
  },
  add: function (event) {
    event.preventDefault();
    $('#content').empty();
    const content = (`<div class = "center"> <p class = "greyWord">Name</p> <input id = "addName"/></div>`)+
    (`<div class = "center"> <p class = "greyWord">Number</p> <input id = "addOffNum"/></div>`)+
    (`<div class = "center"> <p class = "greyWord">Phone</p> <input id = "addPhoneNum"/></div>`)+
    (`<button id = "innerAdd"> Add </button>`)+
    (`<h1 class = "pageText" id = "addText"></h1>`)+
    (`<h1 id = "addInfo"></h1>`)
  
    render(`#content`,content);
  
    const addWho = function (event) {
      event.preventDefault();
      $('#addInfo').empty();
      let addName = $('#addName').val();
      let addOff = $('#addOffNum').val();
      let addPhone = $('#addPhoneNum').val();
  
      var newEmployee = {
        name: addName,
        officeNum: addOff,
        phoneNum: addPhone
      }
  
      employeeList.push(newEmployee);
  
  
      let addContent = `<h1>${addName}</h1><h1>#${addOff}</h1><h1>${addPhone}</h1>`;
      render('#addInfo',addContent);
    }
    $('#innerAdd').onClick('click', addWho);
  },
  deletes: function (event) {
    event.preventDefault();
    
    $('#content').empty();
    let content = (`<div class = "center"><input id = "deleteInput" placeholder="Who would you like to delete?"/><button class = "innerButtons" id = "innerDelete">Delete</button></div>`)+
    (`<h1 class = "pageText" id = "deleteText"></h1>`);
    
    render(`#content`,content);
  
    const deleteWho = function (event) {
      event.preventDefault();
      const deleteWord = $('#deleteInput').val();
    
      employee.empList.forEach(e => {
        if(e.name.toLowerCase() === deleteWord.toLowerCase()){
          delete e.name;
          delete e.officeNum;
          delete e.phoneNum;
          render(`#deleteText`,`Employee Deleted`);
        }});
      }
    $('#innerDelete').onClick('click', deleteWho);
  },
  list: function (event) {
    event.preventDefault();
    $('#content').empty();
    let content = '';
      employee.comList.map(e => content += `<h1>${e.commands}</h1><h1>${e.description}</h1><br/>`);
      render('#content', content);
  }
}

const render = function (where, command) {
  let content = command;
  $(where).html(content);
}

$('#mainButton').onClick('click',employee.main);
$('.print').onClick('click', employee.print);
$('.verify').onClick('click', employee.verify);
$('.lookup').onClick('click', employee.lookup);
$('.contains').onClick('click', employee.contains);
$('.update').onClick('click', employee.update);
$('.add').onClick('click', employee.add);
$('.delete').onClick('click', employee.deletes);
$('.list').onClick('click', employee.list);
