let education = document.getElementById('education').classList
let skills = document.getElementById('skills').classList
let experience = document.getElementById('experience').classList
let education_btn = document.getElementById('education_btn').classList
let skills_btn = document.getElementById('skills_btn').classList
let experience_btn = document.getElementById('experience_btn').classList

function resume_change(info)
{
    if(info==1)
    {
        if (education.contains('resume_hidden'))
        {
            education.add('resume_visible')
            education.remove('resume_hidden')
            education_btn.add('resume_select')
            if (skills.contains('resume_visible'))
            {
                skills.remove('resume_visible')
                skills.add('resume_hidden')
                skills_btn.remove('resume_select')
            }
            else
            {
                experience.remove('resume_visible')
                experience.add('resume_hidden')
                experience_btn.remove('resume_select')
            }
        }
    }
    else if(info==2)
    {
        if (skills.contains('resume_hidden'))
        {
            skills.add('resume_visible')
            skills.remove('resume_hidden')
            skills_btn.add('resume_select')
            if (education.contains('resume_visible'))
            {
                education.remove('resume_visible')
                education.add('resume_hidden')
                education_btn.remove('resume_select')
            }
            else
            {
                experience.remove('resume_visible')
                experience.add('resume_hidden')
                experience_btn.remove('resume_select')
            }
        }
    }
    else
    {
        if (experience.contains('resume_hidden'))
        {
            experience.add('resume_visible')
            experience.remove('resume_hidden')
            experience_btn.add('resume_select')
            if (education.contains('resume_visible'))
            {
                education.remove('resume_visible')
                education.add('resume_hidden')
                education_btn.remove('resume_select')
            }
            else
            {
                skills.remove('resume_visible')
                skills.add('resume_hidden')
                skills_btn.remove('resume_select')
            }
        }
    }
    
}

function menu_change(x) 
{
    // x.classList.toggle("change");
    menu_list = document.getElementsByClassName('menu_bar_list')[0]
    if(x.classList.contains("change"))
    {
        menu_list.style.visibility = 'hidden';
        x.classList.remove("change");
    }
    else
    {
        menu_list.style.visibility = 'visible';
        x.classList.add("change");
    }
}

function copy_text()
{
    // console.log("copyed");
    navigator.clipboard.writeText("+918125460302");
}