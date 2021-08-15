const params = {
    "svg_height": 450,
    "padding": 8.750201061605276,
    "y_pc": 40,
    "branch_spacing": 38.5,
    "theme": [
        "shanghai",
        "sh6",
        "#D9027D",
        "#fff"
    ],
    "direction": "r",
    "current_stn_idx": "v5hl",
    "platform_num": false,
    "stn_list": {
        "linestart": {
            "parents": [],
            "children": [
                "iwf6"
            ],
            "name": [
                "路綫右端",
                "RIGHT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "00",
            "secondaryName": false
        },
        "lineend": {
            "parents": [
                "l1mz"
            ],
            "children": [],
            "name": [
                "路綫左端",
                "LEFT END"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    []
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "num": "00",
            "secondaryName": false
        },
        "l1mz": {
            "parents": [
                "mnz8"
            ],
            "children": [
                "lineend"
            ],
            "name": [
                "港城路",
                "Gangcheng Road"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "02",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
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
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "iwf6": {
            "children": [
                "5i7b"
            ],
            "parents": [
                "linestart"
            ],
            "name": [
                "东方体育中心",
                "Oriental Sports Center"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "num": "01",
            "transfer": {
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": [],
                "info": [
                    [
                        [
                            "shanghai",
                            "sh11",
                            "#76232F",
                            "#fff",
                            "11号线",
                            "Line 11"
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
                ]
            },
            "services": [
                "local"
            ],
            "facility": "",
            "secondaryName": false
        },
        "5i7b": {
            "name": [
                "灵岩南路",
                "South Lingyan Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "iwf6"
            ],
            "children": [
                "3kgz"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "3kgz": {
            "name": [
                "上南路",
                "Shangnan Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "5i7b"
            ],
            "children": [
                "ldef"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ldef": {
            "name": [
                "华夏西路",
                "West Huaxia Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "3kgz"
            ],
            "children": [
                "8co2"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "8co2": {
            "name": [
                "高青路",
                "Gaoqing Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "ldef"
            ],
            "children": [
                "9ob0"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "9ob0": {
            "name": [
                "东明路",
                "Dongming Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "8co2"
            ],
            "children": [
                "gzyh"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
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
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "gzyh": {
            "name": [
                "高科西路",
                "West Gaoke Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "9ob0"
            ],
            "children": [
                "d52l"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh7",
                            "#FF6900",
                            "#000",
                            "7号线",
                            "Line 7"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "d52l": {
            "name": [
                "临沂新村",
                "Linyi Xincun"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "gzyh"
            ],
            "children": [
                "23oe"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "23oe": {
            "name": [
                "上海儿童医学中心",
                "Shanghai Children's medical centre"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "d52l"
            ],
            "children": [
                "6ymv"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "6ymv": {
            "name": [
                "蓝村路",
                "Lancun Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "23oe"
            ],
            "children": [
                "tpi5"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh4",
                            "#5F259F",
                            "#fff",
                            "4号线",
                            "Line 4"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "tpi5": {
            "name": [
                "浦电路",
                "Pudian Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "6ymv"
            ],
            "children": [
                "v5hl"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "v5hl": {
            "name": [
                "世纪大道",
                "Century Avenue"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "tpi5"
            ],
            "children": [
                "ba19"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh9",
                            "#71C5E8",
                            "#000",
                            "9",
                            "Line"
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
                            "sh2",
                            "#97D700",
                            "#000",
                            "2",
                            "Line"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ba19": {
            "name": [
                "源深体育中心",
                "Yuanshen Stadium"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "v5hl"
            ],
            "children": [
                "8s7f"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "8s7f": {
            "name": [
                "民生路",
                "Minshen Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "ba19"
            ],
            "children": [
                "gxeo"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh18",
                            "#D6A461",
                            "#000",
                            "18",
                            "Line"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "gxeo": {
            "name": [
                "北洋泾路",
                "Beiyangjing Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "8s7f"
            ],
            "children": [
                "wx2t"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "wx2t": {
            "name": [
                "德平路",
                "Deping Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "gxeo"
            ],
            "children": [
                "wd39"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "wd39": {
            "name": [
                "云山路",
                "Yunshan Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "wx2t"
            ],
            "children": [
                "22bg"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh14",
                            "#827A04",
                            "#fff",
                            "14",
                            "Line"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "22bg": {
            "name": [
                "金桥路",
                "Jinqiao Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "wd39"
            ],
            "children": [
                "lo7x"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "lo7x": {
            "name": [
                "博兴路",
                "Boxing Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "22bg"
            ],
            "children": [
                "fhlg"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "fhlg": {
            "name": [
                "五莲路",
                "Wulian Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "lo7x"
            ],
            "children": [
                "4ww0"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "4ww0": {
            "name": [
                "巨峰路",
                "Jufeng Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "fhlg"
            ],
            "children": [
                "j63y"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    [
                        [
                            "shanghai",
                            "sh12",
                            "#007B5F",
                            "#fff",
                            "12",
                            "Line"
                        ]
                    ]
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "j63y": {
            "name": [
                "东靖路",
                "Dongjing Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "4ww0"
            ],
            "children": [
                "ti97"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "ti97": {
            "name": [
                "五洲大道",
                "Wuzhou Avenue"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "j63y"
            ],
            "children": [
                "d5hm"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "d5hm": {
            "name": [
                "洲海路",
                "Zhouhai Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "ti97"
            ],
            "children": [
                "qv59"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "qv59": {
            "name": [
                "外高桥保税区南",
                "South Waigaoqiao Free Trade Zone"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "d5hm"
            ],
            "children": [
                "n0ph"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "n0ph": {
            "name": [
                "航津路",
                "Hangjin Road"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "qv59"
            ],
            "children": [
                "mnz8"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        },
        "mnz8": {
            "name": [
                "外高桥保税区北",
                "North Waigaoqiao Free Trade Zone"
            ],
            "secondaryName": false,
            "num": "00",
            "services": [
                "local"
            ],
            "parents": [
                "n0ph"
            ],
            "children": [
                "l1mz"
            ],
            "branch": {
                "left": [],
                "right": []
            },
            "transfer": {
                "info": [
                    []
                ],
                "tick_direc": "r",
                "paid_area": true,
                "osi_names": []
            },
            "facility": ""
        }
    },
    "line_name": [
        "6号线",
        "Line6"
    ],
    "psd_num": "1",
    "line_num": "TW",
    "info_panel_type": "sh",
    "direction_gz_x": 50,
    "direction_gz_y": 70,
    "customiseMTRDest": {
        "isLegacy": false,
        "terminal": false
    },
    "svgWidth": {
        "destination": 1500,
        "runin": 1500,
        "railmap": 1500,
        "indoor": 2500,
    },
    "notesGZMTR": [],
    "namePosMTR": {
        "isStagger": true,
        "isFlip": false
    }
}

export default params;