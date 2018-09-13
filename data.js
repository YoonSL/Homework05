/////////////////////////////////////////////
//                  Data                   //
/////////////////////////////////////////////



const employeeList = [
    {
      name: 'Jan',
      officeNum: '#1',
      phoneNum: '(222) 222-2222'
    },
    {
      name: 'Juan',
      officeNum: '#304',
      phoneNum: '(489) 789-8789'
    },
    {
      name: 'Margie',
      officeNum: '#789',
      phoneNum: '(789) 789-7897'
    },
    {
      name: 'Sara',
      officeNum: '#32',
      phoneNum: '(222) 789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: '#3',
      phoneNum: '(566) 621-0452'
    },
    {
      name: 'Tasha',
      officeNum: '#213',
      phoneNum: '(789) 766-5675'
    },
    {
      name: 'Ty',
      officeNum: '#211',
      phoneNum: '(789) 766-7865'
    },
    {
      name: 'Sarah',
      officeNum: '#345',
      phoneNum: '(222) 789-5231'
    }
  ];
  
  const commandList = [
    {
    commands:'Print:',
    description: 'Prints out the list of commands.'
   },
   {
    commands:'Verify:',
    description: 'Checks if the employee exists.'
    },
    {
      commands:'Lookup:',
      description: "Prints out one of the employee's information."
    },
    {
      commands: 'Contains:',
      description: "Prints out all of the imformation of the employees whose name contain the given string."
    },
    {
        commands: 'Update:',
        description: 'Changes the information for the chosen employee.'
    },
    {
      commands: 'Add:',
      description: 'Adds knew employee to the list.'
    },
    {
      commands: 'Delete:',
      description: 'Removes the chosen employee.'
    },
    {
      commands: 'Fix:',
      description: 'Changes the name of the employee.'
    },
    {
      commands: 'List:',
      description: 'Displays the list of commands.'
    }
  ];
  