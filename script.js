// ===== VOCABULARY MATCH GAME =====
let vocabGameState = {
    currentPair: 0,
    score: 0,
    correct: 0,
    incorrect: 0,
    selectedWord: null,
    selectedMeaning: null,
    pairs: []
};

const vocabularyData = [
    { word: 'Apple', meaning: 'A round red or green fruit' },
    { word: 'Book', meaning: 'A set of printed pages bound together' },
    { word: 'Cat', meaning: 'A small domestic animal with whiskers' },
    { word: 'Door', meaning: 'An entrance to a room or building' },
    { word: 'Eye', meaning: 'The organ used for seeing' },
    { word: 'Flower', meaning: 'A beautiful plant that produces colorful petals' },
    { word: 'Guitar', meaning: 'A stringed musical instrument' },
    { word: 'House', meaning: 'A building where people live' }
];

function startVocabularyGame() {
    // Show modal
    const modal = document.getElementById('vocabGameModal');
    modal.classList.remove('hidden');
    
    // Initialize game state
    vocabGameState = {
        currentPair: 0,
        score: 0,
        correct: 0,
        incorrect: 0,
        selectedWord: null,
        selectedMeaning: null,
        pairs: vocabularyData.slice(0, 6) // Use first 6 pairs
    };
    
    // Shuffle meanings
    const shuffledMeanings = vocabGameState.pairs.map(p => p.meaning).sort(() => Math.random() - 0.5);
    
    // Render game
    renderVocabGame();
}

function renderVocabGame() {
    const wordsContainer = document.getElementById('wordsContainer');
    const meaningsContainer = document.getElementById('meaningsContainer');
    
    wordsContainer.innerHTML = '';
    meaningsContainer.innerHTML = '';
    
    // Create word buttons
    vocabGameState.pairs.forEach((pair, index) => {
        const wordBtn = document.createElement('button');
        wordBtn.className = 'vocab-item';
        wordBtn.textContent = pair.word;
        wordBtn.onclick = () => selectWord(index, wordBtn);
        wordBtn.id = `word-${index}`;
        wordsContainer.appendChild(wordBtn);
    });
    
    // Create meaning buttons (shuffled)
    const shuffledIndices = vocabGameState.pairs.map((_, i) => i).sort(() => Math.random() - 0.5);
    shuffledIndices.forEach((originalIndex) => {
        const pair = vocabGameState.pairs[originalIndex];
        const meaningBtn = document.createElement('button');
        meaningBtn.className = 'vocab-item';
        meaningBtn.textContent = pair.meaning;
        meaningBtn.onclick = () => selectMeaning(originalIndex, meaningBtn);
        meaningBtn.id = `meaning-${originalIndex}`;
        meaningBtn.dataset.originalIndex = originalIndex;
        meaningsContainer.appendChild(meaningBtn);
    });
    
    updateVocabStats();
}

function selectWord(index, element) {
    // Remove previous selection
    document.querySelectorAll('#wordsContainer .vocab-item.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    vocabGameState.selectedWord = index;
    checkVocabMatch();
}

function selectMeaning(index, element) {
    // Remove previous selection
    document.querySelectorAll('#meaningsContainer .vocab-item.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    vocabGameState.selectedMeaning = index;
    checkVocabMatch();
}

function checkVocabMatch() {
    if (vocabGameState.selectedWord === null || vocabGameState.selectedMeaning === null) {
        return;
    }
    
    const feedbackArea = document.getElementById('feedbackArea');
    
    if (vocabGameState.selectedWord === vocabGameState.selectedMeaning) {
        // Correct match!
        vocabGameState.score += 10;
        vocabGameState.correct += 1;
        
        feedbackArea.innerHTML = '<div class="feedback correct">✓ Correct! Great job!</div>';
        feedbackArea.classList.add('show');
        
        // Disable matched pair
        document.getElementById(`word-${vocabGameState.selectedWord}`).style.opacity = '0.5';
        document.getElementById(`word-${vocabGameState.selectedWord}`).disabled = true;
        document.getElementById(`meaning-${vocabGameState.selectedMeaning}`).style.opacity = '0.5';
        document.getElementById(`meaning-${vocabGameState.selectedMeaning}`).disabled = true;
        
        // Remove selection
        vocabGameState.selectedWord = null;
        vocabGameState.selectedMeaning = null;
        
        // Check if game is complete
        setTimeout(() => {
            if (vocabGameState.correct === vocabGameState.pairs.length) {
                feedbackArea.innerHTML = `<div class="feedback complete">🎉 Game Complete! Final Score: ${vocabGameState.score}</div>`;
            }
        }, 1500);
    } else {
        // Incorrect match
        vocabGameState.incorrect += 1;
        if (vocabGameState.score > 0) vocabGameState.score -= 2;
        
        feedbackArea.innerHTML = '<div class="feedback incorrect">✗ Try again!</div>';
        feedbackArea.classList.add('show');
        
        // Remove selection after delay
        setTimeout(() => {
            vocabGameState.selectedWord = null;
            vocabGameState.selectedMeaning = null;
            document.querySelectorAll('#wordsContainer .vocab-item.selected').forEach(el => {
                el.classList.remove('selected');
            });
            document.querySelectorAll('#meaningsContainer .vocab-item.selected').forEach(el => {
                el.classList.remove('selected');
            });
            feedbackArea.classList.remove('show');
        }, 1000);
    }
    
    updateVocabStats();
}

function updateVocabStats() {
    document.getElementById('vocabScore').textContent = vocabGameState.score;
    document.getElementById('vocabCorrect').textContent = vocabGameState.correct;
    document.getElementById('vocabIncorrect').textContent = vocabGameState.incorrect;
}

function restartVocabGame() {
    startVocabularyGame();
}

function closeVocabGame() {
    const modal = document.getElementById('vocabGameModal');
    modal.classList.add('hidden');
}

// ===== QUESTION FORMATION GAME =====
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

// ===== VERB CONJUGATION GAME =====
function startVerbGame() {
    const verbs = [
        { infinitive: 'to be', present: 'am/is/are', past: 'was/were' },
        { infinitive: 'to have', present: 'have/has', past: 'had' },
        { infinitive: 'to go', present: 'go/goes', past: 'went' },
        { infinitive: 'to do', present: 'do/does', past: 'did' },
        { infinitive: 'to say', present: 'say/says', past: 'said' }
    ];
    
    alert('Verb Conjugation Game: Practice basic verb forms!\n\n' +
        verbs.map((v, i) => `${i+1}. ${v.infinitive}\n   Present: ${v.present}\n   Past: ${v.past}`).join('\n\n'));
}

// ===== LISTENING EXERCISE GAME =====
function startListeningGame() {
    const exercises = [
        { phrase: 'Hello, how are you?', translation: 'Hola, ¿cómo estás?' },
        { phrase: 'Nice to meet you', translation: 'Mucho gusto' },
        { phrase: 'Thank you very much', translation: 'Muchas gracias' },
        { phrase: 'Where is the bathroom?', translation: '¿Dónde está el baño?' },
        { phrase: 'I do not understand', translation: 'No entiendo' }
    ];
    
    alert('Listening Exercise: Listen and learn!\n\n' +
        exercises.map((e, i) => `${i+1}. "${e.phrase}"\n   Translation: ${e.translation}`).join('\n\n'));
}

// Make functions globally available
window.startVocabularyGame = startVocabularyGame;
window.closeVocabGame = closeVocabGame;
window.restartVocabGame = restartVocabGame;
window.startQuestionGame = startQuestionGame;
window.startVerbGame = startVerbGame;
window.startListeningGame = startListeningGame;
