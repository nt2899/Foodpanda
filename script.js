function request() {

    var i;


    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var result = document.getElementById('result')
            var str = "";


            for (i = 0; i < 10; i++) {
                str = str + 'Rider Id: ' + response[i].id + " " + "title: " + response[i].title;
                str = str + "<br>";
            }

            result.innerHTML = str;

        });

}


function photos() {

    var i;


    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            var result = document.getElementById('photos')


            for (i = 0; i < response.length; i++) {

                var x = document.createElement("IMG");
                x.setAttribute("src", response[i].url);
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                document.body.appendChild(x);
                // str = str + 'User Id: ' + response[i].id + " " + "title: " + response[i].title;
                //str = str + "<br>";
            }

            // result.innerHTML = str;

        });

}




function City() {

    var i, j;


    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)

            var myCollection = document.getElementsByClassName("row");


            var el = document.getElementsByClassName('col-sm-4');


            // for (i = 0; i < response.length; i++) {
            //     el[i + 3] = response[i].id;
            //     el[i + 4].innerHTML = response[i].name;
            //     el[i + 5].innerHTML = response[].email;

            //  }
            // <img src="http://placehold.it/600x600"></img>

            for (i = 0, j = 0; i < response.length; j++, i++) {

                el[j].innerHTML = response[i].id;
                j++;
                el[j].innerHTML = response[i].name;
                j++;
                el[j].innerHTML = response[i].email;


            }










            // var el = document.getElementsByClassName('row');

            // el.innerHTML = response[i].id;

            // element[i].innerHTML = response[i].id;
            // element[i].innerHTML = response[i].name;





        });


}

function menu() {
    window.open("menu.html");
}