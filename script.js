document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (!name || !email) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            message.textContent = 'Form submitted successfully!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Failed to submit form.';
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = 'Error submitting form.';
        message.style.color = 'red';
    }
});
