var $8zHUo$devicedetectorjs = require("device-detector-js");
var $8zHUo$mediapipecontrol_utils = require("@mediapipe/control_utils");
var $8zHUo$mediapipedrawing_utils = require("@mediapipe/drawing_utils");
var $8zHUo$mediapipeface_mesh = require("@mediapipe/face_mesh");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}




// const controls = window;
// const drawingUtils = window;
// const mpFaceMesh = window;
// Usage: testSupport({client?: string, os?: string}[])
// Client and os are regular expressions.
// See: https://cdn.jsdelivr.net/npm/device-detector-js@2.2.10/README.md for
// legal values for client and os
$882b6d93070905b3$var$testSupport([
    {
        client: 'Chrome'
    }, 
]);
function $882b6d93070905b3$var$testSupport(supportedDevices) {
    const deviceDetector = new ($parcel$interopDefault($8zHUo$devicedetectorjs))();
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
const $882b6d93070905b3$var$config = {
    locateFile: (file)=>{
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@` + `${($parcel$interopDefault($8zHUo$mediapipeface_mesh)).VERSION}/${file}`;
    }
};
// Our input frames will come from here.
const $882b6d93070905b3$var$videoElement = document.getElementsByClassName('input_video')[0];
const $882b6d93070905b3$var$canvasElement = document.getElementsByClassName('output_canvas')[0];
const $882b6d93070905b3$var$controlsElement = document.getElementsByClassName('control-panel')[0];
const $882b6d93070905b3$var$canvasCtx = $882b6d93070905b3$var$canvasElement.getContext('2d');
/**
 * Solution options.
 */ const $882b6d93070905b3$var$solutionOptions = {
    selfieMode: true,
    enableFaceGeometry: false,
    maxNumFaces: 1,
    refineLandmarks: false,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
};
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const $882b6d93070905b3$var$fpsControl = new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const $882b6d93070905b3$var$spinner = document.querySelector('.loading');
$882b6d93070905b3$var$spinner.ontransitionend = ()=>{
    $882b6d93070905b3$var$spinner.style.display = 'none';
};
function $882b6d93070905b3$var$onResults(results) {
    // Hide the spinner.
    document.body.classList.add('loaded');
    // Update the frame rate.
    $882b6d93070905b3$var$fpsControl.tick();
    // Draw the overlays.
    $882b6d93070905b3$var$canvasCtx.save();
    $882b6d93070905b3$var$canvasCtx.clearRect(0, 0, $882b6d93070905b3$var$canvasElement.width, $882b6d93070905b3$var$canvasElement.height);
    $882b6d93070905b3$var$canvasCtx.drawImage(results.image, 0, 0, $882b6d93070905b3$var$canvasElement.width, $882b6d93070905b3$var$canvasElement.height);
    if (results.multiFaceLandmarks) for (const landmarks of results.multiFaceLandmarks){
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_TESSELATION, {
            color: '#C0C0C070',
            lineWidth: 1
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_RIGHT_EYE, {
            color: '#FF3030'
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_RIGHT_EYEBROW, {
            color: '#FF3030'
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_LEFT_EYE, {
            color: '#30FF30'
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_LEFT_EYEBROW, {
            color: '#30FF30'
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_FACE_OVAL, {
            color: '#E0E0E0'
        });
        ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_LIPS, {
            color: '#E0E0E0'
        });
        if ($882b6d93070905b3$var$solutionOptions.refineLandmarks) {
            ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_RIGHT_IRIS, {
                color: '#FF3030'
            });
            ($parcel$interopDefault($8zHUo$mediapipedrawing_utils)).drawConnectors($882b6d93070905b3$var$canvasCtx, landmarks, ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FACEMESH_LEFT_IRIS, {
                color: '#30FF30'
            });
        }
    }
    $882b6d93070905b3$var$canvasCtx.restore();
}
const $882b6d93070905b3$var$faceMesh = new ($parcel$interopDefault($8zHUo$mediapipeface_mesh)).FaceMesh($882b6d93070905b3$var$config);
$882b6d93070905b3$var$faceMesh.setOptions($882b6d93070905b3$var$solutionOptions);
$882b6d93070905b3$var$faceMesh.onResults($882b6d93070905b3$var$onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).ControlPanel($882b6d93070905b3$var$controlsElement, $882b6d93070905b3$var$solutionOptions).add([
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).StaticText({
        title: 'MediaPipe Face Mesh'
    }),
    $882b6d93070905b3$var$fpsControl,
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).Toggle({
        title: 'Selfie Mode',
        field: 'selfieMode'
    }),
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).SourcePicker({
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
            $882b6d93070905b3$var$canvasElement.width = width;
            $882b6d93070905b3$var$canvasElement.height = height;
            return $882b6d93070905b3$var$faceMesh.send({
                image: input
            });
        }
    }),
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).Slider({
        title: 'Max Number of Faces',
        field: 'maxNumFaces',
        range: [
            1,
            4
        ],
        step: 1
    }),
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).Toggle({
        title: 'Refine Landmarks',
        field: 'refineLandmarks'
    }),
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [
            0,
            1
        ],
        step: 0.01
    }),
    new ($parcel$interopDefault($8zHUo$mediapipecontrol_utils)).Slider({
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
    $882b6d93070905b3$var$videoElement.classList.toggle('selfie', options.selfieMode);
    $882b6d93070905b3$var$faceMesh.setOptions(options);
});


//# sourceMappingURL=main.js.map
