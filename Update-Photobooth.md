

<a href="https://photoboothproject.github.io" class="button hidden">Home</a>
<a href="https://photoboothproject.github.io/Changelog" class="button hidden">Changelog</a>
<a href="https://photoboothproject.github.io/INSTALL" class="button hidden">Install</a>
<a href="https://photoboothproject.github.io/FAQ_MENU" class="button hidden">FAQ</a>

---

### Updating Photobooth on Raspbian

#### Updating from v1.9.x or older
To update from an old version to v2.x or to v3.x it's recommend to [make a clean installalation](INSTALL).


#### Updating from v2.x or v3.x

**If you have the git-version of Photobooth installed:**

First, make sure there's no old installer available:  
```
rm -f install-photobooth.sh
```

To update an existing Photobooth-Installation via git, run below commands in your terminal. A valid OS username must be passed to the installer:  
```
wget https://raw.githubusercontent.com/PhotoboothProject/photobooth/dev/install-photobooth.sh
sudo bash install-photobooth.sh --update --username='<YourUsername>'
```

**Special note:**

If you have accessed Photobooth earlier from your Browser,  
please clear your Browsers Cache once to avoid graphical glitches or being unable to save config changes using the Adminpanel.
