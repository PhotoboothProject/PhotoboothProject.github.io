### Updating Photobooth on Raspbian

#### Updating from v1.9.x or older
To update from an old version to v2.x or to v3.x it's recommend to [make a clean installalation](home#installation).


#### Updating from v2.x or v3.x

**If you have the git-version of Photobooth installed:**

First, make sure there's no old installer available:  
```
rm -f install-photobooth.sh
```

To update an existing Photobooth-Installation via git, run below commands in your terminal:  
```
wget https://raw.githubusercontent.com/PhotoboothProject/photobooth/dev/install-photobooth.sh
sudo bash install-photobooth.sh --update
```

