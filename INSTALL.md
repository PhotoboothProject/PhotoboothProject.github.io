

<a href="https://photoboothproject.github.io" class="button hidden">Home</a>
<a href="https://photoboothproject.github.io/Changelog" class="button hidden">Changelog</a>
<a href="https://photoboothproject.github.io/INSTALL" class="button hidden">Install</a>
<a href="https://photoboothproject.github.io/FAQ_MENU" class="button hidden">FAQ</a>
<a href="https://photoboothproject.github.io/DONATION" class="button hidden">Donate</a>
<a href="https://github.com/PhotoboothProject/photobooth" class="button hidden">GitHub</a>

---

## Supported Platforms and Cameras

| Hardware-Platform  | Software-Platform                  | Supported Cameras                                                                                                                                                                     |
|--------------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Raspberry Pi 3 / 4 / 5 | Raspberry Pi OS 64bit Bullseye /Bookworm    | [Camera Modules](https://www.raspberrypi.com/documentation/accessories/camera.html), [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam _*2_ |
| Raspberry Pi 3 / 4 / 5 | Raspberry Pi OS 32bit Bullseye / Bookworm _*1_ | [Camera Modules](https://www.raspberrypi.com/documentation/accessories/camera.html), [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam _*2_ |
| Generic PC         | Debian/Ubuntu                      | [gphoto2 DSLR](http://www.gphoto.org/proj/libgphoto2/support.php), webcam _*2_                                                                                      |
| Generic PC         | Windows                            | [digiCamControl](http://digicamcontrol.com/), webcam _*2_                                                                                                           |

_*1 On Raspberry Pi OS 32bit you **must** add `arm_64bit=0` to your `/boot/config.txt` and reboot once before installing Photobooth._  
_The Raspberry Pi foundation uses a 64bit kernel while the system is 32bit. The Installation fails because the v4l2loopback module can't be compiled for a 32bit OS while using a 64bit kernel._

_*2 Capture from webcam is possible e.g. using [fswebcam](https://www.sanslogic.co.uk/fswebcam/), else it only works on access via [http://localhost](http://localhost)_


## Prerequisites

| Software          | Required version       | Note
|-------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Node.js           | >=v18.17.0             | Currently only v18 is tested. Our installer will check your Node.js version and suggest an update/downgrade if needed. Versions below v18 aren't supported anymore. |
| npm               | >=v9.6.0               |                                                                                                                                     |
| php               | >=v8.2                 |                                                                                                                                     |
| Webserver         |                        | Apache, Nginx or lighttpd is needed. By default Apache webserver is installed by our installer.                                     |

## Installation

* [Installation on Raspberry Pi OS (previously called Raspbian)](Installation-on-Debian)
* [Installation on Debian / Debian based distributions](Installation-on-Debian#installation-on-debian--debian-based-distributions)
* [Installation on Windows](Installation-on-Windows)

---

## Update Photobooth

* [Update Photobooth](Update-Photobooth)

---
