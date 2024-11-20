function recent() {
    const jobTitle = document.getElementById('userInput').value;
    const location = document.getElementById('location').value;

    if (!jobTitle || !location) {
        alert('Please fill in both Job Title and Location!');
        return;
    }

    document.getElementById('searchBox').innerText = `Searching for "${jobTitle}" in "${location}"...`;
    
    setTimeout(() => {
        document.getElementById('searchBox').innerHTML = `<p>Results for "${jobTitle}" in "${location}":</p>
        <ul>
            <li>Software Engineer - Remote</li>
            <li>Data Scientist - ${location}</li>
            <li>Project Manager - ${location}</li>
        </ul>`;
    }, 2000);
 }
