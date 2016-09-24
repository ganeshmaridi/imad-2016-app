var button=document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.status===200) {
                var counter=request.responseText;
                var span=document.getElemetById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://ganeshmaridi.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
};
var nameInput=document.getElementById('name');
nameInput=name.value;
var submit=document.getElementById('sub-btn');
submit.onclick=function() {
    
};
