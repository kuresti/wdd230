const today = new Date();

const dayNumber = today.getDay();

const element = document.querySelector(".announcement");
if (dayNumber == 1 || dayNumber == 2) {
    element.classList.add("showme");
} else element.classList.add("hideme");