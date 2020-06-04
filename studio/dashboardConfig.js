export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed8900d9f98c8ef94b715e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-y1wpx554',
                  apiId: '3ffb7101-1cca-4f8f-b53d-185adbc26fb2'
                },
                {
                  buildHookId: '5ed8900ec44f69fb5f622244',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8orodxr6',
                  apiId: '873adea5-b2f4-4fd8-aec7-a7a6fc5556b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertcedwards/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8orodxr6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
