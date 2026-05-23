export interface DetailSection {
  heading?: string;
  content?: string;
  image?: string;
  imageAlt?: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  description: string;
  techStack: string[];
  highlights: string[];
  outcome: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  detailSections?: DetailSection[];
  detailIntro?: string;
  detailTechStack?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: 'proficient' | 'skilled' | 'familiar';
}

export interface Honor {
  title: string;
  subtitle: string;
  icon: 'trophy' | 'medal' | 'star' | 'briefcase' | 'users';
  highlight: boolean;
}

export const personalInfo = {
  name: '何林江',
  nameEn: 'He LinJiang',
  age: 21,
  location: '河南 · 现居福建福州',
  englishLevel: '英语六级',
  tagline: '热爱用代码构建体验的探索者',
  email: '1029574371@qq.com',
  phone: '13353782163',
  github: 'https://github.com/Cori-anba',
  githubUser: 'Cori-anba',
  avatar: './images/个人照片/个人照片1.jpg',
  avatarAlt: '何林江的个人照片',
};

export const education = {
  school: '福建师范大学',
  major: '计算机科学与技术（中英合办）',
  period: '2023-09 ~ 至今',
  gpa: '3.71/5.0',
  rank: '前10%',
  courses: [
    'C/C++程序设计', 'Java程序设计', 'Python程序设计',
    '计算机组成原理', '操作系统', '数据结构',
    '嵌入式系统', '计算机网络', '高等数学', '概率论与数理统计'
  ],
};

export const hobbies = ['开发', '骑行', '健身'];

export const selfEvaluation = {
  short: '善于拆解需求，对技术充满好奇，追求卓越，能独立负责并快速交付。',
  full: [
    '熟练掌握前端开发相关技术（HTML5、CSS3、JavaScript、DOM、绘图、动画、协议、安全和性能等），能够熟练使用Vue3框架，对Git版本管理工具有一定的了解程度和使用经验，并且在日常学习和工作中大量使用AI工具来辅助我完成项目需求。',
    '扎实的技术基础与快速学习能力：熟练掌握C/C++、Python等编程语言，熟悉数据结构与算法，具备良好的代码规范意识。对新技术充满热情并且能快速上手将其应用于实际项目中。',
    '丰富的项目实战经验：具备鸿蒙框架下的基础应用开发、机器学习模型构建及Flutter跨平台开发经验，熟悉软件开发流程，能独立完成模块设计与实现。',
    '良好的团队协作与沟通能力：在校期间担任学生干部，具备较强的规划协调能力和团队合作精神，沟通理解力强，能高效推进项目进度。',
  ],
};

export const skills: Skill[] = [
  // 前端
  { name: 'HTML/CSS/JavaScript', category: '前端', level: 'proficient' },
  { name: 'Vue.js', category: '前端', level: 'skilled' },
  // 后端/全栈
  { name: 'Python', category: '后端/全栈', level: 'proficient' },
  { name: 'C/C++', category: '后端/全栈', level: 'proficient' },
  // 工具/工程
  { name: 'Git', category: '工具/工程', level: 'proficient' },
  { name: 'GitHub', category: '工具/工程', level: 'proficient' },
  { name: 'Docker', category: '工具/工程', level: 'skilled' },
  // AI 协同
  { name: 'Claude Code', category: 'AI 协同', level: 'skilled' },
  { name: 'Codex', category: 'AI 协同', level: 'familiar' },
  { name: 'Openclaw', category: 'AI 协同', level: 'familiar' },
];

export const honors: Honor[] = [
  {
    title: '2024 CCPC 省一等奖',
    subtitle: '福建省大学生编程设计竞赛',
    icon: 'trophy',
    highlight: true,
  },
  {
    title: '2025 蓝桥杯省一等奖',
    subtitle: '福建省 Python 大学A组',
    icon: 'medal',
    highlight: true,
  },
  {
    title: '前端开发实习生',
    subtitle: '厦门奇站网络科技 · 2026.01-2026.02',
    icon: 'briefcase',
    highlight: false,
  },
  {
    title: '七年班长',
    subtitle: '初中到大学 · 管理与规划经验丰富',
    icon: 'users',
    highlight: false,
  },
  {
    title: '优秀共青团员 · 优秀学生干部 · 两届优秀学生奖学金',
    subtitle: '荣誉称号',
    icon: 'star',
    highlight: false,
  },
];

export const projects: Project[] = [
  {
    id: 'grokx',
    name: 'GrokX 智慧体锻平台',
    subtitle: '项目组长',
    period: '2024.05 - 2025.06',
    description: '研发基于机器视觉与AI的智慧健身系统，构建集"人体姿态实时分析、动作规范性自动评判、AI语音交互指导"于一体的软硬件原型平台，解决个人健身缺乏即时、科学反馈的核心痛点。',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'MediaPipe', 'FastAPI', 'Vue.js', 'Electron', 'Docker'],
    highlights: [
      '主导核心动作评估算法逻辑，将复杂动作标准转化为可计算规则',
      '独立完成人体姿态识别流水线，集成YOLOv8与MediaPipe实现33个骨骼关键点实时提取',
      '负责前端Vue.js模块开发，实现训练模式选择、实时渲染与API数据交互',
      '使用Electron将前端打包为独立桌面客户端，便于离线演示与交付',
    ],
    outcome: '成功开发完整可本地运行的软硬件原型系统，通过指导老师验收。成功申请一项软件著作权。深入掌握了AI落地应用的全链路开发流程。',
    image: './images/GrokX智慧体锻平台/GrokX智慧体锻平台（封面）.jpg',
    imageAlt: 'GrokX 智慧体锻平台 UI 界面',
    featured: true,
    detailIntro: '本项目旨在研发一款基于机器视觉与AI的智慧健身系统。成功构建了集人体姿态实时分析、动作规范性自动评判、AI语音交互指导于一体的软硬件原型平台，包含智慧体测、智慧体锻、AI数字教练三大模块。',
    detailTechStack: 'Python（主要开发语言） / Pytorch（深度学习框架） / OpenCV（计算机视觉库） / YOLO v8（目标检测模型） / MediaPipe（姿态识别模型） / FastAPI（后端Web框架） / Git&GitHub（版本控制）/ Vue.js（前端框架）/ Electron（桌面应用打包） / SQLite（嵌入式数据库）/ Docker（容器化部署）',
    detailSections: [
      { heading: '项目协调与开发推进', content: '作为项目组长，在老师指导下负责团队任务分工与周会组织，同步进度并协调前后端联调。主导编写了项目核心的动作评估算法逻辑，将复杂的动作标准（如深蹲角度、俯卧撑起伏）转化为可计算的规则，确保项目按计划推进并最终交付。' },
      { heading: '核心算法模块实现', content: '独立负责并完成了系统最核心的人体姿态识别流水线。通过集成YOLOv8与MediaPipe，实现了从摄像头视频流中实时、稳定地提取33个人体骨骼关键点，为后续动作评估提供可靠数据，在实验室环境下取得了良好效果。' },
      { image: './images/GrokX智慧体锻平台/体锻平台UI界面.jpg', imageAlt: '体锻平台 UI 界面' },
      { heading: '全栈功能开发实践', content: '前端开发：使用Vue.js构建了完整的用户操作界面，实现了用户登录、训练模式选择、实时摄像头视频与骨骼关键点叠加渲染、评估结果可视化等功能。后端联调与部署：参与了FastAPI后端API的设计与联调。项目打包：使用Electron将Vue.js前端项目打包为独立的桌面客户端，便于离线演示与交付。' },
      { image: './images/GrokX智慧体锻平台/实测场景.jpg', imageAlt: '实测场景：实时人体姿态捕捉与评估' },
      { heading: '项目成果', content: '成功开发出一套完整的、可本地运行的软硬件原型系统，包含桌面应用、后端服务与AI模型，由指导老师通过验收。作为项目核心成果，成功申请一项软件著作权。深入掌握了借助AI落地应用的全链路开发流程，极大地锻炼了解决复杂工程问题的能力。' },
      { image: './images/GrokX智慧体锻平台/软件著作权.jpg', imageAlt: '项目软件著作权' },
    ],
  },
  {
    id: 'hometown-tourism',
    name: '家乡旅游主题网页',
    subtitle: '前端开发成员',
    period: '2023.11 - 2023.12',
    description: '作为《计算机导论》课程小组作业，与3名同学协作完成介绍四座家乡城市的旅游主题静态网站。独立负责"河南"页面的完整开发，并参与全局交互逻辑实现。',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'jQuery', 'Owl Carousel', 'Isotope'],
    highlights: [
      '独立负责网站主页视觉效果及"河南开封"旅游页面的前端开发',
      '集成Owl Carousel轮播组件展示城市景点与优惠套餐',
      '基于jQuery实现响应式导航栏、平滑滚动及轮播组件配置',
      '独立制作期末汇报全流程演示PPT，有效辅助课程答辩',
    ],
    outcome: '网页与演示成果双项获得满分，成为该课程当学年唯一获此评价的小组。',
    image: './images/家乡旅游主题网页/家乡旅游主题网页（封面）.jpg',
    imageAlt: '家乡旅游主题网页主页展示',
    featured: true,
    detailIntro: '作为《计算机导论》课程小组作业，与3名同学协作完成了一个介绍四座家乡城市的旅游主题静态网站。我作为前端开发成员，独立负责河南页面的完整开发，并参与了全局交互逻辑的实现。',
    detailTechStack: 'HTML5（页面结构） / CSS3（样式与动画） / JavaScript (ES5) / Bootstrap 5（响应式布局框架） / jQuery（DOM操作库） / Owl Carousel（轮播组件） / Isotope（网格过滤库）',
    detailSections: [
      { heading: '页面独立开发与视觉实现', content: '负责网站主页的视觉效果以及河南开封旅游页面的前端开发。使用Bootstrap 5栅格系统完成页面布局，集成Owl Carousel组件展示城市景点与优惠套餐，并通过编写自定义CSS实现了图片悬浮放大等交互动效，确保了页面视觉风格与主站统一。' },
      { image: './images/家乡旅游主题网页/网页主页视觉展示.jpg', imageAlt: '网站主页视觉效果展示' },
      { heading: '交互逻辑开发与集成', content: '参与项目全局交互脚本custom.js的协作开发。基于jQuery实现了响应式导航栏、平滑滚动及轮播组件的初始化与配置，为全站提供了统一的交互体验。' },
      { image: './images/家乡旅游主题网页/河南页面展示.jpg', imageAlt: '河南开封独立页面展示' },
      { heading: '项目质量保障与成果整合', content: '为保障全站视觉一致性，负责收集与筛选所有页面的高清图片素材。独立制作了用于期末汇报的全流程演示PPT，清晰阐述了项目从构思、技术选型到实现的完整过程，有效辅助了课程答辩。' },
      { image: './images/家乡旅游主题网页/答辩PPT截图.jpg', imageAlt: '期末答辩PPT展示' },
      { heading: '项目成果', content: '交付了一个包含首页、四个城市页、预约页及制作人员页的完整静态网站，在课程验收中网页与演示成果双项获得满分，成为该课程当学年唯一获此评价的小组。提升了页面重构、交互实现、第三方库集成的能力。' },
    ],
  },
  {
    id: 'html-tags',
    name: 'HTML 标签速查手册',
    subtitle: '独立开发者 · AI 协同',
    period: '约3.5小时',
    description: '为解决开发者频繁查阅HTML文档的痛点，主导并利用AI智能体作为核心开发协作者，从零构建零依赖、可离线使用的原生JavaScript SPA应用，完整收录110个HTML5标签。',
    techStack: ['HTML5', 'CSS3', 'Vanilla JS (ES6+)', 'JSON', 'IntersectionObserver API', 'Claude Code'],
    highlights: [
      '决策并实施"纯原生、零依赖"技术架构，追求极致加载性能与开箱即用体验',
      '设计基于JSON的数据结构，指导AI实现动态渲染引擎，毫秒级生成标签详情页',
      '定义五级递降搜索策略（精确匹配→语义模糊匹配），实现近乎零延迟的实时搜索',
      '解决纯静态页面无法本地加载JSON的经典难题，主导"数据内联为JS变量"方案',
    ],
    outcome: '交付功能完备、已开源的生产级工具，代码仓库已获Stars与Fork。沉淀了一套"AI辅助零依赖Web开发"的高效工作流。',
    image: './images/HTML tags网站项目/HTML-tags（封面）.jpg',
    imageAlt: 'HTML 标签速查手册主页展示',
    featured: true,
    detailIntro: '为解决开发者频繁查阅HTML文档的痛点，主导并利用AI智能体作为核心开发协作者，在极短时间内（约3.5小时）从零构建了一个零依赖、可离线使用的原生JavaScript SPA应用。完整收录了110个HTML5标签的属性、CSS对照及使用说明。',
    detailTechStack: 'HTML5(语义化结构) / CSS3(布局与样式) / Vanilla JavaScript (ES6+) / JSON(数据结构化存储) / IntersectionObserver API / Git(版本控制) / Claude Code(AI开发协作者)',
    detailSections: [
      { heading: '架构设计与AI开发工作流', content: '决策并实施了纯原生、零依赖的技术架构，摒弃了任何前端框架与构建工具，以追求极致的加载性能与开箱即用的体验。将项目拆解为数据、渲染、交互、UI四个明确层级，并为每个模块编写了详尽的技术需求说明书，高效引导AI智能体生成模块化、可集成的代码，全程担任架构师与代码评审者角色。' },
      { heading: '数据驱动渲染引擎', content: '设计了基于JSON的数据结构，并指导AI实现了动态渲染引擎，可毫秒级生成包含复杂合并表格、双语内容的标签详情页，并自动生成交互式目录。' },
      { image: './images/HTML tags网站项目/主页展示.jpg', imageAlt: '网站主页展示' },
      { heading: '智能搜索与导航', content: '定义了五级递降的搜索策略（从精确匹配到语义模糊匹配），与AI协同实现了近乎零延迟的实时搜索。同时设计了响应式导航系统，在移动端自动转换为汉堡菜单，确保全设备友好。' },
      { image: './images/HTML tags网站项目/input页面截图.jpg', imageAlt: 'input标签页面展示' },
      { heading: '工程难题攻克', content: '针对纯静态页面无法本地加载JSON数据的经典难题，主导制定了数据内联为JS变量的解决方案，实现了真正的双击即用。对AI生成的初始代码进行了全面的性能与兼容性审查，优化了滚动监听逻辑与CSS布局。' },
      { heading: '项目成果', content: '交付一个功能完备、已开源并具备完整文档的生产级工具，代码仓库已获Stars与Fork。以极短的开发周期，产出结构清晰、性能优良、无第三方依赖的高质量原生代码。总结了一套针对AI辅助零依赖Web开发的高效工作流。' },
    ],
  },
  {
    id: 'repochat',
    name: 'RepoChat 项目管理系统',
    subtitle: '架构师 · 全栈开发',
    period: '3天',
    description: '为理解陌生代码库效率低下的核心痛点，主导设计并全栈实现了RepoChat——通过自然语言对话深度分析任意Git仓库的智能工具。将AI智能体深度集成至开发流水线。',
    techStack: ['React 18', 'TypeScript', 'Vite', 'FastAPI', 'SQLite', 'MCP', 'React Query'],
    highlights: [
      '设计基于React + FastAPI的现代化全栈架构，实现高性能与良好维护性',
      '设计支持多厂商模型（OpenAI、Claude、DeepSeek）的统一AI服务网关抽象层',
      '决策集成MCP协议，指导AI实现完整的MCP客户端/服务端框架',
      '基于Tailwind CSS构建独特的"玻璃态科技风"设计系统',
    ],
    outcome: '成功实现功能完整、体验流畅、具备生产可用性的桌面级开发者工具。系统沉淀了一套"AI协同的全栈应用开发规范"。',
    image: './images/RepoChat网站项目/RepoChat（封面）.jpg',
    imageAlt: 'RepoChat 项目管理系统主页展示',
    featured: true,
    detailIntro: '为解决开发者理解陌生代码库效率低下的核心痛点，主导设计并全栈实现了RepoChat——一个可通过自然语言对话深度分析任意Git仓库的智能工具。以架构师角色规划了前后端分离的现代技术栈，在3天内高效完成了全功能开发。',
    detailTechStack: 'React 18+ TypeScript(前端框架) / Vite(构建工具) / CSS3(样式方案) / FastAPI(后端框架) / SQLite(数据库) / Git(版本控制操作) / React Query(服务端状态管理) / MCP(模型上下文协议) / Claude Code(AI开发协作者)',
    detailSections: [
      { heading: '全栈架构设计与AI协同开发', content: '决策并实施了基于React + FastAPI的现代化全栈架构，以实现高性能与良好维护性。将复杂系统拆解为清晰的前后端模块，并为每个模块编写了详尽的技术规格说明书，高效驱动AI智能体进行模块化编码，全程负责代码审查、模块集成与系统联调。' },
      { heading: '统一AI服务网关', content: '设计了支持多厂商模型（OpenAI, Claude, DeepSeek等）的抽象层，指导AI实现了基于工厂模式的统一调用网关，并主导设计了对话上下文管理、Token优化与流式输出策略。' },
      { image: './images/RepoChat网站项目/主页展示.jpg', imageAlt: 'RepoChat 项目主页展示' },
      { heading: '可扩展工具链', content: '为突破纯对话的分析限制，决策集成MCP协议，并指导AI实现了完整的MCP客户端/服务端框架，使工具能力可动态扩展，体现了对开发者工具生态的前瞻性理解。' },
      { image: './images/RepoChat网站项目/推荐页面展示.jpg', imageAlt: '项目智能推荐页面展示' },
      { heading: '产品化与开发者体验', content: '主导了产品的整体视觉与交互设计，基于Tailwind CSS构建了独特的玻璃态科技风设计系统。深度参与了从GitHub项目发现、一键克隆到仓库分析的全链路体验设计，确保工具对开发者友好且高效。' },
      { heading: '项目成果', content: '成功实现一个功能完整、体验流畅、具备生产可用性的桌面级开发者工具，涵盖了代码库分析的核心场景，并具备强大的可扩展性。系统沉淀了一套AI协同的全栈应用开发规范。' },
    ],
  },
  {
    id: 'fatigue-driving',
    name: '疲劳驾驶检测系统',
    subtitle: '独立开发者',
    period: '2025.01 - 2025.03',
    description: '构建能同时感知外部道路环境和内部驾驶员状态的实时预警原型。利用YOLOv5和MediaPipe分别处理车辆检测与面部特征识别，开发集成双路检测功能的桌面应用。',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLOv5s', 'MediaPipe', 'Tkinter', 'SQLite'],
    highlights: [
      '独立完成从需求分析、技术选型、前后端逻辑到GUI交互的全流程实现',
      '基于YOLOv5s实现道路视频中车辆、行人等目标的实时检测与可视化',
      '利用摄像头捕获驾驶员画面，同步实现对使用手机、闭眼、打哈欠的识别',
      '使用Tkinter开发完整GUI界面，集成视频选择、摄像头开启、结果展示与报警功能',
    ],
    outcome: '成功开发功能完整、可交互演示的桌面应用原型，实现对内外双路视频流的实时安全监测。',
    image: './images/疲劳驾驶检测系统/疲劳驾驶检测系统（封面）.jpg',
    imageAlt: '疲劳驾驶检测系统主界面',
    featured: false,
    detailIntro: '驾驶过程中，驾驶员的分心（如使用手机）和疲劳（如闭眼）是引发事故的主要风险。目标是构建一个能同时感知外部道路环境和内部驾驶员状态的实时预警原型，最终开发出一个集成双路检测功能的桌面应用。',
    detailTechStack: 'Python（主要开发语言）/ PyTorch（深度学习框架）/ OpenCV（计算机视觉库） / YOLOv5s（轻量目标检测模型） / MediaPipe（面部识别）/ Tkinter（GUI框架）/ SQLite（嵌入式数据库）',
    detailSections: [
      { heading: '系统设计与全流程开发', content: '作为独立开发者，完成了从需求分析、技术选型、前后端逻辑到GUI交互的全流程实现。独立设计了包含用户登录、注册、车型选择的数据管理模块，使用SQLite进行本地数据存储。' },
      { image: './images/疲劳驾驶检测系统/主界面UI.jpg', imageAlt: '疲劳驾驶检测系统主界面' },
      { heading: '双路视频分析与检测算法集成', content: '道路端分析：基于YOLOv5s模型实现了对输入道路视频的车辆、行人等目标的实时检测，通过OpenCV将检测结果可视化。驾驶员端分析：利用摄像头捕获驾驶员画面，集成YOLOv5s与MediaPipe模型，同步实现对使用手机等目标的检测，以及闭眼、打哈欠等疲劳面部特征的识别。' },
      { image: './images/疲劳驾驶检测系统/目标检测.jpg', imageAlt: '目标检测与驾驶员状态检测' },
      { heading: '图形界面与系统打包', content: '使用Tkinter开发了完整的图形用户界面，集成了视频选择、摄像头开启、结果展示与报警提示等功能。最终将整个项目打包为可独立运行的桌面应用程序，完成了从算法到产品的闭环。' },
      { heading: '项目成果', content: '成功开发出一个功能较为完整、可交互演示的桌面应用原型，实现了对内外双路视频流的实时安全监测，有效验证了多模型协同解决复杂场景问题的技术路径。' },
    ],
  },
  {
    id: 'safety-system',
    name: '智慧工地安全检测系统',
    subtitle: '独立开发者',
    period: '2025.03 - 2025.04',
    description: '针对建筑工地人员安全装备穿戴难以实时监管的痛点，开发智慧工地安全检测系统。通过整合目标检测与图形界面技术，实现安全帽、反光衣的自动识别、报警与违规数据归档。',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLOv5s', 'Tkinter', 'SQLite'],
    highlights: [
      '独立完成从需求分析、算法集成、业务逻辑到GUI的全流程实现',
      '利用OpenCV构建灵活的视频处理流水线，YOLOv5s对每帧实时推理',
      '基于数据集对YOLOv5s模型进行安全帽、反光衣识别的微调与优化',
      '实现违规帧截图保存（附带时间戳）及处理后视频导出功能，模型识别准确率95%+',
    ],
    outcome: '开发出功能完备、可直接运行的桌面应用原型，深入理解了技术对工业生产场景的落地价值与潜在挑战。',
    image: './images/智慧工地安全检测系统/智慧工地安全检测系统（封面）.jpg',
    imageAlt: '智慧工地安全检测系统运行界面',
    featured: false,
    detailIntro: '针对建筑工地中人员安全装备穿戴难以实时监管的痛点，开发了一套智慧工地安全检测系统。通过整合目标检测与图形界面技术，实现了对视频流中人员是否佩戴安全帽、反光衣的自动识别、报警与违规数据归档。',
    detailTechStack: 'Python（主开发语言） / PyTorch（深度学习框架） / OpenCV（计算机视觉库） / YOLOv5s（目标检测模型） / Tkinter（GUI框架） / SQLite（嵌入式数据库）',
    detailSections: [
      { heading: '全流程开发与交互设计', content: '作为独立开发者，完成了从需求分析、算法集成、业务逻辑到图形用户界面的全流程实现。基于Tkinter开发了包含视频控制、实时统计面板、数据管理的桌面图形界面，使用SQLite存储违规记录与时间戳。' },
      { image: './images/智慧工地安全检测系统/模型对安全帽的识别测试.jpg', imageAlt: '模型对安全帽的识别测试' },
      { heading: '视频处理与检测流水线', content: '利用OpenCV构建了灵活的视频处理流水线，通过YOLOv5s模型对每一帧进行实时推理，检测画面中的安全帽与反光衣，并将未规范穿戴的人员用红色边界框高亮标出。' },
      { heading: '模型优化与系统集成', content: '基于数据集对YOLOv5s模型进行了针对安全帽、反光衣识别的微调与优化。将优化后的模型集成到系统中，实现了检测结果的实时可视化、违规帧截图保存（附带时间戳）及处理后视频的导出功能，模型识别准确率可达95%以上。' },
      { image: './images/智慧工地安全检测系统/运行界面.jpg', imageAlt: '系统运行界面与检测结果' },
      { heading: '项目成果', content: '开发出一个功能完备、可直接运行的桌面应用程序原型，经测试优化后的模型在测试集上对安全装备的识别准确率高，且系统运行流畅。进行了数据准备、模型微调、逻辑开发到最终产出应用原型的全流程实践。' },
    ],
  },
  {
    id: 'disk-cleaner',
    name: 'Disk-Cleaner 安全磁盘清理',
    subtitle: '独立开发者 · AI Agent 工具',
    period: '',
    description: '针对用户手动清理磁盘繁琐、而AI Agent直接操作存在误删风险的核心痛点，以"安全至上"为第一原则设计开发MCP工具。通过硬编码五重安全校验、可审计操作清单与确定性分类算法，构筑绝对可靠的安全防线。',
    techStack: ['TypeScript', 'Node.js', 'MCP SDK', 'Vitest', 'PowerShell COM'],
    highlights: [
      '实现包含43条路径黑名单、25种扩展名黑名单及8类操作白名单的硬编码安全规则系统',
      '实现严格的五重AND校验逻辑（范围校验→路径校验→扩展名校验→类别校验→用户确认）',
      '设计基于Manifest（操作清单）的完整审计与恢复机制，每次删除实时记录并持久化',
      '以不可变数据结构导出规则系统，从编译层面防止篡改',
    ],
    outcome: '成功开发并开源具备生产级安全性的MCP工具，已支持通过标准MCP协议被Claude Code等AI Agent调用。',
    image: './images/disk-cleaner/disk-cleaner（封面）.jpg',
    imageAlt: 'Disk-Cleaner 运行效果示例',
    featured: false,
    detailIntro: '针对用户手动清理磁盘繁琐、而AI Agent直接操作又存在误删风险的核心痛点，独立设计并开发了这款以安全至上为第一原则的磁盘清理MCP工具。通过硬编码五重安全校验、可审计的操作清单与确定性分类算法，在赋予AI Agent自动化清理能力的同时，构筑了绝对可靠的安全防线。',
    detailTechStack: 'TypeScript 5.7(主开发语言) / Node.js 18(运行时) / MCP SDK / Vitest(单元测试框架) / PowerShell COM(Windows回收站集成)',
    detailSections: [
      { heading: '安全架构设计与核心规则引擎', content: '主导设计了工具的核心安全架构，确立了Rule Zero原则。实现了包含43条路径黑名单、25种扩展名黑名单及8类操作白名单的硬编码安全规则系统，并编写了豁免逻辑以确保浏览器缓存等合法区域可被清理。规则系统以不可变数据结构导出，从编译层面防止篡改。' },
      { heading: '五重删除校验闸门与确定性分类器', content: '为确保万无一失，在删除执行前实现了严格的五重AND校验逻辑（范围校验→路径校验→扩展名校验→类别校验→用户确认）。设计了基于Manifest（操作清单）的完整审计与恢复机制，每一次删除操作均被实时记录并持久化，支持事后追溯与恢复。' },
      { image: './images/disk-cleaner/运行结果示例.jpg', imageAlt: 'Disk-Cleaner 使用效果示例' },
      { heading: '项目成果', content: '成功开发并开源一个具备生产级安全性与完备功能的MCP工具，已支持通过标准MCP协议被Claude Code等AI Agent调用。规定了以绝对安全作为最高设计优先级的硬编码安全规则，并进行多级运行时校验。' },
    ],
  },
  {
    id: 'puzzle-game',
    name: 'Python 消消乐小游戏',
    subtitle: '第一个从0到1的项目',
    period: '2024.04.25',
    description: '学习编程后的第一个完整个人项目。在无任何外部代码参考的情况下，从零开始独立设计并实现包含完整规则与交互的消消乐游戏，完整经历"想法→设计→实现→调试"的开发闭环。',
    techStack: ['Python', 'Pygame'],
    highlights: [
      '在无教程情况下通过查阅文档自学Pygame，独立搭建游戏渲染窗口与事件监听主循环',
      '设计算法确保初始图标网格均为可匹配的成对组合，保证游戏可玩性',
      '实现路径查找算法正确判断两点间连接性，并用可视化线段标注消除路径',
      '添加右键提示系统、倒计时与得分系统，消除时给予时间奖励增强正反馈',
    ],
    outcome: '成功创造功能完整、可独立运行的小游戏原型，全部代码个人从零编写。深刻印证了通过实践驱动学习的有效性。',
    image: './images/Python消消乐小游戏/消消乐小游戏（封面）.jpg',
    imageAlt: 'Python 消消乐小游戏运行界面',
    featured: false,
    detailIntro: '这是我学习编程后的第一个完整个人项目。在无任何外部代码参考的情况下，从零开始独立设计并实现了一款包含完整规则与交互的消消乐游戏，完整经历了想法→设计→实现→调试的开发闭环。',
    detailTechStack: 'Python（主开发语言） / Pygame（游戏开发与图形库） / random（随机数生成） / time（时间控制）',
    detailSections: [
      { heading: '游戏引擎与核心循环搭建', content: '在无教程的情况下，通过查阅文档自学Pygame，独立搭建了游戏的渲染窗口、事件监听主循环、状态管理等，为项目奠定了可运行的基础。' },
      { heading: '地图生成与连通性算法', content: '设计了算法确保初始生成的图标网格均为可匹配的成对组合，开局时确保有多个可连续消除的路径，保证了游戏的可玩性。实现了路径查找算法，能正确判断两点间是否可通过直线连通，并用可视化线段标注消除路径。' },
      { image: './images/Python消消乐小游戏/运行界面截图与讲解.jpg', imageAlt: '消消乐游戏运行界面' },
      { heading: '辅助功能与游戏机制', content: '添加了右键提示系统（随机高亮一对可消除项）、倒计时与得分系统，并在消除时给予时间奖励，增强了游戏的正反馈与策略性。利用Pygame独立设计了所有视觉元素，包括图标网格、分数板、计时器。' },
      { heading: '项目成果', content: '成功创造了一个功能完整、可独立运行的小游戏原型，全部代码均为个人从零编写。此项目极大地提升了自主学习、分解问题、调试代码和将想法转化为实际的能力与信心，深刻印证了通过实践驱动学习的有效性。' },
    ],
  },
];

export const supplementaryProjects = [
  {
    name: 'AI-Hook-Lab',
    description: '自媒体爆款Hook生成网站，AI驱动的内容创作工具',
    image: './images/其他项目展示/AI-Hook-Lab主页展示（小卡封面）.jpg',
    tech: ['Vue.js', 'AI API'],
  },
  {
    name: 'Space Museum',
    description: '太空博物馆主题网页，沉浸式交互体验',
    image: './images/其他项目展示/Space Museum页面展示（小卡封面）.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Xiaomi SU7 网站',
    description: '小米SU7产品展示网页',
    image: './images/其他项目展示/xiaomi Su7网站主页展示（小卡封面）.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'TO-DO List Web App',
    description: '响应式布局的TODO List，具备增删改查提醒与收藏功能',
    image: './images/其他项目展示/TODO List页面展示（小卡封面）.jpg',
    tech: ['Vue3', '组合式API'],
  },
];

export const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目作品', href: '#projects' },
  { label: '联系', href: '#contact' },
];
