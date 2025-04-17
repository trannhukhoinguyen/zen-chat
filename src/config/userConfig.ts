export const userConfig = {
  // Personal Information
  name: 'Abdelrahman Saleh',
  role: 'Software Developer',
  location: 'Egypt',
  email: 'aabdoo2304@gmail.com',
  website: 'aabdoo23',

  // Social Links
  social: {
    github: 'https://github.com/aabdoo23',
    linkedin: 'https://www.linkedin.com/in/aabdoo23/', // Add your LinkedIn URL
    twitter: '', // Add your Twitter URL
  },

  // Contact Information
  contact: {
    email: 'aabdoo2304@gmail.com',
    phone: '', // Add your phone number
    calendly: 'https://calendly.com/', // Add your Calendly URL
  },

  // Spotify Configuration
  spotify: {
    playlistId: '37i9dQZF1DXcBWIGoYBM5M', // Your Spotify playlist ID
    playlistName: 'My Dev Playlist',
  },

  // Resume Configuration
  resume: {
    url: 'https://drive.google.com/file/d/1ZyaeXLpdOtPUygFCu55yYCQSEdW3K4pm/view',
    localPath: '/resume.pdf',
  },

  // Education Background
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Modern Academy for Computer Science & Management Technology",
      location: "Cairo, Egypt",
      year: "2021-2025",
      description: "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Web Development, Mobile Application Development",
      images: [
        {
          url: "/images/education/modern-academy.jpg",
          alt: "Modern Academy Campus",
          description: "The main campus building at Modern Academy"
        }
      ]
    },
    {
      degree: "High School Diploma",
      institution: "STEM High School",
      location: "Cairo, Egypt",
      year: "2017-2021",
      description: "Focused on STEM (Science, Technology, Engineering, and Mathematics) subjects. Graduated with high honors.",
      images: [
        {
          url: "/images/education/stem-school.jpg",
          alt: "STEM High School",
          description: "STEM High School campus"
        }
      ]
    }
  ],

  // Professional Experience
  experience: [
    {
      title: "Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022-Present",
      description: "Designing and developing responsive web applications for various clients using modern JavaScript frameworks and libraries.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
      images: [
        {
          url: "/images/experience/web-dev.jpg",
          alt: "Web Development Project",
          description: "Screenshot of a recent web development project"
        }
      ]
    },
    {
      title: ".NET Developer Intern",
      company: "Local Tech Firm",
      location: "Cairo, Egypt",
      period: "Summer 2023",
      description: "Assisted in the development of internal software tools using ASP.NET Core. Implemented new features and fixed bugs in existing applications.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
      images: [
        {
          url: "/images/experience/dotnet-dev.jpg",
          alt: ".NET Development",
          description: "Working on .NET projects during the internship"
        }
      ]
    }
  ],

  // SEO Configuration
  seo: {
    title: 'Abdelrahman Saleh - Software Developer',
    description: 'Software Developer based in Egypt specializing in React, Node.js, and modern web technologies',
    keywords: ['Software Developer', 'React', 'Node.js', 'Web Development', 'Egypt'],
  },

  // Theme Configuration
  theme: {
    primaryColor: '#1ED760', // Spotify green
    secondaryColor: '#1d1d1f',
    accentColor: '#007AFF',
  },

  // Projects Configuration
  projects: [
    {
      id: 'scheds',
      title: 'Scheds - Course Schedule Generator',
      description: 'A comprehensive course schedule generator application built with ASP.NET Core MVC, featuring real-time schedule generation, study room finder, and instructor management.',
      repoUrl: 'https://github.com/aabdoo23/Scheds',
      liveUrl: 'https://scheds.runasp.net', // Add your live URL if available
      techStack: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'Bootstrap', 'jQuery'],
      structure: {
        root: 'Scheds',
        children: [
          {
            name: 'Scheds.Application',
            type: 'directory',
            children: [
              {
                name: 'Interfaces',
                type: 'directory',
                children: [
                  {
                    name: 'Repositories',
                    type: 'directory',
                    children: [
                      { name: 'Common', type: 'directory', children: [{ name: 'IBaseRepository.cs', type: 'file' }] },
                      { name: 'ICardItemRepository.cs', type: 'file' },
                      { name: 'ICourseBaseRepository.cs', type: 'file' },
                      { name: 'ICourseScheduleRepository.cs', type: 'file' },
                      { name: 'IInstructorRepository.cs', type: 'file' }
                    ]
                  },
                  {
                    name: 'Services',
                    type: 'directory',
                    children: [
                      { name: 'ICardItemService.cs', type: 'file' },
                      { name: 'IEmptyRoomsService.cs', type: 'file' },
                      { name: 'IParsingService.cs', type: 'file' },
                      { name: 'ISelfServiceLiveFetchService.cs', type: 'file' }
                    ]
                  }
                ]
              },
              { name: 'Scheds.Application.csproj', type: 'file' }
            ]
          },
          {
            name: 'Scheds.Domain',
            type: 'directory',
            children: [
              {
                name: 'DTOs',
                type: 'directory',
                children: [
                  { name: 'Common', type: 'directory', children: [{ name: 'PaginatedEntityDTO.cs', type: 'file' }] },
                  { name: 'CustomCourseBaseDTO.cs', type: 'file' },
                  { name: 'GenerateRequestDTO.cs', type: 'file' },
                  { name: 'ReturnedCardItemDTO.cs', type: 'file' },
                  {
                    name: 'SelfService',
                    type: 'directory',
                    children: [
                      { name: 'SearchRequest.cs', type: 'file' },
                      { name: 'SectionSearchParameters.cs', type: 'file' }
                    ]
                  }
                ]
              },
              {
                name: 'Entities',
                type: 'directory',
                children: [
                  { name: 'CardItem.cs', type: 'file' },
                  { name: 'Common', type: 'directory', children: [{ name: 'BaseEntity.cs', type: 'file' }] },
                  { name: 'CourseBase.cs', type: 'file' },
                  { name: 'CourseSchedule.cs', type: 'file' },
                  { name: 'Instructor.cs', type: 'file' }
                ]
              },
              { name: 'Scheds.Domain.csproj', type: 'file' },
              {
                name: 'ViewModels',
                type: 'directory',
                children: [
                  { name: 'ErrorViewModel.cs', type: 'file' },
                  { name: 'GenerateAndResultViewModel.cs', type: 'file' }
                ]
              }
            ]
          },
          {
            name: 'Scheds.Infrastructure',
            type: 'directory',
            children: [
              { name: 'Configurations', type: 'directory', children: [{ name: 'CourseScheduleConfiguration.cs', type: 'file' }] },
              { name: 'Contexts', type: 'directory', children: [{ name: 'SchedsDbContext.cs', type: 'file' }] },
              { name: 'InfrastructureServiceDI.cs', type: 'file' },
              {
                name: 'Migrations',
                type: 'directory',
                children: [
                  { name: '20250205215848_please.Designer.cs', type: 'file' },
                  { name: '20250205215848_please.cs', type: 'file' },
                  { name: '20250205221819_indexFix.Designer.cs', type: 'file' },
                  { name: '20250205221819_indexFix.cs', type: 'file' },
                  { name: '20250205225306_cache.Designer.cs', type: 'file' },
                  { name: '20250205225306_cache.cs', type: 'file' },
                  { name: 'SchedsDbContextModelSnapshot.cs', type: 'file' }
                ]
              },
              {
                name: 'Repositories',
                type: 'directory',
                children: [
                  { name: 'CardItemRepository.cs', type: 'file' },
                  { name: 'Common', type: 'directory', children: [{ name: 'BaseRepository.cs', type: 'file' }] },
                  { name: 'CourseBaseRepository.cs', type: 'file' },
                  { name: 'CourseScheduleRepository.cs', type: 'file' },
                  { name: 'InstructorRepository.cs', type: 'file' }
                ]
              },
              { name: 'Scheds.Infrastructure.csproj', type: 'file' },
              {
                name: 'Services',
                type: 'directory',
                children: [
                  { name: 'CardItemService.cs', type: 'file' },
                  { name: 'EmptyRoomsService.cs', type: 'file' },
                  { name: 'ParsingService.cs', type: 'file' },
                  { name: 'SelfServiceLiveFetchService.cs', type: 'file' }
                ]
              },
              {
                name: 'Util',
                type: 'directory',
                children: [
                  { name: 'GenerationUtil.cs', type: 'file' },
                  { name: 'GlobalTimeUtil.cs', type: 'file' },
                  { name: 'IdGenerationUtil.cs', type: 'file' }
                ]
              }
            ]
          },
          { name: 'Scheds.sln', type: 'file' },
          {
            name: 'Scheds',
            type: 'directory',
            children: [
              { name: '.config', type: 'directory', children: [{ name: 'dotnet-tools.json', type: 'file' }] },
              {
                name: 'Controllers',
                type: 'directory',
                children: [
                  { name: 'CardController.cs', type: 'file' },
                  { name: 'CartController.cs', type: 'file' },
                  { name: 'CourseBaseController.cs', type: 'file' },
                  { name: 'CourseScheduleController.cs', type: 'file' },
                  { name: 'CustomizationsController.cs', type: 'file' },
                  { name: 'FindStudyRoomsController.cs', type: 'file' },
                  { name: 'GenerateController.cs', type: 'file' },
                  { name: 'GenerateSchedulesController.cs', type: 'file' },
                  { name: 'HomeController.cs', type: 'file' },
                  { name: 'InstructorController.cs', type: 'file' },
                  { name: 'RoomController.cs', type: 'file' }
                ]
              },
              { name: 'Program.cs', type: 'file' },
              { name: 'Properties', type: 'directory', children: [{ name: 'launchSettings.json', type: 'file' }] },
              { name: 'Scheds.MVC.csproj', type: 'file' },
              { name: 'Scheds.sln', type: 'file' },
              {
                name: 'Views',
                type: 'directory',
                children: [
                  { name: 'FindStudyRooms', type: 'directory', children: [{ name: 'index.cshtml', type: 'file' }] },
                  { name: 'GenerateSchedules', type: 'directory', children: [{ name: 'Index.cshtml', type: 'file' }] },
                  {
                    name: 'Home',
                    type: 'directory',
                    children: [
                      { name: 'Index.cshtml', type: 'file' },
                      { name: 'Privacy.cshtml', type: 'file' }
                    ]
                  },
                  {
                    name: 'Shared',
                    type: 'directory',
                    children: [
                      {
                        name: 'Components',
                        type: 'directory',
                        children: [
                          {
                            name: 'AllSchedulesViewComponent',
                            type: 'directory',
                            children: [
                              { name: 'AllSchedulesViewComponent.cs', type: 'file' },
                              { name: 'Default.cshtml', type: 'file' }
                            ]
                          },
                          {
                            name: 'CardItemViewComponent',
                            type: 'directory',
                            children: [
                              { name: 'CardItemViewComponent.cs', type: 'file' },
                              { name: 'Default.cshtml', type: 'file' }
                            ]
                          },
                          {
                            name: 'OneHourCardItemViewComponent',
                            type: 'directory',
                            children: [
                              { name: 'Default.cshtml', type: 'file' },
                              { name: 'OneHourCardItemViewComponent.cs', type: 'file' }
                            ]
                          },
                          {
                            name: 'ScheduleViewComponent',
                            type: 'directory',
                            children: [
                              { name: 'Default.cshtml', type: 'file' },
                              { name: 'ScheduleViewComponent.cs', type: 'file' }
                            ]
                          }
                        ]
                      },
                      { name: 'Error.cshtml', type: 'file' },
                      { name: '_Layout.cshtml', type: 'file' },
                      { name: '_Layout.cshtml.css', type: 'file' },
                      { name: '_NavbarPartial.cshtml', type: 'file' },
                      { name: '_ValidationScriptsPartial.cshtml', type: 'file' }
                    ]
                  },
                  { name: '_ViewImports.cshtml', type: 'file' },
                  { name: '_ViewStart.cshtml', type: 'file' }
                ]
              },
              { name: 'appsettings.Development.json', type: 'file' },
              {
                name: 'wwwroot',
                type: 'directory',
                children: [
                  { name: 'css', type: 'directory', children: [{ name: 'styles.css', type: 'file' }] },
                  { name: 'favicon.ico', type: 'file' },
                  {
                    name: 'images',
                    type: 'directory',
                    children: [
                      { name: 'Calendar-pana.png', type: 'file' },
                      { name: 'Schedule-amico.png', type: 'file' },
                      { name: 'Time management-cuate.png', type: 'file' },
                      { name: 'abdo.png', type: 'file' },
                      { name: 'hero-bg.jpg', type: 'file' },
                      { name: 'ideas.png', type: 'file' },
                      { name: 'image-removebg-preview (1).png', type: 'file' },
                      { name: 'image-removebg-preview (2).png', type: 'file' },
                      { name: 'image-removebg-preview.png', type: 'file' },
                      { name: 'logo-new.png', type: 'file' },
                      { name: 'new-bg-final.png', type: 'file' },
                      { name: 'new-bg.png', type: 'file' },
                      { name: 'questions.png', type: 'file' },
                      { name: 'register.png', type: 'file' },
                      { name: 'schedules.png', type: 'file' },
                      { name: 'study.png', type: 'file' },
                      { name: 'studyRooms.png', type: 'file' }
                    ]
                  },
                  {
                    name: 'js',
                    type: 'directory',
                    children: [
                      { name: 'find-study-rooms.js', type: 'file' },
                      { name: 'generate-schedules.js', type: 'file' },
                      { name: 'script.js', type: 'file' }
                    ]
                  },
                  {
                    name: 'lib',
                    type: 'directory',
                    children: [
                      {
                        name: 'bootstrap',
                        type: 'directory',
                        children: [
                          { name: 'LICENSE', type: 'file' },
                          {
                            name: 'dist',
                            type: 'directory',
                            children: [
                              {
                                name: 'css',
                                type: 'directory',
                                children: [
                                  { name: 'bootstrap-grid.css', type: 'file' },
                                  { name: 'bootstrap-grid.css.map', type: 'file' },
                                  { name: 'bootstrap-grid.min.css', type: 'file' },
                                  { name: 'bootstrap-grid.min.css.map', type: 'file' },
                                  { name: 'bootstrap-grid.rtl.css', type: 'file' },
                                  { name: 'bootstrap-grid.rtl.css.map', type: 'file' },
                                  { name: 'bootstrap-grid.rtl.min.css', type: 'file' },
                                  { name: 'bootstrap-grid.rtl.min.css.map', type: 'file' },
                                  { name: 'bootstrap-reboot.css', type: 'file' },
                                  { name: 'bootstrap-reboot.css.map', type: 'file' },
                                  { name: 'bootstrap-reboot.min.css', type: 'file' },
                                  { name: 'bootstrap-reboot.min.css.map', type: 'file' },
                                  { name: 'bootstrap-reboot.rtl.css', type: 'file' },
                                  { name: 'bootstrap-reboot.rtl.css.map', type: 'file' },
                                  { name: 'bootstrap-utilities.css', type: 'file' },
                                  { name: 'bootstrap-utilities.css.map', type: 'file' },
                                  { name: 'bootstrap-utilities.min.css', type: 'file' },
                                  { name: 'bootstrap-utilities.min.css.map', type: 'file' },
                                  { name: 'bootstrap-utilities.rtl.css', type: 'file' },
                                  { name: 'bootstrap-utilities.rtl.css.map', type: 'file' },
                                  { name: 'bootstrap.css', type: 'file' },
                                  { name: 'bootstrap.css.map', type: 'file' },
                                  { name: 'bootstrap.min.css', type: 'file' },
                                  { name: 'bootstrap.min.css.map', type: 'file' },
                                  { name: 'bootstrap.rtl.css', type: 'file' },
                                  { name: 'bootstrap.rtl.css.map', type: 'file' },
                                  { name: 'bootstrap.rtl.min.css', type: 'file' },
                                  { name: 'bootstrap.rtl.min.css.map', type: 'file' }
                                ]
                              },
                              {
                                name: 'js',
                                type: 'directory',
                                children: [
                                  { name: 'bootstrap.bundle.js', type: 'file' },
                                  { name: 'bootstrap.bundle.js.map', type: 'file' },
                                  { name: 'bootstrap.bundle.min.js', type: 'file' },
                                  { name: 'bootstrap.bundle.min.js.map', type: 'file' },
                                  { name: 'bootstrap.esm.js', type: 'file' },
                                  { name: 'bootstrap.esm.js.map', type: 'file' },
                                  { name: 'bootstrap.esm.min.js', type: 'file' },
                                  { name: 'bootstrap.esm.min.js.map', type: 'file' },
                                  { name: 'bootstrap.js', type: 'file' },
                                  { name: 'bootstrap.js.map', type: 'file' },
                                  { name: 'bootstrap.min.js', type: 'file' },
                                  { name: 'bootstrap.min.js.map', type: 'file' }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'jquery-validation-unobtrusive',
                        type: 'directory',
                        children: [
                          { name: 'LICENSE.txt', type: 'file' },
                          { name: 'jquery.validate.unobtrusive.js', type: 'file' },
                          { name: 'jquery.validate.unobtrusive.min.js', type: 'file' }
                        ]
                      },
                      {
                        name: 'jquery-validation',
                        type: 'directory',
                        children: [
                          { name: 'LICENSE.md', type: 'file' },
                          {
                            name: 'dist',
                            type: 'directory',
                            children: [
                              { name: 'additional-methods.js', type: 'file' },
                              { name: 'additional-methods.min.js', type: 'file' },
                              { name: 'jquery.validate.js', type: 'file' },
                              { name: 'jquery.validate.min.js', type: 'file' }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'jquery',
                        type: 'directory',
                        children: [
                          { name: 'LICENSE.txt', type: 'file' },
                          {
                            name: 'dist',
                            type: 'directory',
                            children: [
                              { name: 'jquery.js', type: 'file' },
                              { name: 'jquery.min.js', type: 'file' },
                              { name: 'jquery.min.map', type: 'file' }
                            ]
                          }
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
      images: [
        {
          url: 'src/assets/images/projects/scheds/landingPage.png',
          alt: 'Scheds Landing Page',
          description: 'Scheds Landing Page'
        },
        {
          url: 'src/assets/images/projects/scheds/customizationsSection.png',
          alt: 'Customizations Section',
          description: 'Customizations Section'
        },
        {
          url: 'src/assets/images/projects/scheds/generatedSchedules.png',
          alt: 'Generated Schedules',
          description: 'Generated Schedules'
        }
      ]
    }
    // Add more projects here
  ]
} as const; 