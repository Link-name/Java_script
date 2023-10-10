

async function loadData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const arr = await response.json();
            arr.sort((a, b) => {
                return a.name.localeCompare(b.name); // функция сравнивает name в массиве
            });
            console.log(arr);
        }
    } catch (error) { // Здесь исправлена опечатка "arror" на "error"
        console.log(error);
    }
}

loadData("https://jsonplaceholder.typicode.com/users");
