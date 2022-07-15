
const mainfunction = (resource ,callback) =>{
    const request = new XMLHttpRequest();


    request.addEventListener('readystatechanger', ()=>{
        if (request.readyState ===4 && request.status=== 200) {
            const data = JSON.parse(request.responseText);
            callback= ("success" ,data)
            
        } else if(request.readyState === 4){
            callback('could not fetch', undefined)          
        }
    })

 request.open("GET", resource)
 request.send()   
}

mainfunction("luigi.json", (err,data)=>{
    console.log(data);

    mainfunction("shaun.json", (err,data)=>{
        console.log(data);
        
        mainfunction("mario.json", (err,data)=>{
            console.log(data);
            
        })
    
    })


})
///here its forming triangle like structure which is called as call back hell (nested call back functions)