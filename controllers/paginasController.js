import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio =  async (req, res) => {  

    // Consultar 3 viajes del modelo viaje
    
//    const promiseDB = [];

//    promiseDB.push( Viaje.findAll({ limit: 3 }) );
//    promiseDB.push( Testimonial.findAll({ limit: 3 }) );

    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    try {
//        const resultado = await Promise.all({ promiseDB });

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });

    } catch (error) { 
        console.log(error);
    }
    
}

const paginaNosotros = (req, res) => {    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaTestimoniales = async (req, res) => {  
    
    try {

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}

const paginaViajes = async (req, res) => {     
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes,
    });
}

const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Información viaje',
            viaje
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}