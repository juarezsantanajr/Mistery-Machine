$(document).ready(function () {
  //variables
  $surface = $('.surface')
  $car = $('.car')
  $img = $('.car img')

  let flag = true

  const cars = ['assets/Img_05.png', 'assets/Img_06.png']
  const som_HIT = new Audio()
  som_HIT.src = 'scoobydoo.mp3'

  //keypressed events
  $(document).on('keypress', function (e) {
    if (e.which == 13) {
      som_HIT.play()
      $($surface).toggleClass('moveRight')
      $($car).toggleClass('suspension')
    }
  })

  //light
  $(document).on('keypress', function (e) {
    if (e.which == 87) {
      if (flag) {
        flag = false
        $img.attr('src', cars[0])
      } else {
        flag = true
        $img.attr('src', cars[1])
      }
    }
  })
})

window.onload
