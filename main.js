const avengers = document.querySelectorAll('.avengers'),
    option = document.querySelectorAll('option'),
    torimg = document.querySelector('.tori'),
    halk = document.querySelector(".halk"),
    halkimg = document.querySelector(".halki"),
    usa = document.querySelector(".capitan"),
    usaimg = document.querySelector(".amerikai"),
    iron = document.querySelector(".iron"),
    irimg = document.querySelector(".ironi"),
    select = document.querySelector('select')


select.addEventListener('change', () => {
    if (avengers[0] == 'tor') {
        console.log(0);
        torimg.style.display = "block";
        halkimg.style.display = "none"
        usaimg.style.display = "none"
        irimg.style.display = "none"
    } else if (option[1].value == 'halk') {
        alert("bosdingiz")
        console.log(1);
        halkimg.style.display = "block";
        torimg.style.display = "none";
        usaimg.style.display = "none"
        irimg.style.display = "none"

    } else if (option[2].value == 'capitan') {
        console.log(2);
        usaimg.style.display = "block";
        torimg.style.display = "none"
        irimg.style.display = "none"
        halkimg.style.display = "none"

    } else if (option[3].value == 'iron') {
        console.log(3);
        irimg.style.display = "block";
        halkimg.style.display = "none";
        torimg.style.display = "none";
        usaimg.style.display = "none"

    }
});