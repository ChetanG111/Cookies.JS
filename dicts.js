const number_of_Levels = 100;

//Examples for Each Level
let ex = 
{
    '1' : '<span id="B">document.getElementById("nice")</span> retrieves the element with <span id="B">id="nice"<span>',
}

//Main Topic of Each Level
let topic = {
    '1' : 'document.getElementByID("elementID")',
    '2' : 'document.getElementsByClassName("classNames")'
}

//Goals for Each Level
let goal = {
    '1' : 'Select the Cookie',
    '2' : 'Select the Cookies'
}

//Solutions for Each Level
let sols = {
    '1': ['document.getElementById("cookie")', 'document.getElementById("cookie");'],
    '2' : ['document.getElementByClassName("cookie")', 'document.getElementByClassName("cookie");' ]
}

//Title of the Level
let title = {
    '1':'Retrieve Element using ID',
    '2':'Retrieve Element using ClassName'
}

//Information About the Function or Something
let inf = 
{
    '1':"• <span id='B'>getElementByID</span> is a method used to Retrieve an element using its ID. <br>• ID's are unique identifiers and they are meant to be different for every element."
}