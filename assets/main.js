const toggle = document.getElementById('toggleToDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
    
    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

function ReceiveChangeNumber(){
    var receivedValue = document.getElementById('text').value;
    var changedNumber = receivedValue.slice(-3, -2);
    var groupNumber = document.getElementById('groupText');

    if (changedNumber == 3) {
        groupNumber.innerHTML = `Your group is an Evening group.`
    }

    else if (changedNumber == 2) {
        groupNumber.innerHTML = `Your group is an Afternoon group.`
    }

    else if (changedNumber == 1) {
        groupNumber.innerHTML = `Your group is a Morning group.`
    }

    else {
        groupNumber.innerHTML = `Such a group does not exist!`
    }
}