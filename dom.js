const $ = function(selector){
    const nodeList = document.querySelectorAll(selector);

    const append = function(content){
        for(let i=0;i<nodeList.length;i++){
            nodeList[i].innerHTML += content;
        }
    }
     const click = function(action,cb){
         for(let i=0;i<nodeList.length;i++){
             nodeList[i].addEventListener(action,cb);
         }
     }

     const html = function(content){
         for(let i = 0; i < nodeList.length; i++){
            nodeList[i].innerHTML = content;
         }
     }

     const val = function(content){
         if (content === undefined){
             return nodeList[0].value;
         } else{
             nodeList[0].value = content;
         }
     }
     const text = function(content){
         for(let i = 0; i < nodeList.length; i++){
             nodeList[i].textContent = content;
         }
     }
     const empty = function(){
        for(let i = 0; i < nodeList.length; i++){
            nodeList[i].innerHTML = '';
        }
     }

     

    //   const lookupWho = function (event) {
    //     event.preventDefault();
    //     const lookupWord = $('#lookupInput').val();
    //     const lookupWordCase = lookupWord.toLowerCase();
    //     const lookupInformation = employee.empList.filter(e => e.name.toLowerCase() === lookupWordCase);
    
    //     if (lookupInformation.length == 0) {
    //       $('#lookupInfo').text('No one of that name');
    //     } else {
    //       const lookupValue = Object.values(lookupInformation[0]);
    //       $('#lookupInfo').text(lookupValue[0]);
    //       $('#lookupInfo').append(`</br>${lookupValue[1]}`);
    //       $('#lookupInfo').append(`</br>${lookupValue[2]}`);
    //     }
    //   }

    const publicAPI = {
        append:append,
        onClick:click,
        html: html,
        val: val,
        text: text,
        empty: empty
    };

    return publicAPI;
}