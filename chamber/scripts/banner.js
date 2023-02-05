const today = new Date();

const dayNumber = today.getDay();

const element = document.querySelector(".announcement");
if (dayNumber == 5) {
    element.classList.add("showme");
} else if (dayNumber == 6) {
    element.classList.add("showme");
} else ("hideme";)