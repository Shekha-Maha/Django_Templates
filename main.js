
// window.addEventListener('load', function () {
//     this.setTimeout(function open(event) {
//         document.querySelector('.video-container').style.display = 'block';
//     },
//         1000
//     );
// });

// document.querySelector('#close').addEventListener('click', function () {
//     document.querySelector('.video-container').style.display = 'none';
// });





(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();



function myFunction() {
    var videoContainer = document.querySelector(".video-container");
    var video = document.querySelector("#myVideo");

    videoContainer.classList.toggle("active");
    if (video.paused) {
        video.play();
        video.loop = true;
    } else {
        video.pause();
        video.currentTime = 0;
    }
}

const stackedPhoto3 = document.querySelector('.stackedPhoto3');

window.addEventListener('scroll', () => {
    if (window.scrollY <= 300) {
        stackedPhoto3.classList.add('scrolled-up');
    } else {
        stackedPhoto3.classList.remove('scrolled-up');
    }
});







