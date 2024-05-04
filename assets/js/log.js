const gaslogURL = 'https://script.google.com/macros/s/AKfycbweYTtvuP0zHaKgRbFATL8g5_LIHkbVXZ3Kh0FxZOMZUdx-8nI2nU8b_UzKcgTXtVkEfQ/exec';
async function dogasreq(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
        return null;
    }
}

fetch('https://icanhazip.com')
    .then(response => response.text())
    .then(userIp => {
        const userAgent = navigator.userAgent;
        const userData = {
            "ipaddress": userIp.trim(),
            "agent": userAgent
        };
        dogasreq(gaslogURL, userData);
    })
