import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Dashboards',
    icon: 'icon-Car-Wheel',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'Dashboard 1',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Dashboard 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard3',
        title: 'Dashboard 3',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'المخزون',
    icon: 'mdi mdi-playlist-check',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/inv/reports',
        title: 'تقارير المخزون',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'التكلفة',
    icon: 'fas fa-dollar-sign',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/cost/reports',
        title: 'تقارير التكلفة',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'UI',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'UI Elements',
    icon: 'icon-Paint-Brush',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/component/accordion',
        title: 'Accordion',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/alert',
        title: 'Alert',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/carousel',
        title: 'Carousel',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/dropdown',
        title: 'Dropdown',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/modal',
        title: 'Modal',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/pagination',
        title: 'Pagination',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/poptool',
        title: 'Popover & Tooltip',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/progressbar',
        title: 'Progressbar',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/rating',
        title: 'Ratings',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/tabs',
        title: 'Tabs',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/timepicker',
        title: 'Timepicker',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/buttons',
        title: 'Button',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      { 
		path: '/component/notifier', 
		title: 'Notifier', 
		icon: 'mdi mdi-bandcamp', 
		class: '', 
		extralink: false, 
		submenu: [] 
	  }
    ]
  },
  {
    path: '',
    title: 'Cards',
    icon: 'icon-Folder-Add',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/cards/basiccards',
        title: 'Basic Cards',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cards/customcards',
        title: 'Custom Cards',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cards/weathercards',
        title: 'Weather Cards',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Extra Components',
    icon: 'icon-Idea-5',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/extra-component/toastr',
        title: 'Toastr',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/upload',
        title: 'File Upload',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/editor',
        title: 'Editor',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/extra-component/dragndrop',
        title: 'Drag n Drop',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Widgets',
    icon: 'icon-Wrench',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/widgets/apps',
        title: 'Widget Apps',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/widgets/data',
        title: 'Widget Data',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Forms',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Form Elements',
    icon: 'icon-Receipt-4',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/forminputs',
        title: 'Form Inputs',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/inputgroups',
        title: 'Input Groups',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/inputgrid',
        title: 'Input Grid',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/checkboxandradio',
        title: 'Checkbox & Radio',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/multiselect',
        title: 'Multiselect',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Form Layouts',
    icon: 'icon-Receipt-2',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/formbasic',
        title: 'Basic Forms',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formhorizontal',
        title: 'Horizontal Forms',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formactions',
        title: 'Form Actions',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formrowseparator',
        title: 'Row Separator',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formstripedrows',
        title: 'Striped Rows',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/forms/formdetail',
        title: 'Detail Forms',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Form Addons',
    icon: 'icon-Add',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/forms/formvalidation',
        title: 'Form Validation',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/typehead',
        title: 'Form Typehead',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/datepicker',
        title: 'Datepicker',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/language-datepicker',
        title: 'Language Datepicker',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
	  {
        path: '/forms/ngx',
        title: 'Form Wizard / Steps',
        icon: 'mdi mdi-attachment',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Tables',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Bootstrap Tables',
    icon: 'mdi mdi-border-none',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/tables/basictables',
        title: 'Basic Tables',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/tables/darktables',
        title: 'Dark Basic Tables',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/tables/colortables',
        title: 'Colored Tables',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/tables/tablesizing',
        title: 'Table Sizing',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/tables/smarttable',
    title: 'Smart Tables',
    icon: 'mdi mdi-border-left',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/tables/datatable',
    title: 'Data Tables',
    icon: 'mdi mdi-border-vertical',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Charts',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Charts',
    icon: 'icon-Pie-Chart',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/charts/chartjs',
        title: 'Chart Js',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/charts/chartistjs',
        title: 'Chartist Js',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/charts/ngxchart',
        title: 'Ngx Charts',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Maps',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/maps/google',
    title: 'Google Maps',
    icon: 'icon-Location-2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '',
    title: 'Pages',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '',
    title: 'Ecommerce Pages',
    icon: 'icon-Shopping-Bag',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/ecom/products',
        title: 'Products',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ecom/cart',
        title: 'Cart',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ecom/edit',
        title: 'Edit Products',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ecom/details',
        title: 'Product Details',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ecom/orders',
        title: 'Orders',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/ecom/checkout',
        title: 'Checkout',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Authentication',
    icon: 'icon-Administrator',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/authentication/login',
        title: 'Login',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/login2',
        title: 'Login 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup',
        title: 'Register',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/signup2',
        title: 'Register 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/404',
        title: '404',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/authentication/lock',
        title: 'Lockscreen',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Sample Pages',
    icon: 'icon-Files',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/sample-pages/profile',
        title: 'Profile',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/pricing',
        title: 'Pricing',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/invoice',
        title: 'Invoice',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/sample-pages/helperclasses',
        title: 'Helper Classes',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/starter',
        title: 'Starter Page',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Timeline',
    icon: 'mdi mdi-apple-safari',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/timeline/left',
        title: 'Left Timeline',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/timeline/right',
        title: 'Right Timeline',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/timeline/center',
        title: 'Center Timeline',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Icons',
    icon: 'icon-Eyeglasses-Smiley',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/icons/fontawesome',
        title: 'Fontawesome',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/icons/simpleline',
        title: 'Simple Line Icons',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/icons/material',
        title: 'Material Icons',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/icons/iconmind',
        title: 'Iconmind Icons',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Menu Levels',
    icon: 'mdi mdi-notification-clear-all',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '',
        title: 'Second Level',
        icon: '',
        class: '',
        extralink: true,
        submenu: []
      },
      {
        path: '',
        title: 'Second Child',
        icon: '',
        class: 'has-arrow',
        extralink: false,
        submenu: [
          {
            path: '',
            title: 'Third 1.1',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          },
          {
            path: '',
            title: 'Third 1.2',
            icon: '',
            class: '',
            extralink: false,
            submenu: []
          }
        ]
      }
    ]
  }
];
