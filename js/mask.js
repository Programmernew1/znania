// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);



new JustValidate('.form',{
    rules:{
        name:{
            required:true,
            minLenght:2,
            maxlenght:10
        },
        tel:{
            required:true
        },
        email:{
            required:true,
            email:true,
            
        }
    },
    messages:{
        name:"как вас зовут?",
        tel:"Укажите ваш телефон",
        email:"Укажите ваш email",
        
    }
});
