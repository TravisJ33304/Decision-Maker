function updateOutput(inputs, outputs) { // update the screen with the device
    // ensure screen output is accurate
    outputs.screenOutput.innerHTML = inputs.screen[0].value + '"';
    // determine output
    if (inputs.screen[0].value >= 12 && (inputs.os[0].checked || inputs.os[1].checked || inputs.os[2].checked) && !inputs.input[0].checked && inputs.input[1].checked && !inputs.portable[0].checked) {
        // desktop result
        outputs.output.innerHTML = "Looks like you could use a desktop.";
        outputs.outputImage.src = "images/desktop.png";
    } else if (inputs.screen[0].value <= 20 && inputs.screen[0].value >= 15 && (inputs.os[0].checked || inputs.os[1].checked || inputs.os[2].checked) && inputs.input[1].checked) {
        // laptop result
        outputs.output.innerHTML = "You could probably use a laptop.";
        outputs.outputImage.src = "images/laptop.png";
    } else if (inputs.screen[0].value <= 15 && inputs.screen[0].value >= 9 && (inputs.os[0].checked || inputs.os[3].checked || inputs.os[4].checked) && inputs.input[0].checked && inputs.portable[0].checked) {
        // tablet result
        outputs.output.innerHTML = "You should get a tablet.";
        outputs.outputImage.src = "images/tablet.png";
    } else if (inputs.screen[0].value <= 8 && (inputs.os[0].checked || inputs.os[3].checked || inputs.os[4].checked) && inputs.input[0].checked && !inputs.input[1].checked && inputs.portable[0].checked) {
        // phone result
        outputs.output.innerHTML = "Seems like you need a phone.";
        outputs.outputImage.src = "images/phone.png";
    } else {
        // no result
        outputs.output.innerHTML = "Pick your criteria to get a device.";
        outputs.outputImage.src = "images/pick.png";
    }
}

window.onload = function() {
    // store all objects to iterate over later
    let inputs = {
        screen: [document.getElementById("screen")],
        os: document.getElementsByName("os"),
        input: document.getElementsByName("input"),
        portable: [document.getElementById("portable")]
    }
    let outputs = {
        screenOutput: document.getElementById("screenOutput"),
        output: document.getElementById("output"),
        outputImage: document.getElementById("outputImage"),
    }
    // handle input events
    outputs.screenOutput.innerHTML = inputs.screen[0].value + '"';
    inputs.screen[0].onchange = function() { // change label when range moved
        outputs.screenOutput.innerHTML = inputs.screen[0].value + '"';
    }
    document.getElementById("submit").onclick = function() { // button to process output
        updateOutput(inputs, outputs);
    }
    document.getElementById("reset").onclick = function() { // reset button to clear all inputs
        // reset screen size range
        inputs.screen[0].value = 12;
        outputs.screenOutput.innerHTML = inputs.screen[0].value + '"';
        // reset all checkboxes
        for (input in inputs) {
            for (elem of inputs[input]) {
                if (elem.checked) {
                    elem.checked = false;
                }
            }
        }
        // reset outputs
        updateOutput(inputs, outputs);
    }
    updateOutput(inputs, outputs); // run an initial screen output
}