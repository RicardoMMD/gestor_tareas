class proyectos{
    constructor(){
        this.lista_proyectos = [];
    }
    add_proyecto(proyecto){
        this.lista_proyectos.push(proyecto); 
    }
    get_proyecto_html(){
        const x = this.lista_proyectos[this.lista_proyectos.length-1].color;
        const y = this.lista_proyectos[this.lista_proyectos.length-1].titulo;

        let proyecto_html = `<i style='color:${x};margin-right:5px;margin-left:5px;font-size:10px;' class="fa-solid fa-circle"></i>
                            <p style='font-weight: bold;'>${y}</p>
                            <i class="fa-solid fa-circle-xmark item-${this.lista_proyectos.length}"></i>`;

        return proyecto_html
    }
}







// Funciones #############################################################

// Variables globales
const gestor_proyectos_html = new proyectos();

// Funcion para agregar un proyecto
function add_proyect_to_list(){

    let titulo_proy = prompt('Titulo del proyecto:')
    let color_proy = prompt('Color del proyecto (código):')

    gestor_proyectos_html.add_proyecto({
        titulo: titulo_proy,
        color: color_proy
    });

    const contenedor_proyectos = document.getElementById('list_proys')
    const item_proy = document.createElement("il"); //
    item_proy.classList.add('proy_item');

    item_proy.innerHTML = gestor_proyectos_html.get_proyecto_html();
    contenedor_proyectos.appendChild(item_proy);
}


// fa-circle-xmark

// Eventos en DOM #########################################################

// Evento para agregar un proyecto
const adding_proyecto = document.querySelector('.add_proy');
adding_proyecto.addEventListener('click', function(){
    console.log('click detectado');
    add_proyect_to_list();
});

// Evento para agregar eliminar un proyecto
let rming_proyecto = document.querySelectorAll('.fa-circle-xmark');
rming_proyecto.addEventListener('click', function(){
    console.log('click de remoción detectado');

    this.classList.add('rm')
    add_proyect_to_list();
});