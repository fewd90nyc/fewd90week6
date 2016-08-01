// click on an a tag, set that a tag to 'current'
// get that ipsum ('lorem')

// click generate btn
// get current ipsum


// css selectors: .current { color: yellow }
// jQuery selector: $('.current').attr('data-ipsum');
// var ipsumType = $('.current').attr('data-ipsum');
// $('#' + ipsumType).css({'display: block'});

// get the element that matches that ipsum
// set that element to display block














































var triggerNodeList = document.querySelectorAll('nav a');

function generateContent() {

    var currentIpsum = document.querySelector('a.current').dataset.ipsum;

    if (!data[currentIpsum]) {
        alert('Data does not exist');
        return false;
    }

    var numberOfParagraphs = document.querySelector('#paragraphs').value;
    var indexToRemove = 0;
    var numberToRemove = 1;



    var currentData = data[currentIpsum];
    // var dataLength = currentData.length;
    // currentData.splice(numberOfParagraphs, currentData.length - numberOfParagraphs);
    console.log(currentData);



    var htmlContent = data[currentIpsum].join('');
    document.querySelector('#js-content').innerHTML = htmlContent;
}

function setAsActive() {
    var activeClass = 'current';
    for (var i = 0; i < triggerNodeList.length; i++) {
        triggerNodeList[i].classList.remove(activeClass);
    }
    this.classList.add(activeClass);
}

for (var i = 0; i < triggerNodeList.length; i++) {
    triggerNodeList[i].onclick = setAsActive;
}

document.querySelector('#submit').onclick = generateContent;
