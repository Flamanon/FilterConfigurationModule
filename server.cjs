const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/saveXMLValues', (req, res) => {
    const { input, removeTagsText, removeTags } = req.body;

    if (input) {
        const reName = `${input}Re`;
        let regex = '';

        if (removeTagsText) {
            regex = `const ${reName} = /<${input}>[\\s\\S]*?<\\/${input}>/g;`;
        } else if (removeTags) {
            regex = `const ${reName} = /<\\/?${input}>/g;`;
        }

        updateFilterTextFile(regex, reName, res);
    } else {
        res.status(400).send('Invalid input');
    }
});

app.post('/api/saveBracketValues', (req, res) => {
    const { input } = req.body;

    if (input) {
        const reName = `${input}Re`;
        const regex = `const ${reName} = /\\(${input}:[\\s\\S]*?\\)/g;`;

        updateFilterTextFile(regex, reName, res);
    } else {
        res.status(400).send('Invalid input');
    }
});

app.post('/api/saveIndividualValues', (req, res) => {
    const { input } = req.body;

    if (input) {
        const reName = `${input}Re`;
        const regex = '';

        updateFilterTextFile(regex, reName, res);
    } else {
        res.status(400).send('Invalid input');
    }
});

function updateFilterTextFile(regex, reName, res) {
    fs.readFile('filterText.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to read filterText.js');
            return;
        }

        const regexComment = '// Regular expressions go below this line';
        const replaceComment = '// Replace text goes here';

        const regexIndex = data.indexOf(regexComment) + regexComment.length;
        const replaceIndex = data.indexOf(replaceComment) + replaceComment.length;

        const newContents = data.slice(0, regexIndex) + '\n' + regex + data.slice(regexIndex, replaceIndex) + '\n' + '.replace(' + reName + ', \'\')' + data.slice(replaceIndex);

        fs.writeFile('filterText.js', newContents, 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Failed to update filterText.js');
                return;
            }

            res.sendStatus(200);
        });
    });
}
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});