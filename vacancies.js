function recent() {
    const jobTitle = document.getElementById('userInput').value;
    const location = document.getElementById('location').value;

    if (!jobTitle || !location) {
        alert('Please fill in both Job Title and Location!');
        return;
    }

    document.getElementById('searchBox').innerText = `Searching for "${jobTitle}" in "${location}"...`;
    
    // setTimeout(() => {
    //     document.getElementById('searchBox').innerHTML = `<p>Results for "${jobTitle}" in "${location}":</p>
    //     <ul>
    //         <li>Software Engineer - Remote</li>
    //         <li>Data Scientist - ${location}</li>
    //         <li>Project Manager - ${location}</li>
    //     </ul>`;
    // }, 2000);

    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?location=${location}&keywords=${jobTitle}`)
    .then(response => response.ok ? response.json() : Promise.reject(" Failed to fetch Job"))
    .then( data => {
        // console.log("fetch is working")
        for (let index = 0; index < 2; index++) {
            // console.log("loop is working")

            const element = data[index];

            document.getElementById("searchBox").innerText += '\n' +'\n' 
            + element.title + '\n'+'\n'
            + element.summary + '\n' +'\n'
            + element.company + '\n'+'\n'
            + element.location.location + '\n' +'\n'
            + element.link +'\n';
            
            
            // window.alert(`http://api.lmiforall.org.uk/api/v1/vacancies/search?location=${location}&keywords=${jobTitle}`)

        }


    }).catch( () =>{
        // = " Sorry could not get information try again";
    })

}
function update(){
    fetch(`http://api.lmiforall.org.uk/api/v1/vacancies/search?location=&keywords=`)
    .then(response => response.ok ? response.json() : Promise.reject(" Failed to fetch Job"))
    .then( data => {
        for (let index = 0; index < 3; index++) {

            const element = data[index];

            document.getElementById("searchBox").innerText += '\n' +'\n' 
            + element.title + '\n'+'\n'
            + element.summary + '\n' +'\n'
            + element.company + '\n'+'\n'
            + element.location.location + '\n' +'\n'
            + element.link +'\n';
            
        }


    }).catch( () =>{
        // = " Sorry could not get information try again";
    })
}

