const toggleNavbarTogglerClass = function(isClosed=true) {
    const elem = document.querySelector('button.navbar-toggle')
    const curr = elem.getAttribute('class')
    if (curr === 'navbar-toggle' && isClosed) {
        elem.setAttribute('class', 'navbar-toggle toggled')
    } else {
        elem.setAttribute('class', 'navbar-toggle')
    }
}

document.querySelector('button.navbar-toggle').onclick = function(e) {
    toggleNavbarTogglerClass()
}

const myOffcanvas = document.getElementById('nav')
myOffcanvas.addEventListener('hide.bs.offcanvas', function () {
    toggleNavbarTogglerClass(false)
})

const vWidth = window.innerWidth, vHeight = window.innerHeight

document.querySelectorAll('a.nav-link').forEach(function(v, k, p) {
    v.style.animationDuration = (0.2*(k+1)) + 's'
})