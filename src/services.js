const baseUrl = 'http://localhost:3000/guests';

function submitForm() {
    const name = document.getElementById('name').value;
    const room = document.getElementById('room').value;
    const breakfast = document.getElementById('breakfast').checked;

    const guestData = {
        name: name,
        room: room,
        breakfast_included: breakfast
    };

    // Simulating a POST request to add a new guest
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(guestData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Guest added successfully:', data);
        // You can handle success, update UI, etc.
    })
    .catch(error => console.error('Error:', error));
}