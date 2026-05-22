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
  avatar: './images/photos/photo1.jpg',
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
    image: './images/projects/grokx-cover.jpg',
    imageAlt: 'GrokX 智慧体锻平台 UI 界面',
    featured: true,
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
    image: './images/projects/hometown-cover.jpg',
    imageAlt: '家乡旅游主题网页主页展示',
    featured: true,
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
    image: './images/projects/html-tags-cover.jpg',
    imageAlt: 'HTML 标签速查手册主页展示',
    featured: true,
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
    image: './images/projects/repochat-cover.jpg',
    imageAlt: 'RepoChat 项目管理系统主页展示',
    featured: true,
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
    image: './images/projects/driver-cover.jpg',
    imageAlt: '疲劳驾驶检测系统主界面',
    featured: false,
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
    image: './images/projects/safety-cover.jpg',
    imageAlt: '智慧工地安全检测系统运行界面',
    featured: false,
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
    image: './images/projects/disk-cleaner-cover.jpg',
    imageAlt: 'Disk-Cleaner 运行效果示例',
    featured: false,
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
    image: './images/projects/puzzle-game-cover.jpg',
    imageAlt: 'Python 消消乐小游戏运行界面',
    featured: false,
  },
];

export const supplementaryProjects = [
  {
    name: 'AI-Hook-Lab',
    description: '自媒体爆款Hook生成网站，AI驱动的内容创作工具',
    image: './images/projects/ai-hook-lab-cover.jpg',
    tech: ['Vue.js', 'AI API'],
  },
  {
    name: 'Space Museum',
    description: '太空博物馆主题网页，沉浸式交互体验',
    image: './images/projects/space-museum-cover.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'Xiaomi SU7 网站',
    description: '小米SU7产品展示网页',
    image: './images/projects/xiaomi-su7-cover.jpg',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    name: 'TO-DO List Web App',
    description: '响应式布局的TODO List，具备增删改查提醒与收藏功能',
    image: './images/projects/todo-list-cover.jpg',
    tech: ['Vue3', '组合式API'],
  },
];

export const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
];
