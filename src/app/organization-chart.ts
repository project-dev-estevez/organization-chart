import { Component, ElementRef, HostListener } from '@angular/core';
import { ImportsModule } from './imports';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'app-organization-chart',
    templateUrl: './organization-chart.html',
    styleUrls: ['./organization-chart.css'],
    standalone: true,
    imports: [ImportsModule]
})
export class OrganizationChart {

    scale = 1;

    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://placehold.co/200',
                name: 'Jorge Estévez Abreu',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                        name: 'Ma. Fernanda Estévez Gonzalez',
                        title: 'DIRECTORA GENERAL'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Brandon Jhoan de Jesus Hernandez',
                                title: 'DIRECTOR DE PROYECTOS'
                            },
                            children: [
                                {
                                    label: 'Operaciones',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE OPERACIONES'
                                            },
                                            children: [
                                                {
                                                    label: 'Construcción',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'SUPER INTENDENTE'
                                                            },
                                                            children:[
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'SUPERVISOR'
                                                                    },
                                                                    children:[
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'LIDER DE CUADRILLA'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'MONTADOR'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'AUXILIARES'
                                                                            },
                                                                        },
                                                                    ]
                                                                },
                                            
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'Empalmes',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE EMPALMES'
                                                            },
                                                            children:[
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'SUPERVISOR'
                                                                    },
                                                                    children:[
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'EMPALMADOR MEDIDOR'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'EMPALMADOR'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'AUXILIARES'
                                                                            },
                                                                        },
                                                                    ]
                                                                },
                                            
                                                            ]
                                                        }
                                                    ]   
                                                },
                                                {
                                                    label: 'Mantenimiento',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE MANTENIMIENTO'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'ANALISTA DE PROYECTOS'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'SUPERVISOR'
                                                                    },
                                                                    children:[
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'EMPALMADOR MEDIDOR'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'EMPALMADOR'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'TÉCNICO DE MANTENIMIENTO'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'AUXILIARES'
                                                                            },
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                },
                                                {
                                                    label: 'Obra Civil',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE ALMACEN FORANEO'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'CHOFER ALMACENISTA'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Ingeniería',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE ADQUISICIONES'
                                            },
                                            children: [
                                                {
                                                    label: 'Adquisiciones',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LÍDER DE COMPRAS'
                                                                    },
                                                                    children:[
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'AUXILIAR DE COMPRAS'
                                                                            },
                                                                        }
                                                                    ]
                                                                },    
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'Servicios Generales',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LÍDER DE MANTENIMIENTO'
                                                                    },
                                                                },
                                                            ]
                                                        }
                                                    ]   
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'PMO',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE CONTROL VEHICULAR'
                                            },
                                            children:[
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'COORDINADOR DE CONTROL VEHICULAR'
                                                    },
                                                    children: [
                                                        {
                                                            label: 'Monitoreo',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE MONITOREO'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'MONITORISTAS'
                                                                            },
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            label: 'Taller',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE TALLER'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'TÉCNICO EN GASOLINA'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'HOJALATERO'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'SOLDADOR'
                                                                            },
                                                                        }
                                                                    ]
                                                                }
                                                            ]   
                                                        },
                                                        {
                                                            label: 'Gestoría Vehicular',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE GESTORIA VEHICULAR'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'ANALISTA DE GESTIÓN DE COMBUSTIBLE'
                                                                            },
                                                                        },
                                                                    ]
                                                                }
                                                            ] 
                                                        }
                                                    ]
                                                }
                                            ]
                                            
                                        }
                                    ]
                                },
                                {
                                    label: 'Administración de Obra',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children:[
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE TI'
                                            },
                                            children:[
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'COORDINADOR DE TI'
                                                    },
                                                    children:[
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'LIDER DE TI'
                                                            },
                                                        },
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'AUXILIAR DE TI'
                                                            },
                                                        },
                                                        
                                                    ]
                                                    
                                                }
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Ingrid Martinez Baeza',
                                title: 'DIRECTORA DE INNOVACIÓN Y BIENES MATERIALES'
                            },
                            children: [
                                {
                                    label: 'Almacén',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE ALMACÉN'
                                            },
                                            children: [
                                                {
                                                    label: 'Sub Almacénes',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'Almacén General',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'AUXILIAR ADMINISTRATIVO'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'CHOFER ALMACENISTA'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]   
                                                },
                                                {
                                                    label: 'Almacén Foráneo',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE ALMACEN FORANEO'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'CHOFER ALMACENISTA'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Adquisiciones',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE ADQUISICIONES'
                                            },
                                            children: [
                                                {
                                                    label: 'Adquisiciones',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LÍDER DE COMPRAS'
                                                                    },
                                                                    children:[
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'AUXILIAR DE COMPRAS'
                                                                            },
                                                                        }
                                                                    ]
                                                                },    
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'Servicios Generales',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LÍDER DE MANTENIMIENTO'
                                                                    },
                                                                },
                                                            ]
                                                        }
                                                    ]   
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Control Vehicular',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE CONTROL VEHICULAR'
                                            },
                                            children:[
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'COORDINADOR DE CONTROL VEHICULAR'
                                                    },
                                                    children: [
                                                        {
                                                            label: 'Monitoreo',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE MONITOREO'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'MONITORISTAS'
                                                                            },
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            label: 'Taller',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE TALLER'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'TÉCNICO EN GASOLINA'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'HOJALATERO'
                                                                            },
                                                                        },
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'SOLDADOR'
                                                                            },
                                                                        }
                                                                    ]
                                                                }
                                                            ]   
                                                        },
                                                        {
                                                            label: 'Gestoría Vehicular',
                                                            expanded: true,
                                                            styleClass: 'bg-purple-500 text-white label-width',
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'LIDER DE GESTORIA VEHICULAR'
                                                                    },
                                                                    children: [
                                                                        {
                                                                            expanded: true,
                                                                            type: 'person',
                                                                            data: {
                                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                                name: '****************',
                                                                                title: 'ANALISTA DE GESTIÓN DE COMBUSTIBLE'
                                                                            },
                                                                        },
                                                                    ]
                                                                }
                                                            ] 
                                                        }
                                                    ]
                                                }
                                            ]
                                            
                                        }
                                    ]
                                },
                                {
                                    label: 'TI',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children:[
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE TI'
                                            },
                                            children:[
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'COORDINADOR DE TI'
                                                    },
                                                    children:[
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'LIDER DE TI'
                                                            },
                                                        },
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'AUXILIAR DE TI'
                                                            },
                                                        },
                                                        
                                                    ]
                                                    
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Laboratorio',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children:[
                                        {
                                            expanded: true,
                                            type: 'person',
                                            data: {
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '****************',
                                                title: 'COORDINADOR DE LABORATORIO'
                                            },
                                            children:[
                                                {
                                                    expanded: true,
                                                    type: 'person',
                                                    data: {
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '****************',
                                                        title: 'INGENIERO TECNOLÓGICO'
                                                    },
                                                },
                                                {
                                                    expanded: true,
                                                    type: 'person',
                                                    data: {
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '****************',
                                                        title: 'AUXILIAR DE LABORATORIO'
                                                    },
                                                },
                                            ]
                                        },    
                                    ]
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Elizabeth Gonzalez Herrera',
                                title: 'DIRECTORA DE ADMINISTRACIÓN Y FINANZAS'
                            },
                            children: [
                                {
                                    label: 'Talento Humano',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE TALENTO HUMANO'
                                            },
                                            children: [
                                                {
                                                    label: 'Atracción de Talento',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE ATRACCIÓN DE TALENTO'
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'Gestión de Talento',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE GESTIÓN DE TALENTO'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'ANALISTA DE GESTIÓN DE TALENTO'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'AUXILIAR DE GESTIÓN DE TALENTO'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'BECARIO'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]   
                                                },
                                                {
                                                    label: 'EHS',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE EHS'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'SUPERVISOR DE EHS'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'AUXILIAR DE EHS'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                },
                                                {
                                                    label: 'Servicio Médico',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE SERVICIO MÉDICO'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'MÉDICO LABORAL'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                },
                                                {
                                                    label: 'Capacitación y Desarrollo Organizacional',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'COORDINADOR DE CAPACITACION Y DESARROLLO ORGANIZACIONAL'
                                                            },
                                                            children: [
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'COMMUNITY MANAGER'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'ANALISTA DE D.O.'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'CAPACITADOR'
                                                                    },
                                                                },
                                                                {
                                                                    expanded: true,
                                                                    type: 'person',
                                                                    data: {
                                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                        name: '****************',
                                                                        title: 'BECARIO DE DISEÑO GRAFICO'
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ] 
                                                },
                                                {
                                                    label: 'Vigilancia',
                                                    expanded: true,
                                                    styleClass: 'bg-purple-500 text-white label-width',
                                                    children: [
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'VIGILANCIA'
                                                            },
                                                        }
                                                    ] 
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Contabilidad',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE DE CONTABILIDAD'
                                            },
                                            children: [
                                                {
                                                    expanded: true,
                                                    type: 'person',
                                                    data: {
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '****************',
                                                        title: 'IMPLEMENTADOR DE SISTEMAS ADMINISTRATIVOS'
                                                    },
                                                },
                                                {
                                                    expanded: true,
                                                    type: 'person',
                                                    data: {
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '****************',
                                                        title: 'LÍDER DE TESORERÍA'
                                                    },
                                                    children:[
                                                        {
                                                            expanded: true,
                                                            type: 'person',
                                                            data: {
                                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                                name: '****************',
                                                                title: 'AUXILIAR CONTABLE'
                                                            }, 
                                                        }
                                                    ]
                                                },
                             
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Jurídico',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                    children: [
                                        {
                                            type: 'person',
                                            data: {
                                            expanded: true,
                                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                name: '***************',
                                                title: 'GERENTE JURÍDICO'
                                            },
                                            children:[
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'ABOGADO COORPORATIVO'
                                                    }, 
                                                },
                                                {
                                                    type: 'person',
                                                    data: {
                                                    expanded: true,
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: '***************',
                                                        title: 'ABOGADO JR'
                                                    }, 
                                                }
                                            ]                                            
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    constructor(
        private el: ElementRef
    ) { }

    @HostListener('wheel', ['$event'])
    onWheel(event) {
        event.preventDefault();

        if (event.deltaY < 0) {
            // Zoom in
            this.scale += 0.1;
        } else {
            // Zoom out
            this.scale -= 0.1;
        }

        // Limit scale: 0.1 <= scale <= 2
        this.scale = Math.min(Math.max(.1, this.scale), 2);

        const element = this.el.nativeElement.querySelector('.p-organizationchart-table');
        element.style.transform = `scale(${this.scale})`;
    }
}