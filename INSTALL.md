

<a href="https://photoboothproject.github.io" class="button hidden">Home</a>
<a href="https://photoboothproject.github.io/Changelog" class="button hidden">Changelog</a>
<a href="https://photoboothproject.github.io/INSTALL" class="button hidden">Install</a>
<a href="https://photoboothproject.github.io/FAQ_MENU" class="button hidden">FAQ</a>
<a href="https://photoboothproject.github.io/DONATION" class="button hidden">Donate</a>

---

## Supported Platforms and Cameras

| Hardware-Platform  | Software-Platform                | Supported Cameras                                                                                                                                                                     |
|--------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Raspberry Pi 3 / 4 | Raspberry Pi OS 64bit Bullseye   | [Camera Modules](https://www.raspberrypi.com/documentation/accessories/camera.html), [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam*2 |
| Raspberry Pi 3 / 4 | Raspberry Pi OS 32bit Bullseye*1 | [Camera Modules](https://www.raspberrypi.com/documentation/accessories/camera.html), [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam*2 |
| Generic PC         | Debian/Ubuntu                    | [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam*2                                                                                      |
| Generic PC         | Windows                          | [digiCamControl](http://digicamcontrol.com/), webcam*2                                                                                                           |

*1 On Raspberry Pi OS 32bit Bullseye you **must** add `arm_64bit=0` to your `/boot/config.txt` and reboot once before installing Photobooth.  
The Raspberry Pi foundation uses a 64bit kernel while the system is 32bit. The Installation fails because the v4l2loopback module can't be compiled for a 32bit OS while using a 64bit kernel.

*2 Capture from webcam is possible e.g. using [fswebcam](https://www.sanslogic.co.uk/fswebcam/), else it only works on access via [http://localhost](http://localhost)

## Prerequisites

| Software                  | Tested version                 | Note
|---------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Node.js                   | v14, v16                       | Currently only v14 and v16 are tested. Our installer will check your Node.js version and suggest an update/downgrade if needed.     |
| php                       | v7.4, v8.0, v8.1               |                                                                                                                                     |
| Webserver                 |                                | Apache, Nginx or lighttpd is needed. By default Apache webserver is installed by our installer.                                     |


## Installation

* [Installation on Raspberry Pi OS (previously called Raspbian)](Installation-on-Debian)
* [Installation on Debian / Debian based distributions](Installation-on-Debian#installation-on-debian--debian-based-distributions)
* [Installation on Windows](Installation-on-Windows)

---

## Update Photobooth

* [Update Photobooth](Update-Photobooth)

---
