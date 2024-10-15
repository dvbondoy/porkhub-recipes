document.addEventListener('DOMContentLoaded', () => {
    function test(){

        let script1 = document.querySelector('#handlebars1').innerHTML;
    
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
    
        let obj = {
            "therecipe": urlParams.get('file')
        };
    
        let templateScript = Handlebars.compile(script1); // returns a function
        document.getElementById('target').innerHTML = templateScript(obj);
    }

    function myFunction() {
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            } else {
            li[i].style.display = "none";
            }
        }
    }

});