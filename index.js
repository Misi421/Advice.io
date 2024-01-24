const button = document.getElementById('adviceBtn');
const adviceText = document.getElementById('advice');
const adviceNumber = document.getElementById('adviceNumber');

function showAdvice(advice, adviceId) {
    adviceText.textContent = advice
    adviceNumber.textContent = "ADVICE #" + adviceId
}

async function getAdvice() {
    const url = 'https://api.adviceslip.com/advice';

    let advice = ''

    let adviceId = ''

    try {
        const response = await fetch(url);
        const data = await response.json();

        adviceId = data.slip.id
        advice = data.slip.advice

    } catch (e) {
        console.log(e)
    }

    showAdvice(advice, adviceId)
}

button.addEventListener('click', getAdvice)