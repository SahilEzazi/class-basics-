console.log("working");

let text = document.getElementById("demo");
text.innerText="hello guys";

// text.style.color="red";
// text.style.backgroundColor="black";

function add(){
let num = Number(document.getElementById("text1").value);
let num2 = Number(document.getElementById("text2").value);
    let sum = num + num2;
    document.getElementById("result").value = sum
    console.log(sum)
}

function sub(){
    let num = Number(document.getElementById("text1").value);
    let num2 = Number(document.getElementById("text2").value);
        let sub = num - num2;
        document.getElementById("result").value = sub
        console.log(sub)
    }

    function mul(){
        let num = Number(document.getElementById("text1").value);
        let num2 = Number(document.getElementById("text2").value);
            let mul = num * num2;
            document.getElementById("result").value = mul
            console.log(mul)
        }

        function div(){
            let num = Number(document.getElementById("text1").value);
            let num2 = Number(document.getElementById("text2").value);
                let sum = num / num2;
                document.getElementById("result").value = sum
                console.log(sum)
            }