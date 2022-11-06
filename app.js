function search(){
    document.querySelector("button").addEventListener("click", function(event){
        event.preventDefault();

        const httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function(){
            if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
                window.alert(this.responseText);
            }
        }
        url = "http://localhost:/info2180-lab4/superheroes.php";
        httpReq.open("GET", "superheroes.php");
        httpReq.send();
    })
}

window.addEventListener("DOMContentLoaded", function(){
    search();
})