var selector = document.querySelector("input[type='tel']");
var im = new Imputmask("+7(999)-999-99-99");
im.mask(selector);
new Justvalidate('.form',{
    rules:{
        name:{
            required:true,
            minlength:2,
            maxLength:10
        },
        tel:{
            required:true,
            function:(name,value) =>{
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail:{
            required:true,
            email:true
        },
    },
});