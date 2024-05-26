function resDropdown() {
    var subMenuElement = document.getElementById('resSubmenu')
    if (subMenuElement.style.display == 'none') {
        subMenuElement.style.display = 'grid'
    } else {
        subMenuElement.style.display = 'none'
    }
}