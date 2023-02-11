import f from '../assets/images/1.png'
import s from '../assets/images/2.png'
import t from '../assets/images/3.png'
import d from '../assets/images/4.png'
import b from '../assets/images/5.png'
import logo from '../assets/k_logo_glow.png'
export const websiteConfig = {
    title: 'Kenzo',
    logo: logo,
    navigatorList: [
      {
        'name': 'store',
        'part': 0,
        url: '',
        inside: true,
      },
      {
        'name': 'discord',
        'url': 'https://discord.gg/kenzolua',
        'part': 0,
        inside: false,
      }
    ],
    banner: {
      title: "Anti-Aim made the right way.",
      desc: 'At Kenzo, we aim to create the best possible experience. Our LUAs will help you in every aspect, to guarantee the best gameplay possible.',
      customersNumber: 1000,
      missHeadNumber: 10,
      buttonName: 'Purchase',
      buttonUrl: 'https://github.com'
    },
    swipes: [
      f,
      s,
      t,
      d,
      b
    ],
    shopConfig:{
        first:[
            {
                name:'Live',
                ButtonName:'Click to Purchase',
                ButtonUrl:'https://kenzoluadev.sellix.io/product/6290dead6f802',
                list:[
                    {
                        state:true,
                        name:'Anti-Aim Builder'
                    },
                    {
                        state:true,
                        name:'Cloud Config Sytem'
                    },
                    {
                        state:true,
                        name:'Slow Updates'
                    },
                    {
                        state:false,
                        name:'Anti-Aim Exploits'
                    },
                    {
                        state:false,
                        name:'Unreleased Features'
                    },
                    {
                        state:false,
                        name:'Roll Resolver'
                    }
                ]
            },
            {
                name:'Beta',
                ButtonName:'Click to Purchase',
                ButtonUrl:'https://kenzoluadev.sellix.io/product/6290deb091cde',
                list:[
                    {
                        state:true,
                        name:'Anti-Aim Builder'
                    },
                    {
                        state:true,
                        name:'Anti-Aim Exploits'
                    },
                    {
                        state:true,
                        name:'Cloud Config System'
                    },
                    {
                        state:true,
                        name:'Fast Updates'
                    },
                    {
                        state:false,
                        name:'Unreleased Features'
                    },
                    {
                        state:false,
                        name:'Roll Resolver'
                    }
                ]
            },
            {
                name:'Alpha',
                ButtonName:'Click to Purchase',
                ButtonUrl:'https://kenzoluadev.sellix.io/product/62c5aaddb84f2',
                list:[
                    {
                        state:true,
                        name:'Anti-Aim & Brute Builder'
                    },
                    {
                        state:true,
                        name:'Anti-Aim Exploits'
                    },
                    {
                        state:true,
                        name:'Cloud Config System'
                    },
                    {
                        state:true,
                        name:'Instant Updates'
                    },
                    {
                        state:true,
                        name:'Unreleased Features'
                    },
                    {
                        state:true,
                        name:'Roll Resolver'
                    }
                ]
            }
        ],
        second:[
            {
                name:'Beta',
                ButtonName:'Click to Purchase',
                ButtonUrl:'https://en.neverlose.cc/market/item?id=QVtAFG',
                list:[
                    {
                        state:true,
                        name:'Anti-Aim & Brute Builder'
                    },
                    {
                        state:true,
                        name:'Cloud Config System'
                    },
                    {
                        state:true,
                        name:'Fast Updates'
                    },
                    {
                        state:true,
                        name:'Unreleased Features'
                    },
                ]
            },
        ]
    }
    
  }