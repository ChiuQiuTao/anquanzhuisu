import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */
var arr = [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () =>
            import ('@/view/login/login.vue')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true,
                icon: 'md-home'
            },
            component: () =>
                import ('@/view/single-page/home')
        }]
    },
    {
        //gis地图
        path: '/left-menu/GIS',
        name: '/GIS',
        meta: {
            icon: 'md-pin',
            title: 'GIS地图',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways
        },
        component: Main,
        children: [{
            path: 'GIS',
            name: 'GIS',
            meta: {
                icon: 'md-apps',
                title: '信息管理',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/GIS/GIS.vue')
        }, ]
    },
    {
        //网格管理
        path: '/left-menu/grid-ment',
        name: '/grid-ment',
        meta: {
            icon: 'md-briefcase',
            title: '网格管理',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways
        },
        component: Main,
        children: [{
                path: 'grid-project',
                name: 'grid-project',
                meta: {
                    icon: 'md-apps',
                    title: '网格规划',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/grid-ment/grid-project.vue')
            },
            {
                path: 'task-ment',
                name: 'task-ment',
                meta: {
                    icon: 'md-apps',
                    title: '任务指派',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/grid-ment/task-ment.vue')
            },
            {
                path: 'law-infor',
                name: 'law-infor',
                meta: {
                    icon: 'md-apps',
                    title: '执法信息',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/grid-ment/law-infor.vue')
            },
        ]
    },
    {
        path: '/left-menu/risk-grade',
        name: '/risk-grade',
        meta: {
            icon: 'md-analytics',
            title: '风险等级',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways:true
        },
        component: Main,
        children: [{
            path: 'risk',
            name: 'risk',
            meta: {
                icon: 'md-apps',
                title: '风险等级',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/risk-grade/risk.vue')
        }, ]
    },
    {
        path: '/left-menu/retrospect',
        name: '/retrospect',
        meta: {
            icon: 'md-clipboard',
            title: '溯源查询',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways:true
        },
        component: Main,
        children: [{
                path: 'goods',
                name: 'goods',
                meta: {
                    icon: 'md-apps',
                    title: '商品追溯',
                    hideInMenu: true
                },
                component: () =>
                    import ('@/view/left-menu/retrospect/goods.vue')
            },
            {
                path: 'livestock',
                name: 'livestock',
                meta: {
                    icon: 'md-apps',
                    title: '禽畜追溯',
                    hideInMenu: true
                },
                component: () =>
                    import ('@/view/left-menu/retrospect/livestock.vue')
            },
            {
                path: 'farmproducts',
                name: 'farmproducts',
                meta: {
                    icon: 'md-apps',
                    title: '农产品追溯',
                    hideInMenu: true
                },
                component: () =>
                    import ('@/view/left-menu/retrospect/farmproducts.vue')
            },
            {
                path: 'product',
                name: 'product',
                meta: {
                    icon: 'md-apps',
                    title: '产品追溯',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/retrospect/product.vue')
            },
        ]
    },
    {
        path: '/left-menu/talent-specialists',
        name: '/talent-specialists',
        meta: {
            icon: 'md-contacts',
            title: '人才专家',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways:true
        },
        component: Main,
        children: [{
                path: 'talantment',
                name: 'talantment',
                meta: {
                    icon: 'md-apps',
                    title: '人才专家信息管理',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/talent-specialists/talantment.vue')
            },
            {
                path: 'advice',
                name: 'advice',
                meta: {
                    icon: 'md-apps',
                    title: '专家建议栏',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/talent-specialists/advice.vue')
            },
            {
                path: 'exchange',
                name: 'exchange',
                meta: {
                    icon: 'md-apps',
                    title: '信息交流区',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/talent-specialists/exchange.vue')
            },
        ]
    },

    {
        path: '/left-menu/food',
        name: '/food',
        meta: {
            icon: 'ios-flask-outline',
            title: '食品安全',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways:true
        },
        component: Main,
        children: [{
            path: 'standard',
            name: 'standard',
            meta: {
                icon: 'md-apps',
                title: '安全标准',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/food/standard.vue')
        }, {
            path: 'Laws-re',
            name: 'Laws-re',
            meta: {
                icon: 'md-apps',
                title: '法律法规',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/food/Laws-re.vue')
        }, ]
    },
    {
        path: '/left-menu/environment',
        name: '/environment',
        meta: {
            icon: 'md-globe',
            title: '环境监控',
            showAlways: true,
            hideInMenu: false
        },
        component: Main,
        children: [{
            path: 'information',
            name: 'information',
            meta: {
                icon: 'md-apps',
                title: '环境数据查询',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/environment/information.vue')
        }, {
            path: 'real',
            name: 'real',
            meta: {
                icon: 'md-apps',
                title: '实时监控',
                hideInMenu: false
            },
            component: () =>
                import ('@/view/left-menu/environment/real.vue')
        }, ]
    },
    {
        path: '/left-menu/early-warning',
        name: '/early-warning',
        meta: {
            icon: 'ios-albums',
            title: '信息预警',
            hideInMenu: false
        },
        component: Main,
        children: [{
                path: 'plant',
                name: 'plant',
                meta: {
                    icon: 'md-apps',
                    title: '种植预警',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/early-warning/plant.vue')
            }, {
                path: 'cultivation',
                name: 'cultivation',
                meta: {
                    icon: 'md-apps',
                    title: '养殖预警',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/early-warning/cultivation.vue')
            },
            {
                path: 'company',
                name: 'company',
                meta: {
                    icon: 'md-apps',
                    title: '企业预警',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/early-warning/company.vue')
            },
        ]
    },

    {
        path: '/left-menu/diary',
        name: '/diary',
        meta: {
            icon: 'md-clipboard',
            title: '日志管理',
            showAlways: true,
            hideInMenu: false
        },
        component: Main,
        children: [{
                path: 'login-diary',
                name: 'login-diary',
                meta: {
                    icon: 'md-apps',
                    title: '企业登录日志',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/diary/login-diary.vue')
            }, {
                path: 'abnormal',
                name: 'abnormal',
                meta: {
                    icon: 'md-apps',
                    title: '异常日志管理',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/diary/abnormal.vue')
            },
            {
                path: 'statistics',
                name: 'statistics',
                meta: {
                    icon: 'md-apps',
                    title: '系统访问量统计',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/diary/statistics.vue')
            },
            {
                path: 'operation',
                name: 'operation',
                meta: {
                    icon: 'md-apps',
                    title: '操作日志',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/diary/operation.vue')
            },
        ]
    },
    {
        path: '/left-menu/basics',
        name: '/basics',
        meta: {
            icon: 'md-settings',
            title: '基础设置',
            showAlways: true,
            hideInMenu: false
                //一个子路由要showAlways:true
        },
        component: Main,
        children: [{
                path: 'jurisdiction',
                name: 'jurisdiction',
                meta: {
                    icon: 'md-apps',
                    title: '权限设置',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/basics/jurisdiction.vue')
            }, {
                path: 'help',
                name: 'help',
                meta: {
                    icon: 'md-apps',
                    title: '使用帮助',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/basics/help.vue')
            },
            {
                path: 'About-Us',
                name: 'About-Us',
                meta: {
                    icon: 'md-apps',
                    title: '关于我们',
                    hideInMenu: false
                },
                component: () =>
                    import ('@/view/left-menu/basics/About-Us.vue')
            },
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () =>
            import ('@/view/error-page/404.vue')
    }
]


export default arr