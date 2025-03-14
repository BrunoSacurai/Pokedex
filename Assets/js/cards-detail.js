function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName('tabContent')
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }

    const tabLinks = document.getElementsByClassName('tabLinks')
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace('active', ' ')
    }

    document.getElementById(tabName).style.display = 'block'

    event.currentTarget.className += 'active'
}