meteor-jasmine
==============

Packaging jasmine unit tests for meteor. Currently only supports tests of client-side code.


Demo App
========
https://github.com/rainbough/jasmine-test-meteor


Usage
=====

This has not been released on atmosphere yet - if you want to try it out add it to your smart.json file like this:
```
{
  "packages": {
    "jasmine": {
        "git": "https://github.com/rainbough/meteor-jasmine.git"
      }
  }
}
```
After jasmine is downloaded into your app you will need to run:
```
meteor add jasmine
```

Add the specRunner template into one of your templates like this:
```
{{> specRunner}}
```

Put your spec files in a "spec" folder that is only accessible to the client.

Currently only client-side testing is supported. The spec folder must be only available to the client - i.e. put in the client folder. Jasmine can only find code to test that is available to the client. Thus code that is availabe to client only or both client and server can be tested, but server-only code cannot be tested. 

Example
=======
After installing copy the contents of the example folder (jasmine/example) into your client directory. Make sure you have put the {{> specRunner }} template somewhere you can see. 

Note
====
Because of the different style of javascript that meteor uses, some minor changes had to be made to the original examples available in the jasmine source code.

Specifically in players.js and songs.js line 1:

```
function Player() {
}

function Song(){
}
```

was changed to:

```
Player = function(){};

Song = function(){};
```
respectively.

Other differences may exist between how meteor and jasmine deal with javascript code. This is a very new project and I expect more bugs to arise.

Docs
====
Please visit the jasmine documentation to find out more about writing tests.
http://jasmine.github.io/2.0/introduction.html




