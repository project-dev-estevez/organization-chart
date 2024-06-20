import { Component } from '@angular/core';
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
    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Jorge Estévez Abreu',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                        name: 'Ma. Fernanda Estevez Gonzalez',
                        title: 'DIRECTORA GENERAL'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Ma. Fernanda Estevez Gonzalez',
                                title: 'DIRECTORA GENERAL'
                            },
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Ma. Fernanda Estevez Gonzalez',
                                title: 'DIRECTORA GENERAL'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                        name: 'Nombre del nuevo nodo',
                                        title: 'GERENTE DE ALMACÉN'
                                    },
                                    children: [
                                        {
                                            label: 'Sub-Almacenes',
                                            expanded: true,
                                            children: [
                                                {
                                                    expanded: true,
                                                    type: 'person',
                                                    data: {
                                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                                        name: 'Nombre del nuevo nodo',
                                                        title: 'Coordinador de Sub-Almacenes'
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            label: 'Almacén General'
                                        },
                                        {
                                            label: 'almacen foraneo'
                                        }
                                    ]
                                },
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                        name: 'Nombre del nuevo nodo',
                                        title: 'Título del nuevo nodo'
                                    },
                                },
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                        name: 'Nombre del nuevo nodo',
                                        title: 'Título del nuevo nodo'
                                    },
                                },
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                        name: 'Nombre del nuevo nodo',
                                        title: 'Título del nuevo nodo'
                                    },
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                                name: 'Ma. Fernanda Estevez Gonzalez',
                                title: 'DIRECTORA GENERAL'
                            },
                        }
                    ]
                },
                // {
                //     expanded: true,
                //     type: 'person',
                //     styleClass: 'bg-teal-500 text-white',
                //     data: {
                //         image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                //         name: 'Nombre del nuevo nodo',
                //         title: 'Título del nuevo nodo'
                //     },
                //     children: [
                //         {
                //             expanded: true,
                //             type: 'person',
                //             styleClass: 'bg-teal-500 text-white',
                //             data: {
                //                 image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                //                 name: 'Nombre del nuevo nodo',
                //                 title: 'Título del nuevo nodo'
                //             },
                //         },
                //         {
                //             expanded: true,
                //             type: 'person',
                //             styleClass: 'bg-teal-500 text-white',
                //             data: {
                //                 image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                //                 name: 'Nombre del nuevo nodo',
                //                 title: 'Título del nuevo nodo'
                //             },
                //         },
                //         {
                //             expanded: true,
                //             type: 'person',
                //             styleClass: 'bg-teal-500 text-white',
                //             data: {
                //                 image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                //                 name: 'Nombre del nuevo nodo',
                //                 title: 'Título del nuevo nodo'
                //             },
                //         }
                //     ]
                // }
            ]
        }
    ];
}