document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("usernameDisplay");
    if (username && usernameDisplay) {
        usernameDisplay.textContent = `, ${username}!`;
    }

    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('a, button')) {
            cursor.style.backgroundColor = '#000000';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('a, button')) {
            cursor.style.backgroundColor = '#EB0056';
        }
    });

    document.addEventListener('mousedown', () => {
        cursor.style.backgroundColor = '#000000';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.backgroundColor = '#EB0056';
    });
});
