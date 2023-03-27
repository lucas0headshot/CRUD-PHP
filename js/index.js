window.addEventListener('load', function() {
    yearsOrganizer();
});

window.addEventListener('load', function() {
    daysOrganizer();
});

function yearsOrganizer() {
    let selectYear = document.querySelector('#selectYear');
    let currentTime = new Date();
    let year = currentTime.getFullYear();
      
    for (let i = 0; i < 70; i++) {
        let option = document.createElement('option');
        option.innerHTML = year - i;
        selectYear.appendChild(option);
    }
}

function daysOrganizer() {
    let selectDay = document.querySelector('#selectDay');
    for (let i = 0; i < 31; i++) {
        let option = document.createElement('option');
        option.innerHTML = i+1;
        selectDay.appendChild(option);
    }

}