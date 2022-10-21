const Contenedor = require('./Contenedor')
const contenedor = new Contenedor()

let torta1 =
{
    title: "Marquisse",
    price: 4000,
    thumbnail: "https://juanigazcon.github.io/entrega/Images/Productos/marquisse.jpg"
}

let torta2 =
{
    title: "Rogel",
    price: 3800,
    thumbnail: "https://juanigazcon.github.io/entrega/Images/Productos/torta-rogel.jpg"
}

let torta3 =
{
    title: "Cheesecake",
    price: 4500,
    thumbnail: "https://juanigazcon.github.io/entrega/Images/Productos/cheesecake.jpg"
}



contenedor.save(torta1)
.then (result=> console.log(result))
.catch(err => console.log (err)) 

/* contenedor.save(torta2)
.then (result=> console.log(result))
.catch(err => console.log (err))


contenedor.save(torta3)
.then (result=> console.log(result))
.catch(err => console.log (err))


contenedor.getById(2)
.then (result=> console.log(result))
.catch(err => console.log (err))



contenedor.getById(8)
.then (result=> console.log(result))
.catch(err => console.log (err))


contenedor.findAll()
.then (result=> console.log(result))
.catch(err => console.log (err))

contenedor.deleteById(1)
.then (result=> console.log(result))
.catch(err => console.log (err))

contenedor.deleteById(4)
.then (result=> console.log(result))
.catch(err => console.log (err))

contenedor.deleteAll()
.then (result=> console.log(result))
.catch(err => console.log (err)) 
 */




