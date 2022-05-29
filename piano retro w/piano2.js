const synth = new // Tone.FMSynth();
Tone.AMSynth();
// Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", (e) => {
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", (e) => {
  synth.triggerRelease();
});
// piano.addEventListener("mouseup", (e) => {
//   synth.triggerAttackRelease();
// });
