function request() {

    var i;


    fetch("https://jsonplaceholder.typicode.com/users/1/albums")
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var result = document.getElementById('result')
            var str = "";

            for (i = 0; i < 10; i++) {
                str = str + 'User Id: ' + response[i].userId + " " + "title: " + response[i].title + "\n";

            }

            result.innerHTML = str;


        });

}