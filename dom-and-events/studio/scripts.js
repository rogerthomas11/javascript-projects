// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    

    takeOffButton.addEventListener('click', event => {
        if(window.confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10,000';
        }
    });

    landButton.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
    });

    abortMissionButton.addEventListener('click', event => {
        if(window.confirm('Confirm that you want to abort the mission.')) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        }
    })
}

window.addEventListener("load", init);