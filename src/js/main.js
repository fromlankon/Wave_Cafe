const middleboxLeft = document.querySelector('.middleboxLeft'),
    middleboxRight = document.querySelector('.middleboxRight'),
    block1 = document.querySelector('.block1'),
    block2 = document.querySelector('.block2'),
    block3 = document.querySelector('.block3'),
    block4 = document.querySelector('.block4'),
    vid = document.querySelector('.vid'),
    pauseButton = document.querySelector('.pauseButton'),
    playButton = document.querySelector('.playButton'),
    bottomboxLeft = document.querySelector('.bottomboxLeft'),
    bottomboxRight = document.querySelector('.bottomboxRight'),
    iced = document.querySelector('.iced'),
    hot = document.querySelector('.hot'),
    fruit = document.querySelector('.fruit'),
    block1first = document.querySelector('.block1first'),
    block1second = document.querySelector('.block1second'),
    block1third = document.querySelector('.block1third');


middleboxLeft.addEventListener('click', function () {
    block1.style.opacity = 1
    block2.style.opacity = 0
    block3.style.opacity = 0
    block4.style.opacity = 0
    middleboxLeft.style.backgroundColor = "rgb(0,153,153)"
    middleboxLeft.style.color = "rgb(255, 255, 255)"
    middleboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxRight.style.color = "rgb(0,153,153)"
    bottomboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxLeft.style.color = "rgb(0,153,153)"
    bottomboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxRight.style.color = "rgb(0,153,153)"
})

middleboxRight.addEventListener('click', function () {
    block1.style.opacity = 0
    block2.style.opacity = 1
    block3.style.opacity = 0
    block4.style.opacity = 0
    middleboxRight.style.backgroundColor = "rgb(0,153,153)"
    middleboxRight.style.color = "rgb(255, 255, 255)"
    middleboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxLeft.style.color = "rgb(0,153,153)"
    bottomboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxLeft.style.color = "rgb(0,153,153)"
    bottomboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxRight.style.color = "rgb(0,153,153)"
})

bottomboxLeft.addEventListener('click', function () {
    block1.style.opacity = 0
    block2.style.opacity = 0
    block3.style.opacity = 1
    block4.style.opacity = 0
    bottomboxLeft.style.backgroundColor = "rgb(0,153,153)"
    bottomboxLeft.style.color = "rgb(255, 255, 255)"
    middleboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxRight.style.color = "rgb(0,153,153)"
    middleboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxLeft.style.color = "rgb(0,153,153)"
    bottomboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxRight.style.color = "rgb(0,153,153)"
})

bottomboxRight.addEventListener('click', function () {
    block1.style.opacity = 0
    block2.style.opacity = 0
    block3.style.opacity = 0
    block4.style.opacity = 1
    bottomboxRight.style.backgroundColor = "rgb(0,153,153)"
    bottomboxRight.style.color = "rgb(255, 255, 255)"
    middleboxRight.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxRight.style.color = "rgb(0,153,153)"
    bottomboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    bottomboxLeft.style.color = "rgb(0,153,153)"
    middleboxLeft.style.backgroundColor = "rgb(255, 255, 255)"
    middleboxLeft.style.color = "rgb(0,153,153)"
})

pauseButton.addEventListener('click', function pauseVid() {
    pauseButton.style.display = "none"
    playButton.style.display = "block"
    vid.pause();
})

playButton.addEventListener('click', function playVid() {
    pauseButton.style.display = "block"
    playButton.style.display = "none"
    vid.play();
})

hot.addEventListener('click', function() {
    block1first.style.display = "none"
})