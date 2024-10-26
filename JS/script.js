function countDown() {
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const newYear = new Date(`January 1, ${currentYear + 1} 00:00:00`);

    const difference = newYear - currentDate;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor((difference / 1000 / 60 / 60) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);

    // Display the values
    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Call countDown once to initialize the values
countDown();
// Update the countdown every second
setInterval(countDown, 1000);
