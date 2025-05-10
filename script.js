document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleAbstract');
    const abstract = document.getElementById('abstract');

    toggleButton.addEventListener('click', () => {
        if (abstract.style.display === 'none') {
            abstract.style.display = 'block';
            toggleButton.textContent = 'Hide Abstract';
        } else {
            abstract.style.display = 'none';
            toggleButton.textContent = 'Show Abstract';
        }
    });
});