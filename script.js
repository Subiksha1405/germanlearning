// Function to handle quiz submission
function submitQuiz() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let score = 0;

    // Correct answers for all 10 questions
    const correctAnswers = {
        q1: 'a', // Hund
        q2: 'a', // Buch
        q3: 'a', // Wasser
        q4: 'a', // Haus
        q5: 'a', // Stuhl
        q6: 'a', // Katze
        q7: 'a', // Vogel
        q8: 'a', // Fenster
        q9: 'a', // Tisch
        q10: 'a'  // Baum
    };

    // Check answers
    formData.forEach((value, key) => {
        if (value.toLowerCase() === correctAnswers[key].toLowerCase()) {  // Case-insensitive comparison
            score++;
        }
    });

    // Alert score with personalized feedback
    alert(`Your score: ${score}/10`);

    // Optionally, you could display a more detailed feedback on the page itself
    document.getElementById('quizFeedback').textContent = `Your score: ${score}/10`;
}

// Function to handle daily challenge submission
function submitChallenge() {
    const sentence1 = document.getElementById('sentence1').value;
    const sentence2 = document.getElementById('sentence2').value;
    const sentence3 = document.getElementById('sentence3').value;

    // Example correct sentences (or answers to compare with)
    const correctSentences = {
        sentence1: "Das Haus ist groß.", // Correct sentence for "Haus"
        sentence2: "Ich esse einen Apfel.", // Correct sentence for "Apfel"
        sentence3: "Der Hund ist mein Freund." // Correct sentence for "Hund"
    };

    let feedback = '';

    // Compare the user's input with the correct sentences and provide feedback
    if (sentence1.trim().toLowerCase() === correctSentences.sentence1.toLowerCase()) {
        feedback += "<p>Sentence 1 is correct!</p>";
    } else {
        feedback += "<p>Sentence 1 is not quite right. Example: " + correctSentences.sentence1 + "</p>";
    }

    if (sentence2.trim().toLowerCase() === correctSentences.sentence2.toLowerCase()) {
        feedback += "<p>Sentence 2 is correct!</p>";
    } else {
        feedback += "<p>Sentence 2 is not quite right. Example: " + correctSentences.sentence2 + "</p>";
    }

    if (sentence3.trim().toLowerCase() === correctSentences.sentence3.toLowerCase()) {
        feedback += "<p>Sentence 3 is correct!</p>";
    } else {
        feedback += "<p>Sentence 3 is not quite right. Example: " + correctSentences.sentence3 + "</p>";
    }

    // Display feedback
    const feedbackElement = document.getElementById('feedback');
    if (feedbackElement) {
        feedbackElement.innerHTML = feedback;
    } else {
        console.error("Feedback element not found.");
    }
}

// Function to update the header image dynamically
function updateHeaderImage() {
    const headerImage = document.querySelector('.header-image');
    if (headerImage) {
        headerImage.src = "images/banner.jpg";  // Make sure the path is correct
        headerImage.alt = "German Language Learning Banner";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const challenges = [
        "Learn 5 new German words today!",
        "Watch a 5-minute German video and summarize it.",
        "Try to write 3 sentences in German using new vocabulary.",
        "Review 3 grammar points you learned this week.",
        "Converse with a language partner in German for 10 minutes."
    ];

    // Set the daily challenge based on the current day
    const today = new Date();
    const challengeIndex = today.getDate() % challenges.length;
    const challengeText = challenges[challengeIndex];
    const challengeTextElement = document.getElementById('challengeText');
    if (challengeTextElement) {
        challengeTextElement.textContent = challengeText;
    } else {
        console.error("Challenge text element not found.");
    }

    // Update the header image dynamically
    updateHeaderImage();
});
