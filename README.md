# FastTagging for Brackets
An extension for [Brackets](https://github.com/adobe/brackets/) to generate
a tag with classes ans id in a really fast way.

### How to Install
1. Select **Brackets > File > Extension Manager...**
2. Search for this extension.
3. Click on the **Install** button.

### How to Use FastTagging
FastTagging get you rid of wasting time with a basic and hard repetitive task on HTML writing: Starting tags, write and define an id and write and define one or more classes.

With FastTagging you can only type the tag name (without the angle brackets <>) followed by a dot (.) and one or more class names, so you press the shortcut "CTRL (CMD for MAC) + SHIFT + . (dot)" and Surprise! Your tag is created!

    a. p.description (pressing SHORTCUT) => <p class="description"></p>
    b. div.header.black-header (pressing SHORTCUT) => <div class="header black-header"></div>
    c. h2 (pressing SHORTCUT) => <h2></h2>
    d. mycustomtag (pressing SHORTCUT) => <mycustomtag></mycustomtag>

If you don't want to type any tag name before the dot (.), no problem! FastTagging will put there a div for you:

    a. .header.black-header (pressing SHORTCUT) => <div class="header black-header"></div>
    b. .card (pressing SHORTCUT) => <div class="card"></div>

So, you say: "WoW, that's great! But what about the id?" Let's talk about this right now. To fill an id for your new tag, you can put a hashtag (#) either right after your tag name or at the beginning of your typing. See:

    a. p#warning  (pressing SHORTCUT) => <p id="warning"></p>
    b. h1#pagetitle.basetheme (pressing SHORTCUT) => <h1 id="pagetitle" class="basetheme"></h1>
    c. #pagebody.basetheme.shadow (pressing SHORTCUT) => <div id="pagebody" class="basetheme shadow"></div>

Furthermore, for us as tableless developers, we have the possibility to make a div tag fastly:

    a. . (pressing SHORTCUT) => <div class=""></div>
    b. # (pressing SHORTCUT) => <div></div>

It worths to note that FastTagging adds a menu option at "Edit" menu called **Auto Create TAG**, so you can use it if wish.

So, that's it! Enjoy it and tell us if there's any doubt or bug.

### License
GPL-licensed -- see `main.js` for details.

### Compatibility
Tested on Brackets Release 1.9 on Windows 10.