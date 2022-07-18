fetch('https://fe-student-api.herokuapp.com/api/hotels')
    .then(res => res.json())
    .then(data => console.log(data))