// 主题功能
document.addEventListener('DOMContentLoaded', function () {
    // 获取元素
    const themeOptions = document.querySelectorAll('.theme-option');
    const themeRadios = document.querySelectorAll('input[name="themeRadio"]');
    const themeDropdown = document.getElementById('themeDropdown');

    // 从localStorage获取保存的主题或使用系统偏好
    let savedTheme = localStorage.getItem('theme') || 'auto';

    // 应用主题
    function applyTheme(theme) {
        const htmlElement = document.documentElement;

        if (theme === 'auto') {
            // 检测系统偏好
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                htmlElement.setAttribute('data-bs-theme', 'dark');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'light');
            }
        } else {
            htmlElement.setAttribute('data-bs-theme', theme);
        }

        // 更新下拉框文本
        updateDropdownText(theme);

        // 更新选中状态
        updateActiveStates(theme);

        // 更新单选按钮状态
        updateRadioStates(theme);

        // 保存主题选择
        localStorage.setItem('theme', theme);
    }

    // 更新下拉框显示文本
    function updateDropdownText(theme) {
        let text = '主题设置';
        if (theme === 'light') text = '<i class="me-1 bi bi-sun-fill"></i>';
        if (theme === 'dark') text = '<i class="me-1 bi bi-moon-stars-fill"></i>';
        if (theme === 'auto') text = '<i class="me-1 bi bi-circle-half"></i>';

        themeDropdown.innerHTML = text;
    }

    // 更新活动状态
    function updateActiveStates(theme) {
        // 移除所有活动状态
        themeOptions.forEach(option => {
            option.classList.remove('active');
        });

        // 为当前主题添加活动状态
        const currentOption = document.querySelector(`.theme-option[data-theme="${theme}"]`);
        if (currentOption) {
            currentOption.classList.add('active');
        }
    }

    // 更新单选按钮状态
    function updateRadioStates(theme) {
        themeRadios.forEach(radio => {
            radio.checked = (radio.getAttribute('data-theme') === theme);
        });
    }

    // 为每个主题选项添加点击事件
    themeOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    // 为单选按钮添加点击事件
    themeRadios.forEach(radio => {
        radio.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
        });
    });

    // 监听系统主题变化（仅自动模式时响应）
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'auto') {
            applyTheme('auto');
        }
    });

    // 初始化主题
    applyTheme(savedTheme);
});
