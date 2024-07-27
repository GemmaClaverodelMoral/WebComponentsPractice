import ('./my-card.js')

const jellySwitch = document.querySelector('jelly-switch') // el componente de terceros
const myCard = document.querySelector('my-card')   // mi componente
jellySwitch.style.setProperty('--off-color', 'green'); // verde cuando esta en off
jellySwitch.style.setProperty('--on-color', '#5a6cb2'); // azul fonde de zapato cuando esta en on

function handleToggle()
{
    if (jellySwitch.hasAttribute('checked')) {
        myCard.style.setProperty('--primary-background', 'green');
    } else {
        myCard.style.setProperty('--primary-background', '#5a6cb2');
    }
}
    
document.addEventListener('DOMContentLoaded', () => {
    jellySwitch.addEventListener('toggle',handleToggle)
})