function request() {

    var i;
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(function(response) {
            return response.json()
        })
        .then((response) => {
            console.log(response)
                //  var result = document.getElementById('result')
                //  var str = "";

            var con = document.getElementsByClassName('container')[0];

            for (i = 0; i < response.length; i++) {

                var x = document.createElement("img");
                x.setAttribute("src", response[i].url);
                x.setAttribute("width", "304");
                x.setAttribute("height", "228");
                //   document.body.appendChild(x);
                // < img src = $ { response[i].url } ></img>

                // var applyhtml = `<div class="row">
                // <div class="col-sm-1">` + response[i].id + `</div>
                // <div class="col-sm-5">` + response[i].title + `</div>
                // <div class="col-sm-6">` + x.outerHTML + `</div></div>`;
                // var y = response[i].url;
                var applyhtml = `<div class="row">
                 <div class="col-sm-1">` + response[i].id + `</div>
                 <div class="col-sm-5">` + response[i].title + `</div>
                 <div class = "col-sm-6" > <img src="` + response[i].url + `"width = "304" height = "228" ></img></div></div>`;

                con.innerHTML += applyhtml;
                // con.innerHTML += x;;


                /*  for (i = 0; i < 10; i++) {
                str = str + 'Rider Id: ' + response[i].id + " " + "title: " + response[i].title;
                str = str + "<br>";
            }

            result.innerHTML = str;

        });*/

            }
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
                x.setAttribute("width", "auto");
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

            //     var myCollection = document.getElementsByClassName("row");


            var con = document.getElementsByClassName('container')[0];

            for (i = 0; i < response.length; i++) {

                var cityhtml = `<div class = "row rounded-bottom">
                    <div class = "col-sm-4">` + response[i].id + `</div><div class = "col-sm-4">` +
                    response[i].name + `</div><div class = "col-sm-4">` + response[i].email + `</div></div>`;

                con.innerHTML += cityhtml;


                // el[j].innerHTML = response[i].id;
                // j++;
                // el[j].innerHTML = response[i].name;
                // j++;
                // el[j].innerHTML = response[i].email;


            }

            //var el = document.getElementsByClassName('col-sm-4');


            // for (i = 0; i < response.length; i++) {
            //     el[i + 3] = response[i].id;
            //     el[i + 4].innerHTML = response[i].name;
            //     el[i + 5].innerHTML = response[].email;

            //  }
            // <img src="http://placehold.it/600x600"></img>

            /*    for (i = 0, j = 0; i < response.length; j++, i++) {

                    el[j].innerHTML = response[i].id;
                    j++;
                    el[j].innerHTML = response[i].name;
                    j++;
                    el[j].innerHTML = response[i].email;


                }*/


            // var el = document.getElementsByClassName('row');

            // el.innerHTML = response[i].id;

            // element[i].innerHTML = response[i].id;
            // element[i].innerHTML = response[i].name;


        });


}

function show_hideB() {

    var x = document.getElementById("Bur");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

}

function show_hideP() {

    var x = document.getElementById("P");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

}

function show_hideS() {

    var x = document.getElementById("S");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }

}


function menu() {
    window.open("menu.html");
}



// function show_hideB() {
//     $(".article").show();
//     $(".Burger").show();
//     $(".Pizza").hide();
//     $(".Steak").hide();
// }

// function show_hideP() {
//     $(".article").show();
//     $(".Burger").hide();
//     $(".Pizza").show();
//     $(".Steak").hide();
// }

// function show_hideS() {
//     $(".article").show();
//     $(".Burger").hide();
//     $(".Pizza").hide();
//     $(".Steak").show();
// }