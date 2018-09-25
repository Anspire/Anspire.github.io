
document.addEventListener("DOMContentLoaded",function() {
		"use strict";
  //var title = $(".title");
  var terminal = document.getElementById('terminal')

  var commandHistory = []
  var historyIndex = 0

  var command = "";
  var dot = '●'
/*##########################################################################################################
##############################################################################################################*/
//show ###############################################################################

var arrowPrompt = '➜ '
var questionPrompt = '? '
var dotPrompt = '● '
var passwordPrompt = '[anspire] password for '

// DISPLAY FUNCTIONS
   function output(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement('SPAN')
     span.className = 'output'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function error(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.className = 'error'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function info(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.className = 'info'
     terminal.appendChild(formatString(span, str))
     terminal.append("\n")
   }

   function prompt() {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = arrowPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }
   function promptNode() {
     var terminal = document.getElementById('nodeterminal')
     var span = document.createElement("SPAN")
     span.innerText = arrowPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }

   function dotPrompt() {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = dotPrompt
     span.className = 'prompt'
     terminal.appendChild(span)
   }

   function questionPrompt(str) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     var spanStr = document.createElement("SPAN")
     span.innerText = questionPrompt
     spanStr.innerText = str + '.. '
     span.className = 'prompt'
     spanStr.className = 'question'
     terminal.appendChild(span)
     terminal.appendChild(spanStr)
   }

   function passwordPrompt(user) {
     var terminal = document.getElementById('terminal')
     var span = document.createElement("SPAN")
     span.innerText = passwordPrompt + user + ': '
     span.className = 'question'
     terminal.appendChild(span)
   }

   function nodeTerminal() {
     var terminal = document.getElementById('terminal')
     terminal.append("\n")
     terminal.style.display = 'none'

     var main = document.getElementById('main')
     var div = document.createElement("DIV")
     div.className = 'terminal'
     div.id = 'nodeterminal'
     main.appendChild(div)
     promptNode()
   }

   function rootTerminal() {
     var terminal = document.getElementById('terminal')
     terminal.style.display = 'block'
     var main = document.getElementById('main')
     main.removeChild(document.getElementById("nodeterminal"))
   }
// END DISPLAY FUNCTIONS

// UTILITY
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  function pageScroll() {
    var offset = terminal.scrollHeight
    window.scrollTo(0,offset)
    //console.log(offset)
  }

  function formatString(span, str) {
    var strs = str.split(' ')
    for (var i = 0; i < strs.length; i++) {
       if (strs[i].startsWith('https://') || strs[i].startsWith('http://') || strs[i].startsWith('file:///')) {
         var a = document.createElement('a')
         a.innerText = strs[i]
         a.className = 'link'
         span.appendChild(a)
         span.append(' ')
       } else {
         span.append(strs[i] + ' ')
       }
     }
    return span
  }
  // END UTILITY
  // Commands ######################################################################################
  //##########################################################################################
	const name_ = 'Ankit Kumar Singh';
	const email_ = 'iamanspire@gmail.com';
	const resumelink_ = 'http://anspire.me/assets/resume.pdf';
	const github_ = 'https://github.com/Anspire';
	const facebook_ = 'https://www.facebook.com/ankitsingh111';
	const telegram_ = 'https://t.me/anspire';
	const playStore_ = 'https://play.google.com/store/apps/developer?id=ANKIT+KUMAR+SINGH';
	const linkedin_ = 'https://www.linkedin.com/in/anspire/';
	const about_ = 'Im a MCA student at Department of Computer Science(School of Engineering & Technology), Pondicherry University, Puducherry. My program is focused on application aspects of Computer Science which includes programming, data structures, computer architecture, algorithm design & analysis, operating systems, object oriented programming, software engineering. Along with these i studied here about web technology,cloud computing, networking and artificial intelligence. Personally im so much interested in Android development, algorithms & data structure, c++ & java programming. apart from above I like Cricket and music.';
	const skills_ = 'Ankit Kumar Singh';
	const certificates_ = 'Ankit Kumar Singh';
	const educations_ = 'Ankit Kumar Singh';
	const portfolio_ = 'Ankit Kumar Singh';

	function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'details.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
						console.log(xobj.responseText);
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }
 var details
 loadJSON(function(response) {
  // Parse JSON string into object
    details = JSON.parse(response);
 });

  const commands = [{
                    "name": "clear",
                    "cmd": "clr",
                    "desc": "Clear screen.",
                    "function": clear
				  }, {
				    "name": "close",
                    "cmd": "c",
                    "desc": "Close terminal.",
				    "function": close
				  }, {
				    "name": "socialAccounts",
                    "cmd": "acc",
                    "desc": "Display all social account links.",
				    "function": socialAccounts
				  }, {
				    "name": "resume",
                    "cmd": "re",
                    "desc": "Download resume.",
				    "function": resume
				  }, {
				    "name": "contact",
                    "cmd": "con",
                    "desc": "Display contact info.",
				    "function": contact
				  }, {
				    "name": "about",
                    "cmd": "ab",
                    "desc": "Display about me.",
				    "function": about
				  }, {
				    "name": "skill",
                    "cmd": "sk",
                    "desc": "Display skills.",
				    "function": skill
				  }, {
				    "name": "portfolio",
                    "cmd": "pofo",
                    "desc": "Display portfolio.",
				    "function": portfolio
				  }, {
				    "name": "certificate",
                    "cmd": "cert",
                    "desc": "Display certificates and bladges.",
				    "function": certification
				  }, {
				    "name": "education",
                    "cmd": "edu",
                    "desc": "Display education details.",
				    "function": education
				  }];


          function clear() {
              var terminal = document.getElementById('terminal')
              terminal.innerText = ''
            }

            function close() {

            }

            function socialAccounts() {
							output(details.socialaccounts.github);
            }

            function resume() {
							var str = 'http://anspire.me/assets/resume.pdf';
							output(str);
							window.open('http://anspire.me/assets/resume.pdf', '_blank');
            }

            function contact() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }

            function about() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }

            function skill() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }

            function portfolio() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }

            function certification() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }

            function education() {
							var str = 'anspire: command not found: ' + command;
							output(str);
            }


/*############################################################################################################
##############################################################################################################*/
  function processCommand() {
    var isValid = false

    // Create args list by splitting the command
    // by space characters and then shift off the
    // actual command.

    var args = command.split(" ")
    var cmd = args[0]
    args.shift()

    // Iterate through the available commands to find a match.
    // Then call that command and pass in any arguments.

    for (var i = 0; i < commands.length; i++) {
      if (cmd === commands[i].name || cmd === commands[i].cmd) {
        commands[i].function(args)
        updateCommandHistory()
        isValid = true
        break
      } else if(cmd === 'help' || cmd === 'h') {
        help()
        updateCommandHistory()
        isValid = true
        break
      }
    }

    // No match was found...
    if (!isValid ) {
        var str = 'anspire: command not found: ' + command;
        output(str);
        updateCommandHistory();
    }

    //clean up.
    command = ''
  }

  function help() {
    var cmdHelp = '\n ● Anspire\n\n  Root Commands:\n  '
    for (var i = 0; i < commands.length; i++) {
			if ((commands[i].name.length + commands[i].cmd.length) > 12) {
      	cmdHelp += commands[i].name + '|' + commands[i].cmd + '\t-' + commands[i].desc + '\n  '
			} else {
				cmdHelp += commands[i].name + '|' + commands[i].cmd + '\t\t-' + commands[i].desc + '\n  '
			}
    }
    output(cmdHelp)
  }

  function updateCommandHistory(){
    commandHistory.push(command)
    historyIndex = commandHistory.length
  }

  // Delete n number of characters from the end of our output
  function erase(n) {
    command = command.slice(0, -n);
      terminal.innerHTML = terminal.innerHTML.slice(0, -n);
  }

  function clearCommand() {
    if (command.length > 0) {
      erase(command.length)
    }
  }

  function appendCommand(str) {
    terminal.append(str)
    command += str
  }

  document.addEventListener("keydown", keydown, false);
  function keydown(e) {

    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    // BACKSPACE
    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (command !== "") {
        erase(1);
      }
    }
      // UP or DOWN
      if (keyCode === 38 || keyCode === 40) {
      // Move up or down the history
        if (keyCode === 38) {
          // UP
          historyIndex--;
          if (historyIndex < 0) {
            historyIndex++;
          }
        } else if (keyCode === 40) {
         // DOWN
          historyIndex++;
          if (historyIndex > commandHistory.length - 1) {
            historyIndex--;
          }
        }

        // Get command
        var cmd = commandHistory[historyIndex];
        if (cmd !== undefined) {
          clearCommand();
          appendCommand(cmd);
        }
    }
  }

  document.addEventListener("keypress", keypress, false);
  function keypress(e) {
    // Make sure we get the right event
    e = e || window.event;
    var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

    if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (command !== "") {
        erase(1);
      }
    }

    // Which key was pressed?
    switch (keyCode) {
      // ENTER
      case 13: {
          terminal.append("\n");
          processCommand();
          prompt();
          break;
      }
      default: {
        appendCommand(String.fromCharCode(keyCode));
      }
    }
  }

  prompt();
});
