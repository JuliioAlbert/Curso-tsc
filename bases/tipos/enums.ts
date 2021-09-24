(() => {
    enum AudioLavel{
        min,
        medum,
        max
    }

    const currentAudio:AudioLavel = AudioLavel.max;
    console.log({currentAudio});
    console.log(AudioLavel);
})()