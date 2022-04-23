import $hgUW1$devicedetectorjs from "device-detector-js";
import $hgUW1$mediapipecontrol_utils from "@mediapipe/control_utils";
import $hgUW1$mediapipedrawing_utils from "@mediapipe/drawing_utils";
import $hgUW1$mediapipeface_mesh from "@mediapipe/face_mesh";





// const controls = window;
// const drawingUtils = window;
// const mpFaceMesh = window;
// Usage: testSupport({client?: string, os?: string}[])
// Client and os are regular expressions.
// See: https://cdn.jsdelivr.net/npm/device-detector-js@2.2.10/README.md for
// legal values for client and os
$149c1bd638913645$var$testSupport([
    {
        client: 'Chrome'
    }, 
]);
function $149c1bd638913645$var$testSupport(supportedDevices) {
    const deviceDetector = new $hgUW1$devicedetectorjs();
    const detectedDevice = deviceDetector.parse(navigator.userAgent);
    let isSupported = false;
    for (const device of supportedDevices){
        if (detectedDevice.client && device.client !== undefined) {
            const re = new RegExp(`^${device.client}$`);
            if (!re.test(detectedDevice.client.name)) continue;
        }
        if (detectedDevice.os && device.os !== undefined) {
            const re = new RegExp(`^${device.os}$`);
            if (!re.test(detectedDevice.os.name)) continue;
        }
        isSupported = true;
        break;
    }
    if (!isSupported) alert(`This demo, running on ${detectedDevice.client?.name}/${detectedDevice.os?.name}, ` + `is not well supported at this time, continue at your own risk.`);
}
const $149c1bd638913645$var$config = {
    locateFile: (file)=>{
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@` + `${$hgUW1$mediapipeface_mesh.VERSION}/${file}`;
    }
};
// Our input frames will come from here.
const $149c1bd638913645$var$videoElement = document.getElementsByClassName('input_video')[0];
const $149c1bd638913645$var$canvasElement = document.getElementsByClassName('output_canvas')[0];
const $149c1bd638913645$var$controlsElement = document.getElementsByClassName('control-panel')[0];
const $149c1bd638913645$var$canvasCtx = $149c1bd638913645$var$canvasElement.getContext('2d');
/**
 * Solution options.
 */ const $149c1bd638913645$var$solutionOptions = {
    selfieMode: true,
    enableFaceGeometry: false,
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
};
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const $149c1bd638913645$var$fpsControl = new $hgUW1$mediapipecontrol_utils.FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const $149c1bd638913645$var$spinner = document.querySelector('.loading');
$149c1bd638913645$var$spinner.ontransitionend = ()=>{
    $149c1bd638913645$var$spinner.style.display = 'none';
};
function $149c1bd638913645$var$onResults(results) {
    // Hide the spinner.
    document.body.classList.add('loaded');
    // Update the frame rate.
    $149c1bd638913645$var$fpsControl.tick();
    // Draw the overlays.
    $149c1bd638913645$var$canvasCtx.save();
    $149c1bd638913645$var$canvasCtx.clearRect(0, 0, $149c1bd638913645$var$canvasElement.width, $149c1bd638913645$var$canvasElement.height);
    $149c1bd638913645$var$canvasCtx.drawImage(results.image, 0, 0, $149c1bd638913645$var$canvasElement.width, $149c1bd638913645$var$canvasElement.height);
    if (results.multiFaceLandmarks) for (const landmarks of results.multiFaceLandmarks){
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_TESSELATION, {
            color: '#C0C0C070',
            lineWidth: 1
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_RIGHT_EYE, {
            color: '#FF3030'
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_RIGHT_EYEBROW, {
            color: '#FF3030'
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_LEFT_EYE, {
            color: '#30FF30'
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_LEFT_EYEBROW, {
            color: '#30FF30'
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_FACE_OVAL, {
            color: '#E0E0E0'
        });
        $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_LIPS, {
            color: '#E0E0E0'
        });
        if ($149c1bd638913645$var$solutionOptions.refineLandmarks) {
            $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_RIGHT_IRIS, {
                color: '#FF3030'
            });
            $hgUW1$mediapipedrawing_utils.drawConnectors($149c1bd638913645$var$canvasCtx, landmarks, $hgUW1$mediapipeface_mesh.FACEMESH_LEFT_IRIS, {
                color: '#30FF30'
            });
        }
    }
    $149c1bd638913645$var$canvasCtx.restore();
}
const $149c1bd638913645$var$faceMesh = new $hgUW1$mediapipeface_mesh.FaceMesh($149c1bd638913645$var$config);
$149c1bd638913645$var$faceMesh.setOptions($149c1bd638913645$var$solutionOptions);
$149c1bd638913645$var$faceMesh.onResults($149c1bd638913645$var$onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new $hgUW1$mediapipecontrol_utils.ControlPanel($149c1bd638913645$var$controlsElement, $149c1bd638913645$var$solutionOptions).add([
    new $hgUW1$mediapipecontrol_utils.StaticText({
        title: 'MediaPipe Face Mesh'
    }),
    $149c1bd638913645$var$fpsControl,
    new $hgUW1$mediapipecontrol_utils.Toggle({
        title: 'Selfie Mode',
        field: 'selfieMode'
    }),
    new $hgUW1$mediapipecontrol_utils.SourcePicker({
        onFrame: (input, size)=>{
            const aspect = size.height / size.width;
            let width, height;
            if (window.innerWidth > window.innerHeight) {
                height = window.innerHeight;
                width = height / aspect;
            } else {
                width = window.innerWidth;
                height = width * aspect;
            }
            $149c1bd638913645$var$canvasElement.width = width;
            $149c1bd638913645$var$canvasElement.height = height;
            return $149c1bd638913645$var$faceMesh.send({
                image: input
            });
        }
    }),
    new $hgUW1$mediapipecontrol_utils.Slider({
        title: 'Max Number of Faces',
        field: 'maxNumFaces',
        range: [
            1,
            4
        ],
        step: 1
    }),
    new $hgUW1$mediapipecontrol_utils.Toggle({
        title: 'Refine Landmarks',
        field: 'refineLandmarks'
    }),
    new $hgUW1$mediapipecontrol_utils.Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [
            0,
            1
        ],
        step: 0.01
    }),
    new $hgUW1$mediapipecontrol_utils.Slider({
        title: 'Min Tracking Confidence',
        field: 'minTrackingConfidence',
        range: [
            0,
            1
        ],
        step: 0.01
    }), 
]).on((x)=>{
    const options = x;
    $149c1bd638913645$var$videoElement.classList.toggle('selfie', options.selfieMode);
    $149c1bd638913645$var$faceMesh.setOptions(options);
});


//# sourceMappingURL=module.js.map
