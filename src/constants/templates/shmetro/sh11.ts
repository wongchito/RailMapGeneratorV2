const params = {
    svg_height: 450,
    padding: 2.88,
    y_pc: 40,
    branch_spacing: 64.51,
    theme: [
        "shanghai",
        "sh11",
        "#76232F",
        "#fff"
    ],
    direction: "l",
    current_stn_idx: "pc7q",
    platform_num: false,
    stn_list: {
        linestart: {
            parents: [],
            children: [
                "ty6g",
                "l1mz"
            ],
            name: [
                "路綫左端",
                "LEFT END"
            ],
            branch: {
                left: [],
                right: [
                    "through",
                    "l1mz"
                ]
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        lineend: {
            parents: [
                "iwf6"
            ],
            children: [],
            name: [
                "路綫右端",
                "RIGHT END"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            num: "00",
            secondaryName: false
        },
        l1mz: {
            parents: [
                "linestart"
            ],
            children: [
                "sjih"
            ],
            name: [
                "花桥",
                "Huaqiao"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "02",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            secondaryName: false
        },
        iwf6: {
            children: [
                "lineend"
            ],
            parents: [
                "qmhe"
            ],
            name: [
                "迪士尼",
                "Disney Resort"
            ],
            branch: {
                left: [],
                right: []
            },
            num: "01",
            transfer: {
                tick_direc: "r",
                paid_area: true,
                osi_names: [],
                info: [
                    []
                ]
            },
            services: [
                "local"
            ],
            facility: "",
            secondaryName: false
        },
        qmhe: {
            name: [
                "康新公路",
                "Kangxin Highway"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "s9zd"
            ],
            children: [
                "iwf6"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        s9zd: {
            name: [
                "秀沿路",
                "Xiuyan Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "nsup"
            ],
            children: [
                "qmhe"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        nsup: {
            name: [
                "罗山路",
                "Luoshan Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "ya17"
            ],
            children: [
                "s9zd"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh16",
                            "#2CD5C4",
                            "#000",
                            "16号线",
                            "Line 16"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        ya17: {
            name: [
                "御桥",
                "Yuqiao"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "zeh0"
            ],
            children: [
                "nsup"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        zeh0: {
            name: [
                "浦三路",
                "Pusan Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "orn7"
            ],
            children: [
                "ya17"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        orn7: {
            name: [
                "三林东",
                "East Sanlin"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "m5es"
            ],
            children: [
                "zeh0"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        m5es: {
            name: [
                "三林",
                "Sanlin"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "3ibs"
            ],
            children: [
                "orn7"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '3ibs': {
            name: [
                "东方体育中心",
                "Oriental Sports Center"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "ljgf"
            ],
            children: [
                "m5es"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh6",
                            "#D9027D",
                            "#fff",
                            "6号线",
                            "Line 6"
                        ],
                        [
                            "shanghai",
                            "sh8",
                            "#00A3E0",
                            "#fff",
                            "8号线",
                            "Line 8"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        ljgf: {
            name: [
                "龙耀路",
                "Longyao Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "cktp"
            ],
            children: [
                "3ibs"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        cktp: {
            name: [
                "云锦路",
                "Yunjin Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "pc7q"
            ],
            children: [
                "ljgf"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        pc7q: {
            name: [
                "龙华",
                "Longhua"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "wr6q"
            ],
            children: [
                "cktp"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh12",
                            "#007B5F",
                            "#fff",
                            "12号线",
                            "Line 12"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        wr6q: {
            name: [
                "上海游泳馆",
                "Shanghai Swimming Center"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "0kp1"
            ],
            children: [
                "pc7q"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '0kp1': {
            name: [
                "徐家汇",
                "Xujiahui"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "xlu4"
            ],
            children: [
                "wr6q"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh1",
                            "#E4002B",
                            "#fff",
                            "1号线",
                            "Line 1"
                        ],
                        [
                            "shanghai",
                            "sh9",
                            "#71C5E8",
                            "#000",
                            "9号线",
                            "Line 9"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        xlu4: {
            name: [
                "交通大学",
                "Jiaotong University"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "xrko"
            ],
            children: [
                "0kp1"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh10",
                            "#C1A7E2",
                            "#000",
                            "10号线",
                            "Line 10"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        xrko: {
            name: [
                "江苏路",
                "Jiangsu Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "5hux"
            ],
            children: [
                "xlu4"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh2",
                            "#97D700",
                            "#000",
                            "2号线",
                            "Line 2"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '5hux': {
            name: [
                "隆德路",
                "Longde Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "239w"
            ],
            children: [
                "xrko"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh13",
                            "#EF95CF",
                            "#000",
                            "13号线",
                            "Line 13"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '239w': {
            name: [
                "曹杨路",
                "Caoyang Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "uh76"
            ],
            children: [
                "5hux"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh3",
                            "#FFD100",
                            "#000",
                            "3号线",
                            "Line 3"
                        ],
                        [
                            "shanghai",
                            "sh4",
                            "#5F259F",
                            "#fff",
                            "4号线",
                            "Line 4"
                        ],
                        [
                            "shanghai",
                            "sh14",
                            "#827A04",
                            "#fff",
                            "14号线",
                            "Line 14"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        uh76: {
            name: [
                "枫桥路",
                "Fengqiao Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "omd0"
            ],
            children: [
                "239w"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        omd0: {
            name: [
                "真如",
                "Zhenru"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "rjrf"
            ],
            children: [
                "uh76"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh14",
                            "#827A04",
                            "#fff",
                            "14号线",
                            "Line 14"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        rjrf: {
            name: [
                "上海西站",
                "Shanghai West Railway Station"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "tsku"
            ],
            children: [
                "omd0"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    [
                        [
                            "shanghai",
                            "sh15",
                            "#BBA786",
                            "#000",
                            "15号线",
                            "Line 15"
                        ]
                    ]
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        tsku: {
            name: [
                "李子园",
                "Liziyuan"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "8vx6"
            ],
            children: [
                "rjrf"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '8vx6': {
            name: [
                "祁连山路",
                "Qilianshan Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "nv5d"
            ],
            children: [
                "tsku"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        nv5d: {
            name: [
                "武威路",
                "Wuwei Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "xf3w"
            ],
            children: [
                "8vx6"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        xf3w: {
            name: [
                "桃浦新村",
                "Taopu Xincun"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "b029"
            ],
            children: [
                "nv5d"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        b029: {
            name: [
                "南翔",
                "Nanxiang"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "5rdw"
            ],
            children: [
                "xf3w"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '5rdw': {
            name: [
                "陈翔公路",
                "Chenxiang Highway"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "qmbv"
            ],
            children: [
                "b029"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        qmbv: {
            name: [
                "马陆",
                "Malu"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "betj"
            ],
            children: [
                "5rdw"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        betj: {
            name: [
                "嘉定新城",
                "Jiading Xincheng"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "1zd5",
                "hnl0"
            ],
            children: [
                "qmbv"
            ],
            branch: {
                left: [
                    "through",
                    "hnl0"
                ],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        hnl0: {
            name: [
                "上海赛车场",
                "Shanghai Circuit"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "etse"
            ],
            children: [
                "betj"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        etse: {
            name: [
                "昌吉东路",
                "East Changji Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "qsju"
            ],
            children: [
                "hnl0"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        qsju: {
            name: [
                "上海汽车城",
                "Shanghai Automobile City"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "chmc"
            ],
            children: [
                "etse"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        chmc: {
            name: [
                "安亭",
                "Anting"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "jotg"
            ],
            children: [
                "qsju"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        jotg: {
            name: [
                "兆丰路",
                "Zhaofeng Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "sjih"
            ],
            children: [
                "chmc"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        sjih: {
            name: [
                "光明路",
                "Guangming Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "l1mz"
            ],
            children: [
                "jotg"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '1zd5': {
            name: [
                "白银路",
                "Baiyin Road"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "28am"
            ],
            children: [
                "betj"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        ty6g: {
            name: [
                "嘉定北",
                "North Jiading"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "linestart"
            ],
            children: [
                "28am"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        },
        '28am': {
            name: [
                "嘉定西",
                "West Jiading"
            ],
            secondaryName: false,
            num: "00",
            services: [
                "local"
            ],
            parents: [
                "ty6g"
            ],
            children: [
                "1zd5"
            ],
            branch: {
                left: [],
                right: []
            },
            transfer: {
                info: [
                    []
                ],
                tick_direc: "r",
                paid_area: true,
                osi_names: []
            },
            facility: ""
        }
    },
    line_name: [
        "11号线",
        "Line11"
    ],
    psd_num: "1",
    line_num: "TW",
    info_panel_type: "sh",
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false
    },
    svgWidth: {
        destination: 1500,
        runin: 1500,
        railmap: 2200,
        indoor: 3000,
    },
    notesGZMTR: [],
    namePosMTR: {
        isStagger: true,
        isFlip: false
    }
};

export default params;