function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    return greeting;
}

function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = getGreeting();
}

// Call the function to update the greeting when the page loads
updateGreeting();
    
    document.getElementById('callButton').addEventListener('click', () => {
            window.location.href = 'tel:0705719709';
        });
    document.getElementById('linkButton').addEventListener('click', function() {
    var popupMenu = document.getElementById('popupMenu');
    if (popupMenu.style.display === 'none' || popupMenu.style.display === '') {
        popupMenu.style.display = 'block';
    } else {
        popupMenu.style.display = 'none';
    }
});

window.onclick = function(event) {
    if (!event.target.matches('#linkButton')) {
        var popupMenu = document.getElementById('popupMenu');
        if (popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        }
    }
};
 
        function initMap() {
            var location = {lat: -1.5353125, lng: 37.1348281};  // Your coordinates
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }

document.getElementById('emailbutton').addEventListener('click', () => {
            window.location.href = 'mailto:mateieric66@gmail.com';
        });
function showNotification(message) {
    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    container.appendChild(notification);

    // Remove the notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    showNotification('Hello! WELCOME TO EXELLENT STORES.');
});

      
