const adjectives = ['Happy', 'Silly', 'Kind', 'Brave', 'Bright', 'Fancy', 'Zesty', 'Salty', 'Cheerful', 'Crazy', 'Jolly', 'Curious', 'Friendly', 'Gentle', 'Sassy', 'Spicy', 'Fluffy', 'Playful', 'Pretty', 'Quirky', 'Sparkly', 'Tasty', 'Witty'];
const nouns = ['Dog', 'Cat', 'Bird', 'Fish', 'Turtle', 'Rabbit', 'Hamster', 'Parrot', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Monkey', 'Panda', 'Unicorn', 'Dragon', 'Mermaid', 'Dolphin', 'Octopus', 'Butterfly', 'Bee'];
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Gray', 'Black', 'White'];

function generateUsername() {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const username = `${capitalize(adjective)}${capitalize(noun)}${capitalize(color)}`;
    document.getElementById('username').textContent = username;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

