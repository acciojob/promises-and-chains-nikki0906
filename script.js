//your JS code here. If required.

document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value;
    const ageInput = document.getElementById('age').value;

    if (nameInput === '' || ageInput === '') {
        alert('Please fill in both fields.');
        return;
    }

    const agePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(ageInput) >= 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000);
    });

    agePromise
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});
