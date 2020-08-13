export default {
    toolbar: {
        undo: '撤销',
        redo: '重做',
        paintFormat: '格式刷',
        currencyFormat: '货币格式',
        percentageFormat: '百分比格式',
        numberDecrease: '减少小数位数',
        numberIncrease: '增加小数位数',
        moreFormats: '更多格式',
        font: '字体',
        fontSize: '字号大小',
        bold: '粗体 (Ctrl+B)',
        italic: '斜体 (Ctrl+I)',
        strikethrough: '删除线 (Alt+Shift+5)',
        textColor: '文本颜色',
        chooseColor: '颜色选择',
        resetColor: '重置颜色',
        customColor: '自定义',
        alternatingColors: '交替颜色',
        confirmColor: '确定颜色',
        cancelColor: '取消',
        collapse: '收起',
        fillColor: '单元格颜色',
        border: '边框',
        borderStyle: '边框类型',
        mergeCell: '合并单元格',
        chooseMergeType: '选择合并类型',
        horizontalAlign: '水平对齐',
        verticalAlign: '垂直对齐',
        alignment: '对齐方式',
        textWrap: '文本换行',
        textWrapMode: '换行方式',
        textRotate: '文本旋转',
        textRotateMode: '旋转方式',
        freezeTopRow: '冻结首行',
        sortAndFilter: '排序和筛选',
        findAndReplace: '查找替换',
        sum: '求和',
        autoSum: '自动求和',
        moreFunction: '更多函数',
        conditionalFormat: '条件格式',
        postil: '批注',
        pivotTable: '数据透视表', 
        chart: '图表',
        screenshot: '截图',
        splitColumn: '分列',

        clearText:"清除颜色选择",
        noColorSelectedText:"没有颜色被选择",

        toolMore:"更多",
        toolLess:"少于",
        toolClose:"收起",
        toolMoreTip:"更多功能",
    },
    alternatingColors:{
        applyRange: '应用范围',
        selectRange: '选择应用范围',
        header: '页眉',
        footer: '页脚',

        errorInfo:"不能对多重选择区域执行此操作，请选择单个区域，然后再试",
        textTitle:"格式样式",
        custom:"自定义",
        close:"关闭",
        selectionTextColor:"选择文本颜色",
        selectionCellColor:"选择单元格颜色",
        removeColor:"移除交替颜色",
        colorShow:"颜色",
        currentColor:"当前颜色",

        tipSelectRange:"请选择交替颜色应用范围",
        errorNoRange:"您选择的应用范围不是选区！",
        errorExistColors:"您选择的应用范围已存在交替颜色且不属于你要编辑的应用范围！",
    },
    button: {
        confirm: '确定',
        cancel: '取消',
        close:"关闭"
    },
    paint: {
        start: '格式刷开启',
        end: 'ESC键退出',

        tipSelectRange:"请选择需要复制格式的区域",
        tipNotMulti:"无法对多重选择区域执行此操作",
    },
    format: {
        moreCurrency: '更多货币格式',
        moreDateTime: '更多日期与时间格式',
        moreNumber: '更多数字格式',

        titleCurrency: '货币格式',
        decimalPlaces: '小数位数',
        titleDateTime: '日期与时间格式',
        titleNumber: '数字格式'
    },
    info: {
        detailUpdate: '新打开',
        detailSave: '已恢复本地缓存',
        row: '行',
        column: '列',
        loading:"渲染中",

        copy:"副本",
        return:"返回",
        rename:"重命名",
        tips:"表格重命名",
        noName:"无标题的电子表格",
        wait:"待更新",

        add:"添加",
        addLast:"在底部添加",
        backTop:"回到顶部",
        pageInfo:'共${total}条，${totalPage}页，当前已显示${currentPage}页',
        nextPage:"下一页",

        tipInputNumber:"请输入数字",
        tipInputNumberLimit:"增加范围限制在1-100",

        tipRowHeightLimit:"数值必须在0 ~ 255之间",
        pageInfoFull:'共${total}条，${totalPage}页，已显示全部数据',

    },
    currencyDetail:{
        RMB:'人民币',
        USdollar:'美元',
        EUR:'欧元',
        GBP:'英镑',
        HK:'港元',
        JPY:'日元',
        AlbanianLek:'阿尔巴尼亚列克',
        AlgerianDinar:'阿尔及利亚第纳尔',
        Afghani:'阿富汗尼',
        ArgentinePeso:'阿根廷比索',
        UnitedArabEmiratesDirham:'阿拉伯联合酋长国迪拉姆',
        ArubanFlorin:'阿鲁巴弗罗林',
        OmaniRial:'阿曼里亚尔',
        Azerbaijanimanat:'阿塞拜疆马纳特',
        EgyptianPound:'埃及镑',
        EthiopianBirr:'埃塞俄比亚比尔',
        AngolaKwanza:'安哥拉宽扎',
        AustralianDollar:'澳大利亚元',
        Patacas:'澳门元',
        BarbadosDollar:'巴巴多斯元',
        PapuaNewGuineaKina:'巴布亚新几内亚基那',
        BahamianDollar:'巴哈马元',
        PakistanRupee:'巴基斯坦卢比',
        ParaguayanGuarani:'巴拉圭瓜拉尼',
        BahrainiDinar:'巴林第纳尔',
        PanamanianBalboa:'巴拿马巴波亚',
        Brazilianreal:'巴西里亚伊',
        Belarusianruble:'白俄罗斯卢布',
        BermudianDollar:'百慕大元',
        BulgarianLev:'保加利亚列弗',
        IcelandKrona:'冰岛克朗',
        BosniaHerzegovinaConvertibleMark:'波黑可兑换马克',
        PolishZloty:'波兰兹罗提',
        Boliviano:'玻利维亚诺',
        BelizeDollar:'伯利兹元',
        BotswanaPula:'博茨瓦纳普拉',
        NotDannuzhamu:'不丹努扎姆',
        BurundiFranc:'布隆迪法郎',
        NorthKoreanWon:'朝鲜圆',
        DanishKrone:'丹麦克朗',
        EastCaribbeanDollar:'东加勒比元',
        DominicaPeso:'多米尼加比索',
        RussianRuble:'俄国卢布',
        EritreanNakfa:'厄立特里亚纳克法',
        CFAfranc:'非洲金融共同体法郎',
        PhilippinePeso:'菲律宾比索',
        FijiDollar:'斐济元',
        CapeVerdeEscudo:'佛得角埃斯库多',
        FalklandIslandsPound:'福克兰群岛镑',
        GambianDalasi:'冈比亚达拉西',
        Congolesefranc:'刚果法郎',
        ColombianPeso:'哥伦比亚比索',
        CostaRicanColon:'哥斯达黎加科朗',
        CubanPeso:'古巴比索',
        Cubanconvertiblepeso:'古巴可兑换比索',
        GuyanaDollar:'圭亚那元',
        KazakhstanTenge:'哈萨克斯坦坚戈',
        Haitiangourde:'海地古德',
        won:'韩元',
        NetherlandsAntillesGuilder:'荷属安的列斯盾',
        Honduraslempiras:'洪都拉斯拉伦皮拉',
        DjiboutiFranc:'吉布提法郎',
        KyrgyzstanSom:'吉尔吉斯斯坦索姆',
        GuineaFranc:'几内亚法郎',
        CanadianDollar:'加拿大元',
        GhanaianCedi:'加纳塞地',
        Cambodianriel:'柬埔寨瑞尔',
        CzechKoruna:'捷克克朗',
        ZimbabweDollar:'津巴布韦元',
        QatariRiyal:'卡塔尔里亚尔',
        CaymanIslandsDollar:'开曼群岛元',
        Comorianfranc:'科摩罗法郎',
        KuwaitiDinar:'科威特第纳尔',
        CroatianKuna:'克罗地亚库纳',
        KenyanShilling:'肯尼亚先令',
        LesothoLoti:'莱索托洛蒂',
        LaoKip:'老挝基普',
        LebanesePound:'黎巴嫩镑',
        Lithuanianlitas:'立陶宛立特',
        LibyanDinar:'利比亚第纳尔',
        LiberianDollar:'利比亚元',
        RwandaFranc:'卢旺达法郎',
        RomanianLeu:'罗马尼亚列伊',
        MalagasyAriary:'马达加斯加阿里亚里',
        MaldivianRufiyaa:'马尔代夫拉菲亚',
        MalawiKwacha:'马拉维克瓦查',
        MalaysianRinggit:'马来西亚林吉特',
        MacedoniawearingDinar:'马其顿戴第纳尔',
        MauritiusRupee:'毛里求斯卢比',
        MauritanianOuguiya:'毛里塔尼亚乌吉亚',
        MongolianTugrik:'蒙古图格里克',
        BangladeshiTaka:'孟加拉塔卡',
        PeruvianNuevoSol:'秘鲁新索尔',
        MyanmarKyat:'缅甸开亚特',
        MoldovanLeu:'摩尔多瓦列伊',
        MoroccanDirham:'摩洛哥迪拉姆',
        MozambiqueMetical:'莫桑比克梅蒂卡尔',
        MexicanPeso:'墨西哥比索',
        NamibianDollar:'纳米比亚元',
        SouthAfricanRand:'南非兰特',
        SouthSudanesePound:'南苏丹镑',
        NicaraguaCordoba:'尼加拉瓜科多巴',
        NepaleseRupee:'尼泊尔卢比',
        NigerianNaira:'尼日利亚奈拉',
        NorwegianKrone:'挪威克朗',
        GeorgianLari:'乔治亚拉瑞',
        RMBOffshore:'人民币（离岸）',
        SwedishKrona:'瑞典克朗',
        SwissFranc:'瑞士法郎',
        SerbianDinar:'塞尔维亚第纳尔',
        SierraLeone:'塞拉利昂利昂',
        SeychellesRupee:'塞舌尔卢比',
        SaudiRiyal:'沙特里亚尔',
        SaoTomeDobra:'圣多美多布拉',
        SaintHelenapound:'圣赫勒拿群岛磅',
        SriLankaRupee:'斯里兰卡卢比',
        SwazilandLilangeni:'斯威士兰里兰吉尼',
        SudanesePound:'苏丹镑',
        Surinamesedollar:'苏里南元',
        SolomonIslandsDollar:'所罗门群岛元',
        SomaliShilling:'索马里先令',
        TajikistanSomoni:'塔吉克斯坦索莫尼',
        PacificFranc:'太平洋法郎',
        ThaiBaht:'泰国铢',
        TanzanianShilling:'坦桑尼亚先令',
        TonganPaanga:'汤加潘加',
        TrinidadandTobagoDollar:'特立尼达和多巴哥元',
        TunisianDinar:'突尼斯第纳尔',
        TurkishLira:'土耳其里拉',
        VanuatuVatu:'瓦努阿图瓦图',
        GuatemalanQuetzal:'危地马拉格查尔',
        CommissionBolivar:'委内瑞拉博利瓦',
        BruneiDollar:'文莱元',
        UgandanShilling:'乌干达先令',
        UkrainianHryvnia:'乌克兰格里夫尼亚',
        UruguayanPeso:'乌拉圭比索',
        Uzbekistansom:'乌兹别克斯坦苏姆',
        WesternSamoaTala:'西萨摩亚塔拉',
        SingaporeDollar:'新加坡元',
        NT:'新台币',
        NewZealandDollar:'新西兰元',
        HungarianForint:'匈牙利福林',
        SyrianPound:'叙利亚镑',
        JamaicanDollar:'牙买加元',
        ArmenianDram:'亚美尼亚德拉姆',
        YemeniRial:'也门里亚尔',
        IraqiDinar:'伊拉克第纳尔',
        IranianRial:'伊朗里亚尔',
        NewIsraeliShekel:'以色列新谢克尔',
        IndianRupee:'印度卢比',
        IndonesianRupiah:'印度尼西亚卢比',
        JordanianDinar:'约旦第纳尔',
        VND:'越南盾',
        ZambianKwacha:'赞比亚克瓦查',
        GibraltarPound:'直布罗陀镑',
        ChileanPeso:'智利比索',
        CFAFrancBEAC:'中非金融合作法郎',
    },
    defaultFmt:[
        { "text": '自动', "value": "General", "example": "" },
        { "text": '纯文本', "value": "@", "example": "" },
        { "text": "", "value": "split", "example": "" },
        { "text": '数字', "value": "##0.00", "example": "1000.12" },
        { "text": '百分比', "value": "#0.00%", "example": "12.21%" },
        { "text": '科学计数', "value": "0.00E+00", "example": "1.01E+5" },
        { "text": "", "value": "split", "example": "" },
        { "text": '会计', "value": "¥(0.00)", "example": "¥(1200.09)" },
        //{ "text": "财务", "value": "(#.####)", "example": "(1200.09)" },
        { "text": '万元', "value": "w", "example": "1亿2000万2500" },
        { "text": '货币', "value": "¥0.00", "example": "¥1200.09" },
        //{ "text": "货币整数", "value": "¥####", "example": "¥1200" },
        { "text": '万元2位小数', "value": "w0.00", "example": "2万2500.55" },
        { "text": "", "value": "split", "example": "" },
        { "text": '日期', "value": "yyyy-MM-dd", "example": "2017-11-29" },
        { "text": '时间', "value": "hh:mm AM/PM", "example": "3:00 PM" },
        { "text": '时间24H', "value": "hh:mm", "example": "15:00" },
        { "text": '日期时间', "value": "yyyy-MM-dd hh:mm AM/PM", "example": "2017-11-29 3:00 PM" },
        { "text": '日期时间24H', "value": "yyyy-MM-dd hh:mm", "example": "2017-11-29 15:00" },
        { "text": "", "value": "split", "example": "" },
        { "text": '自定义格式', "value": "fmtOtherSelf", "example": "more" }
    ],
    dateFmtList:[
        {
            "name": "1930-08-05",
            "value": "yyyy-MM-dd"
        },
        {
            "name": "1930/8/5",
            "value": "yyyy/MM/dd"
        },
        {
            "name": "1930年8月5日",
            "value": 'yyyy"年"M"月"d"日"'
        },
        {
            "name": "08-05",
            "value": "MM-dd"
        },
        {
            "name": "8-5",
            "value": "M-d"
        },
        {
            "name": "8月5日",
            "value": 'M"月"d"日"'
        },
        {
            "name": "13:30:30",
            "value": "h:mm:ss"
        },
        {
            "name": "13:30",
            "value": "h:mm"
        },
        {
            "name": "下午01:30",
            "value": 'AM/PM hh:mm'
        },
        {
            "name": "下午1:30",
            "value": 'AM/PM h:mm'
        },
        {
            "name": "下午1:30:30",
            "value": 'AM/PM h:mm:ss'
        },
        {
            "name": "08-05 下午01:30",
            "value": "MM-dd AM/PM hh:mm"
        },
        // {
        //     "name": "1930年8月5日星期二",
        //     "value": ''
        // },
        // {
        //     "name": "1930年8月5日星期二 下午1:30:30",
        //     "value": ''
        // },
    ],
    fontFamily:{
        MicrosoftYaHei:"Microsoft YaHei",
    },
    fontarray: ["Times New Roman","Arial","Tahoma","Verdana","微软雅黑","宋体","黑体","楷体","仿宋","新宋体","华文新魏","华文行楷","华文隶书"],
    fontjson: {"times new roman":0,"arial":1,"tahoma":2,"verdana":3,"微软雅黑":4,"microsoft yahei":4,"宋体":5,"simsun":5,"黑体":6,"simhei":6,"楷体":7,"kaiti":7,"仿宋":8,"fangsong":8,"新宋体":9,"nsimsun":9,"华文新魏":10,"stxinwei":10,"华文行楷":11,"stxingkai":11,"华文隶书":12,"stliti":12,},
    border:{
        borderTop:'上框线',
        borderBottom:'下框线',
        borderLeft:'左框线',
        borderRight:'右框线',
        borderNone:'无',
        borderAll:'所有',
        borderOutside:'外侧',
        borderInside:'内侧',
        borderHorizontal:'内侧横线',
        borderVertical:'内侧竖线',
        borderColor:'边框颜色',
        borderSize:'边框粗细'
    },
    merge:{
        mergeAll:"全部合并",
        mergeV:"垂直合并",
        mergeH:"水平合并",
        mergeCancel:"取消合并",
        overlappingError:"不能合并重叠区域",
        partiallyError:"无法对部分合并单元格执行此操作",
    },
    align:{
        left:"左对齐",
        center:"中间对齐",
        right:"右对齐",

        top:"顶部对齐",
        middle:"居中对齐",
        bottom:"底部对齐",
    },
    textWrap:{
        "overflow":"溢出",
        "wrap":"自动换行",
        "clip":"截断",
    },
    rotation:{
        "none":"无选装",
        "angleup":"向上倾斜",
        "angledown":"向下倾斜",
        "vertical":"竖排文字",
        "rotationUp":"向上90°",
        "rotationDown":"向下90°"
    },
    freezen:{
        default:"冻结首行",
        freezenRow:"冻结首行",
        freezenColumn:"冻结首列",
        freezenRC:"冻结行列",
        freezenRowRange:"冻结行到选区",
        freezenColumnRange:"冻结列到选区",
        freezenRCRange:"冻结行列到选区",
        freezenCancel:"取消冻结",

        noSeletionError:"没有选区",
    },
    sort:{
        "asc":"升序",
        "desc":"降序",
        "custom":"自定义排序",

        "hasTitle":"数据具有标题行",
        "sortBy":"排序依据",
        "addOthers":"添加其他排序列",
        "close":"关闭",
        "confirm":"排序",

        "columnOperation":"列",
        "secondaryTitle":"次要排序",

        "sortTitle":"排序范围",

        "sortRangeTitle":"排序范围从",
        "sortRangeTitleTo":"到",


        "noRangeError":"不能对多重选择区域执行此操作，请选择单个区域，然后再试",
        "mergeError":"选区有合并单元格，无法执行此操作！",

    },
    filter:{
        "filter":"筛选", 
        "clearFilter":"清除筛选", 

        sortByAsc:"以A-Z升序排列",
        sortByDesc:"以Z-A降序排列",
        filterByColor:"按颜色筛选",
        filterByCondition:"按条件过滤",
        filterByValues:"按值过滤",

        filiterInputNone:"无",

        filiterInputTip:"输入筛选值",
        filiterRangeStartTip:"范围开始",
        filiterRangeEndTip:"范围结束",

        filterValueByAllBtn:"全选",
        filterValueByClearBtn:"清除",
        filterValueByInverseBtn:"反选",
        filterValueByTip:"按照值进行筛选",
        filterConform:"确 认",
        filterCancel:"取 消",
        clearFilter:"清除筛选",

        conditionNone:"无",
        conditionCellIsNull:"单元格为空",
        conditionCellNotNull:"单元格有数据",
        conditionCellTextContain:"文本包含",
        conditionCellTextNotContain:"文本不包含",
        conditionCellTextStart:"文本开头为",
        conditionCellTextEnd:"文本结尾为",
        conditionCellTextEqual:"文本等于",
        conditionCellDateEqual:"日期等于",
        conditionCellDateBefore:"日期早于",
        conditionCellDateAfter:"日期晚于",
        conditionCellGreater:"大于",
        conditionCellGreaterEqual:"大于等于",
        conditionCellLess:"小于",
        conditionCellLessEqual:"小于等于",
        conditionCellEqual:"等于",
        conditionCellNotEqual:"不等于",
        conditionCellBetween:"介于",
        conditionCellNotBetween:"不在其中",

        filiterMoreDataTip:"数据量大！请稍后",
        filiterMonthText:"月",
        filiterYearText:"年",
        filiterByColorTip:"按单元格颜色筛选",
        filiterByTextColorTip:"按单元格字体颜色筛选",
        filterContainerOneColorTip:"本列仅包含一种颜色",
        filterDateFormatTip:"日期格式",

        valueBlank:"(空白)",
    },
    rightclick: {
        copy: '复制',
        copyAs: '复制为',
        paste: '粘贴',
        insert: '插入',
        delete: '删除',
        deleteSelected: '删除选中',
        hide: '隐藏',
        hideSelected: '隐藏选中',
        showHide: '显示隐藏',
        to: '向',
        left: '左',
        right: '右',
        top: '上',
        bottom: '下',
        add: '增加',
        row: '行',
        column: '列',
        width: '宽',
        height: '高',
        number: '数字',
        confirm: '确认',
        orderAZ: 'A-Z顺序排列',
        orderZA: 'Z-A降序排列',
        clearContent: '清除内容',
        matrix: '矩阵操作选区',
        sortSelection: '排序选区',
        filterSelection: '筛选选区',
        chartGeneration: '图表生成',
        firstLineTitle: '首行为标题',
        untitled: '无标题',
        array1: '一维数组',
        array2: '二维数组',
        array3: '多维数组',
        diagonal: '对角线',
        antiDiagonal: '反对角线',
        diagonalOffset: '对角偏移',
        offset: '偏移量',
        boolean: '布尔值',
        flip: '翻转',
        upAndDown: '上下',
        leftAndRight: '左右',
        clockwise: '顺时针',
        counterclockwise: '逆时针',
        transpose: '转置',
        matrixCalculation: '矩阵计算',
        plus: '加',
        minus: '减',
        multiply: '乘',
        divided: '除',
        power: '次方',
        root: '次方根',
        log: 'log',
        delete0: '删除两端0值',
        removeDuplicate: '删除重复值',
        byRow: '按行',
        byCol: '按列',
        generateNewMatrix: '生成新矩阵',
    },
    comment:{
        "insert":"新建批注",
        "edit":"编辑批注",
        "delete":"删除",
        "showOne":"显示/隐藏批注",
        "showAll":"显示/隐藏所有批注"
    },
    screenshot:{
        screenshotTipNoSelection:"请框选需要截图的范围",
        screenshotTipTitle:"提示！",
        screenshotTipHasMerge:"无法对合并单元格执行此操作",
        screenshotTipHasMulti:"无法对多重选择区域执行此操作",
        screenshotTipSuccess:"截取成功",
        screenshotImageName:"截图",

        downLoadClose:"关闭",
        downLoadCopy:"复制到剪切板",
        downLoadBtn:"下载",
        browserNotTip:"下载功能IE浏览器不支持！",
        rightclickTip:"请在图片上右键点击'复制'",
        successTip:"已成功复制（如果粘贴失败，请在图片上右键点击'复制图片'）",
    },
    splitText:{
        splitDelimiters:"分割符号",
        splitOther:"其它",
        splitContinueSymbol:"连续分隔符号视为单个处理",
        splitDataPreview:"数据预览",
        splitTextTitle:"文本分列",
        splitConfirmToExe:"此处已有数据，是否替换它？",

        tipNoMulti:"不能对多重选择区域执行此操作，请选择单个区域，然后再试",
        tipNoMultiColumn:"一次只能转换一列数据，选定区域可以有多行，但不能有多列，请在选定单列区域以后再试",
    },
    punctuation:{
        "tab":"Tab 键",
        "semicolon":"分号",
        "comma":"逗号",
        "space":"空格",
        
    },
    findAndReplace:{
        find:"查找",
        replace:"替换",
        goto:"转到",
        location:"定位条件",
        formula:"公式",
        date:"日期",
        number:"数字",
        string:"字符",
        error:"错误",
        condition:"条件格式",
        rowSpan:"间隔行",
        columnSpan:"间隔列",
        locationExample:"定位",
        lessTwoRowTip:"请选择最少两行",
        lessTwoColumnTip:"请选择最少两行",

        findTextbox:"查找内容",
        replaceTextbox:"替换内容",

        regexTextbox:"正则表达式匹配",
        wholeTextbox:"整词匹配",
        distinguishTextbox:"区分大小写匹配",

        allReplaceBtn:"全部替换",
        replaceBtn:"替换",
        allFindBtn:"查找全部",
        findBtn:"查找下一个",

        noFindTip:"没有查找到该内容",

        searchTargetSheet:"工作表",
        searchTargetCell:"单元格",
        searchTargetValue:"值",

        searchInputTip:"请输入查找内容",

        noReplceTip:"没有可替换的内容",
        noMatchTip:"找不到匹配项",

        successTip:"已经帮您搜索并进行了${xlength}处替换",

        locationConstant:"常量",
        locationFormula:"公式",
        locationDate:"日期",
        locationDigital:"数字",
        locationString:"字符",
        locationBool:"逻辑值",
        locationError:"错误",
        locationNull:"空值",
        locationCondition:"条件格式",
        locationRowSpan:"间隔行",
        locationColumnSpan:"间隔列",

        locationTiplessTwoRow:"请选择最少两行",
        locationTiplessTwoColumn:"请选择最少两列",
        locationTipNotFindCell:"未找到单元格"

    },
    sheetconfig: {
        delete: '删除',
        copy: '复制',
        rename: '重命名',
        changeColor: '更改颜色',
        hide: '隐藏',
        unhide: '取消隐藏',
        moveLeft: '向左移',
        moveRight: '向右移',
        resetColor: '重置颜色',
        cancelText: '取消',
        chooseText: '确定颜色',

        tipNameRepeat:"标签页的名称不能重复！请重新修改",
        noMoreSheet:"工作薄内至少含有一张可视工作表。若需删除选定的工作表，请先插入一张新工作表或显示一张隐藏的工作表。",
        confirmDelete:"是否删除",
        redoDelete:"可以通过Ctrl+Z撤销删除",
        noHide:"不能隐藏, 至少保留一个sheet标签",
        chartEditNoOpt:"图表编辑模式下不允许该操作！",

    },
    conditionformat: {
        conditionformat_greaterThan: '条件格式——大于',
        conditionformat_greaterThan_title: '为大于以下值的单元格设置格式',
        conditionformat_lessThan: '条件格式——小于',
        conditionformat_lessThan_title: '为小于以下值的单元格设置格式',
        conditionformat_betweenness: '条件格式——介于',
        conditionformat_betweenness_title: '为介于以下值的单元格设置格式',
        conditionformat_equal: '条件格式——等于',
        conditionformat_equal_title: '为等于以下值的单元格设置格式',
        conditionformat_textContains: '条件格式——文本包含',
        conditionformat_textContains_title: '为包含以下文本的单元格设置格式',
        conditionformat_occurrenceDate: '条件格式——发生日期',
        conditionformat_occurrenceDate_title: '为包含以下日期的单元格设置格式',
        conditionformat_duplicateValue: '条件格式——重复值',
        conditionformat_duplicateValue_title: '为包含以下类型值的单元格设置格式',
        conditionformat_top10: '条件格式——前 10 项',
        conditionformat_top10_percent: '条件格式——前 10%',
        conditionformat_top10_title: '为值最大的那些单元格设置格式',
        conditionformat_last10: '条件格式——最后 10 项',
        conditionformat_last10_percent: '条件格式——最后 10%',
        conditionformat_last10_title: '为值最小的那些单元格设置格式',
        conditionformat_AboveAverage: '条件格式——高于平均值',
        conditionformat_AboveAverage_title: '为高于平均值的单元格设置格式',
        conditionformat_SubAverage: '条件格式——低于平均值',
        conditionformat_SubAverage_title: '为低于平均值的单元格设置格式',
        rule: '规则',
        newRule: '新建规则',
        editRule: '编辑规则',
        deleteRule: '删除规则',
        deleteCellRule: '清除所选单元格的规则',
        deleteSheetRule: '清除整个工作表的规则',
        manageRules: '管理规则',
        showRules: '显示其格式规则',
        highlightCellRules: '突出显示单元格规则',
        itemSelectionRules: '项目选取规则',
        conditionformatManageRules: '条件格式规则管理器',
        format: '格式',
        setFormat: '设置格式',
        setAs: '设置为',
        setAsByArea: '针对选定区域，设置为',
        applyRange: '应用范围',
        selectRange: '点击选择应用范围',
        selectRange_percent: '所选范围的百分比',
        selectRange_average: '选定范围的平均值',
        selectRange_value: '选定范围中的数值',
        pleaseSelectRange: '请选择应用范围',
        selectDataRange: '点击选择数据范围',
        selectCell: '选择单元格',
        pleaseSelectCell: '请选择单元格',
        pleaseSelectADate: '请选择日期',
        pleaseEnterInteger: '请输入一个介于 1 和 1000 之间的整数',
        onlySingleCell: '只能对单个单元格进行引用',
        conditionValueCanOnly: '条件值只能是数字或者单个单元格',
        ruleTypeItem1: '基于各自值设置所有单元格的格式',
        ruleTypeItem2: '只为包含以下内容的单元格设置格式',
        ruleTypeItem2_title: '只为满足以下条件的单元格',
        ruleTypeItem3: '仅对排名靠前或靠后的数值设置格式',
        ruleTypeItem3_title: '为以下排名内的值',
        ruleTypeItem4: '仅对高于或低于平均值的数值设置格式',
        ruleTypeItem4_title: '为满足以下条件的值',
        ruleTypeItem5: '仅对唯一值或重复值设置格式',
        textColor: '文本颜色',
        cellColor: '单元格颜色',
        confirm: '确定',
        confirmColor: '确定颜色',
        cancel: '取消',
        close: '关闭',
        clearColorSelect: '清除颜色选择',
        sheet: '表',
        currentSheet: '当前工作表',
        dataBar: '数据条',
        dataBarColor: '数据条颜色',
        gradientDataBar_1: '蓝-白渐变数据条',
        gradientDataBar_2: '绿-白渐变数据条',
        gradientDataBar_3: '红-白渐变数据条',
        gradientDataBar_4: '橙-白渐变数据条',
        gradientDataBar_5: '浅蓝-白渐变数据条',
        gradientDataBar_6: '紫-白渐变数据条',
        solidColorDataBar_1: '蓝色数据条',
        solidColorDataBar_2: '绿色数据条',
        solidColorDataBar_3: '红色数据条',
        solidColorDataBar_4: '橙色数据条',
        solidColorDataBar_5: '浅蓝色数据条',
        solidColorDataBar_6: '紫色数据条',
        colorGradation: '色阶',
        colorGradation_1: '绿-黄-红色阶',
        colorGradation_2: '红-黄-绿色阶',
        colorGradation_3: '绿-白-红色阶',
        colorGradation_4: '红-白-绿色阶',
        colorGradation_5: '蓝-白-红色阶',
        colorGradation_6: '红-白-蓝色阶',
        colorGradation_7: '白-红色阶',
        colorGradation_8: '红-白色阶',
        colorGradation_9: '绿-白色阶',
        colorGradation_10: '白-绿色阶',
        colorGradation_11: '绿-黄色阶',
        colorGradation_12: '黄-绿色阶',
        icons: '图标集',
        pleaseSelectIcon: '请点击选择一组图标：',
        cellValue: '单元格值',
        specificText: '特定文本',
        occurrence: '发生日期',
        greaterThan: '大于',
        lessThan: '小于',
        between: '介于',
        equal: '等于',
        in: '和',
        to: '到',
        between2: '之间',
        contain: '包含',
        textContains: '文本包含',
        duplicateValue: '重复值',
        uniqueValue: '唯一值',
        top: '前',
        top10: '前 10 项',
        top10_percent: '前 10%',
        last: '后',
        last10: '后 10 项',
        last10_percent: '后 10%',
        oneself: '个',
        above: '高于',
        aboveAverage: '高于平均值',
        below: '低于',
        belowAverage: '低于平均值',
        all: '全部',
        yesterday: '昨天',
        today: '今天',
        tomorrow: '明天',
        lastWeek: '上周',
        thisWeek: '本周',
        lastMonth: '上月',
        thisMonth: '本月',
        lastYear: '去年',
        thisYear: '本年',
        last7days: '最近7天',
        last30days: '最近30天',
        next7days: '未来7天',
        next30days: '未来30天',
        next60days: '未来60天',
        chooseRuleType: '选择规则类型',
        editRuleDescription: '编辑规则说明',
        newFormatRule: '新建格式规则',
        editFormatRule: '编辑格式规则',
        formatStyle: '格式样式',
        fillType: '填充类型',
        color: '颜色',
        twocolor: '双色',
        tricolor: '三色',
        multicolor: '彩色',
        grayColor: '灰色',
        gradient: '渐变',
        solid: '实心',
        maxValue: '最大值',
        medianValue: '中间值',
        minValue: '最小值',
        direction: '方向',
        threeWayArrow: '三向箭头',
        fourWayArrow: '四向箭头',
        fiveWayArrow: '五向箭头',
        threeTriangles: '3个三角形',
        shape: '形状',
        threeColorTrafficLight: '三色交通灯',
        fourColorTrafficLight: '四色交通灯',
        threeSigns: '三标志',
        greenRedBlackGradient: '绿-红-黑渐变',
        rimless: '无边框',
        bordered: '有边框',
        mark: '标记',
        threeSymbols: '三个符号',
        tricolorFlag: '三色旗',
        circled: '有圆圈',
        noCircle: '无圆圈',
        grade: '等级',
        grade4: '四等级',
        grade5: '五等级',
        threeStars: '3个星形',
        fiveQuadrantDiagram: '五象限图',
        fiveBoxes: '5个框',
    },
    formula:{
        sum:"求和",
        average:"平均值",
        count:"计数",
        max:"最大值",
        min:"最小值",
        ifGenerate:"if公式生成器",
        find:"更多函数",

        tipNotBelongToIf:"该单元格函数不属于if公式！",
        tipSelectCell:"请选择单元格插入函数",

        ifGenCompareValueTitle:"比较值",
        ifGenSelectCellTitle:"点击选择单元格",
        ifGenRangeTitle:"范围",
        ifGenRangeTo:"至",
        ifGenRangeEvaluate:"范围评估",
        ifGenSelectRangeTitle:"点击选择范围",
        ifGenCutWay:"划分方式",
        ifGenCutSame:"划分值相同",
        ifGenCutNpiece:"划分为N份",
        ifGenCutCustom:"自定义输入",
        ifGenCutConfirm:"生成",

        ifGenTipSelectCell:"选择单元格",
        ifGenTipSelectCellPlace:"请选择单元格",

        ifGenTipSelectRange:"选择单范围",
        ifGenTipSelectRangePlace:"请选择范围",

        ifGenTipNotNullValue:"比较值不能为空！",
        ifGenTipLableTitile:"标签",
        ifGenTipRangeNotforNull:"范围不能为空！",
        ifGenTipCutValueNotforNull:"划分值不能为空！",
        ifGenTipNotGenCondition:"没有生成可用的条件！",
    },
    formulaMore:{
        valueTitle:"值",
        tipSelectDataRange:"选取数据范围",
        tipDataRangeTile:"数据范围",
        findFunctionTitle:"查找函数",
        tipInputFunctionName:"请输入您要查找的函数名称或函数功能的简要描述",

        "Array":"数组",
        "Database":"数据源",
        "Date":"日期",
        "Engineering":"工程计算",
        "Filter":"过滤器",
        "Financial":"财务",
        "luckysheet":"Luckysheet内置",
        "other":"其它",
        "Logical":"逻辑",
        "Lookup":"查找",
        "Math":"数学",
        "Operator":"运算符",
        "Parser":"转换工具",
        "Statistical":"统计",
        "Text":"文本",
        "dataMining":"数据挖掘",

        "selectFunctionTitle":"选择函数",
        "calculationResult":"计算结果",

        tipSuccessText:"成功",
        tipParamErrorText:"参数类型错误",

        "helpClose":"关闭",
        "helpCollapse":"收起",
        "helpExample":"示例",
        "helpAbstract":"摘要",

        "execfunctionError":'提示", "公式存在错误',
        "execfunctionSelfError":'公式不可引用其本身的单元格',
        "execfunctionSelfErrorResult":'公式不可引用其本身的单元格，会导致计算结果不准确',

        "allowRepeatText":"可重复",
        "allowOptionText":"可选",

        "selectCategory":"或选择类别",
    },
    drag:{
        noMerge:"无法对合并单元格执行此操作",
        affectPivot:"无法对所选单元格进行此更改，因为它会影响数据透视表！",
        noMulti:"无法对多重选择区域执行此操作,请选择单个区域",
        noPaste:"无法在此处粘贴此内容，请选择粘贴区域的一个单元格，然后再次尝试粘贴",
        noPartMerge:"无法对部分合并单元格执行此操作",

        inputCorrect:"请输入正确的数值",
        notLessOne:"行列数不能小于1",
        offsetColumnLessZero:"偏移列不能为负数！",
    },
    pivotTable:{
        title:"数据透视表",
        closePannel:"关闭",
        editRange:"编辑范围",
        tipPivotFieldSelected:"选择需要添加到数据透视表的字段",
        tipClearSelectedField:"清除所有已选字段",
        btnClearSelectedField:"清除",
        btnFilter:"筛选",
        titleRow:"行",
        titleColumn:"列",
        titleValue:"数值",
        tipShowColumn:"统计字段显示为列",
        tipShowRow:"统计字段显示为行",

        titleSelectionDataRange:"选取数据范围",
        titleDataRange:"数据范围",

        valueSum:"总计",

        valueStatisticsSUM:"求和",
        valueStatisticsCOUNT:"数值计数",
        valueStatisticsCOUNTA:"计数",
        valueStatisticsCOUNTUNIQUE:"去重计数",
        valueStatisticsAVERAGE:"平均值",
        valueStatisticsMAX:"最大值",
        valueStatisticsMIN:"最小值",
        valueStatisticsMEDIAN:"中位数",
        valueStatisticsPRODUCT:"乘积",
        valueStatisticsSTDEV:"标准差",

        valueStatisticsSTDEVP:"整体标准差",
        valueStatisticslet:"方差",
        valueStatisticsVARP:"整体方差",

        errorNotAllowEdit:"非编辑模式下禁止该操作！",
        errorNotAllowMulti:"不能对多重选择区域执行此操作，请选择单个区域，然后再试",
        errorSelectRange:"请选择新建透视表的区域",
        errorIsDamage:"此数据透视表的源数据已损坏！",
        errorNotAllowPivotData:"不可选择数据透视表为源数据！",
        errorSelectionRange:"选择失败, 输入范围错误！",
        errorIncreaseRange:"请扩大选择的数据范围!",

        titleAddColumn:"添加列到数据透视表",
        titleMoveColumn:"移动该列到下方白框",
        titleClearColumnFilter:"清除该列的筛选条件",
        titleFilterColumn:"筛选该列",

        titleSort:"排序",
        titleNoSort:"无排序",
        titleSortAsc:"升序",
        titleSortDesc:"降序",
        titleSortBy:"排序依据",
        titleShowSum:"显示总计",
        titleStasticTrue:"是",
        titleStasticFalse:"否",
    },
    dropCell:{
        copyCell:"复制单元格",
        sequence:"填充序列",
        onlyFormat:"仅填充格式",
        noFormat:"不带格式填充",
        day:"以天数填充",
        workDay:"以工作日填充",
        month:"以月填充",
        year:"以年填充",
        chineseNumber:"以中文小写数字填充"
    }
};
