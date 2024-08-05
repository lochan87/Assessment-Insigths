function load() {
    window.location.href = "index.html";
}
document.getElementById('post').addEventListener('submit', async (e) => {
    e.preventDefault();
    await postusn();
});
function postusn(){ //To post USN
    fetch('/usn',
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            parcel:document.getElementById('usn').value
        })
    })
}