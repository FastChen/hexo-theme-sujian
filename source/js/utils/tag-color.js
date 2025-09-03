// 创建命名空间
window.TagColor = window.TagColor || {};

(function() {
    'use strict';
    
    // 默认颜色列表
    const DEFAULT_COLORS = [
        'primary-subtle', 'secondary-subtle', 'success-subtle',
        'danger-subtle', 'warning-subtle', 'info-subtle',
        'light-subtle', 'dark-subtle'
    ];
    
    // 缓存已分配的颜色
    const colorCache = new Map();
    
    /**
     * 获取随机颜色
     * @param {Array} [colorList=DEFAULT_COLORS] - 可选的颜色列表
     * @returns {string} 随机颜色类名
     */
    TagColor.getRandomColor = function(colorList = DEFAULT_COLORS) {
        if (!colorList || colorList.length === 0) {
            colorList = DEFAULT_COLORS;
        }
        const randomIndex = Math.floor(Math.random() * colorList.length);
        return colorList[randomIndex];
    };
    
    
    /**
     * 为指定元素设置随机颜色
     * @param {string|Element} element - 元素选择器或DOM元素
     * @param {string} [baseClass='badge'] - 基础CSS类
     */
    TagColor.applyRandomColorToElement = function(element, baseClass = 'badge') {
        const el = typeof element === 'string' ? document.querySelector(element) : element;
        if (!el) return;
        
        const color = this.getRandomColor();
        this.applyColorToElement(el, color, baseClass);
    };
    
    /**
     * 为元素应用指定颜色
     * @param {Element} element - DOM元素
     * @param {string} color - 颜色类名
     * @param {string} [baseClass='badge'] - 基础CSS类
     */
    TagColor.applyColorToElement = function(element, color, baseClass = 'badge') {
        // 移除可能存在的旧颜色类
        DEFAULT_COLORS.forEach(colorClass => {
            element.classList.remove(`bg-${colorClass}`);
            element.classList.remove(`border-${colorClass}`);
        });
        
        // 添加新颜色类
        element.classList.add(baseClass);
        element.classList.add(`bg-${color}`);
        element.classList.add('border');
        element.classList.add(`border-${color}`);
        element.classList.add('text-primary-emphasis');
    };
    
    /**
     * 为所有匹配选择器的元素设置随机颜色
     * @param {string} selector - CSS选择器
     * @param {string} [baseClass='badge'] - 基础CSS类
     */
    TagColor.applyRandomColorsToAll = function(selector, baseClass = 'badge') {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            this.applyRandomColorToElement(el, baseClass);
        });
    };

})();