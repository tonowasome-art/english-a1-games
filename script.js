// Vocabulary Game
function startVocabularyGame() {
    const vocabularyItems = [
        { word: 'Apple', definition: 'A round red or green fruit' },
        { word: 'Book', definition: 'A set of printed pages bound together' },
        { word: 'Cat', definition: 'A small domestic animal with whiskers' },
        { word: 'Door', definition: 'An entrance to a room or building' },
        { word: 'Eye', definition: 'The organ used for seeing' }
    ];
    
    alert('Vocabulary Match Game: Match words with their meanings!\n\nWords and Definitions:\n' + 
          vocabularyItems.map((item, i) => `${i+1}. ${item.word}: ${item.definition}`).join('\n'));
}

// Question Formation Game
function startQuestionGame() {
    const questions = [
        { question: 'What is your name?', answer: 'My name is...' },
        { question: 'How are you?', answer: 'I am fine, thank you.' },
        { question: 'Where do you live?', answer: 'I live in...' },
        { question: 'What do you do?', answer: 'I am a...' },
        { question: 'What is your favorite color?', answer: 'My favorite color is...' }
    ];
    
    alert('Question Formation Game: Learn how to ask questions!\n\n' + 
          questions.map((q, i) => `${i+1}. Q: ${q.question}\n   A: ${q.answer}`).join('\n\n'));
}

// Verb Conjugation Game
function startVerbGame() {
    const verbs = [
        { infinitive: 'to be', present: 'am/is/are', past: 'was/were' },
        { infinitive: 'to have', present: 'have/has', past: 'had' },
        { infinitive: 'to go', present: 'go/goes', past: 'went' },
        { infinitive: 'to do', present: 'do/does', past: 'did' },
        { infinitive: 'to say', present: 'say/says', past: 'said' }
    ];
    
    alert('Verb Conjugation Game: Practice basic verb forms!\n\n' + 
          verbs.map((v, i) => `${i+1}. Infinitive: ${v.infinitive}\n   Present: ${v.present}\n   Past: ${v.past}`).join('\n\n'));
}

// Listening Exercise
function startListeningGame() {
    const phrases = [
        'Hello, how are you today?',
        'What is your phone number?',
        'I like to read books in the library.',
        'She speaks three languages fluently.',
        'They are playing football in the park.'
    ];
    
    alert('Listening Exercise: Practice understanding English!\n\nCommon phrases to practice:\n\n' + 
          phrases.map((p, i) => `${i+1}. "${p}"`).join('\n\n'));
}

// Initialize the page
console.log('English A1 Learning Games loaded successfully!');
console.log('Click on any game to start playing!');
