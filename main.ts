basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        led.plotBarGraph(
        10,
        100,
        led.point(100, 2)
        )
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        radio.setGroup(165)
    } else {
        basic.clearScreen()
    }
})
