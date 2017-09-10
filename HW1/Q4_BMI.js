window.onload = function () {
    var output = document.getElementById("output");
    var btn = document.getElementById("calculate");
    btn.onclick = calculateBMI;

    function calculateBMI() {
        let height = document.getElementsByName("height")[0].value;
        let weight = document.getElementsByName("weight")[0].value;

        if(validator(height,weight)){
            //console.log("pass validate");
            var obj = new BMICalculator(height, weight);

            output.innerHTML = obj.calculateBMI2();
        }
    }

    function validator(h,w) {
        if(h <= 0 || w <= 0){
            output.innerHTML = "<b style='color: red'>Input Error: It should be number and more than 0.</b>";
            return false;
        }

        return true;
    }

    class BMICalculator {
        constructor(height, weight){
            this.height = height;
            this.weight = weight;
        }

        calculateBMI(){
            return (this.weight/this.height/this.height)*703;
        };

        calculateBMI2(){
            return this.calculateBMI();
        };
    }
};