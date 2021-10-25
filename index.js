console.log('Web ini di khusukan untuk kamu adek');

window.addEventListener("mouseover", play);
window.addEventListener("auto", play);

function play() {
  document.getElementById("a").play();
  frameLooper();
}
Swal.fire('Hai, Selamat Datang');

/*window.onload = function() {
  var open = document.getElementById('open');
  var text = document.getElementById('textwa');
  open.onclick = function() {
    window.location = ("https://api.whatsapp.com/send?phone=6281314987821&text=" + text.value);
  }
}*/

function message() {
  document.getElementById('message').style.display = 'block';
  document.getElementById('msg-whatsapp').style.display = 'block';
  document.getElementById('next').style.display = 'none';
}

/*function msgwhatsapp() {
  document.getElementById('msg-whatsapp').style.display = 'block';
  document.getElementById('answer').style.display = 'none';
}*/

let scrollToBottom = document.querySelector("#scroll-to-bottom")
let pageBottom = document.querySelector("#message")

scrollToBottom.addEventListener("click", function() {
  pageBottom.scrollIntoView()
})


$(document).on('click', '.send', function() {
  var input_blanter = document.getElementById('textwa');

  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
    phone = '6281314987821',
    walink2 = 'Halo Deni, aku ingin menjawab surat darimu.',
    text_yes = 'Terkirim.',
    text_no = 'Ketik pesan kamu lalu klik kirim.';

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
  }

  if ("" != input_blanter.value) {

    /* Call Input Form */
    var input_textwa1 = $("#textwa").val(),
      input_answer = $("#answer :selected").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
      '*Jawabanku:* ' + input_answer + '%0A%0A' +
      '*Pesan untuk kamu:* ' + input_textwa1 + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, '_blank');
    document.getElementById("footer").innerHTML = '<span class="yes">' + text_yes + '</span>';
  } else {
    document.getElementById("footer").innerHTML = '<span class="no">' + text_no + '</span>';
  }
});
