function dis(val){
    document.getElementById("input").value += val;
}


function displayAnswer(){
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}

function clearAnswer(){
    document.getElementById("input").value="";
}