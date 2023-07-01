

function filterText(text) {
    // Regular expressions go below this line
const thinkingRe = /<thinking>[\s\S]*?<\/thinking>/g;
const OOCtRe = /<OOC>[\s\S]*?<\/OOC>/g;
const drafteRe = /<draft>[\s\S]*?<\/draft>/g;
const repetitionRe = /<repetition>[\s\S]*?<\/repetition>/g;
    const pruneRe = /<prune>[\s\S]*?<\/prune>/g;
    const summaryRe = /<summary>[\s\S]*?<\/summary>/g;
    const chatRe = /<\/?CHAT>/g;
    const modRe = /<\/?mod>/g;
    const threadRe = /<\/?thread>/g;
    const humanRe = /<\/?human>/g;
    const respondRe = /\[You respond here\]/g;
    const chrRe = /<\/?CHR>/g;
    const startNewChatRe = /\[Start a new chat\]/g;
    const humanNoteRe = /\[Human note: [^\]]*\]/g;
    const assistantNoteRe = /\[Assistant note: [^\]]*\]/g;
    const oocRe = /\(OOC:[\s\S]*?\)/g;
    const spaceoocRe = /\( OOC:[\s\S]*?\)/g;
    const fedRe = /\{Human Feedback:[\s\S]*?\}/g;
    const repRe = /<\/?repetition>/g;
    const newRe = /<prune>[\s\S]*?<\/prune>/g;

    
    return text.replace(pruneRe, '').replace(summaryRe, '').replace(chatRe, '').replace(modRe, '').replace(threadRe, '').replace(humanRe, '').replace(respondRe, '').replace(chrRe, '').replace(startNewChatRe, '').replace(humanNoteRe, '').replace(assistantNoteRe, '').replace(oocRe, '').replace(spaceoocRe, '')
        .replace(/Assistant:/g, '')
        .replace(/Human:/g, '')
        .replace(/A:/g, '')
        .replace(/Here is my response/g, '')
        .replace(/Here is my attempt/g, '').replace(fedRe, '').replace(repRe,'')
        // Replace text goes here
.replace(thinkingRe, '')
.replace(OOCtRe, '')
.replace(drafteRe, '')
.replace(repetitionRe, '').replace(newRe, '')
        .replace(/H:/g, '');
}
module.exports = filterText;
