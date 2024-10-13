document.addEventListener('DOMContentLoaded', () => {
    function test(){

        let script1 = document.querySelector('#handlebars1').innerHTML;
    
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
    
        let obj = {
            "therecipe": urlParams.get('file')
        };
    
        let templateScript = Handlebars.compile(script1); // returns a function
        document.body.innerHTML = templateScript(obj);
    }

    test();
});