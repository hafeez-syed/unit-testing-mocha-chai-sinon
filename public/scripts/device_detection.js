/*global WURFL, document, window, alert */
var setTime,
    timeMS = 3000,
    timeS = timeMS/1000,
    device = WURFL.form_factor,
    tag = document.getElementsByTagName('body')[0],
    message = WURFL.is_mobile ? '\n\nYou will be redirected to Telstra 24x7 App in ' + timeS + ' seconds' : '',
    redirect = function() {
        window.location.replace("http://10.200.51.164:9000/24x7")
        clearTimeout(setTime)
    }


function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        return 'iOS';

    }
    else if( userAgent.match( /Android/i ) )
    {

        return 'android';
    }
    else
    {
        var OSName="Unknown OS";
        if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
        if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
        if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
        if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

        return OSName;
    }
}

var detection = 'Device: '+WURFL.form_factor
detection += '\nIs Mobile: '+WURFL.is_mobile
detection += '\nOS: '+getMobileOperatingSystem()

console.log(detection)
alert(detection)

console.log(WURFL)
tag.setAttribute('data-device', device)

if(WURFL.is_mobile) {
    alert(device + ' detected.' + message)
    setTime = setTimeout(redirect, timeMS)
}