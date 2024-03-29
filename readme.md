# Chrome Extensions, made with chrome API's


## Appendix

This repo consist of 4 chrome extensions which is very useful for the everyday users.
## List of Extensions
- Budget Manager
- Page Font Style
- Wikkit - Wikipedia
- Speakit

## Languages Used

Languages used in this project are :

- html
- css
- Javascript, jquery

### About the Extension : 

| Extension name | Description |
| ------ | ------ |
| Budget Manager | This Extension is used to keep track of your online spandings and purchase, after exery spendings you must add the spending amount to this extension or you can just select the amount with the cursor, then right click => the options tab will open => select `add to manager` then the amount will be added to the extension.<br> You can also set Spending Limit in the options menu of this extension, so if you exceeded the limit you'll get the notification, stating that you've exceeded the limit and you can reset the limit or reset the spending amount.<br>![App Screenshot](images/bm1.png) ![App Screenshot](images/bm2.png) ![App Screenshot](images/bm3.png) ![App Screenshot](images/bm4.png) |
| Page Font Style | Page Font Style extension will only be working on some pages which is listed in `content_script` in manifest file, the site url which is not listed in `content_script` cannot use this extension and it'll be grayed out. So basically this extension can change the color and font style of a text in a website by accessing it's `DOM`. At my case I've listed 4 sites where this extensions will work.<br>![App Screenshot](images/pf1.png) ![App Screenshot](images/pf2.png) ![App Screenshot](images/pf3.png)  |
| Wikkit | Wikkit Extension is used to search a meaning for specif word by just selecting the text and pressing right click and select wikkit in options, so that the new wikipedia tab will open and you can find the meaning of the word there. <br><br> ![App Screenshot](images/wi1.png) ![App Screenshot](images/wi2.png)|
| Speakit | Speakit Extension is used to speak the selected select by chrome's api voice, it can be done by just selecting the text and press right click and then select `speak` to speak the text. <br><br> ![App Screenshot](images/sp1.png) |


### To load This extensions to your browser
#### clone this repo : 

```javascript
git@github.com:Praveenms13/chrome-extensions.git
```

#### and go to the default extension page of your website (if you are using other browser means just replace chrome i.e., brave://extension/)
```
chrome://extensions/
```

### You may see this page : 
#### Click "Load Unpacked" which is top left corner and your file system will open, just select the particular extension file and click ok, then you can find it on your browser.

![App Screenshot](images/page.png)


