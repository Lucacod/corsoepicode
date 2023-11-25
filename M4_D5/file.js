document.addEventListener('DOMContentLoaded', async function () {
    const filterDropdown = document.getElementById('filterDropdown');
    const filterInput = document.getElementById('filterInput');
    const userTableBody = document.getElementById('userTableBody');

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Fetch data
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Errore nella risposta della richiesta.');
            }
            return await response.json();
        } catch (error) {
            console.error('Errore durante il recupero dei dati:', error.message);
        }
    };

    // Render users in the table
    const renderUsers = (users) => {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                </tr>
            `;
            userTableBody.innerHTML += row;
        });
    };

    // Event listener for filter input
    filterInput.addEventListener('input', () => {
        applyFilter();
    });

    // Event listener for filter dropdown
    filterDropdown.addEventListener('change', () => {
        applyFilter();
    });

    // Function to apply the filter
    const applyFilter = async () => {
        const users = await fetchData();
        const filterBy = filterDropdown.value;
        const filterText = filterInput.value.toLowerCase();

        const filteredUsers = users.filter(user => {
            return user[filterBy].toLowerCase().includes(filterText);
        });

        renderUsers(filteredUsers);
    };

    // Initial render
    const initialUsers = await fetchData();
    renderUsers(initialUsers);
});