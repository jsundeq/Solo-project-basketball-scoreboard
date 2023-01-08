let homePoints = 0
let guestPoints = 0

document.getElementById("home-points").textContent = homePoints
document.getElementById("guest-points").textContent = guestPoints

// Home points

function homeAdd1point() {
    homePoints += 1
    document.getElementById("home-points").textContent = homePoints
}

function homeAdd2point() {
    homePoints += 2
    document.getElementById("home-points").textContent = homePoints
}

function homeAdd3point() {
    homePoints += 3
    document.getElementById("home-points").textContent = homePoints
}

// Guest points

function guestAdd1point() {
    guestPoints += 1
    document.getElementById("guest-points").textContent = guestPoints
}

function guestAdd2point() {
    guestPoints += 2
    document.getElementById("guest-points").textContent = guestPoints
}

function guestAdd3point() {
    guestPoints += 3
    document.getElementById("guest-points").textContent = guestPoints
}