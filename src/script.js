// 程序员表情包生成器 JavaScript

// 表情包模板数据
const memeTemplates = [
    {
        id: 'drake',
        name: 'Drake指指点点',
        emoji: '👆',
        description: '经典Drake模板'
    },
    {
        id: 'distracted',
        name: '男友看美女',
        emoji: '👀',
        description: '分心男友模板'
    },
    {
        id: 'expanding',
        name: '脑容量扩展',
        emoji: '🧠',
        description: '大脑扩展模板'
    },
    {
        id: 'crying',
        name: '哭泣猫猫',
        emoji: '😭',
        description: '委屈猫咪模板'
    },
    {
        id: 'stonks',
        name: 'Stonks上涨',
        emoji: '📈',
        description: '股票上涨模板'
    },
    {
        id: 'doge',
        name: 'Doge狗狗',
        emoji: '🐕',
        description: '经典Doge模板'
    },
    {
        id: 'thinking',
        name: '思考黑人',
        emoji: '🤔',
        description: '思考表情模板'
    },
    {
        id: 'surprised',
        name: '惊讶皮卡丘',
        emoji: '😮',
        description: '惊讶皮卡丘模板'
    }
];

// 程序员专用文案
const programmerTexts = {
    top: [
        "当产品经理说'就改一个颜色'",
        "当老板说'这个功能很简单'",
        "当测试说'我就点了一下'",
        "当用户说'之前好好的啊'",
        "当甲方说'参考一下某宝'",
        "看到别人的代码",
        "周五下午5点收到紧急需求",
        "刚写完代码准备下班"
    ],
    bottom: [
        "我：又要重构整个项目了",
        "实际上：改动了半个系统",
        "内心：这TM是个系统工程",
        "我：肯定又是缓存问题",
        "我：做不到的事情别瞎比比",
        "我：这是谁写的垃圾代码",
        "我：不是哥们，今天周五啊",
        "产品：我们再加个小需求"
    ]
};

// 全局变量
let selectedTemplate = null;
let canvas = null;
let ctx = null;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    canvas = document.getElementById('memeCanvas');
    ctx = canvas.getContext('2d');
    
    loadTemplates();
    setupEventListeners();
    loadGalleryExamples();
    
    // 随机填充示例文字
    fillRandomText();
}

// 加载模板
function loadTemplates() {
    const templateGrid = document.getElementById('templateGrid');
    
    memeTemplates.forEach(template => {
        const templateElement = createTemplateElement(template);
        templateGrid.appendChild(templateElement);
    });
}

// 创建模板元素
function createTemplateElement(template) {
    const div = document.createElement('div');
    div.className = 'template-item';
    div.dataset.templateId = template.id;
    div.innerHTML = template.emoji;
    div.title = template.description;
    
    div.addEventListener('click', () => selectTemplate(template));
    
    return div;
}

// 选择模板
function selectTemplate(template) {
    // 移除之前的选中状态
    document.querySelectorAll('.template-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // 添加选中状态
    document.querySelector(`[data-template-id="${template.id}"]`).classList.add('selected');
    
    selectedTemplate = template;
    generateMeme();
}

// 设置事件监听器
function setupEventListeners() {
    document.getElementById('generateBtn').addEventListener('click', generateMeme);
    document.getElementById('downloadBtn').addEventListener('click', downloadMeme);
    document.getElementById('shareBtn').addEventListener('click', shareMeme);
    
    // 实时预览
    document.getElementById('topText').addEventListener('input', generateMeme);
    document.getElementById('bottomText').addEventListener('input', generateMeme);
}

// 生成表情包
function generateMeme() {
    if (!selectedTemplate) {
        alert('请先选择一个模板！');
        return;
    }
    
    const topText = document.getElementById('topText').value || '上方文字';
    const bottomText = document.getElementById('bottomText').value || '下方文字';
    
    // 清空画布
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制模板背景
    drawTemplateBackground();
    
    // 绘制文字
    drawMemeText(topText, 50, true);  // 上方文字
    drawMemeText(bottomText, canvas.height - 80, false);  // 下方文字
    
    // 添加水印
    drawWatermark();
}

// 绘制模板背景
function drawTemplateBackground() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    
    switch(selectedTemplate.id) {
        case 'drake':
            gradient.addColorStop(0, '#FF6B6B');
            gradient.addColorStop(1, '#4ECDC4');
            break;
        case 'distracted':
            gradient.addColorStop(0, '#A8E6CF');
            gradient.addColorStop(1, '#FFD93D');
            break;
        case 'expanding':
            gradient.addColorStop(0, '#6C5CE7');
            gradient.addColorStop(1, '#A29BFE');
            break;
        default:
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制模板图标
    ctx.font = '120px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillText(selectedTemplate.emoji, canvas.width / 2, canvas.height / 2 + 40);
}

// 绘制表情包文字
function drawMemeText(text, y, isTop) {
    ctx.font = 'bold 36px Arial, "Microsoft YaHei"';
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.fillStyle = '#FFFFFF';
    
    // 自动换行
    const words = text.split('');
    const maxWidth = canvas.width - 40;
    let line = '';
    let lines = [];
    
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i];
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && i > 0) {
            lines.push(line);
            line = words[i];
        } else {
            line = testLine;
        }
    }
    lines.push(line);
    
    // 绘制多行文字
    const lineHeight = 45;
    let startY = y;
    
    if (isTop) {
        startY = y;
    } else {
        startY = y - (lines.length - 1) * lineHeight;
    }
    
    lines.forEach((line, index) => {
        const currentY = startY + index * lineHeight;
        ctx.strokeText(line, canvas.width / 2, currentY);
        ctx.fillText(line, canvas.width / 2, currentY);
    });
}

// 绘制水印
function drawWatermark() {
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('github.com/programmer-meme-generator', canvas.width - 10, canvas.height - 10);
}

// 下载表情包
function downloadMeme() {
    if (!selectedTemplate) {
        alert('请先生成表情包！');
        return;
    }
    
    const link = document.createElement('a');
    link.download = `programmer-meme-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

// 分享表情包
function shareMeme() {
    if (!selectedTemplate) {
        alert('请先生成表情包！');
        return;
    }
    
    const text = '我用程序员表情包生成器制作了一个表情包！';
    const url = 'https://github.com/yourusername/programmer-meme-generator';
    const shareUrl = `https://service.weibo.com/share/share.php?title=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, '_blank');
}

// 填充随机文字
function fillRandomText() {
    const topText = programmerTexts.top[Math.floor(Math.random() * programmerTexts.top.length)];
    const bottomText = programmerTexts.bottom[Math.floor(Math.random() * programmerTexts.bottom.length)];
    
    document.getElementById('topText').value = topText;
    document.getElementById('bottomText').value = bottomText;
}

// 加载画廊示例
function loadGalleryExamples() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    const examples = [
        { emoji: '😂', title: '当看到自己三个月前写的代码', likes: '2.3k' },
        { emoji: '🤔', title: '为什么我的代码在我电脑上能跑', likes: '1.8k' },
        { emoji: '😭', title: '周五下午收到紧急bug', likes: '3.1k' },
        { emoji: '🎉', title: '终于解决了困扰一周的bug', likes: '1.5k' }
    ];
    
    examples.forEach(example => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <div style="font-size: 3em; margin-bottom: 10px;">${example.emoji}</div>
            <div style="font-weight: 600; margin-bottom: 5px;">${example.title}</div>
            <div style="color: #666; font-size: 0.9em;">❤️ ${example.likes}</div>
        `;
        galleryGrid.appendChild(div);
    });
}

// 添加一些有趣的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加粒子效果（可选）
    createParticleEffect();
});

function createParticleEffect() {
    // 简单的粒子效果
    const particles = [];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1
        });
    }
    
    function animateParticles() {
        // 这里可以添加canvas粒子动画
        // 为了简化，暂时省略具体实现
        requestAnimationFrame(animateParticles);
    }
    
    // animateParticles();
}
