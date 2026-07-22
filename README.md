# ComfyUI-SRTifEye
ComfyUI node with a simple browser-based manual SRT file creator

Everything runs locally in the browser. Audio is never uploaded.

## Installation

- Clone or extract the repo inside your ComfyUI/custom_nodes folder. Then restart ComfyUI and reload the frontend.

## Starting

- Add the SRTifEye to a new workflow.
- Click the "Open SRTifEye" button.

![Screenshot of node](https://github.com/BitPoet/bitpoet.github.io/blob/master/img/srtifeye-node.png?raw=true)

- Drag an audio file onto the drop zone

![Screenshot of start screen](https://github.com/BitPoet/bitpoet.github.io/blob/master/img/srtifeye-start.png?raw=true)

- Start editing the SRT

![Screenhost of editor screen](https://github.com/BitPoet/bitpoet.github.io/blob/master/img/srtifeye-screen.png?raw=true)

## Features

- WAV and MP3 loading with an interactive waveform
- Click-to-seek playback from any position
- Add, drag, and delete cut markers
- Consecutively numbered scenes with precise start, end, and duration displays
- Editable lyrics and instrumental scene markers
- Safe lyric merging when a cut is removed
- Timeline zoom, horizontal scrolling, and fit-to-track
- Optional sample-clock-synchronized ding at every cut during playback
- Persisted ±500 ms visual playhead calibration
- Scrollable scene navigator with timing and lyric previews
- Automatic project recovery through `localStorage`
- Standards-compliant SRT download
- Responsive, keyboard-accessible interface

## Using the editor

1. Drop a `.wav` or `.mp3` file onto the start screen, or use the file picker.
2. Click the waveform to move the playhead. Press the round play button to play or pause; `Space` starts playback when paused.
3. Double-click the waveform or select **Add cut** to split at the playhead. During playback, press `Space` to add a cut without stopping the audio.
4. Drag a lime cut marker to adjust its position.
5. Click a scene and enter its lyrics, or mark it **Instrumental**.
6. Use the scene list to review timings and lyrics. Clicking a row pauses playback and jumps to that scene's start.
7. Select a cut marker and choose **Delete cut** (or press `Delete`). Adjacent lyrics are joined with a newline.
8. Zoom with the slider or buttons; use **Fit all** to show the whole track.
9. Enable **Ding at cuts** when you want an audible cue as playback crosses each marker.
10. If browser or audio-device latency makes the playhead feel early or late, adjust **Playhead** while audio is running. Positive values advance the visual position; negative values move it back. Changing calibration does not shift existing cuts or exported timings.
11. Choose **Export SRT**. Empty lyric scenes produce a warning, while instrumental scenes export as `[Instrumental]`.

Editor timestamps use `MM:SS.mmmm` for precision. Exported timestamps use the SRT-standard `HH:MM:SS,mmm` format.

## Project recovery

Cuts, lyrics, instrumental flags, and playback preferences are saved to browser `localStorage` after every edit. SRTifEye keeps independent state for multiple tracks and lists them under **Saved projects** on the start screen.

Browsers do not allow local audio files to be silently reopened, so select a saved project and choose its original audio file again to reconnect it. SRTifEye matches filename, file size, and duration before restoring its edit state. Opening a new track does not replace previously saved projects. Browser storage is local to the current browser profile and site address.

## SRT behavior

Scenes always cover the complete recording without gaps or overlaps. Internal cut times are stored as fractional seconds and rounded only for export. Every scene is emitted as a numbered SRT cue; instrumental scenes use `[Instrumental]`, and empty scenes remain blank after the export warning is accepted.

## License

Licensed under GNU Affero Public License (GPL) v3 or any later version of that license.

## Credits

To [ComfyUI](https://github.com/Comfy-Org/ComfyUI) for an extremely powerful, bleeding edge platform for running local AI.

To [VRGameDevGirl](https://github.com/vrgamegirl19/) for her magical music video creator nodes and inspiring energy.
