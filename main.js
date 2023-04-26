const consoleInput = document.getElementById('codeBox')
const goalDis = document.getElementById('goal')
const titleDisplay = document.getElementById('titleDis')
const levelDisplay = document.getElementById('lDis')
const topicDis = document.getElementById('A')
const ExamplesDis = document.getElementById('exs')
const infoDis = document.getElementById('info')


let lIndex = 1;


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

function previousLevel()
{
    if(lIndex > 1)
    {
        lIndex -=1;
    }
    UpdateDisplays();
}

function nextLevel()
{
    if(lIndex < number_of_Levels)
    {
        lIndex += 1;
    }
    UpdateDisplays();
}
//To mark level as done
function LevelPassed()
{
    if(lIndex < number_of_Levels)
    {
        lIndex += 1;
    }
    UpdateDisplays();
}

function UpdateDisplays()
{
    goalDis.innerHTML = goal[lIndex];
    titleDisplay.innerHTML = title[lIndex];
    levelDisplay.innerHTML = 'Level ' + lIndex.toString() + ' of 32';
    topicDis.innerHTML = topic[lIndex];
    ExamplesDis.innerHTML = ex[lIndex];
    infoDis.innerHTML = inf[lIndex];
}
