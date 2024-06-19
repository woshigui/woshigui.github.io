document.addEventListener('DOMContentLoaded', function() {
    var diaryElement = document.getElementById('dog-diary');
    if (diaryElement) {
        fetch('https://api.oick.cn/api/dog')
            .then(response => response.json())
            .then(data => {
                diaryElement.textContent = data;
            })
            .catch(error => console.error('Error fetching dog diary:', error));
    }
});
