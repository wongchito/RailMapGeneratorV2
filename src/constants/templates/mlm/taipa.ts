const params = {
    style: 'mtr',
    svg_height: 300,
    svg_width: 900,
    svg_dest_width: 1100,
    show_outer: true,
    padding: 7.05352436628492,
    y_pc: 40,
    strip_pc: 90,
    branch_spacing: 44.44444444444444,
    theme: ['macau', 'taipa', '#A4D65E', '#fff'],
    direction: 'l',
    current_stn_idx: 'rul5',
    platform_num: '2',
    txt_bg_gap: 15,
    txt_flip: false,
    stn_list: {
        linestart: {
            parents: [],
            children: ['rygs'],
            name: ['路綫左端', 'LEFT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        lineend: {
            parents: ['iwf6'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            change_type: 'none',
            branch: { left: [], right: [] },
        },
        l1mz: {
            parents: ['ujti'],
            children: ['iwf6'],
            name: ['機場', 'Aeroporto\\Airport'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '22',
        },
        iwf6: {
            children: ['lineend'],
            parents: ['l1mz'],
            name: ['氹仔碼頭', 'Terminal Marítimo da Taipa\\Taipa Ferry Terminal'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '23',
        },
        ujti: {
            parents: ['3ok9'],
            children: ['l1mz'],
            name: ['科大', 'UCTM\\MUST'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '21',
        },
        '3ok9': {
            parents: ['wgb3'],
            children: ['ujti'],
            name: ['路氹東', 'Cotai Leste\\Cotai East'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '20',
        },
        wgb3: {
            parents: ['rul5'],
            children: ['3ok9'],
            name: ['東亞運', 'Jogos da Ásia Oriental\\East Asian Games'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '19',
        },
        rul5: {
            parents: ['s0vw'],
            children: ['wgb3'],
            name: ['蓮花口岸', 'Posto Fronteiriço de Lótus\\Lotus Checkpoint'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '18',
        },
        s0vw: {
            parents: ['tu3q'],
            children: ['rul5'],
            name: ['路氹西', 'Cotai Oeste\\Cotai West'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '17',
        },
        tu3q: {
            parents: ['tgzu'],
            children: ['s0vw'],
            name: ['排角', 'Pai Kok\\Pai Kok'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '16',
        },
        tgzu: {
            parents: ['kf85'],
            children: ['tu3q'],
            name: ['運動場', 'Estádio\\Stadium'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '15',
        },
        kf85: {
            parents: ['rygs'],
            children: ['tgzu'],
            name: ['馬會', 'Jockey Clube\\Jockey Club'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '14',
        },
        rygs: {
            parents: ['linestart'],
            children: ['kf85'],
            name: ['海洋', 'Oceano\\Ocean'],
            change_type: 'none',
            branch: { left: [], right: [] },
            num: '13',
        },
    },
    line_name: ['氹仔綫', 'Linha Taipa'],
    dest_legacy: false,
    char_form: 'trad',
    psd_num: '3',
    line_num: 'TP',
};

export default params;
