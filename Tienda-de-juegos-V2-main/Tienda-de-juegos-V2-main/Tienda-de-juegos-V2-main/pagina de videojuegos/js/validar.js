$('#formulario_principal').validate({
    rules:{
      nombre:{
        required: true,
        minlength: 3,
        maxlength: 100
      },
      apellido:{
        required: true,
        minlength: 3,
        maxlength: 100
      }
    },
    mensages:{
      nombre:{
        required: "por favor ingrese su nombre",
        minlength: "su nombre debe tener al menos 3 caracteres",
        maxlength: "su nombre no puede tener mas de 100 caracteres"
      },
      apellido:{
        required: "por favor ingrese su apellido",
        minlength: "su apellido debe tener al menos 3 caracteres",
        maxlength: "su apellido no puede tener mas de 100 caracteres"
      }
    }
}); 