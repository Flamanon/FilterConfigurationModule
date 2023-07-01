async function saveXMLValues() {
    const input = document.getElementById('xml-input').value;
    const removeTagsText = document.getElementById('remove-tags-text').checked;
    const removeTags = document.getElementById('remove-tags').checked;

    const data = {
        input,
        removeTagsText,
        removeTags
    };

    try {
        const response = await fetch('/api/saveXMLValues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
    throw new Error('Failed to save XML values');
} else {
    showSuccessMessage('XML values saved successfully');
}
    } catch (error) {
        console.error('Error:', error);
    }
}

async function saveBracketValues() {
    const input = document.getElementById('brackets-input').value;

    const data = {
        input
    };

    try {
        const response = await fetch('/api/saveBracketValues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
    throw new Error('Failed to save bracket values');
} else {
    showSuccessMessage('Bracket values saved successfully');
}
    } catch (error) {
        console.error('Error:', error);
    }
}

async function saveIndividualValues() {
    const input = document.getElementById('individual-input').value;

    const data = {
        input
    };

    try {
        const response = await fetch('/api/saveIndividualValues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
    throw new Error('Failed to save individual values');
    } else {
    showSuccessMessage('Individual values saved successfully');
    }
        
    } catch (error) {
        console.error('Error:', error);
    }
}
function showSuccessMessage(message) {
    const successMessage = document.getElementById('success-message');
    successMessage.innerText = message;
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 4000);
}