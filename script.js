function printTable(){
    var tablenum = document.getElementById('print-num').value;
    var minlength = document.getElementById('minlength').value;
    var maxlength = document.getElementById('maxlength').value;
   
    document.getElementById('table').innerHTML = ''; 
    for (let i = minlength; i <= maxlength; i++) {
        document.getElementById('table').innerHTML += `${tablenum} x ${i} = ${tablenum * i}<br>`;
    }

}
function refresh(){
    var tablenum = document.getElementById('print-num').value = '';
    var minlength = document.getElementById('minlength').value = '';
    var maxlength = document.getElementById('maxlength').value='';
}