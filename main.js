/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** Simple extension that adds a "File > Hello World" menu item. Inserts "Hello, world!" at cursor pos. */
define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus"),
        KeyBindingManager   = brackets.getModule("command/KeyBindingManager");
    
    var KEY_SHORTCUT = "Ctrl-Shift-.";

    //Here we verify if there's an id set, if so, we separate it from tagname
    function searchForId(basetext) {
        var ret = {};
        ret.tagname = "";
        ret.id = "";
        var x = basetext.indexOf("#");
        
        if (x != -1) {
            ret.tagname = (x > 0) ? basetext.substr(0, x) : "div";
            if ((basetext.length - 1) != x) ret.id = ' id="' + basetext.substr(x + 1) + '"';
        } else {
            if (basetext == "") basetext = "div";
            ret.tagname = basetext;
            ret.id = "";
        }
        
        return ret;
    }
    
    // Function used to create the new tag
    function createTag(basetext) {
        
        var tag = "";
        var x = basetext.split(".");
        
        if (basetext != "") {
            if (x.length > 1) {
                var first = true,
                    tagdata = {},
                    classes = "";
                x.forEach(function (item) {
                    if (first) {
                        //tagname = (item != "") ? item : "div";
                        tagdata = searchForId(item);
                        first = false;
                    } else {
                        if (item != "") classes += " " + item;
                    }
                });

                if (classes != "") classes = classes.substr(1); //Removing extra space
                tag = '<' + tagdata.tagname + tagdata.id + ' class="' + classes + '"></' + tagdata.tagname + '>';

            } else {
                var tagdata = searchForId(basetext);
                if (basetext == "") basetext = "div";
                tag = '<' + tagdata.tagname + tagdata.id + '></' + tagdata.tagname + '>';
            }
        }
        
        return tag;
        
    }
    
    // Function to run when the menu item is clicked
    function handleHelloWorld() {
        var editor = EditorManager.getFocusedEditor();
        
        if (editor) {
            
            var document    = editor.document,
                pos         = editor.getCursorPos(),
                line        = document.getLine(pos.line),
                start       = pos.ch,
                end, tags     = "";

            while (start > 0 && (/\S/).test(line.charAt(start - 1))) {
                --start;
            }

            tags = document.getRange({line: pos.line, ch: start}, {line: pos.line, ch: end});
            
            end     = editor.getCursorPos();
            start   = {line: end.line, ch: end.ch - tags.length};
            editor.document.replaceRange(createTag(tags), start, end);
        }
    }
    
    
    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "fasttagging.autocreatetag";   // package-style naming to avoid collisions
    CommandManager.register("Auto Create TAG", MY_COMMAND_ID, handleHelloWorld);
    
    KeyBindingManager.addBinding(MY_COMMAND_ID,
                                     [{key: KEY_SHORTCUT},
                                      {key: KEY_SHORTCUT, platform: "mac"}]);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuItem(MY_COMMAND_ID);
});