window.onload = function () {
    //question 1
    const items = Array.from(document.querySelectorAll('[data-time]'));
    const result = items.filter(x => x.innerHTML.indexOf("ECMA6") > -1)
        .map(x => x.getAttribute("data-time"))
        .map(x=> parseInt(x.split(":")[0]*60) + parseInt(x.split(":")[1]))
        .reduce( (total, x) => (total += x ), 0);

    console.log("Q1 Result : " + result);

    //question 2
    var library = [
        { prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452'},
        { prof: 'Rakesh Shrestha', course: 'WAA', courseID: 'CS545'},
        { prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425'}
    ];

    const compareFunction = function (a, b) {
        let result = 0;

        if(a.course > b.course){
            result = 1;
        }else if(a.course < b.course){
            result = -1;
        }

        return result;
    }

    library.sort(compareFunction);
    console.log("Q2 Result : ");
    console.log(library);

    //question 3
    const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
    console.log("Q3 Result : " + numbers.filter(x => x > 70));
}


