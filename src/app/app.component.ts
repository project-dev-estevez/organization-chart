import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  selectedNodes!: TreeNode[];

  data: TreeNode[] = [
    {
        expanded: true,
        type: 'person',
        data: {
            image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
            name: 'Dra Fernanda',
            title: 'Dirección General'
        },
        children: [
            {
                expanded: true,
                type: 'person',
                data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                    name: 'Anna Fali',
                    title: 'CMO'
                },
                children: [
                    {
                        label: 'Sales'
                    },
                    {
                        label: 'Marketing'
                    }
                ]
            },
            {
                expanded: true,
                type: 'person',
                data: {
                    image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                    name: 'Stephen Shaw',
                    title: 'CTO'
                },
                children: [
                    {
                        label: 'Development'
                    },
                    {
                        label: 'UI/UX Design'
                    }
                ]
            }
        ]
    }
  ];
}
