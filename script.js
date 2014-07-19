var quotes = new Array()
quotes[0] = "Believe you can and you’re half way there."
quotes[1] = "Your present circumstances don't determine where you can go; they determine where you start."
quotes[2] = "Change your thoughts and you change your world."
quotes[3] = "Death is coming."
quotes[4] = "It is never too late to be what you might have been."
quotes[5] = "You is kind, you is smart, you is important."
quotes[6] = "You go, Glen Coco."
quotes[7] = "Even if you fall on your face, you're still moving forward."
quotes[8] = "In a gentle way, you can shake the world."
quotes[9] = "You must do the things you think you cannot do."
quotes[10] = "Strive not to be a success, but rather to be of value."
quotes[11] = "You miss 100% of the shots you don't take."
quotes[12] = "The past is a ghost, the future a dream. All we ever have is now."
quotes[13] = "An unexamined life is not worth living."
quotes[14] = "We can change our lives. We can do, have, and be exactly what we wish."
quotes[15] = "Turn your face to the sun and shadows fall behind you."
quotes[16] = "Hope is a waking dream."
quotes[17] = "What we achieve inwardly will change outer reality."
quotes[18] = "Change your thoughts and you change your world."
quotes[19] = "Don't let the fear of striking out hold you back."
quotes[20] = "The rest you seek comes not from sleeping but from waking."

var authors = new Array()
authors[0] = "Theodore Roosevelt"
authors[1] = "Nido Qubein"
authors[2] = "Norman Vincent Peale"
authors[3] = "Unknown"
authors[4] = "George Eliot"
authors[5] = "Unknown"
authors[6] = "Unknown"
authors[7] = "Victor Kiam"
authors[8] = "Mahatma Gandhi"
authors[9] = "Eleanor Roosevelt"
authors[10] = "Albert Einstein"
authors[11] = "Wayne Gretzky"
authors[12] = "Bill Cosby"
authors[13] = "Socrates"
authors[14] = "Tony Robbins"
authors[15] = "Charlotte Whitton"
authors[16] = "Aristotle"
authors[17] = "Plutarch"
authors[18] = "Normal Vincent Peale"
authors[19] = "Babe Ruth"
authors[20] = "Helen Schucman"

function getRandomArbitrary (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var rando = 0;

function clickHandler(event) {
    var output = document.getElementById('output');
    var inspire = new Array();
    

    rando = getRandomArbitrary(0, 21);

    
    output.innerHTML = quotes[rando];
    output2.innerHTML = "—" + authors[rando];
  }

function play_single_sound() {
      document.getElementById("audiotag1").play();
}

