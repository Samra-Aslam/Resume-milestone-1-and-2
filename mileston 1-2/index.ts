const togglebutton = document.getElementById('skills-toggle') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click',()=>{
    if(skills.style.display==='none'){
        skills.style.display='block'
    }else{
        skills.style.display='none'
    }
});