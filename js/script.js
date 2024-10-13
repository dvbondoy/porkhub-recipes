document.addEventListener('DOMContentLoaded', () => {
    let script1 = document.querySelector('#handlebars1').innerHTML;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let obj = {
        "therecipe": urlParams.get('file')
    };

    let templateScript = Handlebars.compile(script1); // returns a function
    document.body.innerHTML = templateScript(obj);
});

function filter_list(){
    console.log("hello filter");
    var input = document.getElementById('input');
    input.onkeyup = function () {
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            var name = lis[i].getElementsByClassName('name')[0].innerHTML;
            if (name.toUpperCase().indexOf(filter) == 0) 
                lis[i].style.display = 'list-item';
            else
                lis[i].style.display = 'none';
        }
    }
}