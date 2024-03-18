// music
window.onload = function() {
  const musicIcon = document.getElementById("musicIcon");
  const music = document.getElementById("music");

  let isPlaying = false;

  // Function to toggle play/pause
  function togglePlay() {
      if (isPlaying) {
          music.pause();
          isPlaying = false;
          musicIcon.textContent = "🔇";
      } else {
          music.play();
          isPlaying = true;
          musicIcon.textContent = "🎵"; // You can change this icon to represent pause
      }
  }

  // Toggle play/pause when clicking the music icon
  musicIcon.addEventListener("click", togglePlay);

  // Automatically play music when the page loads
  music.play();
  isPlaying = true;
  musicIcon.textContent = "🎵"; // Update icon to represent play
};


// Technique 1
document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName('collapsible');
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
});

// Technique 2
document.addEventListener('DOMContentLoaded', function() {
  var coll = document.getElementsByClassName('collapsibleUnder');
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  }
});

$(document).ready(function () {
  function initCarousel() {
    if ($("#visible").css("display") == "block") {
      $(".carousel .carousel-item").each(function () {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
          i.children(":first-child").clone().appendTo($(this));

        for (var n = 0; n < 4; n++)
          (i = i.next()).length || (i = $(this).siblings(":first")),
            i.children(":first-child").clone().appendTo($(this));
      });
    }
  }
  $(window).on({
    resize: initCarousel(),
    load: initCarousel()
  });
});
  