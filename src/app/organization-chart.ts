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
                                            expanded: true,
                                            type: 'person',
                                            data: {
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
                                },
                                {
                                    label: 'Control Vehicular',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                },
                                {
                                    label: 'TI',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
                                },
                                {
                                    label: 'Laboratorio',
                                    expanded: true,
                                    styleClass: 'bg-indigo-500 text-white label-width',
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