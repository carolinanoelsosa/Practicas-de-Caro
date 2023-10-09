function displaySection(sectionId){
    document.querySelectorAll('.section').forEach(s=> s.style.display = 'none')
    document.getElementById(sectionId).style.display = 'block'

}
