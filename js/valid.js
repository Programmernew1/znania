// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);


// new Justvalidate('.form',{
//     rules:{
//         fio:{
//             required:true,
//             minlength:2,
//             maxLength:30
//         },
//         tel:{
//             required:true,
//             function:(name,value) =>{
//                 const phone = selector.inputmask.unmaskedvalue()
//                 return Number(phone) && phone.length === 10
//             }
//         },
//         email:{
//             required:true,
//             email:true
//         },
//     },
// });

// validate

function validateForms(selector, rules) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            console.log(form);

            let formData = new FormData(form);

            fetch("mail.php", {
                method: "POST",
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
            });
        }
    });
}

validateForms('.form', { email: { required: true, email: true }, fio: { required: true }, tel: { required: true } });