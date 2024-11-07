// 初始化 AOS 动画库
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
});

// 导航栏响应式切换
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // 如果在移动端，点击导航链接后关闭菜单
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// 滚动时改变导航栏样式
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// 检查所有需要的库是否加载
window.addEventListener('load', function() {
    // 检查 Font Awesome
    if (typeof FontAwesome === 'undefined') {
        console.warn('Font Awesome not loaded');
    }
    
    // 检查 AOS
    if (typeof AOS === 'undefined') {
        console.warn('AOS not loaded');
    }
});

// 添加到现有的 script.js 文件中
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.skills-track');
    const slides = document.querySelectorAll('.skill-category');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === slides.length - 1;
    }

    function slideTo(index) {
        currentIndex = index;
        const slideWidth = slides[0].offsetWidth + 16; // 包含间距
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateButtons();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            slideTo(currentIndex + 1);
        }
    });

    // 初始化按钮状态
    updateButtons();

    // 添加触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', e => {
        touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // 最小滑动距离
            if (diff > 0 && currentIndex < slides.length - 1) {
                slideTo(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                slideTo(currentIndex - 1);
            }
        }
    });
});

// 更新模态框相关的 JavaScript 代码
function openThesisModal(type) {
    const modal = document.getElementById('thesisModal');
    const cardiffContent = document.getElementById('cardiffThesis');
    const malaysiaContent = document.getElementById('malaysiaThesis');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
    
    if (type === 'cardiff') {
        cardiffContent.style.display = 'block';
        malaysiaContent.style.display = 'none';
    } else {
        cardiffContent.style.display = 'none';
        malaysiaContent.style.display = 'block';
    }
}

// 关闭模态框的函数
function closeThesisModal() {
    const modal = document.getElementById('thesisModal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // 恢复背景滚动
}

// 添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 关闭按钮点击事件
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeThesisModal);
    }

    // 点击模态框外部关闭
    const modal = document.getElementById('thesisModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeThesisModal();
            }
        });
    }

    // 添加 ESC 键关闭功能
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeThesisModal();
        }
    });
});

// 添加 Employment Modal 功能
function openEmploymentModal(type) {
    const modal = document.getElementById('employmentModal');
    const enshiContent = document.getElementById('enshiEmployment');
    const yichangContent = document.getElementById('yichangEmployment');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    if (type === 'enshi') {
        enshiContent.style.display = 'block';
        yichangContent.style.display = 'none';
    } else {
        enshiContent.style.display = 'none';
        yichangContent.style.display = 'block';
    }
}

// 更新关闭模态框的函数
function closeModal() {
    document.getElementById('thesisModal').style.display = 'none';
    document.getElementById('employmentModal').style.display = 'none';
    document.getElementById('publicationModal').style.display = 'none';
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

// 更新事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 关闭按钮点击事件
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // 点击模态框外部关闭
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    });

    // ESC 键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// 添加 Publication Modal 功能
function openPublicationModal(type) {
    const modal = document.getElementById('publicationModal');
    const culturalContent = document.getElementById('culturalPublication');
    const educationContent = document.getElementById('educationPublication');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    if (type === 'cultural') {
        culturalContent.style.display = 'block';
        educationContent.style.display = 'none';
    } else {
        culturalContent.style.display = 'none';
        educationContent.style.display = 'block';
    }
}

// 更新关闭模态框的函数
function closeModal() {
    document.getElementById('thesisModal').style.display = 'none';
    document.getElementById('employmentModal').style.display = 'none';
    document.getElementById('publicationModal').style.display = 'none';
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

// 添加 Project Modal 功能
function openProjectModal(type) {
    const modal = document.getElementById('projectModal');
    const arVrContent = document.getElementById('arVrProject');
    const tourismContent = document.getElementById('tourismProject');
    const teachingContent = document.getElementById('teachingProject');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 隐藏所有内容
    arVrContent.style.display = 'none';
    tourismContent.style.display = 'none';
    teachingContent.style.display = 'none';
    
    // 显示选中的内容
    switch(type) {
        case 'ar-vr':
            arVrContent.style.display = 'block';
            break;
        case 'tourism':
            tourismContent.style.display = 'block';
            break;
        case 'teaching':
            teachingContent.style.display = 'block';
            break;
    }
}

// 更新关闭模态框的函数
function closeModal() {
    document.getElementById('thesisModal').style.display = 'none';
    document.getElementById('employmentModal').style.display = 'none';
    document.getElementById('publicationModal').style.display = 'none';
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = '';
}

// 更新事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 关闭按钮点击事件
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // 点击模态框外部关闭
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    });

    // ESC 键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});