const consoleInput = document.getElementById('codeBox')
const goalDis = document.getElementById('goal')
const titleDisplay = document.getElementById('titleDis')
const levelDisplay = document.getElementById('lDis')
const topicDis = document.getElementById('A')


let lIndex = 1;

let topic = {
    '1' : 'document.getElementByID("elementID")',
    '2' : 'document.getElementsByClassName("classNames")'
}

let goal = {
    '1' : 'Select the Cookie',
    '2' : 'Select the Cookies'
}

let sols = {
    '1': ['document.getElementById("cookie")', 'document.getElementById("cookie");'],
    '2' : ['document.getElementByClassName("cookie")', 'document.getElementByClassName("cookie");' ]
}

let title = {
    '1':'Retrieve Element using ID',
    '2':'Retrieve Element using ClassName'
}

consoleInput.addEventListener('keydown', (event) => {
  if (event.key === '`') {
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
        consoleInput.value = 'Wrong👎❌😡'
    }
  }
});


function LevelPassed()
{
    if(lIndex < Object.keys(goal).length)
    {
        lIndex += 1;
    }
    UpdateDisplays()
}

function UpdateDisplays()
{
    goalDis.innerHTML = goal[lIndex]
    titleDisplay.innerHTML = title[lIndex]
    levelDisplay.innerHTML = 'Level ' + lIndex.toString() + ' of 32'
    topicDis.innerHTML = topic[lIndex]
}
