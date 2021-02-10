const ask=(questions,yes,no)=>{
    if (confirm(question)) yes();
    else no();
}

ask(
    "do you agree",
    ()=>{alert("you agreed. ");}, 
    ()=>{alert("you cancelled the execution. ");
})