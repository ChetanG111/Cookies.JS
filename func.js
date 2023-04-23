const consoleOutput = document.getElementById('console-output')
const consoleInput = document.getElementById('console-input')
const goalDis = document.getElementById('goal')

let lIndex = 1;

let goals = {
    '1' : ['Select the Cookie'],
    '2' : ['Select the Cookies']
}

let sols = {
    '1': ['document.getElementById("cookie")', 'document.getElementById("cookie");'],
    '2' : ['document.getElementByClassName("cookie")', 'document.getElementByClassName("cookie");' ]
}

consoleInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    const code = consoleInput.value;

    let flag = false;
    for (let i = 0; i < sols[lIndex.toString()].length; i++){
        if(code === sols[lIndex.toString()][i])
        {
            LevelPassed()
            flag = true;
            break;
        }
    }

    if(!flag)
    {
        consoleOutput.value += ">> Oops! There's Something wrong with your code\n"
        console.log(lIndex)
    }
    consoleInput.value = '';
  }
});


function LevelPassed()
{
    consoleOutput.value += ">> You Passed the level\n";
    if(lIndex < Object.keys(goals).length)
    {
        lIndex += 1;
    }
    console.log(lIndex)
    UpdateGoalDis()
}

function UpdateGoalDis()
{
    goalDis.innerHTML = goals[lIndex]
}