document.querySelector(
    ".last-modified"
).textContent = new Date(document.lastModified);

//Date time for hidden form input
document.querySelector(
    ".timeNow"
).textContent = now.toLocaleString();