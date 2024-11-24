function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const paragraph = section.querySelector('p');
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}
