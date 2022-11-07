function search(){
    document.querySelector("button").addEventListener("click", function(event){
        event.preventDefault();

        var searchInput = document.querySelector("input").value;
        var searchResult = document.getElementById("result");
        var httpReq = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab4/superheroes.php?query=";

        httpReq.onreadystatechange = function(){
            if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
                searchResult.innerHTML = this.responseText;
            }
        }

        httpReq.open("GET", url+searchInput);
        httpReq.send();
    })
}

window.addEventListener("DOMContentLoaded", function(){
    search();
})