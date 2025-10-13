var output = document.getElementById("Results");
function  addResult(h) {
    output.value += (h);
}
function clearResult() {
    output.value = "";
}
function compute() {
    output.value = eval (output.value);
}
function backSpace() {
    output.value = output.value.slice(0, -1)
}