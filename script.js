var btn = document.querySelector('.header button')
var loading = document.querySelector('.container .loading')
var info = document.querySelector('.container .info')
var actionText = document.querySelector('.container .loading p')

btn.addEventListener('click', () => {
    if(loading.style.display === 'none') {
        info.style.opacity = '0'
        info.style.display = 'none'

        loading.style.display = 'block'
        loading.style.opacity = '1'
    }
    btn.setAttribute('disabled', true)
    actionText.innerHTML = 'Loading User..........'
    setTimeout(async() => {
        let response = await fetch('https://randomuser.me/api/')
        let data = await response.json()
        if(data) {
            btn.removeAttribute('disabled')
            loading.style.display = 'none'
            loading.style.opacity = '0'

            info.style.opacity = '1'
            info.style.display = 'block'

            let profile = document.querySelector('#profile')
            let fullName = document.querySelector('#fullname')
            let Address = document.querySelector('#Address')
            let emailAddress = document.querySelector('#emailAddress')
            let DOB = document.querySelector('#DOB')
            let Age = document.querySelector('#Age')
            

            let imgSrc = data.results[0].picture.large
            let fullname = data.results[0].name.title+ '.' +data.results[0].name.first+ ' ' +data.results[0].name.last
            let address = data.results[0].location.street.number+',' +data.results[0].location.street.name+','+data.results[0].location.
            city+', '+data.results[0].location.state+', '+ data.results[0].location.country +'-'+ data.results[0].location.postcode + '.'
            let dob = new Date(data.results[0].dob.date)
            let age = data.results[0].dob.age
            let emailaddress = data.results[0].email

            profile.setAttribute('src', imgSrc)
            fullName.innerHTML = fullname
            Address.innerHTML = address
            DOB.innerHTML = dob.toLocaleDateString()
            Age.innerHTML = age+ ' Years old'
            emailAddress.innerHTML = emailaddress
        }
    }, 1000);
});
