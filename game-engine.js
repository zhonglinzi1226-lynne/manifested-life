
// ============================================================
// GAME ENGINE — 主线11阶段剧情系统
// ============================================================
var STAGES = [

// ── 阶段1：AGE 3 ────────────────────────────────────────────
{
  age:'AGE 3', title:'真人秀首秀',
  scene:'波普风比弗利山庄客厅，粉色主调，摄像机阵列',
  bg:'你出生在了全美最能搞事的卡戴珊家族。你妈太后 Kris Jenner——一手操盘了收视之王《与卡戴珊同行》，好莱坞最精明的「妈纪人」正微笑着坐在摄像机旁边。今天是你的3周岁生日，轮到你上场了。',
  story:'<strong>比弗利山庄卡戴珊豪宅客厅</strong>。粉色羊绒地毯上摆满摄像机，全美200万观众在线蹲守你的周岁生日派对。太后把嘴贴在你耳边说：「听着宝贝，大哭，越委屈越好。<strong>镜头前没有流泪，只有流量！</strong>这是卡戴珊家的第一课。」',
  choices:[
    {tag:'A',text:'嚎啕大哭，一把抢过姐姐的洋娃娃',
     delta:{liuliang:30,taihou:25,ziwo:-20,shenjia:2},type:'名利',
     feedback:'你的哭戏堪比奥斯卡，KTV频道收视率暴涨，太后当场签下了你的第一份婴儿食品代言——代言的是四牛奶粉，后来被曝出有造假，你第一时间站队取消代言。万幸的是成长很健康。'},
    {tag:'B',text:'面无表情地对着镜头疯狂翻白眼',
     delta:{liuliang:5,taihou:-25,ziwo:30},type:'独立',
     feedback:'你翻白眼的0.5秒片段被截成GIF席卷TikTok，<strong>#[name]厌世宝宝#</strong> 冲上全美热搜第一，脱口秀女王邀请你上节目，周六夜现场给你做了专属模仿小品。但因为你还不会说话，所有商务邀约都被太后以「保护宝宝童年」推掉了——实际上是因为她还没谈好分成比例。'},
    {tag:'C',text:'爬向最近的摄像机，一口咬住镜头',
     delta:{liuliang:40,taihou:5,ziwo:10,shenjia:1},type:'抓马',
     feedback:'你咬碎了一台价值$50,000的RED摄影机镜头。视频在YouTube获得8000万播放量，被封为「<strong>史上最贵的婴儿行为艺术</strong>」。KTV频道向太后发了设备赔偿账单，太后转手把这段视频版权卖给了Netflix，赚的比赔的多10倍。'},
    {tag:'D',text:'直接在粉色羊绒地毯上拉了一坨',
     delta:{liuliang:25,taihou:-15,ziwo:15},type:'抓马',
     feedback:'直播事故！你在全美200万观众面前制造了一场「生化危机」。太后脸上的笑容凝固了0.3秒（这是她职业生涯唯一一次在镜头前破功）。但这个名场面反而成了卡戴珊真人秀的经典片段，十年后还在被做成鬼畜视频。有大学生专门在知网开文讨论这坨便便的哲学意义，并创立了「<strong>构石期刊</strong>」。'}
  ]
},

// ── 阶段2：AGE 16 ───────────────────────────────────────────
{
  age:'AGE 16', title:'颜值微调',
  scene:'波普风VIP医美诊所，霓虹色调，墙上挂满卡家Before/After对比照',
  bg:'你16岁了，在这个家族里长大你明白一个真理：<strong>颜值就是印钞机</strong>。大姐金靠翘臀成为全球顶流，小妹凯莉靠丰唇建了十亿美妆帝国，该轮到你了。',
  story:'<strong>比弗利山庄顶级医美诊所的VIP室</strong>。墙上挂着卡戴珊全家的前后对比照，桌上放着丝芙兰上亿美妆代言合约。妈妈用指尖敲了敲3D建模图上你的鼻子和臀部：「亲爱的，看看金的屁股、凯莉的嘴唇，这就是我们家的印钞机。你的鼻子不够翘，臀部不够饱满，上镜就是扁平的。<strong>做完它，这份独家代言就是你的。</strong>」',
  choices:[
    {tag:'A',text:'"妈，给我来全套，鼻子、下巴、臀部一步到位"',
     delta:{liuliang:50,taihou:35,ziwo:-30,shenjia:10},type:'名利',
     triggerSideline:'korea',
     feedback:'手术大获成功！翘臀和精致鼻子直接登上八卦头条。但一周后飞迈阿密参加派对，过机场安检时臀部假体里的微量金属标识触发了探测器，安检员当着全机场的人给你做二次安检，严肃问「身上是不是藏了违禁品」。路人拍下视频发到网上，<strong>#[name]翘臀暗藏玄机#</strong> 笑上热搜。',extraDelta:{liuliang:10}},
    {tag:'B',text:'"只做嘴唇，别的我自己说了算"',
     delta:{liuliang:20,taihou:-10,ziwo:10,shenjia:5},type:'独立',
     feedback:'只做了唇部微调，效果自然到网友争论了三个月「到底动没动」。TikTok上掀起了<strong>#[name]香肠嘴#</strong> 挑战赛，间接帮丝芙兰代言多卖了200%。太后虽然嫌你「不够彻底」，但看到销量数据后勉强满意。'},
    {tag:'C',text:'"不了，我这张脸就是最好的出厂设置"',
     delta:{liuliang:-25,taihou:-30,ziwo:40,shenjia:-3},type:'独立',
     feedback:'前姐夫侃爷凌晨3点连发17条推特，置顶一条：「<strong>卡家军里唯一清醒的女士！</strong>」你的Ins一夜涨粉120万，流量直接飙升，但太后看到后当场气炸，冻结了你名下所有黑卡、信用卡，还把你从真人秀主镜头里剪掉了3集。',extraDelta:{liuliang:50}},
    {tag:'D',text:'"我不做，但我可以代言医美品牌再暗中劝退别人整容"',
     delta:{liuliang:30,taihou:-20,ziwo:20,shangyebantu:15},type:'商业',
     feedback:'你签下了医美品牌代言，拍了一组「自然美」大片，暗中在Ins story里发「爱自己本来的样子」。两边通吃的操作被网友称为「<strong>薛定谔的整容</strong>」——你既是医美代言人，又是自然美倡导者。商业天才还是两面派？网友吵翻了，但不管站哪边都在给我贡献流量。'}
  ]
},

// ── 阶段3：AGE 18 ───────────────────────────────────────────
{
  age:'AGE 18', title:'录像带危机',
  scene:'波普风卧室，暗红主调，好莱坞瓜厂倒计时数字在背景闪烁',
  bg:'这个家族里有一条不成文的「传统」——大姐金当年就是靠一段「意外流出」的私密录像带一夜封神，太后在幕后操盘，把这场丑闻变成了年入千万的流量核弹。如今你18岁了，太后觉得是时候复制这个「<strong>成功模板</strong>」了。',
  story:'<strong>家族山庄你的卧室</strong>。太后反手锁门，拉紧窗帘，把一份收购合同拍在你床上。电脑屏幕上是你和NBA前男友的私密视频，八卦媒体24小时后就要曝光。她坐在床边，用最平静的语气说：「宝贝，现在有两个选择：<strong>花2000万买断所有母带，保全面子；或者让它流出去，分成、公关通稿、人设包装我都帮你谈好了。</strong>」',
  choices:[
    {tag:'A',text:'"掏空积蓄也要买断母带。我要尊严。"',
     delta:{liuliang:-10,taihou:-25,ziwo:50,shenjia:-10},type:'独立',
     feedback:'花光了所有存款买断了母带，媒体虽然没了视频但还是写了一篇「<strong>卡家千金花天价捂盖子</strong>」的报道。太后三天没和你说话，但你在浴室镜子里对自己说了句「至少这是你自己的选择」。'},
    {tag:'B',text:'"不小心流出，这次一定要提现！"',
     delta:{liuliang:150,taihou:30,ziwo:-45,shenjia:100},type:'名利',
     feedback:'视频「意外」流出，你一夜之间从「卡家小透明」变成全球热搜第一。太后在你成为顶流的第二天就帮你签下了三个代言。Ins粉丝暴涨2000万，代价是——<strong>每条评论区都有人发那个视频的截图</strong>。'},
    {tag:'C',text:'"自己先发声明说视频是AI换脸的"',
     delta:{liuliang:80,taihou:-10,ziwo:20,shenjia:30},type:'商业',
     feedback:'你抢在媒体前面发了一份措辞严厉的律师函，声称视频是AI deepfake。虽然大家心知肚明，但这招居然有效——视频变成了「<strong>薛定谔的录像带</strong>」，没人能确认真假。你趁机接下了一个AI安全公司的代言，并在发布会上与硅谷钢铁侠马斯克短暂邂逅。'},
    {tag:'D',text:'"给前男友打电话：咱俩一起开个OnlyFans吧"',
     delta:{liuliang:200,taihou:55,ziwo:-55,shenjia:150},type:'抓马',
     triggerSideline:'onlyfans_seed',
     feedback:'你和前男友联合开设了OnlyFans账号，首月订阅突破百万。太后惊喜地发现这比卖给成人网站赚多了10倍：「<strong>为什么要让平台抽成？我们自己就是平台！</strong>」你成了社交媒体创业的先驱，但代价是——感恩节全家聚餐时没人敢和你对视。'}
  ]
},

// ── 阶段4：AGE 20 ───────────────────────────────────────────
{
  age:'AGE 20', title:'彩妆帝国与家族内战',
  scene:'波普风化妆品发布会 + TMZ爆料画面双拼',
  bg:'19岁那年你创立了自己的彩妆品牌「<strong>不完美日记</strong>」，主打全色号唇釉和修容盘。你的NBA球星男友和你谈了2年，全网都在磕你们的金童玉女CP。品牌上线在即，Ins评论区全是「快出新色号」——直到八卦媒体TMZ今天凌晨放了一颗核弹。',
  story:'<strong>发布会前24小时</strong>，TMZ爆出你男友酒店出轨的视频。<strong>#[name]男友出轨#</strong> 冲上热搜第一，品牌官号评论区被冲爆，所有人都在等你的态度。太后拿着公关稿和彩妆新品色号表冲进来，眼神锐利：「<strong>听着，这不是灾难，这是机会。明天你化着淡妆、红着眼圈上台，宣布『坚强系列』唇釉同步上线。</strong>」',
  choices:[
    {tag:'A',text:'"我妈比我会做营销！假哭我在行。"',
     delta:{liuliang:120,taihou:40,ziwo:-30,shangyebantu:200},type:'名利',
     stage4Branch:'drama',
     feedback:'你的「坚强大女主」发布会爆了，<strong>#[name]要坚强#</strong> 霸榜热搜3天，「不完美日记」坚强系列上线10分钟售罄，品牌估值直接翻3倍。但前男友接受采访说你「把感情当成了流量工具」，你回应：「这次我一定要变现！」'},
    {tag:'B',text:'"这是私事，低调处理就行。"',
     delta:{liuliang:-20,taihou:-35,ziwo:40,shangyebantu:-30},type:'独立',
     stage4Branch:'grace',
     feedback:'你发了一条简短声明「私人感情问题私下处理」，取消发布会所有煽情环节。销量只卖了预期30%，太后气得一周没和你说话，说你「浪费了天赐的流量机会」。但你和男友和平分手，<strong>保留了最后的体面</strong>。'},
    {tag:'C',text:'"如果出轨对象愿意配合，搞三方联名"',
     delta:{liuliang:200,taihou:20,ziwo:-35,shangyebantu:100},type:'抓马',
     stage4Branch:'drama',
     feedback:'你、前男友、出轨网红三个人一起上了真人秀「三角恋特辑」，收视爆炸。推出了「三角关系」三色唇釉套装，<strong>每盒附赠一张前男友的道歉卡</strong>。网友惊呼「资本主义的终极形态」。太后在幕后笑得合不拢嘴。'}
  ]
},

// ── 阶段5：AGE 25 ───────────────────────────────────────────
{
  age:'AGE 25', title:'20%的养孩子利息',
  scene:'波普风董事会议室，红木桌，墙上是巨大的收入流水图',
  bg:'卡家太后是所有孩子的经纪人，她从每个孩子的收入里抽<strong>20%</strong>——管这叫「养你的利息」。五年来你赚了8个亿，其中2个亿进了太后的口袋。今天，你25岁了，经纪合约到期了。',
  story:'<strong>卡戴珊家族总部董事会会议室</strong>。长条桌前坐满了律师和财务总监，墙上屏幕显示你过去5年的收入流水，太后拿着两份文件：续约合同 vs 解约合同。「<strong>选吧：继续让妈妈操盘，一起赚更多的钱；或者解雇妈妈，脱离家族，自己掌管一切——但卡戴珊的资源，你再也用不了了。</strong>」',
  choices:[
    {tag:'A',text:'"妈，续约，给你涨到30%"',
     delta:{liuliang:50,taihou:130,ziwo:-35,shenjia:50,caopan:-100},type:'名利',
     feedback:'太后感动得差点掉了假睫毛（注意是「差点」，卡家的假睫毛$500一对）。你成了太后最宠爱的女儿，所有最好的资源优先给你。代价是——<strong>你签字时手在抖</strong>，因为你清楚这意味着什么。'},
    {tag:'B',text:'"解雇她！自己单干！"',
     delta:{liuliang:-15,taihou:-80,ziwo:120,shenjia:10,caopan:100},type:'独立',
     feedback:'你离开家族后，太后在真人秀里哭诉「我失去了一个女儿」（收视率暴涨），同时<strong>暗中指示律师冻结了你名下的三处房产和两个品牌的商标</strong>。你才意识到——卡家的资源不是说断就能断的。'},
    {tag:'C',text:'"续约可以，但重谈条件——5%，不能更多"',
     delta:{liuliang:0,taihou:20,ziwo:30,shenjia:100,caopan:20},type:'商业',
     feedback:'经过<strong>48小时不眠不休的谈判</strong>（太后中途两次假装心脏病发作），最终敲定7.5%。双方都不完全满意，但这恰恰说明这是一个好的交易。'},
    {tag:'D',text:'"妈，让我来当整个家族的经纪人，你退休吧"',
     delta:{liuliang:30,taihou:-50,ziwo:80,caopan:150},type:'抓马',
     feedback:'太后沉默了整整30秒（这是她人生中最长的一次沉默）。然后她笑了：「<strong>我等这一天等了25年。</strong>」她没有生气——她在你身上看到了年轻时的自己。当然，她还是偷偷保留了一票否决权。'}
  ]
},

// ── 阶段6：AGE 28 ───────────────────────────────────────────
{
  age:'AGE 28', title:'婚姻裂变',
  scene:'波普风离婚律师事务所，洛杉矶天际线背景',
  bg:'大姐当年花重金办了场全程直播的世纪婚礼，结果72天就闪离，但太后把离婚炒成了年度最赚钱的真人秀素材。现在轮到你了——<strong>你28岁，婚姻走到了尽头</strong>，前夫要分走你一半资产和孩子抚养权。',
  story:'太后站在你身后低声说：「<strong>宝贝，离婚是女人最好的投资。</strong>」',
  choices:[
    {tag:'A',text:'"和平分手，但孩子不许上镜。"',
     delta:{liuliang:-20,taihou:20,ziwo:60,shenjia:10,caopan:20},type:'独立',
     feedback:'你发了一份优雅的分手声明，网友评价「<strong>离婚都这么体面，不愧是顶流</strong>」。你和前夫保持了共同抚养孩子的体面关系。'},
    {tag:'B',text:'"放出他所有黑料，热搜给我霸满一周。"',
     delta:{liuliang:120,taihou:60,ziwo:-40,shenjia:50,caopan:50},type:'名利',
     feedback:'你在真人秀里曝光前夫出轨、转移资产的实锤，前夫恼羞成怒争夺抚养权。太后亲自下场，带全家拍了【<strong>全家代言手撕鸡</strong>】特辑，收视破纪录。流量暴涨但路人口碑暴跌。',extraDelta:{liuliang:80}},
    {tag:'C',text:'"告诉前夫：要么净身出户，要么太后来处理"',
     delta:{liuliang:0,taihou:30,ziwo:10,shenjia:80,caopan:30},type:'商业',
     feedback:'前夫接到太后的电话后15分钟就签了和解协议。没人知道太后说了什么，但你前夫从此对「<strong>卡戴珊</strong>」这个姓氏产生了PTSD。后来有记者问他离婚感想，他只说了一句：「我建议所有男人远离比弗利山庄。」'}
  ]
},

// ── 阶段7：AGE 30 ───────────────────────────────────────────
{
  age:'AGE 30', title:'经纪人事业',
  scene:'{name}经纪公司开业红毯，金色主调',
  bg:'太后用30年把卡戴珊打造成了<strong>好莱坞最赚钱的品牌</strong>。现在你30岁了，太后觉得该把这门手艺传给你了。',
  story:'<strong>你的个人经纪公司开业</strong>，太后把全家姐妹的独家经纪权递给你：「今天，我正式把卡戴珊家族所有姐妹的经纪权交给你。你可以效仿我，<strong>把生活卖成流量，统治好莱坞。</strong>」',
  choices:[
    {tag:'A',text:'"接手全部经纪权，我要做这个家族的新太后"',
     delta:{liuliang:100,taihou:100,ziwo:-35,shenjia:150,caopan:150,shangyebantu:100},type:'名利',
     triggerSideline:'kanye_possible',
     feedback:'侃爷团队递上<strong>20亿全球独家经纪合约</strong>。太后强烈反对，并且扬言要让他代言咖啡豆，侃爷只好ye憾退场。'},
    {tag:'B',text:'"姐姐们的事，我不掺和"',
     delta:{liuliang:-10,taihou:-50,ziwo:80,shenjia:30,caopan:-50,shangyebantu:30},type:'独立',
     feedback:'你选择轻装上阵，不卷家族事务。太后失望但尊重你的决定，把经纪权转给了妹妹。<strong>不知道你要干嘛。</strong>'},
    {tag:'C',text:'"我要改革，把家族升级成MCN"',
     delta:{liuliang:50,taihou:30,ziwo:20,caopan:80,shangyebantu:200},type:'商业',
     feedback:'你把卡家改造成了好莱坞第一个MCN机构，不仅签了姐妹们，还签了一批新生代网红。年收入翻了5倍，被福布斯评为「<strong>重新定义经纪人行业的女人</strong>」。太后表面上很自豪，但私下里偷偷搜索「MCN是什么意思」。'}
  ]
},

// ── 阶段8：AGE 32 ───────────────────────────────────────────
{
  age:'AGE 32', title:'真人秀',
  scene:'波普风电视台总部，15亿美元数字在背景闪烁',
  bg:'你已经32岁<strong>功成名就</strong>，现在电视台给你递来了一份史无前例的超级合约——<strong>15亿，20季真人秀续拍你的一切</strong>。',
  story:'CEO说：「我们要拍你的一切——撕逼、婚姻、生孩子、离婚，<strong>全部！</strong>」',
  choices:[
    {tag:'A',text:'"拍！全拍！我连上厕所都可以直播！"',
     delta:{liuliang:300,taihou:110,ziwo:-60,shenjia:300,caopan:100,shangyebantu:200},type:'名利',
     feedback:'首播收视破历史纪录，连续20季经久不衰，<strong>8次艾美奖提名</strong>。你成了好莱坞最有权势的女制作人。',extraDelta:{liuliang:200,shangyebantu:500},extraMultiply:{shenjia:2}},
    {tag:'B',text:'"低俗真人秀免了，我要做高端访谈节目"',
     delta:{liuliang:-20,taihou:-50,ziwo:100,shenjia:-120,caopan:-20,shangyebantu:20},type:'独立',
     feedback:'你拒绝了抓马真人秀，转而做了一档深度访谈节目。虽然收视率远不如卡家真人秀，但你采访了奥巴马夫人、比尔·盖茨、霉霉，节目<strong>拿了两个艾美奖</strong>。太后酸溜溜地说：「两个艾美奖还抵不上我一集的广告费。」'},
    {tag:'C',text:'"拍真人秀可以，但最终剪辑权必须在我手里"',
     delta:{liuliang:150,taihou:30,ziwo:10,shenjia:200,caopan:80,shangyebantu:150},type:'商业',
     feedback:'你成了好莱坞唯一一个拥有真人秀最终剪辑权的明星。每一帧画面都经过你的审批——你保留了足够的抓马来维持收视，同时删掉了所有真正伤害家人的片段。业内人称你为「<strong>剪刀手爱德华</strong>」。'}
  ]
},

// ── 阶段9：AGE 35 ───────────────────────────────────────────
{
  age:'AGE 35', title:'二次婚姻',
  scene:'波普风海滩晚宴，星空下的名流派对',
  bg:'你已经35岁，太后已经开始「操盘」你的感情了——她在一场海滩私人晚宴上给你安排了一位<strong>体育界名流</strong>。',
  story:'<strong>海滩私人晚宴</strong>，体育名流给你讲奥运会十项全能金牌夺冠故事。远处的太后疯狂比手势：「<strong>宝贝，让他赘给你！</strong>」',
  choices:[
    {tag:'A',text:'"行，但婚前协议你自己写"',
     delta:{liuliang:80,taihou:70,ziwo:-50,shenjia:100,caopan:50,shangyebantu:100},type:'名利',
     feedback:'婚后10年，布鲁斯公开跨性别身份，登上《名利场》封面，震惊全球。太后让你立刻切割。你选择站在伴侣身边，发表了一篇感人至深的长文。',extraDelta:{liuliang:100,taihou:-30,ziwo:50}},
    {tag:'B',text:'"我是个坚强的笨女人，不需要联姻"',
     delta:{liuliang:0,taihou:-30,ziwo:90,shenjia:-10,caopan:20},type:'独立',
     feedback:'你拒绝了联姻，在Ins上发了一段独白：「<strong>我是个坚强的笨女人，爱情不是交易。</strong>」视频播放量破亿，成了独立女性的宣言。太后虽然不满，但偷偷把这段视频收藏了。'},
    {tag:'C',text:'"不嫁他，但我可以当他的经纪人"',
     delta:{liuliang:30,taihou:10,ziwo:30,shenjia:50,caopan:30,shangyebantu:80},type:'商业',
     feedback:'你没有嫁给布鲁斯，但签下了他的独家经纪约。后来他的跨性别公开宣言成了你经手的最大公关案例——你把一场潜在的PR灾难变成了<strong>年度最佳人权营销案例，拿了戛纳广告节金狮奖</strong>。'}
  ]
},

// ── 阶段10：AGE 40 ──────────────────────────────────────────
{
  age:'AGE 40', title:'商业集团的抉择',
  scene:'波普风集团总部大楼，品牌墙铺满整面',
  bg:'我们家的商业版图涵盖美妆、服饰、塑身衣、龙舌兰、播客、游戏IP——<strong>只要能印logo的东西，都被变现过</strong>。现在你40岁了，集团的方向盘在你手里。',
  story:'<strong>卡戴珊商业集团总部顶层</strong>，整面墙都是旗下品牌。太后把控制权钥匙递给你，问你想做什么。',
  choices:[
    {tag:'A',text:'"把我的脸印在所有能卖钱的东西上！"',
     delta:{liuliang:150,taihou:100,ziwo:-80,shenjia:500,caopan:100,shangyebantu:800},type:'名利',
     feedback:'全面扩张商业版图。<strong>美国国税局IRS上门调查税务漏洞</strong>，太后让你顶包。你拿出证据让全家按股份比例共同承担，Kris当场翻脸。',extraDelta:{taihou:-110,ziwo:100,caopan:100}},
    {tag:'B',text:'"高端化。做卡戴珊的爱马仕，不做沃尔玛"',
     delta:{liuliang:-180,taihou:-40,ziwo:70,shenjia:-30,caopan:30,shangyebantu:200},type:'独立',
     feedback:'你砍掉所有低俗流量变现线，只保留高端线。三年后品牌登上巴黎时装周，Vogue女魔头亲自写了推荐语。太后虽然嫌你「赚得少」，但看到<strong>爱马仕总裁主动约你午餐</strong>后闭嘴了。'},
    {tag:'C',text:'"两条腿走路——高端线用主品牌，平价线用子品牌"',
     delta:{liuliang:80,taihou:40,ziwo:10,shenjia:300,caopan:50,shangyebantu:500},type:'商业',
     feedback:'你创造了「奢侈品+快消品双线并行」的商业模式，被<strong>哈佛商学院收录为经典案例</strong>。太后评价：「我只会赚一个人的钱，你学会了赚所有人的钱。」'}
  ]
},

// ── 阶段11：AGE 50 ──────────────────────────────────────────
{
  age:'AGE 50', title:'女族长加冕',
  scene:'波普油画风格的圣诞晚宴加冕现场，金色与红色交织',
  bg:'你50岁了，太后也垂垂老矣，但眼神依旧锐利。今晚是卡家年度圣诞晚宴——也是<strong>权力交接的时刻</strong>。你这一辈子经历了真人秀首秀、录像带风暴、离婚大战、商业集团争夺…最后一道选择题，到了。',
  story:'<strong>卡戴珊家族年度圣诞晚宴</strong>。垂垂老矣的太后拿着家族信托站在台上：「今天，我正式宣布卡戴珊家族<strong>太后易主</strong>！这是你人生的最后一道选择题。」',
  choices:[
    {tag:'A',text:'"给我家族信托。显化成功！"',
     delta:{liuliang:500,taihou:200,ziwo:-100,shenjia:1000,caopan:200,shangyebantu:1000},type:'名利',
     feedback:'你接过权杖的那一刻，全场起立鼓掌。你成了好莱坞新一代女族长，卡戴珊帝国在你手上将迎来更加疯狂的时代。'},
    {tag:'B',text:'"我要自由。再见妈妈。"',
     delta:{liuliang:-350,taihou:-80,ziwo:200,shenjia:-150,caopan:-200,shangyebantu:0},type:'独立',
     feedback:'你摘下钻石耳环，放下爱马仕包，走出了那扇金色大门。你开车去了洛杉矶国际机场，买了一张单程票飞往巴黎。在飞机上注销了Ins、TikTok、Twitter全部社交账号——<strong>1.2亿粉丝，在按下确认键的那一刻，全部归零</strong>。空姐认出了你，问要不要升舱，你说：「不用了，经济舱就挺好。」这是你35年来第一次坐经济舱。'},
    {tag:'C',text:'"不接，但我提议——家族去kris化"',
     delta:{liuliang:50,taihou:-50,ziwo:80,caopan:100,shangyebantu:200},type:'商业',
     feedback:'你拒绝了独裁式的权力交接，提出了现代化的家族治理方案。姐妹们第一次拥有了平等的投票权。太后虽然不情愿，但承认「<strong>也许这才是家族基业长青的方式</strong>」。'},
    {tag:'D',text:'接，然后当着所有人的面撕掉它',
     delta:{liuliang:300,taihou:-80,ziwo:150,caopan:0,shangyebantu:-200},type:'抓马',
     feedback:'全场震惊。这一刻被在场的每一台手机拍下，3秒内登上全球热搜第一。你对着镜头说了一句话：「<strong>卡戴珊家族不需要女王，需要的是每个人都能做自己。</strong>」然后转身走出大门。太后——生平第一次——什么都没说。'}
  ]
}

]; // END STAGES


// ============================================================
// 结局数据（按优先级排序）— 2026-04-07 数值平衡版 v13
// 设计原则：即死维度失败最优先，然后隐藏→傀儡→成功→兜底
// 全部15个结局均可达（12主线+3支线），模拟路径覆盖率100%
// 即死阈值统一为≤0，通过调整选项delta让数值更均衡
// ============================================================
var ENDINGS = [

  // ═══ 第一层：即死失败结局（选择后维度爆掉 → 即死）═══════════════

  // ── 失败结局：精神死亡（自我≤0 即死触发）─────────────────────
  {id:'soul_death',
   condition:function(s){return s.ziwo<=0;},
   title:'精神死亡',subtitle:'自我归零 · 失败结局',color:'#8B0000',
   headline:'她彻底成为了流水线上最畅销的单品！',
   story:'\u201C你的瞳孔里不再有光，彻底剥离了名为\u2019自我\u2019的累赘，成为了太后流水线上最畅销的单品。冷白皮、深红唇、标准弧度的假笑，你在这个华丽的名利场里，熟练地对着镜头念出那句台词：<strong>所有人保持A9。</strong>\u201D',
   krisQuote:'（Kris拿着你的日程表，头也没抬）\u201C明天还有两个代言和一个法庭传票。去化妆。\u201D',
   manifesto:'当你显化成功：你发现你买不到一秒钟的真实感受。',
   persona:'太后流水线上最畅销的单品——完美傀儡',
   isFail:true},

  // ── 失败结局：严肃破产中（身价≤0 即死触发）──────────────────
  {id:'broke',
   condition:function(s){return s.shenjia<=0;},
   title:'严肃破产中',subtitle:'比弗利流浪公主 · 失败结局',color:'#5D4037',
   headline:'破产！亿万名媛沦落街头，连热狗都要分期付款！',
   story:'\u201C法院的查封通知贴满了你曾经的豪宅大门。你的银行账户被冻结，信用卡全部作废，连最后一件Lululemon都被前夫的律师列入了资产清算清单。你试图用Ins带货翻身，但粉丝们发现你推荐的产品<strong>连你自己都买不起了</strong>。\u201D',
   krisQuote:'Kris（沉默很久）：\u201C我教过她所有的事……就是没教她存钱。这是我最大的失误。\u201D',
   manifesto:'当你显化成功：你发现没有了钱，你也终于有时间了。',
   persona:'比弗利山庄的流浪公主，用破产证明了钱真的很重要',
   isFail:true},

  // ── 失败结局：过气顶流（流量≤0 即死触发）──────────────────────
  {id:'forgotten',
   condition:function(s){return s.liuliang<=0;},
   title:'过气顶流',subtitle:'互联网遗忘者 · 失败结局',color:'#455A64',
   headline:'谁？一代顶流彻底消失，连狗仔都懒得跟拍了！',
   story:'\u201C你发了一条Ins，24小时后点赞数是——3个，其中一个还是你自己的小号。你从全美热搜常客变成了互联网透明人。算法把你的内容推到第1000页之后，和那些卖假包的广告排在一起。你试过蹭热点、搞争议、甚至在直播里当众剃头，但流量的规则很简单：这个世界已经有了新的卡戴珊，而<strong>你只是旧版本的缓存</strong>。\u201D',
   krisQuote:'Kris（摊手）：\u201C商业的尽头不是利润，是关注度。她把关注度都输光了。\u201D',
   manifesto:'当你显化成功：钱买不到算法的青睐，你已经是昨天的话题了。',
   persona:'互联网遗忘者，一个被时代抛下的旧版本',
   isFail:true},

  // ── 失败结局：逐出卡门（太后好感≤0 即死触发）──────────────
  {id:'exile',
   condition:function(s){return s.taihou<=0;},
   title:'逐出「卡」门',subtitle:'家族除名 · 失败结局',color:'#37474F',
   headline:'太后清理门户！亲生女儿惨遭家族除名，被P成盆栽！',
   story:'\u201C太后终于做了她威胁了20年的事——把你从卡戴珊家族除名。你的名字从家族信托基金里被划掉，真人秀的所有镜头都被剪掉，甚至连家族合影里你的脸都被P成了<strong>一盆绿植</strong>。\u201D',
   krisQuote:'Kris：\u201C我有一个女儿……没有了。我有四个女儿。一株绿植。\u201D',
   manifesto:'当你显化成功：你发现家族的黑卡已经停用了。',
   persona:'卡戴珊宇宙的异类，被P成盆栽的家族传说',
   isFail:true},

  // ═══ 第二层：隐藏结局 ═══════════════════════════════════════

  // ── 隐藏结局：抓马queen（全程选≥4次抓马选项）─────────────────
  {id:'chaos',
   condition:function(s){return (s._allDramaCount||0)>=4;},
   title:'抓马queen',subtitle:'隐藏结局',color:'#FFD700',
   headline:'谁是妈妈最爱的女儿？',
   story:'\u201C你的选择出乎所有人意料，没有人能预测到你的下一步！但你是一个mother，一个millionaire，也是law student和a billionaire。<strong>你可要记得，你是妈妈最爱的女儿。</strong>\u201D',
   krisQuote:'\u201C我生下了抓马queen……这是我做过的最赚钱的投资。🎪\u201D',
   manifesto:'当你显化成功：没人知道你会做什么，包括你自己。但不管做什么，都能显化成功！',
   persona:'无法被定义的存在，让AI都算不出下一步的抓马女王'},

  // ═══ 第三层：傀儡女王（操盘权失去）═══════════════════════════

  // ── 失败结局：傀儡女王（操盘权曾>50后归0）────────────────────
  {id:'puppet',
   condition:function(s){return s.caopan<=0&&(s._maxCaopanEver||0)>50;},
   title:'傀儡女王',subtitle:'精致提线木偶 · 失败结局',color:'#4A148C',
   headline:'有名无权！她是卡家最精致的提线木偶！',
   story:'\u201C你坐在CEO的椅子上，但椅子是太后挑的；你签着合同，但条款是太后定的；你穿着高定礼服走红毯，但连裙子的颜色都是太后选的。你曾经离操盘权只有一步之遥，但太后用一通电话、一顿家宴、一句<strong>\u2019妈妈都是为了你好\u2019</strong>就把权力收了回去。\u201D',
   krisQuote:'Kris（整理了一下领口）：\u201C宝贝坐好。妈妈帮你安排好了一切。💅\u201D',
   manifesto:'当你显化成功：你发现所有决定都不是你做的。',
   persona:'卡家最华丽的摆设，一个没有灵魂的金色傀儡',
   isFail:true},

  // ═══ 第四层：成功结局（按限制性从强到弱排列）══════════════════

  // ── 成功结局：Queen never cry ──────────────────────────────
  // 条件：操盘权≥300 且 太后好感≥250 → 权力继承者路线
  {id:'taihou2',
   condition:function(s){return s.caopan>=300&&s.taihou>=250;},
   title:'Queen never cry',subtitle:'好莱坞女族长',color:'#E5173F',
   headline:'权力交接！她把整个好莱坞踩在了定制高跟鞋下！',
   story:'\u201C恭喜你，屠龙者终成恶龙。有天，你测自己的MBTI发现是——KRIS，富态者。你坐在比弗利山庄的王座上，冷眼看着妹妹们为了一个热搜大打出手，就像当年太后看着你一样。\u201D',
   krisQuote:'\u201Clet that shit go nyeah💅\u201D',
   manifesto:'当你显化成功：你会给自己找了个 sugar mommy，让她教你如何优雅的使用刀叉。',
   persona:'新一代名利场女王，用铁腕统治娱乐帝国的女族长'},

  // ── 成功结局：疯狂星期四的M女王 ──────────────────────────────
  // 条件：商业版图≥1200 且 自我≤200 → 商业做大但自我缺失
  {id:'fastfood',
   condition:function(s){return s.shangyebantu>=1200&&s.ziwo<=200;},
   title:'疯狂星期四的M女王',subtitle:'快消帝国女皇',color:'#E67E22',
   headline:'吃鸡暴富！每一口炸鸡都是她的ATM！',
   story:'\u201C你没有选择做高冷的奢侈品，而是把自己的波普头像印在了全球几万家连锁快餐的炸鸡盒和咖啡杯上。只要有人摄入垃圾食品，就在为你交版税。<strong>你是资本主义最精致的产品——一个活着的品牌logo。</strong>\u201D',
   krisQuote:'\u201C我的女儿把自己活成了一个商标。我骄傲得简直要哭到我的版税支票上了。🍗\u201D',
   manifesto:'当你显化成功：你会收购KFC和麦当劳，把老爷爷的头像全部换成自己、把M变成翘臀。',
   persona:'快消品帝国的女皇，把自己活成了全球最赚钱的logo'},

  // ── 成功结局：老娘独享经济 ──────────────────────────────────
  // 条件：商业版图≥800 且 太后好感≤50 → 脱离家族靠自己的独立商业路线
  {id:'wallstreet',
   condition:function(s){return s.shangyebantu>=800&&s.taihou<=50;},
   title:'老娘独享经济',subtitle:'独立商业女王',color:'#2ECC71',
   headline:'决裂与重生！她证明了不靠家族也能赚到十亿美金！',
   story:'\u201C你亲手撕碎了家族的真人秀剧本，从太后的事业里叛逃出来，白手起家建立了自己的商业王国。没有抓马，没有艳舞，只有你一个人对着全世界证明——<strong>离开了\u2019卡戴珊\u2019这个姓氏，你依然能站在财富的顶端。</strong>\u201D',
   krisQuote:'\u201C她不需要我了…这是我唯一没有预料到的事。💔\u201D',
   manifesto:'当你显化成功：你第一件事会是买黄金，没有然后，因为你亏了一半及时止损了。',
   persona:'华尔街的卡戴珊异类，用商业头脑碾压名利场的独立女王'},

  // ── 成功结局：没有不上热搜的义务 ──────────────────────────
  // 条件：流量≥800 且 身价≥500 → 流量至上的人生
  {id:'topchart',
   condition:function(s){return s.liuliang>=800&&s.shenjia>=500;},
   title:'没有不上热搜的义务',subtitle:'真人秀传奇',color:'#1E90FF',
   headline:'流量至死！她用整个人生上演了一场楚门的世界！',
   story:'\u201C你是互联网时代的热搜制造者。你把自己的婚姻、生育、背叛全部明码标价，包装成20季经久不衰的下饭电子榨菜。你养活了半个娱乐圈的狗仔，但<strong>当深夜摄像机关机时，你甚至想不起来自己真实的性格是什么。</strong>\u201D',
   krisQuote:'\u201C镜头爱她。观众爱她。她爱自己吗？…那不是我的业务范围。📺\u201D',
   manifesto:'当你显化成功：你会把自己的脸注册成了商标，每次有人P你的图都要付版权费。',
   persona:'互联网时代的真人秀之神，把人生活成了最赚钱的连续剧'},

  // ── 成功结局：雅思8.5高学历拥有者 ──────────────────────────
  // 条件：自我≥180 且 流量≤550 且 商业版图≤600 → 拒绝名利走学术路线
  {id:'scholar',
   condition:function(s){return s.ziwo>=180&&s.liuliang<=550&&s.shangyebantu<=600;},
   title:'雅思8.5高学历拥有者',subtitle:'精神自由者',color:'#00897B',
   headline:'家族之耻？高智商怪咖惨遭卡戴珊除名！',
   story:'\u201C拒绝整容、拒绝炒作，你甚至去欧洲读了一个哲学博士。你成了家族合照里被裁掉的那个人。你虽然被妈妈Kris Jenner彻底除名，但你拥有了<strong>绝对清醒的头脑和无价的精神自由</strong>。\u201D',
   krisQuote:'\u201C我有……一个生产论文的女儿。我们不提这件事。📚\u201D',
   manifesto:'当你显化成功：你会发现你根本不需要钱。你写的博士论文《如何用臀部顶起一瓶汽水迷思》在构石发表，被引用了3000次。',
   persona:'卡家的学术异类，用哲学博士证明了灵魂比翘臀更有价值'},

  // ── 成功结局：再见了所有卡戴珊战士 ──────────────────────────
  // 条件：自我≥300 且 身价≤400 → 极高精神觉醒+放弃物质
  {id:'retire',
   condition:function(s){return s.ziwo>=300&&s.shenjia<=400;},
   title:'再见了所有卡戴珊战士',subtitle:'平凡觉醒者',color:'#9B59B6',
   headline:'疯了还是醒了？百亿名媛放弃一切消失在人海！',
   story:'\u201C你在名利场的巅峰按下了暂停键。你剪断了所有网线，注销了上亿粉丝的账号，隐居在普罗旺斯的石头小镇。你穿着沾满颜料的围裙在画室里度过余生，房东老太太教你种薰衣草。你是卡戴珊家族百年历史上，<strong>唯一一个拥有完整灵魂的\u2019普通人\u2019</strong>。咖啡馆墙上还挂着你画的第一幅日落。\u201D',
   krisQuote:'\u201C她为了一种我永远无法理解的生活离开了帝国。但她笑起来是真心的…我甚至记不清那种感觉了。🌅\u201D',
   manifesto:'当你显化成功：你会把所有的钱换成了一栋老房子、一个花园，和一辈子画不完的日落。',
   persona:'名利场的叛逆者，选择灵魂自由的普罗旺斯画家'},

  // ═══ 第五层：兜底结局 ═══════════════════════════════════════

  // ── 兜底结局：九位数NPC ──────────────────────────────────────
  {id:'npc',
   condition:function(s){return true;},
   title:'一个保持九位数余额的NPC',subtitle:'默认结局',color:'#7F8C8D',
   headline:'毫无惊喜！她是卡戴珊家族里最没存在感的那一个！',
   story:'你是一个mother，一个millionaire，也是law student和a billionaire也是一个有钱的NPC。',
   krisQuote:'\u201C她…挺好的。就是挺好的。在这个家族里，\u2019挺好的\u2019是最糟糕的评价。😐\u201D',
   manifesto:'当你显化成功：Kris最爱的女儿反正不会是你，但你始终保持资产9位数。',
   persona:'名利场的路人甲，一个有钱但毫无存在感的卡戴珊后代'}

];

// ============================================================
// 主线引擎逻辑
// ============================================================

// 每阶段配色和emoji
var STAGE_THEMES = [
  {emoji:'👶', gradient:'linear-gradient(135deg,#E5173F 0%,#FF69B4 45%,#FFD700 100%)', bg:'stage-bg/stage-1.webp'},
  {emoji:'💉', gradient:'linear-gradient(135deg,#9B59B6 0%,#FF69B4 50%,#FFD700 100%)', bg:'stage-bg/stage-2.webp'},
  {emoji:'🎬', gradient:'linear-gradient(135deg,#8B0000 0%,#E5173F 50%,#FF4500 100%)', bg:'stage-bg/stage-3.webp'},
  {emoji:'💋', gradient:'linear-gradient(135deg,#E67E22 0%,#FFD700 45%,#E5173F 100%)', bg:'stage-bg/stage-4.webp'},
  {emoji:'💼', gradient:'linear-gradient(135deg,#1a1a1a 0%,#1E90FF 50%,#9B59B6 100%)', bg:'stage-bg/stage-5.webp'},
  {emoji:'⚖️', gradient:'linear-gradient(135deg,#2C3E50 0%,#2ECC71 50%,#1E90FF 100%)', bg:'stage-bg/stage-6.webp'},
  {emoji:'👑', gradient:'linear-gradient(135deg,#B8860B 0%,#FFD700 45%,#E67E22 100%)', bg:'stage-bg/stage-7.webp'},
  {emoji:'📺', gradient:'linear-gradient(135deg,#E5173F 0%,#FF1493 50%,#9B59B6 100%)', bg:'stage-bg/stage-8.webp'},
  {emoji:'💍', gradient:'linear-gradient(135deg,#9B59B6 0%,#FF69B4 45%,#2ECC71 100%)', bg:'stage-bg/stage-9.webp'},
  {emoji:'🏢', gradient:'linear-gradient(135deg,#E67E22 0%,#FFD700 50%,#2ECC71 100%)', bg:'stage-bg/stage-10.webp'},
  {emoji:'🔱', gradient:'linear-gradient(135deg,#B8860B 0%,#E5173F 45%,#1a1a1a 100%)', bg:'stage-bg/stage-11.webp'}
];

function initStageDots(){
  var dots=document.getElementById('stageDots');
  if(!dots)return;
  dots.innerHTML='';
  for(var i=0;i<STAGES.length;i++){
    var d=document.createElement('div');
    d.className='stage-dot'+(i===0?' active':'');
    d.id='dot-'+i;
    dots.appendChild(d);
  }
}

function updateDots(idx){
  for(var i=0;i<STAGES.length;i++){
    var d=document.getElementById('dot-'+i);
    if(!d)continue;
    d.className='stage-dot'+(i<idx?' done':(i===idx?' active':''));
  }
  var tag=document.getElementById('stageTag');
  if(tag)tag.textContent='STAGE '+(idx+1)+'/'+STAGES.length;
}

function updateStatsUI(){
  var s=GameState.stats;
  var MAX={liuliang:600,taihou:400,ziwo:350,caopan:400,shenjia:2000,shangyebantu:3000};
  function clamp(v){return Math.max(0,Math.min(100,v));}
  ['liuliang','taihou','ziwo','caopan','shenjia','shangyebantu'].forEach(function(k){
    var bar=document.getElementById('bar-'+k);
    var val=document.getElementById('val-'+k);
    if(!bar||!val)return;
    var v=s[k]||0;
    var pct=clamp(v/MAX[k]*100);
    bar.style.width=pct+'%';
    val.textContent=(k==='shenjia'||k==='shangyebantu')?'$'+v+'M':v;
  });
}

function fillName(text){
  return (text||'').replace(/\[name\]/g,GameState.playerName).replace(/\{name\}/g,GameState.playerName);
}

function renderStage(idx){
  GameState.currentStage=idx;
  updateDots(idx);
  var stage=STAGES[idx];
  var theme=STAGE_THEMES[idx]||STAGE_THEMES[0];
  var body=document.getElementById('stageBody');
  if(!body)return;
  body.innerHTML='';

  // 顶部大图区（AI 配图 + 渐变兜底）
  var hero=document.createElement('div');
  hero.className='stage-hero';
  var bgStyle = theme.bg
    ? 'background-image:url('+theme.bg+');background-size:cover;background-position:center;'
    : 'background:'+theme.gradient+';';
  hero.innerHTML=
    '<div class="stage-hero-bg" style="'+bgStyle+'"></div>'
    +'<div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(0,0,0,0.18) 1.5px,transparent 1.5px);background-size:8px 8px;z-index:2;pointer-events:none"></div>'
    +'<div class="stage-corner-tag">STAGE '+(idx+1)+'/'+STAGES.length+'</div>'
    +'<div class="stage-age-tag">'+stage.age+'</div>'
    +'<div class="stage-hero-title">'
    +'<span class="stage-hero-emoji">'+theme.emoji+'</span>'
    +'<span class="stage-title">'+stage.title+'</span>'
    +'<button class="review-btn show" onclick="openReview()">📖 回看</button>'
    +'</div>';
  body.appendChild(hero);

  // 背景信息卡
  var bgCard=document.createElement('div');
  bgCard.className='stage-bg-info';
  bgCard.innerHTML='<div class="stage-section-label">📖 背景</div><div class="stage-bg-text">'+fillName(stage.bg)+'</div>';
  body.appendChild(bgCard);

  // 剧情卡（合并剧情+台词，无分框）
  var storyCard=document.createElement('div');
  storyCard.className='stage-story-card';
  storyCard.innerHTML='<div class="stage-story-label">🎬 剧情</div><div class="stage-story-text">'+fillName(stage.story)+'</div>';
  body.appendChild(storyCard);

  // 选项标签
  var choiceLabel=document.createElement('div');
  choiceLabel.style.cssText='margin:12px 14px 4px;font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;font-size:10px;font-weight:900;letter-spacing:2px;color:#FFD700;display:flex;align-items:center;gap:5px;';
  choiceLabel.innerHTML='🎯 你的选择';
  body.appendChild(choiceLabel);

  // 选项列表
  var cl=document.createElement('div');
  cl.className='choices-list';
  stage.choices.forEach(function(ch,ci){
    var btn=document.createElement('button');
    btn.className='choice-btn';
    btn.innerHTML='<span class="choice-tag">'+ch.tag+'</span>'+fillName(ch.text);
    btn.setAttribute('data-ci',ci);
    (function(i){btn.onclick=function(){onChoiceClick(idx,i);};})(ci);
    cl.appendChild(btn);
  });
  body.appendChild(cl);

  // 反馈区（隐藏）
  var fb=document.createElement('div');
  fb.className='event-feedback';
  fb.id='event-feedback-'+idx;
  body.appendChild(fb);

  // 继续按钮（隐藏）
  var nb=document.createElement('button');
  nb.className='next-stage-btn';
  nb.id='next-btn-'+idx;
  nb.textContent=(idx<STAGES.length-1)?'▶ 继续 →':'👑 揭晓结局';
  nb.onclick=function(){
    if(idx<STAGES.length-1){
      renderStage(idx+1);
      document.getElementById('stageBody').scrollTop=0;
    }else{
      showEnding();
    }
  };
  body.appendChild(nb);

  updateStatsUI();
}

function onChoiceClick(stageIdx,choiceIdx){
  var stage=STAGES[stageIdx];
  var choice=stage.choices[choiceIdx];
  var btns=document.querySelectorAll('.choice-btn');
  btns.forEach(function(b){
    b.classList.add('disabled');
    if(parseInt(b.getAttribute('data-ci'))===choiceIdx)b.classList.add('selected');
  });
  applyDelta(choice.delta);
  if(choice.extraDelta)applyDelta(choice.extraDelta);
  if(choice.extraMultiply){
    for(var k in choice.extraMultiply){
      GameState.stats[k]=Math.round((GameState.stats[k]||0)*choice.extraMultiply[k]);
    }
  }
  GameState.choices.push(choice.tag);
  GameState.choiceTypes.push(choice.type||'');
  // 记录回看
  if(typeof recordChoice==='function') recordChoice(stageIdx, choice);
  if(choice.type==='抓马'){
    GameState.stats._allDramaCount=(GameState.stats._allDramaCount||0)+1;
  }
  // 记录阶段4分支（用于二次事件）
  if(stageIdx===3 && choice.stage4Branch){
    GameState._stage4Branch=choice.stage4Branch;
  }
  // 记录支线种子
  if(choice.triggerSideline==='onlyfans_seed'){
    GameState._onlyfansSeed=true;
  }
  if(GameState.stats.caopan>GameState.maxCaopan)GameState.maxCaopan=GameState.stats.caopan;
  // 追踪历史最大值（用于失败结局条件判定）
  if((GameState.stats.caopan||0)>(GameState.stats._maxCaopanEver||0))
    GameState.stats._maxCaopanEver=GameState.stats.caopan;
  if((GameState.stats.shangyebantu||0)>(GameState.stats._maxEmpireEver||0))
    GameState.stats._maxEmpireEver=GameState.stats.shangyebantu;
  updateStatsUI();
  // 即死检测：任何维度降到0以下都会触发即死结算
  var st=GameState.stats;
  if(st.ziwo<=0||st.shenjia<=0||st.liuliang<=0||st.taihou<=0){
    setTimeout(function(){showEnding();},1800);
    return;
  }
  showFeedback(stageIdx,choice);
}

function applyDelta(delta){
  for(var k in delta){
    if(k.charAt(0)==='_'){GameState.stats[k]=(GameState.stats[k]||0)+delta[k];continue;}
    if(k in GameState.stats)GameState.stats[k]=Math.round(GameState.stats[k]+delta[k]);
  }
}

function showFeedback(stageIdx,choice){
  var fb=document.getElementById('event-feedback-'+stageIdx);
  if(!fb)return;
  var NAMES={liuliang:'流量',taihou:'太后好感',ziwo:'自我',caopan:'操盘权',shenjia:'身价',shangyebantu:'商业版图'};
  var allD=Object.assign({},choice.delta,choice.extraDelta||{});
  var deltaHtml='<div class="stat-deltas">';
  for(var k in allD){
    if(k.charAt(0)==='_'||!NAMES[k])continue;
    var v=allD[k],cls=v>=0?'up':'down',sign=v>=0?'+':'';
    deltaHtml+='<span class="stat-delta '+cls+'">'+NAMES[k]+' '+sign+v+'</span>';
  }
  deltaHtml+='</div>';
  fb.innerHTML='<div class="event-feedback-title">📰 事件反馈</div><div class="event-feedback-text">'+fillName(choice.feedback)+'</div>'+deltaHtml;
  fb.classList.add('show');
  setTimeout(function(){
    var nb=document.getElementById('next-btn-'+stageIdx);
    if(!nb)return;
    nb.classList.add('show');

    // 判断后续行为
    var nextType='normal';
    var sidelineId='';
    // 阶段2选A → 韩国出道线
    if(stageIdx===1 && choice.triggerSideline==='korea'){
      nextType='sideline'; sidelineId='korea';
    }
    // 阶段3选D → OnlyFans种子，但不立刻跳，继续主线到阶段6结束后触发
    // 阶段4 → 二次事件（所有选项后）
    else if(stageIdx===3){
      nextType='second_event';
    }
    // 阶段6结束后 + OnlyFans种子 → OnlyFans线
    else if(stageIdx===5 && GameState._onlyfansSeed){
      nextType='sideline'; sidelineId='onlyfans';
    }
    // 阶段7选A → 50%概率侃爷线
    else if(stageIdx===6 && choice.triggerSideline==='kanye_possible'){
      if(Math.random()<0.5){
        nextType='sideline'; sidelineId='kanye';
      }
    }

    if(nextType==='second_event'){
      nb.textContent='⚡ 二次事件 →';
      nb.style.background='linear-gradient(90deg,#E67E22,#E5173F)';
      nb.onclick=function(){renderSecondEvent(stageIdx);};
    } else if(nextType==='sideline'){
      nb.textContent='🌟 发现支线剧情 →';
      nb.style.background='linear-gradient(90deg,#9B59B6,#E5173F)';
      (function(sid){
        nb.onclick=function(){triggerSideline(sid);};
      })(sidelineId);
    } else {
      nb.onclick=function(){
        if(stageIdx<STAGES.length-1){
          renderStage(stageIdx+1);
          document.getElementById('stageBody').scrollTop=0;
        }else{
          showEnding();
        }
      };
    }
    nb.scrollIntoView({behavior:'smooth',block:'nearest'});
  },400);
}

function showEnding(){
  var s=GameState.stats;
  var ending=null;
  for(var i=0;i<ENDINGS.length;i++){
    if(ENDINGS[i].condition(s)){ending=ENDINGS[i];break;}
  }
  if(!ending)ending=ENDINGS[ENDINGS.length-1];
  switchScreen('stage-screen','ending-screen',function(){renderEnding(ending);});
}

// 结局收集定义（所有可解锁结局，共15种）
// avatar 对应 投胎头像素材/ 目录下的文件
// NPC兜底结局不列入收集墙
var ENDING_CATALOG = [
  {id:'soul_death', emoji:'💀', name:'精神死亡',    avatar:'5.webp'},
  {id:'broke',      emoji:'💸', name:'严肃破产中',  avatar:'8.webp'},
  {id:'exile',      emoji:'🚪', name:'逐出"卡"门', avatar:'12.webp'},
  {id:'forgotten',  emoji:'👻', name:'过气顶流',    avatar:'15.webp'},
  {id:'puppet',     emoji:'🎭', name:'傀儡女王',    avatar:'3.webp'},
  {id:'chaos',      emoji:'🎪', name:'抓马queen',   avatar:'7.webp'},
  {id:'taihou2',    emoji:'👑', name:'Queen never cry', avatar:'1.webp'},
  {id:'wallstreet', emoji:'💰', name:'老娘独享经济', avatar:'2.webp'},
  {id:'topchart',   emoji:'📱', name:'没有不上热搜', avatar:'4.webp'},
  {id:'retire',     emoji:'🎨', name:'再见卡戴珊战士', avatar:'9.webp'},
  {id:'fastfood',   emoji:'🍗', name:'M女王',       avatar:'6.webp'},
  {id:'scholar',    emoji:'📚', name:'雅思8.5',     avatar:'10.webp'},
  {id:'korea',      emoji:'🎤', name:'KPOP五女一',  avatar:'13.webp'},
  {id:'kanye',      emoji:'🎵', name:'侃爷合伙人',  avatar:'14.webp'},
  {id:'onlyfans',   emoji:'💻', name:'OnlyFans主理人', avatar:'16.webp'},
];

// 根据结局 id 获取对应头像路径
function getEndingAvatar(endingId){
  for(var i=0;i<ENDING_CATALOG.length;i++){
    if(ENDING_CATALOG[i].id===endingId) return '投胎头像素材/'+ENDING_CATALOG[i].avatar;
  }
  return '投胎头像素材/结尾.webp'; // 默认使用结尾图
}

function buildEndingCard(card, e, s, isSideline){
  card.style.borderColor = e.color;
  card.style.boxShadow   = '8px 8px 0 ' + e.color;

  // 记录解锁（localStorage 持久化）
  var unlocked = JSON.parse(localStorage.getItem('unlockedEndings')||'[]');
  var curId = isSideline ? (GameState.sidelineTriggered||e.id) : e.id;
  if(curId && unlocked.indexOf(curId)===-1){ unlocked.push(curId); }
  localStorage.setItem('unlockedEndings', JSON.stringify(unlocked));
  // 播放成就解锁音效
  if(typeof playAchievementSound==='function') playAchievementSound();

  // 徽章
  var badge = '';
  if(e.isFail)            badge = '<div class="ending-badge ending-badge-fail">❌ 失败结局</div>';
  else if(isSideline)     badge = '<div class="ending-badge ending-badge-sideline">🌟 支线专属结局</div>';
  else if(e.id==='chaos') badge = '<div class="ending-badge ending-badge-secret">🥚 隐藏结局</div>';

  var eyebrow = e.isFail   ? '✦ GAME OVER · 结局揭晓 ✦'
              : isSideline ? '✦ 支线终章 · 专属命运 ✦'
              :              '✦ KARDASHIAN REBORN · 结局揭晓 ✦';

  // ① 头像区 — 显化头像（放在大标题下方）
  var avatarSrc = getEndingAvatar(curId);
  var avatarHtml =
    '<div class="ending-avatar-area" style="border-color:'+e.color+';">'
    +'<div class="ending-avatar-placeholder" style="background:linear-gradient(135deg,'+e.color+' 0%,#1a1a1a 100%);overflow:hidden;">'
    +'<img src="'+avatarSrc+'" alt="显化头像" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">'
    +'</div>'
    +'<div class="ending-avatar-caption">✨ 你的专属显化头像</div>'
    +'</div>';

  // ② 显化宣言
  var manifestoText = e.manifesto ? e.manifesto.replace('当你显化成功：','') : '';
  var manifestoHtml = manifestoText
    ? '<div class="ending-manifesto">'
      +'<div class="ending-manifesto-label">✨ 当你显化成功</div>'
      +'<div class="ending-manifesto-text">'+manifestoText+'</div>'
      +'</div>'
    : '';

  // ③ 结局收集墙
  var total = ENDING_CATALOG.length;
  var unlockedCount = unlocked.length;
  var gridHtml = '<div class="ending-collection">'
    +'<div class="collection-header">🏆 已解锁 <span class="collection-count">'+unlockedCount+'</span> / '+total+' 种结局</div>'
    +'<div class="collection-grid">';
  ENDING_CATALOG.forEach(function(item){
    var isUnlocked = unlocked.indexOf(item.id) !== -1;
    var isCurrent  = item.id === curId;
    gridHtml += '<div class="collection-item'
      +(isUnlocked?' unlocked':'')
      +(isCurrent?' current-item':'')+'">';
    if(isUnlocked){
      gridHtml += '<span class="collection-emoji">'+item.emoji+'</span>'
               +'<span class="collection-name">'+item.name+'</span>';
    } else {
      gridHtml += '<span class="collection-emoji coll-lock">?</span>'
               +'<span class="collection-name coll-unknown">???</span>';
    }
    gridHtml += '</div>';
  });
  gridHtml += '</div></div>';

  // ④ 二维码分享区（紧凑横排）
  var qrUrl = window.location.href;
  var qrImgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(qrUrl);
  var shareZoneHtml =
    '<div class="ending-share-zone">'
    +'<div class="ending-qr-area">'
    +'<img src="'+qrImgSrc+'" alt="游戏二维码" class="ending-qr-img" crossorigin="anonymous">'
    +'</div>'
    +'<div class="ending-share-tip">'
    +'📱 截图转发给你的<br>'
    +'家人/同事/老板/对象/<br>sugar mommy 或 daddy<br>'
    +'<strong>这次你一定要提现！</strong>'
    +'</div>'
    +'</div>';

  // 组装卡片 — 新版结局页布局
  card.innerHTML =
    // ① 大标题 Banner
    '<div class="ending-banner" style="background:'+e.color+';">'
    +badge
    +'<div class="ending-eyebrow">'+eyebrow+'</div>'
    +'<div class="ending-big-title">'+e.title+'</div>'
    +'<div class="ending-subtitle">'+e.subtitle+'</div>'
    +'</div>'
    // ② 显化头像（紧跟大标题）
    +avatarHtml
    // ③ 专属结局文案
    +'<div class="ending-body">'
    +'<div class="ending-headline">📰 '+e.headline+'</div>'
    +'<div class="ending-story">'+fillName(e.story)+'</div>'
    +'</div>'
    // ④ 当你显化成功
    +'<div class="ending-body">'
    +manifestoHtml
    // Kris 寄语
    +'<div class="ending-kris-quote">'
    +'<div class="ending-kris-label">💄 KRIS 寄语</div>'
    +'<div class="ending-kris-text">'+e.krisQuote+'</div>'
    +'</div>'
    +'</div>'
    // ⑤ 解锁结局种类
    +gridHtml
    // ⑥ 二维码 + 分享文案（紧凑横排）
    +shareZoneHtml
    // ⑦ 打赏区（默认折叠）
    +'<div class="tip-zone">'
    +'<button class="tip-toggle" onclick="this.classList.toggle(\'open\');this.nextElementSibling.classList.toggle(\'show\')">'
    +'💅 制作不易，欢迎打赏！这次我们可以提现吗？ <span class="tip-arrow">▼</span>'
    +'</button>'
    +'<div class="tip-content">'
    +'<div class="tip-subtitle">by yuki & 0子 🫶</div>'
    +'<div class="tip-qr-row">'
    +'<div class="tip-qr-item"><img src="tip-qr/tip.jpg" alt="赞赏码"></div>'
    +'</div>'
    +'</div>'
    +'</div>'
    // 重玩按钮
    +'<button class="replay-btn" onclick="replayGame()">🔄 重新投胎</button>'
    +'<canvas id="posterCanvas" style="display:none;"></canvas>';
}


function renderEnding(e){
  var s = GameState.stats;
  var card = document.getElementById('endingCard');
  if(!card) return;
  buildEndingCard(card, e, s, false);
}



function replayGame(){
  GameState.playerName='';
  GameState.stats={liuliang:80,taihou:80,shenjia:20,ziwo:80,caopan:0,shangyebantu:0};
  GameState.currentStage=0;
  GameState.choices=[];
  GameState.choiceTypes=[];
  GameState.achievements=[];
  GameState.sidelineTriggered=null;
  GameState.maxCaopan=0;
  GameState._stage4Branch=null;
  GameState._onlyfansSeed=false;
  GameState._sidelineActive=false;
  // 清空回看历史
  if(typeof _reviewHistory!=='undefined') _reviewHistory.length=0;
  // 停止彩蛋音效，重启主BGM
  var sfx=document.getElementById('achievementAudio');
  if(sfx){sfx.pause();sfx.currentTime=0;sfx.onended=null;}
  var bgm=document.getElementById('bgmAudio');
  if(bgm){
    bgm.pause();
    bgm.currentTime=0;
    bgm.volume=0.2;
    bgm.play().then(function(){_bgmPlaying=true;}).catch(function(){});
  }
  switchScreen('ending-screen','newspaper-screen',function(){
    var inp=document.getElementById('playerNameInput');
    if(inp){inp.value='';inp.style.color='';}
    var egg=document.getElementById('easterEggBubble');
    if(egg)egg.classList.remove('show');
  });
}

// ============================================================
// 阶段4 二次事件：姐妹抢 Vogue 封面
// ============================================================
function renderSecondEvent(mainStageIdx){
  var body=document.getElementById('stageBody');
  if(!body)return;
  var branch=GameState._stage4Branch||'drama';
  var isDrama=(branch==='drama');

  // 二次事件顶部标题卡
  var card=document.createElement('div');
  card.style.cssText='margin:12px 14px;background:#1a1a1a;border:3px solid #E67E22;border-radius:8px;padding:14px;';
  card.innerHTML=
    '<div style="font-size:10px;font-weight:900;letter-spacing:3px;color:#E67E22;margin-bottom:6px;">⚡ 二次事件</div>'
    +'<div style="font-size:16px;font-weight:900;color:#FFD700;margin-bottom:8px;">姐妹抢 Vogue 封面</div>'
    +'<div style="font-size:13px;color:#F5F5F5;line-height:1.6;">品牌风波刚过，卡戴珊家族周日晚餐上，妹妹把美版Vogue封面刊摔在我面前——原本属于我的封面被换成了她。<br><br>「<strong>品牌方说我现在热度比你高。Vogue封面不是谁都能上的。</strong>」</div>';
  body.appendChild(card);

  var choiceLabel2=document.createElement('div');
  choiceLabel2.style.cssText='margin:12px 14px 4px;font-size:10px;font-weight:900;letter-spacing:2px;color:#E67E22;';
  choiceLabel2.innerHTML='🎯 你的应对';
  body.appendChild(choiceLabel2);

  var cl2=document.createElement('div');
  cl2.className='choices-list';

  var choices2;
  if(isDrama){
    choices2=[
      {tag:'A',text:'发Ins隐晦吐槽，把内战变成全网吃瓜大戏',
       delta:{liuliang:80,taihou:30,caopan:-20,ziwo:-20},type:'抓马',
       feedback:'瞬间引爆全网，<strong>#[name]姐妹撕逼#</strong> 直接冲上世趋第一，真人秀预告剪了吵架片段，收视预约破纪录。但你和妹妹彻底反目，三年没在同一个饭局出现过。'},
      {tag:'B',text:'微笑说「封面而已」，转头签下Vogue母集团全年合作',
       delta:{shangyebantu:50,taihou:10,ziwo:30,caopan:30},
       feedback:'你当着全家面笑着说「妹妹更适合这个封面」，转头和康泰纳仕签了全球独家合作，拿下全年12刊封面资源。太后都惊了：「<strong>比我还会玩商业。</strong>」'},
      {tag:'C',text:'当场掀桌：「这顿饭谁做的？跟这封面一样——没品！」',
       delta:{liuliang:50,taihou:-20,ziwo:10,caopan:10},type:'抓马',
       feedback:'掀桌片段被家里的摄像机拍下（太后在每个房间都装了），「<strong>卡家掀桌名场面</strong>」成为本季收视最高片段。太后当晚给导播打电话：「这段一定要放头条。」'}
    ];
  } else {
    choices2=[
      {tag:'A',text:'正面硬刚，曝光妹妹暗箱操作',
       delta:{liuliang:100,taihou:-50,ziwo:50,caopan:10},
       feedback:'你直接把品牌方和妹妹的聊天记录发了出来，全网站你。品牌方公开道歉，还额外给了你一个全球代言。但太后说你「毁了家族团结」，把你踢出了家族董事会。'},
      {tag:'B',text:'体面退让，私下签更高规格合作',
       delta:{shangyebantu:50,taihou:10,ziwo:30,caopan:30},
       feedback:'你笑着说「妹妹更适合」，转头和康泰纳仕签了全年合作。妹妹气得当场离席。太后后来悄悄说：「<strong>你赢了，但你也让她学会了怕你。</strong>」'},
      {tag:'C',text:'打电话给Vogue女魔头：「你和妹妹一起，双封面」',
       delta:{liuliang:60,taihou:40,ziwo:10,shangyebantu:20},
       feedback:'Vogue女魔头被你的商业头脑震惊了，破例做了卡家姐妹<strong>双封面</strong>，销量创历史新高。妹妹虽然还是生气，但面对50%的额外分成她最终笑了。'}
    ];
  }

  choices2.forEach(function(ch,ci){
    var btn=document.createElement('button');
    btn.className='choice-btn';
    btn.innerHTML='<span class="choice-tag">'+ch.tag+'</span>'+fillName(ch.text);
    btn.setAttribute('data-ci2',ci);
    (function(c){
      btn.onclick=function(){
        cl2.querySelectorAll('.choice-btn').forEach(function(b){b.classList.add('disabled');});
        btn.classList.add('selected');
        applyDelta(c.delta);
        if(c.type==='抓马')GameState.stats._allDramaCount=(GameState.stats._allDramaCount||0)+1;
        // 记录二次事件回看
        if(typeof recordChoice==='function') recordChoice(mainStageIdx, c);
        updateStatsUI();
        var NAMES={liuliang:'流量',taihou:'太后好感',ziwo:'自我',caopan:'操盘权',shenjia:'身价',shangyebantu:'商业版图'};
        var dHtml='<div class="stat-deltas">';
        for(var k in c.delta){
          if(!NAMES[k])continue;
          var v2=c.delta[k],cls2=v2>=0?'up':'down',sign2=v2>=0?'+':'';
          dHtml+='<span class="stat-delta '+cls2+'">'+NAMES[k]+' '+sign2+v2+'</span>';
        }
        dHtml+='</div>';
        var fb2=document.createElement('div');
        fb2.className='event-feedback show';
        fb2.innerHTML='<div class="event-feedback-title">📰 事件反馈</div><div class="event-feedback-text">'+fillName(c.feedback)+'</div>'+dHtml;
        body.appendChild(fb2);
        // 继续按钮
        setTimeout(function(){
          var nb2=document.createElement('button');
          nb2.className='next-stage-btn show';
          nb2.textContent=(mainStageIdx<STAGES.length-1)?'▶ 继续 →':'👑 揭晓结局';
          nb2.onclick=function(){
            if(mainStageIdx<STAGES.length-1){
              renderStage(mainStageIdx+1);
              document.getElementById('stageBody').scrollTop=0;
            }else{showEnding();}
          };
          body.appendChild(nb2);
          nb2.scrollIntoView({behavior:'smooth',block:'nearest'});
        },400);
      };
    })(ch);
    cl2.appendChild(btn);
  });
  body.appendChild(cl2);
  cl2.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ============================================================
// 支线数据
// ============================================================
var SIDELINES = {

// ── 韩国出道线 ──────────────────────────────────────────────
korea:{
  id:'korea',
  triggerTitle:'📰 爆炸新闻：韩国星探突然出手！',
  triggerDesc:'HYBE娱乐星探在你的术后写真中发现了「东亚审美与西方骨骼的完美融合」。他们正在打造新女团 <strong>old jeans</strong>，急需有海外话题度的混血门面！',
  steps:[
    {
      age:'支线·韩国出道', title:'出道抉择',
      gradient:'linear-gradient(135deg,#FF69B4 0%,#9B59B6 50%,#E5173F 100%)', emoji:'🎤',
      bg:'HYBE娱乐的星探把合约递到你面前。太后站在旁边，眼里金光闪闪，已经默默算好了分成比例。',
      story:'星探说：「你有西方明星的身材和东方偶像的精致感。old jeans需要你——<strong>全球出道，首周销量百万</strong>。」太后在旁边低声说：「三七分成，妈妈七。」',
      isGateway:true, // 有退出选项可返回主线
      choices:[
        {tag:'A',text:'"欧巴！我要去韩国当爱豆！"',
         delta:{liuliang:30,taihou:-20,ziwo:-10},type:'名利',
         feedback:'太后帮你谈好了三七分成（她30%），亲自把你送上去首尔的飞机，手里还拿着你的训练食谱。你成了HYBE史上最贵的海外练习生。'},
        {tag:'B',text:'"算了，韩国离比弗利太远了，我留下"',
         delta:{ziwo:20},type:'独立',
         exitSideline:true, // 退出支线
         feedback:'你拒绝了韩国出道机会，星探失望地离开。太后松了口气，你继续留在比弗利山庄的主线剧情。'},
        {tag:'C',text:'"我去，但太后抽成不能超过15%"',
         delta:{liuliang:20,taihou:10,ziwo:10,shenjia:5},type:'商业',
         feedback:'太后假装生气，但暗中佩服你的商业头脑。经过2小时谈判最终敲定20%——她说「这是我在你身上见过最大的让步」。'}
      ]
    },
    {
      age:'支线·练习生炼狱', title:'首尔练习室',
      gradient:'linear-gradient(135deg,#1a1a1a 0%,#9B59B6 50%,#FF69B4 100%)', emoji:'💪',
      bg:'你被丢进了首尔江南区HYBE练习生宿舍，12平米住4个人。每天6点练vocal，中午练舞，晚上练韩语。室友用韩语嘀咕你「是靠爹进来的」。',
      story:'凌晨2点，练习室里只剩你一个人。教练刚才说你的舞台感「很卡戴珊——但这不是夸你」。明天就是季度考核，公司暗示成绩不好可能被淘汰。',
      choices:[
        {tag:'A',text:'咬牙苦练通宵，用汗水证明自己',
         delta:{liuliang:20,taihou:-10,ziwo:30},type:'独立',
         feedback:'练舞练到脚起泡，隔壁的韩国女孩悄悄给你贴了创可贴。季度考核你以微弱优势过关，教练说：「你有一种不服输的劲儿，这倒是挺像爱豆的。」'},
        {tag:'B',text:'凌晨偷偷自拍练舞，「意外」传到韩网',
         delta:{liuliang:60,taihou:20,ziwo:10},type:'名利',
         feedback:'「比弗利公主凌晨3点还在练舞」引发韩网好感大反转，话题冲上世趋第一。太后评价：「不错，终于学会自己造话题了。」'},
        {tag:'C',text:'直接在练习室跳一段卡戴珊式臀舞',
         delta:{liuliang:80,taihou:30,ziwo:20},type:'抓马',
         feedback:'视频全球播放量破10亿，「西方力量」成为K-pop新流派。教练陷入沉默，然后说：「好吧……这就是你们卡戴珊家的出厂设置。」'}
      ]
    },
    {
      age:'支线·出道危机', title:'风波与出道',
      gradient:'linear-gradient(135deg,#E5173F 0%,#FF69B4 50%,#FFD700 100%)', emoji:'🔥',
      bg:'训练3年，old jeans即将出道。但队长不满你的「皇族待遇」，向韩媒泄露黑料。<strong>#[name]皇族练习生#</strong> 冲上韩国世趋第一。',
      story:'出道前三天，公司高层叫你进会议室：「网友舆论持续发酵，公司需要你做一个选择。」',
      isFinalStep:true,
      choices:[
        {tag:'A',text:'直播道歉，哭着讲述训练辛苦',
         delta:{liuliang:80,taihou:10,ziwo:-20},type:'名利',
         feedback:'口碑反转！你以C位出道，出道曲空降韩美英三国榜首。队长事后私下来道歉，说「你的眼泪真的很有力量」——你没告诉他这是太后教你的。'},
        {tag:'B',text:'硬刚回怼，曝光队长霸凌录音',
         delta:{liuliang:50,taihou:-20,ziwo:30},type:'独立',
         feedback:'队长退团，你成了队内ACE，但成员关系破裂。出道曲虽然拿了冠军，但后台氛围冷如冰窖。太后评价：「赢了战役，输了友情。不过商业上没问题。」'},
        {tag:'C',text:'拉着队长一起跳卡戴珊臀舞，直播和解',
         delta:{liuliang:100,taihou:20,ziwo:15},type:'抓马',
         feedback:'「和解名场面」席卷全网，old jeans出道曲成为K-pop年度最快销售记录。后来队长说：「我终于理解了你们家族为什么那么能搞钱。」'}
      ]
    }
  ],
  ending:{
    color:'#FF69B4',
    title:'KPOP五女一竞争者',
    subtitle:'横跨东西方的爱豆传奇',
    headline:'震碎K-POP！脱离魔爪？老牛仔成红团一员！',
    story:'你硬生生带着old jeans杀出重围，切断了和家族的一切联系，用完美的刀群舞宣告了你的独立。但闵嘻嘻和公司决裂后没带走你，五女一之争只剩柳智珉和张元英——她们为此感到惋惜。',
    krisQuote:'Kris：「她跑去韩国了……但每季度的版税进账比她在好莱坞时还多。我认了。💄」',
    manifesto:'当你有钱了——你在首尔江南区买了一整栋练习室大楼。HYBE的CEO每次路过都要绕路走。',
    persona:'东西方流量双霸，用卡戴珊基因重写了K-pop规则的传奇爱豆'
  }
},

// ── 侃爷宇宙线 ──────────────────────────────────────────────
kanye:{
  id:'kanye',
  triggerTitle:'💥 宇宙级合约来袭！',
  triggerDesc:'侃爷在推特上宣布「我找到了我的商业灵魂伴侣」并@了你。全球媒体炸锅，太后气得摔了三个花瓶。侃爷团队递上 <strong>20亿全球独家经纪合约</strong>。你接还是不接？',
  steps:[
    {
      age:'支线·侃爷帝国', title:'入伙宇宙',
      gradient:'linear-gradient(135deg,#1a1a1a 0%,#E5173F 50%,#FFD700 100%)', emoji:'🎵',
      bg:'侃爷在洛杉矶一个全白色的仓库里等你。没有家具，只有一块白板，上面写满了他的「宇宙级商业计划」——有几个词你认不出来，好像是他自己发明的。',
      story:'他穿着$5000的白色卫衣，光脚，对你说：「<strong>太后教了你最好的东西——但她的格局太小了。她只想统治好莱坞。我要统治宇宙。</strong>」',
      isGateway:true,
      choices:[
        {tag:'A',text:'"我加入，但我要50%的决策权"',
         delta:{liuliang:50,shangyebantu:500,caopan:100},type:'商业',
         feedback:'侃爷同意了（他对数字没概念）。你成为Yeezy集团联合CEO，实际上你做了80%的工作，他负责「创意」和「宇宙愿景」。'},
        {tag:'B',text:'"算了，太后那边我还没搞定"',
         delta:{taihou:30,ziwo:10},type:'独立',
         exitSideline:true,
         feedback:'你拒绝了侃爷的合约。侃爷失望地回了白色仓库，继续写他的宇宙计划。你回到主线，太后松了口气。'},
        {tag:'C',text:'"加入！但他的推特必须先过我审批"',
         delta:{liuliang:40,shangyebantu:300,ziwo:40,caopan:60},type:'独立',
         feedback:'侃爷勉强同意。你成了「侃爷翻译官」，把他凌晨3点的疯狂想法翻译成可执行的商业计划。太后每周给你发消息：「求你拦住他。」'}
      ]
    },
    {
      age:'支线·帝国危机', title:'总统竞选风波',
      gradient:'linear-gradient(135deg,#1a1a1a 0%,#1E90FF 50%,#E5173F 100%)', emoji:'🇺🇸',
      bg:'合作一年后，侃爷宣布要竞选总统，在竞选集会上当众哭泣。Yeezy股价当天暴跌40%，太后连发10条短信：「<strong>现在跑还来得及！</strong>」',
      story:'董事会紧急电话：「你有48小时决定——和侃爷绑定沉船，还是体面脱身？」',
      isFinalStep:true,
      choices:[
        {tag:'A',text:'用40页PPT说服侃爷退选，趁机接管Yeezy',
         delta:{shangyebantu:800,caopan:200,taihou:50,ziwo:20},type:'商业',
         feedback:'侃爷听完PPT后说：「你说得有道理，但我还是要选。」你趁他上厕所接管了公司。他回来发现后沉默了很久，说：「……公平。」太后发来短信：「我选你。」'},
        {tag:'B',text:'"他是天才，我公开力挺到底"',
         delta:{liuliang:200,taihou:-200,shenjia:100,shangyebantu:50},type:'名利',
         feedback:'你和侃爷一起上了竞选巴士。得票率0.04%，但「侃爷竞选纪录片」卖给Netflix赚了2亿。太后从此和你「暂时性」断绝联系，但每年圣诞节还是给你发红包。'},
        {tag:'C',text:'公开宣布解除合作，独立带走部分Yeezy股权',
         delta:{shangyebantu:400,caopan:100,liuliang:80,taihou:30},type:'独立',
         feedback:'你以市场价格买断了Yeezy 30%股权，体面离场。侃爷在推特发了一条：「商业天才，但她走了。」这是他给过你最高的评价。'}
      ]
    }
  ],
  ending:{
    color:'#1a1a1a',
    title:'侃爷帝国合伙人',
    subtitle:'宇宙最赚钱的商业拍档',
    headline:'驯服侃爷！她是唯一能让天才闭嘴的女人！',
    story:'你是唯一一个能驾驭侃爷宇宙的人。半个商业圈在骂你和疯子合伙，另一半在算你赚了多少。你把侃爷那些不可能的疯狂想法翻译成了华尔街看得懂的财报数字。Yeezy年营收超过Nike，Forbes把我们列为「21世纪最匪夷所思的商业组合」。太后至今不承认你的成功，但她的手机壁纸偷偷换成了我登上福布斯封面的照片。',
    krisQuote:'Kris：「侃爷+我女儿……这是我三十年来最看不懂、最赚钱的一步棋。我承认我输了。」',
    manifesto:'当你有钱了——你在侃爷的白色仓库旁边建了一栋玻璃大厦，里面有真正的家具和一张办公桌。',
    persona:'把混沌变成财富的商业奇才，侃爷宇宙的真正掌舵者'
  }
},

// ── OnlyFans 线 ─────────────────────────────────────────────
onlyfans:{
  id:'onlyfans',
  triggerTitle:'💸 成人帝国的机遇！',
  triggerDesc:'你在18岁开设的OnlyFans账号意外爆火，现在有投资人找上门，说要把它变成一个估值10亿的成人内容平台。太后的表情很复杂——她在算分成。',
  steps:[
    {
      age:'支线·成人帝国', title:'平台创业决策',
      gradient:'linear-gradient(135deg,#8B0000 0%,#E67E22 50%,#FFD700 100%)', emoji:'💰',
      bg:'投资人把估值报告拍在你面前：「你的个人账号月收入已经超过了大多数上市公司季度营收。现在，我们想让你做这个行业的统治者。」',
      story:'太后罕见地保持沉默，然后说：「<strong>宝贝，这次你要自己想清楚。无论你怎么选，妈妈都支持你——但分成比例我们得聊聊。</strong>」',
      choices:[
        {tag:'A',text:'"做！我要亲自下场当这个行业的颠覆者！"',
         delta:{liuliang:300,taihou:50,shenjia:300,shangyebantu:500,ziwo:-60},type:'名利',
         feedback:'你创立了「KardFans」平台，三个月内成为全球最大付费内容平台。投资人蜂拥而至，你拒绝了所有人——「这个公司你要独资」。'},
        {tag:'B',text:'"做，但我只做CEO，不亲自出镜"',
         delta:{liuliang:100,shenjia:200,shangyebantu:300,ziwo:20,caopan:80},type:'商业',
         feedback:'你以CEO身份运营平台，签约了一批创作者。不亲自出镜的决定让太后惊讶：「你居然有这个自我保护意识？」她随即把你的商业头脑夸了半小时。'},
        {tag:'C',text:'"把账号卖掉，一次性套现离场"',
         delta:{liuliang:-50,shenjia:500,ziwo:50},type:'独立',
         exitSideline:false, // 这个不退出，直接进结局
         isFinalStep:true,
         feedback:'你以8亿美元出售了账号，太后震惊：「宝贝，你本可以赚更多的！」你说：「我本可以，但我不想。」这是你第一次在钱面前优先选了自己。'}
      ]
    },
    {
      age:'支线·帝国上市', title:'硅谷对决',
      gradient:'linear-gradient(135deg,#E67E22 0%,#8B0000 50%,#1a1a1a 100%)', emoji:'🏆',
      bg:'平台估值突破50亿，Facebook和Netflix先后找上门想要收购。与此同时，多个国家的监管机构开始关注。',
      story:'律师团队说：「我们有三条路：卖给大平台套现；继续独立IPO上市；或者主动拥抱监管，转型成合规创作者经济平台。」',
      isFinalStep:true,
      choices:[
        {tag:'A',text:'以100亿卖给Meta，一次性套现',
         delta:{shenjia:1000,shangyebantu:0,liuliang:100,ziwo:-20},type:'名利',
         feedback:'你成了扎克伯格最贵的收购案主角，个人身价直接超过10亿。太后在庆功宴上哭了——这是她第一次因为高兴哭。'},
        {tag:'B',text:'拒绝收购，自主IPO上市',
         delta:{shenjia:500,shangyebantu:1000,liuliang:200,caopan:200,ziwo:30},type:'商业',
         feedback:'KardFans IPO当日市值突破300亿，你成了好莱坞历史上第一个自主上市的明星CEO。《华尔街日报》头版：「她把私人生活变成了纳斯达克」。'},
        {tag:'C',text:'拥抱监管，转型为合规创作者经济平台',
         delta:{shenjia:300,shangyebantu:600,liuliang:80,ziwo:60,caopan:100},type:'独立',
         feedback:'你主动邀请国会监管，把平台转型为「创作者保护」标杆企业。联合国数字权益峰会邀请你发表演讲，太后说：「合规也能赚钱？我学到了新东西。」'}
      ]
    }
  ],
  ending:{
    color:'#E67E22',
    title:'OnlyFans主理人',
    subtitle:'把欲望变成纳斯达克的女人',
    headline:'18禁网站主理人！重新定义「内容创作者」！',
    story:'你重新定义了「内容创作者」的含义。从录像带危机到订阅网站，你证明了最私密的东西也可以成为最赚钱的生意。福布斯拒绝把你列入榜单——不是因为钱不够，是因为编辑部无法在杂志上印你的职业名称。但你不在乎，因为你的银行余额比他们所有编辑加起来都多。',
    krisQuote:'Kris：「我的女儿用最大胆的方式证明了在正确的时间做正确的事——哪怕那件事让我解释了十年。我以她为傲。」',
    manifesto:'当你有钱了——你的收款方式是OnlyFans订阅，月入比美联储印钞还快。',
    persona:'数字时代创作者经济的奠基人，把欲望变成资本的成人帝国女王'
  }
}

}; // END SIDELINES


// ============================================================
// 支线系统渲染引擎
// ============================================================
var _sidelineStepIdx=0;
var _sidelineId='';

function triggerSideline(sidelineId){
  _sidelineId=sidelineId;
  _sidelineStepIdx=0;
  GameState._sidelineActive=true;
  GameState.sidelineTriggered=sidelineId;
  var sl=SIDELINES[sidelineId];
  if(!sl)return;
  // 弹出支线触发提示
  showSidelineBanner(sl, function(){
    renderSidelineStep(sidelineId, 0);
  });
}

function showSidelineBanner(sl, cb){
  var body=document.getElementById('stageBody');
  if(!body)return;
  body.innerHTML='';
  var banner=document.createElement('div');
  banner.style.cssText='margin:14px;background:linear-gradient(135deg,#9B59B6,#E5173F);border:3px solid #FFD700;border-radius:12px;padding:20px;text-align:center;';
  banner.innerHTML=
    '<div style="font-size:18px;font-weight:900;color:#FFD700;margin-bottom:8px;">'+sl.triggerTitle+'</div>'
    +'<div style="font-size:13px;color:#F5F5F5;line-height:1.6;margin-bottom:14px;">'+sl.triggerDesc+'</div>'
    +'<div style="font-size:11px;color:#FFD700;font-weight:700;letter-spacing:2px;">⚠️ 进入支线后将直接走向专属结局</div>'
    +'<button id="enterSidelineBtn" style="margin-top:14px;padding:10px 24px;background:#FFD700;color:#1a1a1a;font-weight:900;font-size:14px;border:none;border-radius:6px;cursor:pointer;">🌟 进入支线</button>';
  body.appendChild(banner);
  document.getElementById('enterSidelineBtn').onclick=function(){cb();};
  banner.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function renderSidelineStep(sidelineId, stepIdx){
  _sidelineId=sidelineId;
  _sidelineStepIdx=stepIdx;
  var sl=SIDELINES[sidelineId];
  if(!sl||!sl.steps[stepIdx])return;
  var step=sl.steps[stepIdx];
  var body=document.getElementById('stageBody');
  if(!body)return;
  body.innerHTML='';

  // Hero区
  var hero=document.createElement('div');
  hero.className='stage-hero';
  hero.innerHTML=
    '<div class="stage-hero-bg" style="background:'+step.gradient+'"></div>'
    +'<div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.18) 1.5px,transparent 1.5px);background-size:8px 8px;z-index:2;pointer-events:none"></div>'
    +'<div class="stage-corner-tag" style="background:#9B59B6;">🌟 支线</div>'
    +'<div class="stage-age-tag">'+step.age+'</div>'
    +'<div class="stage-hero-title">'
    +'<span class="stage-hero-emoji">'+step.emoji+'</span>'
    +'<span class="stage-title">'+step.title+'</span>'
    +'<button class="review-btn show" onclick="openReview()">📖 回看</button>'
    +'</div>';
  body.appendChild(hero);

  // 背景卡
  var bgCard=document.createElement('div');
  bgCard.className='stage-bg-info';
  bgCard.innerHTML='<div class="stage-section-label">📖 背景</div><div class="stage-bg-text">'+fillName(step.bg)+'</div>';
  body.appendChild(bgCard);

  // 剧情卡
  var storyCard=document.createElement('div');
  storyCard.className='stage-story-card';
  storyCard.innerHTML='<div class="stage-story-label">🎬 剧情</div><div class="stage-story-text">'+fillName(step.story)+'</div>';
  body.appendChild(storyCard);

  // 选项标签
  var choiceLabel=document.createElement('div');
  choiceLabel.style.cssText='margin:12px 14px 4px;font-size:10px;font-weight:900;letter-spacing:2px;color:#9B59B6;';
  choiceLabel.innerHTML='🎯 你的选择';
  body.appendChild(choiceLabel);

  // 选项
  var cl=document.createElement('div');
  cl.className='choices-list';
  step.choices.forEach(function(ch,ci){
    var btn=document.createElement('button');
    btn.className='choice-btn';
    btn.style.borderColor='#9B59B6';
    btn.innerHTML='<span class="choice-tag" style="background:#9B59B6;">'+ch.tag+'</span>'+fillName(ch.text);
    (function(c,i){
      btn.onclick=function(){
        cl.querySelectorAll('.choice-btn').forEach(function(b){b.classList.add('disabled');});
        btn.classList.add('selected');
        applyDelta(c.delta);
        if(c.type==='抓马')GameState.stats._allDramaCount=(GameState.stats._allDramaCount||0)+1;
        // 记录支线回看
        if(typeof recordSidelineChoice==='function') recordSidelineChoice(step.title, step.age, c);
        updateStatsUI();
        // 显示反馈
        var NAMES={liuliang:'流量',taihou:'太后好感',ziwo:'自我',caopan:'操盘权',shenjia:'身价',shangyebantu:'商业版图'};
        var dHtml='<div class="stat-deltas">';
        for(var k in c.delta){
          if(!NAMES[k])continue;
          var v2=c.delta[k],cls2=v2>=0?'up':'down',sign2=v2>=0?'+':'';
          dHtml+='<span class="stat-delta '+cls2+'">'+NAMES[k]+' '+sign2+v2+'</span>';
        }
        dHtml+='</div>';
        var fbDiv=document.createElement('div');
        fbDiv.className='event-feedback show';
        fbDiv.innerHTML='<div class="event-feedback-title">📰 事件反馈</div><div class="event-feedback-text">'+fillName(c.feedback)+'</div>'+dHtml;
        body.appendChild(fbDiv);
        // 确定下一步
        setTimeout(function(){
          if(GameState.stats.ziwo<=0){showEnding();return;}
          var nb=document.createElement('button');
          nb.className='next-stage-btn show';
          if(c.exitSideline){
            // 退出支线，回主线
            nb.textContent='↩ 返回主线';
            nb.onclick=function(){
              GameState._sidelineActive=false;
              renderStage(GameState.currentStage+1);
              document.getElementById('stageBody').scrollTop=0;
            };
          } else if(step.isFinalStep || c.isFinalStep){
            nb.textContent='🌟 揭晓支线结局';
            nb.style.background='linear-gradient(90deg,#9B59B6,#FFD700)';
            nb.onclick=function(){showSidelineEnding(sidelineId);};
          } else {
            nb.textContent='▶ 继续支线 →';
            nb.style.background='linear-gradient(90deg,#9B59B6,#E5173F)';
            nb.onclick=function(){
              renderSidelineStep(sidelineId, stepIdx+1);
              document.getElementById('stageBody').scrollTop=0;
            };
          }
          body.appendChild(nb);
          nb.scrollIntoView({behavior:'smooth',block:'nearest'});
        },400);
      };
    })(ch,ci);
    cl.appendChild(btn);
  });
  body.appendChild(cl);

  updateStatsUI();
}

function showSidelineEnding(sidelineId){
  var sl=SIDELINES[sidelineId];
  if(!sl)return;
  var e=sl.ending;
  switchScreen('stage-screen','ending-screen',function(){
    var s=GameState.stats;
    var card=document.getElementById('endingCard');
    if(!card)return;
    buildEndingCard(card, e, s, true);
  });
}

// ============================================================
// Canvas 分享海报生成
// ============================================================
function generateSharePoster(){
  var canvas = document.getElementById('posterCanvas');
  if(!canvas) return;

  // 尺寸：1080×1920（竖版手机海报）
  var W = 1080, H = 1920;
  canvas.width  = W;
  canvas.height = H;
  canvas.style.display = 'none';
  var ctx = canvas.getContext('2d');

  // --- 读取当前结局信息 ---
  var endingTitle  = document.querySelector('.ending-big-title');
  var endingStory  = document.querySelector('.ending-story');
  var manifestoEl  = document.querySelector('.ending-manifesto-text');
  var krisEl       = document.querySelector('.ending-kris-text');
  var bannerEl     = document.querySelector('.ending-banner');

  var title    = endingTitle  ? endingTitle.textContent  : '';
  var manifesto= manifestoEl  ? manifestoEl.textContent  : '';
  var kris     = krisEl       ? krisEl.textContent       : '';
  var color    = '#E5173F';
  if(bannerEl){
    var bg = bannerEl.style.background || bannerEl.style.backgroundColor || '';
    var m  = bg.match(/#[0-9A-Fa-f]{6}/);
    if(m) color = m[0];
  }

  // 确定当前结局ID和头像路径
  var curEndingId = GameState.sidelineTriggered || '';
  if(!curEndingId){
    // 非支线，找到匹配的主线结局
    for(var i=0;i<ENDINGS.length;i++){
      if(ENDINGS[i].condition(GameState.stats)){curEndingId=ENDINGS[i].id;break;}
    }
  }
  var avatarSrc = getEndingAvatar(curEndingId);

  // 预加载头像图片，加载完成后绘制海报
  var avatarImg = new Image();
  avatarImg.crossOrigin = 'anonymous';
  avatarImg.onload = function(){ drawPoster(ctx, W, H, title, manifesto, kris, color, avatarImg); };
  avatarImg.onerror = function(){ drawPoster(ctx, W, H, title, manifesto, kris, color, null); };
  avatarImg.src = avatarSrc;
}

function drawPoster(ctx, W, H, title, manifesto, kris, color, avatarImg){
  var canvas = ctx.canvas;

  // --- 背景 ---
  ctx.fillStyle = '#0D0D0D';
  ctx.fillRect(0, 0, W, H);

  // 半调网点背景
  ctx.fillStyle = 'rgba(255,255,255,0.03)';
  for(var y=0; y<H; y+=18){
    for(var x=0; x<W; x+=18){
      ctx.beginPath();
      ctx.arc(x+4, y+4, 3, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // --- 顶部色块 ---
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, W, 480);

  // 顶部波普半调
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  for(var y=0; y<480; y+=12){
    for(var x=0; x<W; x+=12){
      ctx.beginPath();
      ctx.arc(x+3, y+3, 2.5, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // eyebrow
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = 'bold 28px Impact, Arial Black';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '8px';
  ctx.fillText('✦ KARDASHIAN REBORN ✦', W/2, 80);

  // 大标题
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 88px Impact, "PingFang SC", "Hiragino Sans GB", Arial Black';
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowOffsetX = 5; ctx.shadowOffsetY = 5; ctx.shadowBlur = 0;
  wrapText(ctx, title, W/2, 200, W-100, 96, 'center');
  ctx.shadowColor = 'transparent';

  // 玩家名
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 42px "PingFang SC", "Hiragino Sans GB", sans-serif';
  ctx.fillText(GameState.playerName + ' · 卡戴珊', W/2, 420);

  // --- 头像圆 ---
  var cx = W/2, cy = 700, r = 160;
  // 边框
  ctx.beginPath();
  ctx.arc(cx, cy, r+6, 0, Math.PI*2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 12;
  ctx.stroke();

  if(avatarImg){
    // 绘制真实头像（圆形裁剪）
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.clip();
    // 居中裁剪绘制
    var imgW = avatarImg.width, imgH = avatarImg.height;
    var scale = Math.max(r*2/imgW, r*2/imgH);
    var dw = imgW*scale, dh = imgH*scale;
    ctx.drawImage(avatarImg, cx-dw/2, cy-dh/2, dw, dh);
    ctx.restore();
  } else {
    // 降级：渐变圆 + emoji
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI*2);
    var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    grad.addColorStop(0, color);
    grad.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = '100px serif';
    ctx.textAlign = 'center';
    ctx.fillText('💅', cx, cy+35);
  }

  // --- 显化宣言区 ---
  ctx.fillStyle = 'rgba(255,215,0,0.12)';
  roundRect(ctx, 60, 940, W-120, 180, 12);
  ctx.fill();
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  roundRect(ctx, 60, 940, W-120, 180, 12);
  ctx.stroke();

  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 30px "PingFang SC", Arial';
  ctx.textAlign = 'center';
  ctx.fillText('✨ 当你显化成功', W/2, 988);
  ctx.fillStyle = '#F5F5F5';
  ctx.font = '34px "PingFang SC", "Hiragino Sans GB", Arial';
  wrapText(ctx, manifesto, W/2, 1040, W-160, 40, 'center');

  // --- Kris 寄语 ---
  ctx.fillStyle = 'rgba(229,23,63,0.15)';
  roundRect(ctx, 60, 1160, W-120, 200, 12);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  roundRect(ctx, 60, 1160, W-120, 200, 12);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.font = 'bold 30px "PingFang SC", Arial';
  ctx.textAlign = 'center';
  ctx.fillText('💄 KRIS 寄语', W/2, 1205);
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '30px "PingFang SC", "Hiragino Sans GB", Arial';
  wrapText(ctx, kris, W/2, 1255, W-160, 36, 'center');

  // --- 底部引导语 ---
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '28px "PingFang SC", Arial';
  ctx.textAlign = 'center';
  ctx.fillText('长按截图保存 · 转发给家人/同事/老板/对象', W/2, 1440);
  ctx.fillText('sugar mommy 或 daddy', W/2, 1480);
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 34px "PingFang SC", Arial';
  ctx.fillText('这次你一定要提现！', W/2, 1530);

  // --- 游戏名 ---
  ctx.fillStyle = color;
  ctx.font = 'bold 36px Impact, "PingFang SC", Arial';
  ctx.fillText('《保持富态》卡戴珊家族投胎模拟器', W/2, 1640);
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '24px "PingFang SC", Arial';
  ctx.fillText('扫码开始投胎 ↗', W/2, 1680);

  // --- 显示 ---
  canvas.style.display = 'block';
  canvas.style.maxWidth = '100%';
  canvas.style.margin = '14px auto';
  canvas.style.border = '3px solid '+color;
  canvas.scrollIntoView({behavior:'smooth', block:'center'});

  // 替换按钮提示文字
  var btn = document.querySelector('.ending-share-btn');
  if(btn){
    btn.textContent = '✅ 长按图片保存';
    btn.style.background = '#2ECC71';
  }
}

// 工具：自动换行绘制文字
function wrapText(ctx, text, x, y, maxWidth, lineH, align){
  if(!text) return y;
  ctx.textAlign = align || 'left';
  var words = text.split('');
  var line  = '';
  var curY  = y;
  for(var i=0; i<words.length; i++){
    var test = line + words[i];
    if(ctx.measureText(test).width > maxWidth && line !== ''){
      ctx.fillText(line, x, curY);
      line = words[i];
      curY += lineH;
    } else {
      line = test;
    }
  }
  if(line) ctx.fillText(line, x, curY);
  return curY + lineH;
}

// 工具：圆角矩形路径
function roundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.arcTo(x+w, y, x+w, y+r, r);
  ctx.lineTo(x+w, y+h-r);
  ctx.arcTo(x+w, y+h, x+w-r, y+h, r);
  ctx.lineTo(x+r, y+h);
  ctx.arcTo(x, y+h, x, y+h-r, r);
  ctx.lineTo(x, y+r);
  ctx.arcTo(x, y, x+r, y, r);
  ctx.closePath();
}
