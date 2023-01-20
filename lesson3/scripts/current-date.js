try {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById(
        "current-date"
    ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e){
    alert("Error with code or your browser does not support Locale");
}