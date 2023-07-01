### This repository is only for the tech literate. Usage of this requires modification of files in [SillyTavern](https://github.com/SillyTavern/SillyTavern), proceed with the below instructions at your own risk. 

## What is this module and how to use this?
- # The what:
This has been created for convenient editing of the `filterText.js` which can be used to filter out XML tags if you're using the official Anthropic API(Definitely not jealous of you), official OpenAI API, or Poe with [SillyTavern](https://github.com/SillyTavern/SillyTavern) (Instructions on how to proceed with this will be present in another repository or a [Rentry](https://rentry.co/) file linked below)
- # The how:
First, run the `newconfig.bat` file if you are on Windows. This will install the node packages required for the interface and then automatically open the interface in your default browser. Once the "Meet Zlaude" tab has been opened, you should see this:
![The low-effort interface](https://i.imgur.com/LyCvLL2.png)
- The type bar under the **XML tags** heading will allow you to add a filter for XML tags. Just input the *text* of your tag in this bar. ***Example***: If the tag you want filtered is `<text>`, then type `text` in the typebar. The first checkbox allows filtering the values enclosed between the tags along with the tags themselves, while the Second checkbox filters the Tags only. Do remember to hit `Save` once you have entered your values, do not enter the same value twice. In case you are met with a situation wherein the console throws the "const has already been defined"(or anything like this) error, this should be fixable using the 2 methods below:
   - Open the `filterText.js` file and find the duplicate regular expression, and change the name of the regular expression to anything else if you really need it to stay for whatever reason. Make sure to make the appropriate changes in the `.replace(textRe, '')`, `textRe` being the name of the regular expression you just changed.
   - Delete the duplicate const and the `.replace` thingy for it. Yup, just that.
- The rest is pretty self-explanatory, if you really have no clue about how to use the other parts of the interface, read [this](https://github.com/Flamanon/Zlaude#filter-configuration).

## Now what?
You will have to make certain changes in the `server.js` file in [SillyTavern](https://github.com/SillyTavern/SillyTavern) and also paste your modified `filterText.js` file in the SillyTavern folder to enable the `filterText` function. A rentry explaining the process will be shared below. 
