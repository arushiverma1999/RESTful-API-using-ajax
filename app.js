const btn=document.querySelector(".get-jokes");

btn.addEventListener('click',get_jokes);


function get_jokes(e)
{
    let count=document.getElementById("number").value;
    
    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${count}`,true)

    xhr.onload=function(){
        if(this.status===200)
        {
         
             const response=JSON.parse(this.responseText);
             console.log(response);
             let output='';
                if(response.type==='success')
                {
                        response.value.forEach(function(a)
                        {
                            output +=   `<li> ${a.joke}</li>`;
                        });
                }
                else{
                    output +='<li>OOPS</li>'
                }
                document.querySelector(".jokes").innerHTML=output;
        }
    }
    xhr.send();
    e.preventDefault();
}