function validateUser (){
    var fir_name = document.getElementById('fir-name').value;
    var accepted = document.getElementById('registered');
    if(fir_name == 'holi'){
        accepted.setAttribute("style", "display:block;");
    }
}